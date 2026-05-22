"use client";

import {
  footprintBrands,
  footprintMarkers,
  type FootprintBrand,
  type FootprintMarker,
} from "@/data/content";
import { useEffect, useRef, useState } from "react";

const TOPO_LIB = "https://unpkg.com/topojson-client@3/dist/topojson-client.min.js";
const WORLD_DATA = "https://unpkg.com/world-atlas@2/countries-50m.json";
const NEPAL_ID = "524";

type TopoLike = { objects: { countries: unknown }; type: string };
type Feature = {
  id?: string | number;
  geometry?:
    | { type: "Polygon"; coordinates: number[][][] }
    | { type: "MultiPolygon"; coordinates: number[][][][] }
    | null;
};
type FeatureCollection = { features: Feature[] };

declare global {
  interface Window {
    topojson?: { feature: (topo: TopoLike, obj: unknown) => FeatureCollection };
  }
}

const colorByBrand = (brand: string) =>
  footprintBrands.find((b) => b.brand === brand)?.color ?? "#FFFFFF";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

type Props = { open: boolean; onClose: () => void };

export default function NepalDialog({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const mapCanvasRef = useRef<HTMLCanvasElement>(null);
  const insetCanvasRef = useRef<HTMLCanvasElement>(null);
  const featureRef = useRef<Feature | null>(null);
  const projRef = useRef<{
    proj: (lon: number, lat: number) => [number, number];
    placed: Array<{ x: number; y: number; m: FootprintMarker }>;
  } | null>(null);
  const [hover, setHover] = useState<FootprintMarker | null>(null);
  const [tipPos, setTipPos] = useState<{ x: number; y: number } | null>(null);

  // Open / close the native <dialog>
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  // Bridge native close (Esc key) back to parent state
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const handler = () => onClose();
    d.addEventListener("close", handler);
    return () => d.removeEventListener("close", handler);
  }, [onClose]);

  // Render the Nepal map once the dialog is open
  useEffect(() => {
    if (!open) return;
    let cancelled = false;

    const run = async () => {
      try {
        await loadScript(TOPO_LIB);
        if (cancelled || !window.topojson) return;
        if (!featureRef.current) {
          const world = (await fetch(WORLD_DATA).then((r) => r.json())) as TopoLike;
          if (cancelled || !window.topojson) return;
          const collection = window.topojson.feature(world, world.objects.countries);
          featureRef.current =
            collection.features.find((f) => String(f.id) === NEPAL_ID) ?? null;
        }
        if (!featureRef.current) return;
        drawNepal(mapCanvasRef.current, featureRef.current, { withMarkers: true });
        drawNepal(insetCanvasRef.current, featureRef.current, {
          withMarkers: true,
          zoom: { minLon: 85.15, maxLon: 85.55, minLat: 27.55, maxLat: 27.85 },
        });
      } catch {
        const c = mapCanvasRef.current;
        if (!c) return;
        const ctx = c.getContext("2d");
        if (!ctx) return;
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.font = "14px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Map requires network access to load", c.width / 2, c.height / 2);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [open]);

  function drawNepal(
    canvas: HTMLCanvasElement | null,
    feature: Feature,
    opts: {
      withMarkers?: boolean;
      zoom?: { minLon: number; maxLon: number; minLat: number; maxLat: number };
    },
  ) {
    if (!canvas) return;
    const cssW = canvas.clientWidth || canvas.width;
    const cssH = canvas.clientHeight || canvas.height;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    const W = cssW;
    const H = cssH;
    ctx.clearRect(0, 0, W, H);

    const g = feature.geometry;
    if (!g) return;

    let minLon = Infinity,
      maxLon = -Infinity,
      minLat = Infinity,
      maxLat = -Infinity;
    if (opts.zoom) {
      ({ minLon, maxLon, minLat, maxLat } = opts.zoom);
    } else {
      const eachPoint = (coords: number[][]) => {
        for (const [lon, lat] of coords) {
          if (lon < minLon) minLon = lon;
          if (lon > maxLon) maxLon = lon;
          if (lat < minLat) minLat = lat;
          if (lat > maxLat) maxLat = lat;
        }
      };
      if (g.type === "Polygon") g.coordinates.forEach(eachPoint);
      else g.coordinates.forEach((poly) => poly.forEach(eachPoint));
    }

    const padding = opts.zoom ? 16 : 28;
    const dLon = maxLon - minLon;
    const dLat = maxLat - minLat;
    const scale = Math.min((W - padding * 2) / dLon, (H - padding * 2) / dLat);
    const projW = dLon * scale;
    const projH = dLat * scale;
    const offX = (W - projW) / 2;
    const offY = (H - projH) / 2;
    const proj = (lon: number, lat: number): [number, number] => [
      offX + (lon - minLon) * scale,
      offY + (maxLat - lat) * scale,
    ];

    const off = document.createElement("canvas");
    off.width = Math.round(W);
    off.height = Math.round(H);
    const oCtx = off.getContext("2d");
    if (!oCtx) return;
    oCtx.fillStyle = "#FFFFFF";
    oCtx.beginPath();
    const traceRing = (target: CanvasRenderingContext2D, coords: number[][]) => {
      if (!coords.length) return;
      const [x0, y0] = proj(coords[0][0], coords[0][1]);
      target.moveTo(x0, y0);
      for (let i = 1; i < coords.length; i++) {
        const [x, y] = proj(coords[i][0], coords[i][1]);
        target.lineTo(x, y);
      }
      target.closePath();
    };
    if (g.type === "Polygon") g.coordinates.forEach((r) => traceRing(oCtx, r));
    else g.coordinates.forEach((poly) => poly.forEach((r) => traceRing(oCtx, r)));
    oCtx.fill();

    // Filled dark silhouette
    ctx.fillStyle = "#15151c";
    ctx.beginPath();
    if (g.type === "Polygon") g.coordinates.forEach((r) => traceRing(ctx, r));
    else g.coordinates.forEach((poly) => poly.forEach((r) => traceRing(ctx, r)));
    ctx.fill();

    // Subtle topo dotted texture inside Nepal
    const SPACING = opts.zoom ? 9 : 10;
    const RADIUS = 1.1;
    ctx.fillStyle = "rgba(255,255,255,0.05)";
    for (let y = SPACING / 2; y < H; y += SPACING) {
      for (let x = SPACING / 2; x < W; x += SPACING) {
        const d = oCtx.getImageData(Math.round(x), Math.round(y), 1, 1).data;
        if (d[3] < 10) continue;
        ctx.beginPath();
        ctx.arc(x, y, RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // White province/border lines look (use the outer outline)
    ctx.strokeStyle = "rgba(255,255,255,0.75)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (g.type === "Polygon") g.coordinates.forEach((r) => traceRing(ctx, r));
    else g.coordinates.forEach((poly) => poly.forEach((r) => traceRing(ctx, r)));
    ctx.stroke();

    if (!opts.withMarkers) return;

    const placed: Array<{ x: number; y: number; m: FootprintMarker }> = [];
    for (const m of footprintMarkers) {
      if (opts.zoom) {
        if (
          m.lon < opts.zoom.minLon ||
          m.lon > opts.zoom.maxLon ||
          m.lat < opts.zoom.minLat ||
          m.lat > opts.zoom.maxLat
        ) {
          continue;
        }
      }
      const [x, y] = proj(m.lon, m.lat);
      const color = colorByBrand(m.brand);
      ctx.beginPath();
      ctx.arc(x, y, opts.zoom ? 6 : 5, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = "rgba(0,0,0,0.55)";
      ctx.stroke();
      placed.push({ x, y, m });
    }

    if (!opts.zoom) {
      projRef.current = { proj, placed };
    }
  }

  function handleMapMove(e: React.MouseEvent<HTMLCanvasElement>) {
    const ref = projRef.current;
    const canvas = mapCanvasRef.current;
    if (!ref || !canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    let best: { d: number; m: FootprintMarker; x: number; y: number } | null = null;
    for (const p of ref.placed) {
      const dx = p.x - x;
      const dy = p.y - y;
      const d = dx * dx + dy * dy;
      if (d < 64 && (!best || d < best.d)) {
        best = { d, m: p.m, x: p.x, y: p.y };
      }
    }
    if (best) {
      setHover(best.m);
      setTipPos({ x: best.x, y: best.y });
    } else {
      setHover(null);
      setTipPos(null);
    }
  }

  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) onClose();
  }

  const automotive = footprintBrands.filter((b) => b.category === "automotive");
  const others = footprintBrands.filter((b) => b.category === "others");

  return (
    <dialog
      ref={dialogRef}
      className="nepal-dialog"
      onClick={handleBackdropClick}
      aria-label="VOITH footprint across Nepal"
    >
      <div className="nd-inner">
        <button
          type="button"
          className="nd-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <aside className="nd-side">
          <h2 className="nd-title">Our Footprint</h2>
          <p className="nd-sub">
            VOITH brands and operations mapped across Nepal — from the Kathmandu
            valley to the Far-Western Terai.
          </p>

          <BrandTable
            label="Automotive Division"
            brands={automotive}
            kind="automotive"
          />
          <BrandTable label="Others" brands={others} kind="others" />
        </aside>

        <div className="nd-map-col">
          <div className="nd-map-wrap">
            <canvas
              ref={mapCanvasRef}
              className="nd-map"
              onMouseMove={handleMapMove}
              onMouseLeave={() => {
                setHover(null);
                setTipPos(null);
              }}
            />
            {hover && tipPos ? (
              <div
                className="nd-marker-tip"
                style={{ left: tipPos.x, top: tipPos.y }}
              >
                <span
                  className="nd-marker-swatch"
                  style={{ background: colorByBrand(hover.brand) }}
                />
                <div>
                  <strong>{hover.brand}</strong>
                  <span>{hover.city}</span>
                </div>
              </div>
            ) : null}

            <div className="nd-inset">
              <p className="nd-inset-label">Kathmandu Valley</p>
              <canvas ref={insetCanvasRef} className="nd-inset-map" />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

function BrandTable({
  label,
  brands,
  kind,
}: {
  label: string;
  brands: FootprintBrand[];
  kind: "automotive" | "others";
}) {
  return (
    <div className="nd-table">
      <p className="nd-table-label">{label}</p>
      <div className={`nd-table-head nd-table-row nd-table-row--${kind}`}>
        <span>Brand</span>
        {kind === "automotive" ? (
          <>
            <span>Sales</span>
            <span>Service</span>
            <span>Others</span>
          </>
        ) : (
          <span>Notes</span>
        )}
      </div>
      {brands.map((b) => (
        <div
          key={b.brand}
          className={`nd-table-row nd-table-row--${kind} nd-table-row--data`}
        >
          <span className="nd-brand-cell">
            <span
              className="nd-brand-dot"
              style={{ background: b.color }}
              aria-hidden="true"
            />
            <span className="nd-brand-name">{b.brand}</span>
          </span>
          {kind === "automotive" ? (
            <>
              <span>{b.sales ?? "—"}</span>
              <span>{b.service ?? "—"}</span>
              <span className="nd-cell-others">{b.others ?? 0}</span>
            </>
          ) : (
            <span className="nd-cell-notes">{b.notes ?? ""}</span>
          )}
        </div>
      ))}
    </div>
  );
}
