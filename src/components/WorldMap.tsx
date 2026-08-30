"use client";

import { useEffect, useRef, useState } from "react";
import NepalDialog from "./NepalDialog";

type TopoLike = {
  objects: { countries: unknown };
  type: string;
};

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

const TOPO_LIB = "https://unpkg.com/topojson-client@3/dist/topojson-client.min.js";
const WORLD_DATA = "https://unpkg.com/world-atlas@2/countries-110m.json";

// Partner countries, by ISO 3166-1 numeric code. Nepal 524, Japan 392,
// India 356, China 156, Germany 276, Thailand 764, UAE/Dubai 784, USA 840,
// Indonesia 360. (Singapore is too small for the 110m polygon set, drawn
// explicitly via PARTNER_POINTS below.)
const PARTNER_IDS = new Set([
  "524", "392", "356", "156", "276", "764", "784", "840", "360",
]);

// Partner locations too small to exist in the 110m polygon set, drawn as
// explicit dots so they still register. [lon, lat]
const PARTNER_POINTS: Array<[number, number]> = [
  [103.82, 1.35], // Singapore
];

const HOTSPOT_RADIUS = 22;

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

export default function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hotspotRef = useRef<{ x: number; y: number } | null>(null);
  const [hovering, setHovering] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;

    const draw = async () => {
      const section = document.getElementById("global");
      if (!section) return;

      const W = section.offsetWidth;
      const H = Math.round(W * 0.44);
      canvas.width = W;
      canvas.height = H;
      canvas.style.height = `${H}px`;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      try {
        await loadScript(TOPO_LIB);
        const world = (await fetch(WORLD_DATA).then((r) => r.json())) as TopoLike;
        if (cancelled || !window.topojson) return;
        const countries = window.topojson.feature(world, world.objects.countries);

        const proj = (lon: number, lat: number): [number, number] => [
          ((lon + 180) / 360) * W,
          ((90 - lat) / 180) * H,
        ];

        const off = document.createElement("canvas");
        off.width = W;
        off.height = H;
        const oCtx = off.getContext("2d");
        if (!oCtx) return;

        const fill = (target: CanvasRenderingContext2D, feature: Feature, color: string) => {
          const g = feature.geometry;
          if (!g) return;
          target.fillStyle = color;
          target.beginPath();
          const ring = (coords: number[][]) => {
            if (!coords.length) return;
            const [x0, y0] = proj(coords[0][0], coords[0][1]);
            target.moveTo(x0, y0);
            for (let i = 1; i < coords.length; i++) {
              const [x, y] = proj(coords[i][0], coords[i][1]);
              target.lineTo(x, y);
            }
            target.closePath();
          };
          if (g.type === "Polygon") g.coordinates.forEach(ring);
          else g.coordinates.forEach((p) => p.forEach(ring));
          target.fill();
        };

        for (const f of countries.features) fill(oCtx, f, "#FFFFFF");
        for (const f of countries.features) {
          if (PARTNER_IDS.has(String(f.id))) fill(oCtx, f, "#EE2222");
        }

        const SPACING = 7;
        const RADIUS = 2.6;
        for (let y = SPACING / 2; y < H; y += SPACING) {
          for (let x = SPACING / 2; x < W; x += SPACING) {
            const d = oCtx.getImageData(Math.round(x), Math.round(y), 1, 1).data;
            if (d[3] < 10) continue;
            const isPartner = d[0] > 180 && d[1] < 80;
            ctx.fillStyle = isPartner ? "#C41A1A" : "rgba(255,255,255,0.2)";
            ctx.beginPath();
            ctx.arc(x, y, RADIUS, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Micro-states that don't appear in the polygon fill above.
        ctx.fillStyle = "#C41A1A";
        for (const [lon, lat] of PARTNER_POINTS) {
          const [px, py] = proj(lon, lat);
          ctx.beginPath();
          ctx.arc(px, py, RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }

        const [npX, npY] = proj(84.1, 28.3);
        hotspotRef.current = { x: npX, y: npY };

        // Pulsing halo to draw the eye to Nepal
        ctx.beginPath();
        ctx.arc(npX, npY, 16, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(196,26,26,0.18)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(npX, npY, 11, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(196,26,26,0.55)";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(npX, npY, 7, 0, Math.PI * 2);
        ctx.fillStyle = "#C41A1A";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(npX, npY, 7, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.85)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } catch {
        ctx.fillStyle = "rgba(255,255,255,0.06)";
        ctx.font = "14px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Map requires network access to load", W / 2, H / 2);
      }
    };

    draw();
    return () => {
      cancelled = true;
    };
  }, []);

  function withinHotspot(e: React.MouseEvent<HTMLCanvasElement>) {
    const hs = hotspotRef.current;
    const canvas = canvasRef.current;
    if (!hs || !canvas) return false;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    const dx = x - hs.x;
    const dy = y - hs.y;
    return dx * dx + dy * dy <= HOTSPOT_RADIUS * HOTSPOT_RADIUS;
  }

  return (
    <div className="wm-wrap">
      <canvas
        id="worldmap"
        ref={canvasRef}
        onMouseMove={(e) => setHovering(withinHotspot(e))}
        onMouseLeave={() => setHovering(false)}
        onClick={(e) => {
          if (withinHotspot(e)) setDialogOpen(true);
        }}
        style={{ cursor: hovering ? "pointer" : "default" }}
      />
      <button
        type="button"
        className="wm-nepal-cta"
        onClick={() => setDialogOpen(true)}
      >
        <span className="wm-nepal-dot" aria-hidden="true" />
        Explore VOITH in Nepal
      </button>
      <NepalDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </div>
  );
}
  