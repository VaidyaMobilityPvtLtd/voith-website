/**
 * Nepal footprint map (/nepal.svg) — brands and dot markers.
 *
 * The dot coordinates below were extracted programmatically from the colored
 * markers baked into public/nepal.svg (percentages of the image, so they stay
 * aligned at any rendered size). `x` is % from the left edge, `y` is % from
 * the top edge.
 *
 * To enrich the map over time, fill in the optional `city` / `label` fields
 * on any dot — the tooltip on the map shows them automatically. New dots can
 * be added the same way; `id` just needs to be unique.
 */

export type MapBrandKey =
  | "toyota"
  | "ather"
  | "xcmg"
  | "keeway"
  | "ultraviolette"
  | "huaxin"
  | "sasvata";

export type MapBrand = {
  key: MapBrandKey;
  name: string;
  /** Dot color as it appears on /nepal.svg (also used in the legend). */
  color: string;
  group: "automotive" | "others";
  note?: string;
};

export const mapBrands: MapBrand[] = [
  { key: "toyota", name: "TOYOTA", color: "#F0070B", group: "automotive" },
  { key: "ather", name: "ATHER", color: "#30F1FA", group: "automotive" },
  { key: "xcmg", name: "XCMG", color: "#6509F3", group: "automotive" },
  { key: "keeway", name: "Keeway GROUP", color: "#026DB7", group: "automotive" },
  {
    key: "ultraviolette",
    name: "ULTRAVIOLETTE",
    color: "#09B536",
    group: "automotive",
  },
  {
    key: "huaxin",
    name: "HUAXIN",
    color: "#EEEE10",
    group: "others",
    note: "Factory and Mines",
  },
  {
    key: "sasvata",
    name: "ŠASVATA",
    color: "#FFFFFF",
    group: "others",
    note: "Flatlands to Mountains",
  },
];

export type MapDot = {
  id: string;
  brand: MapBrandKey;
  /** % from the left edge of the map image. */
  x: number;
  /** % from the top edge of the map image. */
  y: number;
  /** Marker size multiplier (1 = standard dot). */
  size?: number;
  /** Optional details shown in the tooltip — fill in as info becomes known. */
  city?: string;
  label?: string;
};

export const mapDots: MapDot[] = [
  // toyota — 10 dots (west to east)
  { id: "toyota-01", brand: "toyota", x: 21.1, y: 66.81 },
  { id: "toyota-02", brand: "toyota", x: 22.74, y: 53.9 },
  { id: "toyota-03", brand: "toyota", x: 38.14, y: 74.19 },
  { id: "toyota-04", brand: "toyota", x: 49.96, y: 64.3 },
  { id: "toyota-05", brand: "toyota", x: 55.59, y: 74.9 },
  { id: "toyota-06", brand: "toyota", x: 61.26, y: 18.33 },
  { id: "toyota-07", brand: "toyota", x: 61.58, y: 22.06 },
  { id: "toyota-08", brand: "toyota", x: 62.83, y: 17.63 },
  { id: "toyota-09", brand: "toyota", x: 89.53, y: 93.18 },
  { id: "toyota-10", brand: "toyota", x: 95.31, y: 85.34 },

  // ather — 29 dots (west to east)
  { id: "ather-01", brand: "ather", x: 39.2, y: 76.36 },
  { id: "ather-02", brand: "ather", x: 46.35, y: 60.96 },
  { id: "ather-03", brand: "ather", x: 49.37, y: 61.77 },
  { id: "ather-04", brand: "ather", x: 52.39, y: 64.59 },
  { id: "ather-05", brand: "ather", x: 53.91, y: 77.9 },
  { id: "ather-06", brand: "ather", x: 55.38, y: 66.46 },
  { id: "ather-07", brand: "ather", x: 56.74, y: 69.44 },
  { id: "ather-08", brand: "ather", x: 56.79, y: 19.65 },
  { id: "ather-09", brand: "ather", x: 58.58, y: 16.57 },
  { id: "ather-10", brand: "ather", x: 58.96, y: 14.66 },
  { id: "ather-11", brand: "ather", x: 59.66, y: 69.85 },
  { id: "ather-12", brand: "ather", x: 60.22, y: 12.97 },
  { id: "ather-13", brand: "ather", x: 61.28, y: 72.16 },
  { id: "ather-14", brand: "ather", x: 61.34, y: 24.9 },
  { id: "ather-15", brand: "ather", x: 62.22, y: 15.75 },
  { id: "ather-16", brand: "ather", x: 62.28, y: 11.31 },
  { id: "ather-17", brand: "ather", x: 63.04, y: 13.3 },
  { id: "ather-18", brand: "ather", x: 63.63, y: 26.77 },
  { id: "ather-19", brand: "ather", x: 63.94, y: 19.29 },
  { id: "ather-20", brand: "ather", x: 64.06, y: 16.94 },
  { id: "ather-21", brand: "ather", x: 64.24, y: 15.14 },
  { id: "ather-22", brand: "ather", x: 64.35, y: 8.32 },
  { id: "ather-23", brand: "ather", x: 64.87, y: 11.33 },
  { id: "ather-24", brand: "ather", x: 65.28, y: 28.97 },
  { id: "ather-25", brand: "ather", x: 65.64, y: 13.54 },
  { id: "ather-26", brand: "ather", x: 67.26, y: 13.65 },
  { id: "ather-27", brand: "ather", x: 68.43, y: 18.48 },
  { id: "ather-28", brand: "ather", x: 70.67, y: 16.97 },
  { id: "ather-29", brand: "ather", x: 94.91, y: 93.32 },

  // xcmg — 6 dots (west to east)
  { id: "xcmg-01", brand: "xcmg", x: 10.66, y: 55.38 },
  { id: "xcmg-02", brand: "xcmg", x: 51.48, y: 61.8 },
  { id: "xcmg-03", brand: "xcmg", x: 64.06, y: 21.22 },
  { id: "xcmg-04", brand: "xcmg", x: 69.52, y: 88.74 },
  { id: "xcmg-05", brand: "xcmg", x: 71.74, y: 89.33 },
  { id: "xcmg-06", brand: "xcmg", x: 90.08, y: 90.25 },

  // keeway — 5 dots (west to east)
  { id: "keeway-01", brand: "keeway", x: 39.3, y: 73.48 },
  { id: "keeway-02", brand: "keeway", x: 49.39, y: 65.81 },
  { id: "keeway-03", brand: "keeway", x: 70.59, y: 19.04 },
  { id: "keeway-04", brand: "keeway", x: 72.48, y: 91.67 },
  { id: "keeway-05", brand: "keeway", x: 95.91, y: 83.85 },

  // ultraviolette — 1 dot (drawn larger on the source map)
  { id: "ultraviolette-01", brand: "ultraviolette", x: 62.62, y: 19.09, size: 1.4 },

  // huaxin — 1 dot
  { id: "huaxin-01", brand: "huaxin", x: 57.98, y: 71.93 },

  // sasvata — 1 dot (white marker)
  { id: "sasvata-01", brand: "sasvata", x: 54.49, y: 79.64 },
];
