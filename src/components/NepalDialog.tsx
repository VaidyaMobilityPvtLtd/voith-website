"use client";

import {
  footprintBrands,
  footprintMarkers,
  type FootprintBrand,
  type FootprintMarker,
} from "@/data/content";
import { useEffect, useRef, useState } from "react";

const SVG_URL = "/Vector-Map-01-1536x864.svg";

// Geographic bounding box matching the Nepal silhouette as drawn in the SVG.
// Includes the 2020 Limpiyadhura claim. The lat span (4.17°) is tuned to
// the path's actual aspect ratio (≈1.72) so projection matches the artwork
// instead of a strict equirectangular fit (which would give 1.75 and
// vertically squash markers).
const NEPAL_BOUNDS = {
  minLon: 80.06,
  maxLon: 88.2,
  minLat: 26.3,
  maxLat: 30.47,
};

const KATHMANDU_ZOOM = {
  minLon: 85.15,
  maxLon: 85.55,
  minLat: 27.55,
  maxLat: 27.85,
};

const colorByBrand = (brand: string) =>
  footprintBrands.find((b) => b.brand === brand)?.color ?? "#FFFFFF";

let svgCache: string | null = null;
async function loadSvg(): Promise<string> {
  if (svgCache) return svgCache;
  const text = await fetch(SVG_URL).then((r) => r.text());
  svgCache = text;
  return text;
}

type Props = { open: boolean; onClose: () => void };

export default function NepalDialog({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const mapHostRef = useRef<HTMLDivElement>(null);
  const insetHostRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<FootprintMarker | null>(null);
  const [tipPos, setTipPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const handler = () => onClose();
    d.addEventListener("close", handler);
    return () => d.removeEventListener("close", handler);
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;

    const run = async () => {
      try {
        const svgText = await loadSvg();
        if (cancelled) return;

        if (mapHostRef.current && wrapRef.current) {
          renderMap(mapHostRef.current, svgText, {
            hostForPointer: wrapRef.current,
            onHover: (m, pos) => {
              setHover(m);
              setTipPos(pos);
            },
          });
        }
        if (insetHostRef.current) {
          renderMap(insetHostRef.current, svgText, {
            zoom: KATHMANDU_ZOOM,
          });
        }
      } catch {
        const host = mapHostRef.current;
        if (!host) return;
        host.innerHTML =
          '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:rgba(255,255,255,0.55);font:14px sans-serif">Map failed to load</div>';
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [open]);

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
          <div className="nd-map-wrap" ref={wrapRef}>
            <div
              ref={mapHostRef}
              className="nd-map"
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
              <div ref={insetHostRef} className="nd-inset-map" />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

type RenderOpts = {
  zoom?: { minLon: number; maxLon: number; minLat: number; maxLat: number };
  hostForPointer?: HTMLElement;
  onHover?: (
    m: FootprintMarker | null,
    pos: { x: number; y: number },
  ) => void;
};

function renderMap(host: HTMLElement, svgText: string, opts: RenderOpts) {
  host.innerHTML = svgText;
  const svg = host.querySelector("svg") as SVGSVGElement | null;
  if (!svg) return;

  const paths = Array.from(svg.querySelectorAll("path"));
  if (paths.length === 0) return;

  // The first/largest path is the Nepal silhouette; rest are decorations.
  const mainPath = paths[0] as SVGPathElement;
  for (const p of paths) {
    if (p === mainPath) {
      p.setAttribute("fill", "#15151c");
      p.setAttribute("stroke", "rgba(255,255,255,0.55)");
      p.setAttribute("stroke-width", "1.2");
      p.setAttribute("stroke-linejoin", "round");
    } else {
      p.setAttribute("fill", "none");
      p.setAttribute("stroke", "none");
    }
  }

  // Nepal's pixel bbox in user-space (account for path transform)
  const local = (mainPath as SVGGraphicsElement).getBBox();
  const ctm = mainPath.transform.baseVal.consolidate();
  const tx = ctm ? ctm.matrix.e : 0;
  const ty = ctm ? ctm.matrix.f : 0;
  const nepalBox = {
    x: local.x + tx,
    y: local.y + ty,
    width: local.width,
    height: local.height,
  };

  svg.removeAttribute("width");
  svg.removeAttribute("height");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.style.width = "100%";
  svg.style.height = "100%";
  svg.style.display = "block";

  const lonLatToXY = (lon: number, lat: number): [number, number] => {
    const x =
      nepalBox.x +
      ((lon - NEPAL_BOUNDS.minLon) /
        (NEPAL_BOUNDS.maxLon - NEPAL_BOUNDS.minLon)) *
        nepalBox.width;
    const y =
      nepalBox.y +
      ((NEPAL_BOUNDS.maxLat - lat) /
        (NEPAL_BOUNDS.maxLat - NEPAL_BOUNDS.minLat)) *
        nepalBox.height;
    return [x, y];
  };

  let viewW: number;
  if (opts.zoom) {
    const [x1, y1] = lonLatToXY(opts.zoom.minLon, opts.zoom.maxLat);
    const [x2, y2] = lonLatToXY(opts.zoom.maxLon, opts.zoom.minLat);
    const w = x2 - x1;
    const h = y2 - y1;
    const pad = Math.max(w, h) * 0.12;
    viewW = w + pad * 2;
    svg.setAttribute(
      "viewBox",
      `${x1 - pad} ${y1 - pad} ${w + pad * 2} ${h + pad * 2}`,
    );
  } else {
    const pad = Math.max(nepalBox.width, nepalBox.height) * 0.03;
    viewW = nepalBox.width + pad * 2;
    svg.setAttribute(
      "viewBox",
      `${nepalBox.x - pad} ${nepalBox.y - pad} ${nepalBox.width + pad * 2} ${nepalBox.height + pad * 2}`,
    );
  }

  // Marker dots — radius scaled to viewBox so dots appear consistent across
  // the main map and the zoomed Kathmandu inset.
  const ns = "http://www.w3.org/2000/svg";
  const baseR = viewW * 0.008;
  const markersGroup = document.createElementNS(ns, "g");
  markersGroup.setAttribute("class", "nd-markers");
  svg.appendChild(markersGroup);

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
    const [x, y] = lonLatToXY(m.lon, m.lat);
    const circle = document.createElementNS(ns, "circle");
    circle.setAttribute("cx", String(x));
    circle.setAttribute("cy", String(y));
    circle.setAttribute("r", String(baseR));
    circle.setAttribute("fill", colorByBrand(m.brand));
    circle.setAttribute("stroke", "rgba(0,0,0,0.55)");
    circle.setAttribute("stroke-width", "1.2");
    circle.setAttribute("vector-effect", "non-scaling-stroke");
    const title = document.createElementNS(ns, "title");
    title.textContent = `${m.brand} — ${m.city}`;
    circle.appendChild(title);

    if (opts.onHover && opts.hostForPointer) {
      const wrap = opts.hostForPointer;
      const onHover = opts.onHover;
      circle.style.cursor = "pointer";
      circle.addEventListener("mouseenter", () => {
        const ctm2 = svg.getScreenCTM();
        if (!ctm2) return;
        const pt = svg.createSVGPoint();
        pt.x = x;
        pt.y = y;
        const screen = pt.matrixTransform(ctm2);
        const rect = wrap.getBoundingClientRect();
        onHover(m, { x: screen.x - rect.left, y: screen.y - rect.top });
      });
      circle.addEventListener("mouseleave", () => {
        onHover(null, { x: 0, y: 0 });
      });
    }
    markersGroup.appendChild(circle);
  }
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
