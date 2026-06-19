// Industries — assembled sector pages, dropdown, slugs, and lookup helpers
// Part of the VOITH site content. Edit freely — re-exported via data/content.ts.

import type {
  SectorSlug,
  SectorPage,
  IndustryDropdownItem,
  SectorBrand,
  ChildBrand,
} from "./types";
import { mobilitySector } from "./mobility";
import { constructionSector } from "./construction";
import { hospitalitySector } from "./hospitality";
import { diversifiedSector } from "./diversified";

/**
 * Placeholder card/hero imagery reused from the sector library until
 * brand-specific photography lands. Repeats across sectors are intentional.
 */
export const sectorPlaceholderImages: Record<SectorSlug, string> = {
  mobility: "/sectors/other_industries.webp",
  construction: "/sectors/construction.jpg",
  hospitality: "/sectors/Hospitalityhero.jpeg",
  diversified: "/sectors/other_industries.webp",
};

export const industryDropdown: IndustryDropdownItem[] = [
  {
    label: "Mobility",
    slug: "mobility",
    tagline: "UTS · Trayana · Vaidya Energy · UHEEM",
  },
  {
    label: "Construction",
    slug: "construction",
    tagline: "Huaxin Narayani · Tadi",
  },
  {
    label: "Hospitality",
    slug: "hospitality",
    tagline: "Sasvata · Himalayan Sasvata · Golden Thread",
  },
  {
    label: "Other Industries",
    slug: "diversified",
    tagline: "WEAN · Lumbini · Pitstop · Philippines Consulate",
  },
];

export const sectorPages: Record<SectorSlug, SectorPage> = {
  mobility: mobilitySector,
  construction: constructionSector,
  hospitality: hospitalitySector,
  diversified: diversifiedSector,
};

export const sectorOrder: SectorSlug[] = [
  "mobility",
  "construction",
  "hospitality",
  "diversified",
];

/** Find an operating company within a sector by its slug. */
export function getSectorBrand(
  slug: SectorSlug,
  companySlug: string,
): SectorBrand | undefined {
  return sectorPages[slug].brands.find((b) => b.slug === companySlug);
}

/** Find a child brand within a company by its slug. */
export function getChildBrand(
  slug: SectorSlug,
  companySlug: string,
  childSlug: string,
): ChildBrand | undefined {
  return getSectorBrand(slug, companySlug)?.children?.find(
    (c) => c.slug === childSlug,
  );
}

/** Every sector + company slug pair, for /industries/[slug]/[company]. */
export function allCompanyParams(): Array<{
  slug: SectorSlug;
  company: string;
}> {
  return sectorOrder.flatMap((slug) =>
    sectorPages[slug].brands.map((b) => ({ slug, company: b.slug })),
  );
}

/** Every sector + company + child-brand triple, for the brand detail route. */
export function allChildBrandParams(): Array<{
  slug: SectorSlug;
  company: string;
  brand: string;
}> {
  return sectorOrder.flatMap((slug) =>
    sectorPages[slug].brands.flatMap((b) =>
      (b.children ?? []).map((c) => ({ slug, company: b.slug, brand: c.slug })),
    ),
  );
}
