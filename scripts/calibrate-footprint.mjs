/**
 * Renders footprint markers on the Nepal SVG for visual calibration.
 * Run: node scripts/calibrate-footprint.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public/Vector-Map-01-1536x864.svg");

// Kathmandu valley region on main map (normalized 0–1 within Nepal bbox)
export const KATHMANDU_INSET = {
  minNx: 0.455,
  maxNx: 0.595,
  minNy: 0.33,
  maxNy: 0.49,
};

const BRAND_COLORS = {
  TOYOTA: "#EE2222",
  ATHER: "#5ECADB",
  XCMG: "#1B3A6B",
  "Keeway GROUP": "#4A9FD4",
  ULTRAVIOLETTE: "#3AB870",
  HUAXIN: "#F5C842",
  "ŠASVATA": "#FFFFFF",
};

/** Main-map markers — positions matched to Canva OUR FOOTPRINT slide */
const MAIN_MARKERS = [
  // Far West
  { brand: "TOYOTA", nx: 0.038, ny: 0.355 },
  // Mid-West (Karnali)
  { brand: "TOYOTA", nx: 0.195, ny: 0.325 },
  // Central-West (Lumbini / Gandaki south)
  { brand: "TOYOTA", nx: 0.335, ny: 0.655 },
  { brand: "ATHER", nx: 0.358, ny: 0.678 },
  // Central cluster (Bagmati / Madhesh — south of valley, inset connector)
  { brand: "ŠASVATA", nx: 0.478, ny: 0.565 },
  { brand: "HUAXIN", nx: 0.498, ny: 0.545 },
  { brand: "TOYOTA", nx: 0.518, ny: 0.585 },
  { brand: "ATHER", nx: 0.538, ny: 0.605 },
  { brand: "XCMG", nx: 0.518, ny: 0.625 },
  // East (Koshi)
  { brand: "TOYOTA", nx: 0.818, ny: 0.705 },
  { brand: "ATHER", nx: 0.838, ny: 0.725 },
  { brand: "XCMG", nx: 0.858, ny: 0.745 },
  { brand: "Keeway GROUP", nx: 0.835, ny: 0.765 },
];

/** Kathmandu inset — nx/ny are 0–1 within KATHMANDU_INSET box */
const INSET_MARKERS = [
  // Toyota (2)
  { brand: "TOYOTA", nx: 0.32, ny: 0.22 },
  { brand: "TOYOTA", nx: 0.38, ny: 0.38 },
  // XCMG (2)
  { brand: "XCMG", nx: 0.72, ny: 0.18 },
  { brand: "XCMG", nx: 0.78, ny: 0.52 },
  // Keeway (1)
  { brand: "Keeway GROUP", nx: 0.22, ny: 0.48 },
  // Ultraviolette (1)
  { brand: "ULTRAVIOLETTE", nx: 0.62, ny: 0.45 },
  // Ather cluster (~12 teal dots)
  { brand: "ATHER", nx: 0.42, ny: 0.28 },
  { brand: "ATHER", nx: 0.48, ny: 0.32 },
  { brand: "ATHER", nx: 0.52, ny: 0.36 },
  { brand: "ATHER", nx: 0.46, ny: 0.42 },
  { brand: "ATHER", nx: 0.50, ny: 0.48 },
  { brand: "ATHER", nx: 0.44, ny: 0.52 },
  { brand: "ATHER", nx: 0.54, ny: 0.55 },
  { brand: "ATHER", nx: 0.48, ny: 0.58 },
  { brand: "ATHER", nx: 0.56, ny: 0.32 },
  { brand: "ATHER", nx: 0.40, ny: 0.45 },
  { brand: "ATHER", nx: 0.52, ny: 0.62 },
  { brand: "ATHER", nx: 0.58, ny: 0.42 },
];

function insetToFull(nx, ny) {
  const { minNx, maxNx, minNy, maxNy } = KATHMANDU_INSET;
  return {
    nx: minNx + nx * (maxNx - minNx),
    ny: minNy + ny * (maxNy - minNy),
  };
}

async function main() {
  const svgText = fs.readFileSync(svgPath, "utf8");
  const outPath = path.join(root, "public/footprint-calibration.html");
  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Footprint calibration</title>
<style>
  body { margin: 0; background: #111; font-family: sans-serif; color: #fff; }
  .wrap { display: flex; gap: 16px; padding: 16px; align-items: flex-start; }
  .panel { flex: 1; position: relative; background: #fff; }
  .panel h3 { position: absolute; top: 8px; left: 8px; margin: 0; color: #000; z-index: 2; font-size: 14px; }
  svg { width: 100%; display: block; }
  .ref { max-width: 480px; }
  .ref img { width: 100%; }
</style></head><body>
<div class="wrap">
  <div class="ref"><h3>Canva reference</h3><img src="/assets-canva-ref.png" alt="ref" onerror="this.parentElement.innerHTML='<p>Copy Canva screenshot to public/assets-canva-ref.png</p>'"></div>
  <div class="panel"><h3>Main map</h3><div id="main"></div></div>
  <div class="panel"><h3>Kathmandu inset</h3><div id="inset"></div></div>
</div>
<script type="module">
const KATHMANDU_INSET = ${JSON.stringify(KATHMANDU_INSET)};
const BRAND_COLORS = ${JSON.stringify(BRAND_COLORS)};
const MAIN = ${JSON.stringify(MAIN_MARKERS)};
const INSET = ${JSON.stringify(INSET_MARKERS)};

async function render(hostId, markers, zoom) {
  const host = document.getElementById(hostId);
  const svgText = ${JSON.stringify(svgText)};
  host.innerHTML = svgText;
  const svg = host.querySelector('svg');
  const paths = [...svg.querySelectorAll('path')];
  const mainPath = paths[0];
  for (const p of paths) {
    if (p === mainPath) {
      p.setAttribute('fill', '#000');
      p.setAttribute('stroke', 'rgba(255,255,255,0.55)');
      p.setAttribute('stroke-width', '1.2');
    } else { p.setAttribute('fill', 'none'); p.setAttribute('stroke', 'none'); }
  }
  const local = mainPath.getBBox();
  const ctm = mainPath.transform.baseVal.consolidate();
  const tx = ctm ? ctm.matrix.e : 0;
  const ty = ctm ? ctm.matrix.f : 0;
  const box = { x: local.x + tx, y: local.y + ty, w: local.width, h: local.height };
  const xy = (nx, ny) => [box.x + nx * box.w, box.y + ny * box.h];
  let vb;
  if (zoom) {
    const [x1,y1] = xy(zoom.minNx, zoom.minNy);
    const [x2,y2] = xy(zoom.maxNx, zoom.maxNy);
    const pad = Math.max(x2-x1, y2-y1) * 0.1;
    vb = [x1-pad, y1-pad, x2-x1+pad*2, y2-y1+pad*2];
  } else {
    const pad = Math.max(box.w, box.h) * 0.03;
    vb = [box.x-pad, box.y-pad, box.w+pad*2, box.h+pad*2];
  }
  svg.setAttribute('viewBox', vb.join(' '));
  svg.style.width = '100%';
  const r = vb[2] * 0.012;
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  for (const m of markers) {
    let fnx = m.nx, fny = m.ny;
    if (zoom) {
      fnx = zoom.minNx + m.nx * (zoom.maxNx - zoom.minNx);
      fny = zoom.minNy + m.ny * (zoom.maxNy - zoom.minNy);
    }
    const [x,y] = xy(fnx, fny);
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', r);
    c.setAttribute('fill', BRAND_COLORS[m.brand] || '#fff');
    c.setAttribute('stroke', '#000'); c.setAttribute('stroke-width', '1');
    g.appendChild(c);
  }
  svg.appendChild(g);
}
render('main', MAIN, null);
render('inset', INSET, KATHMANDU_INSET);
</script></body></html>`;
  fs.writeFileSync(outPath, html);
  console.log("Wrote", outPath);
  console.log("Main markers:", MAIN_MARKERS.length, "Inset markers:", INSET_MARKERS.length);
}

main();
