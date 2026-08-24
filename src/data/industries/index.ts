// Industries, assembled sector pages, dropdown, slugs, and lookup helpers
// Part of the VOITH site content. Edit freely, re-exported via data/content.ts.

import type {
  SectorSlug,
  SectorPage,
  IndustryDropdownItem,
  SectorBrand,
  ChildBrand,
} from "./types";
import { routes } from "../shared";
import { mobilitySector } from "./mobility";
import { constructionSector } from "./construction";
import { hospitalitySector } from "./hospitality";
import { diversifiedSector } from "./diversified";

export const sectorPages: Record<SectorSlug, SectorPage> = {
  mobility: mobilitySector,
  construction: constructionSector,
  hospitality: hospitalitySector,
  diversified: diversifiedSector,
};

/** Card / fallback imagery, always matches each sector's hero. */
export const sectorPlaceholderImages: Record<SectorSlug, string> = {
  mobility: sectorPages.mobility.heroImage,
  construction: sectorPages.construction.heroImage,
  hospitality: sectorPages.hospitality.heroImage,
  diversified: sectorPages.diversified.heroImage,
};

export const industryDropdown: IndustryDropdownItem[] = [
  {
    label: "Mobility",
    slug: "mobility",
    tagline: "UTS · Trayana · Vaidya Energy",
  },
  {
    label: "Construction",
    slug: "construction",
    tagline: "Huaxin Narayani · Tadi · UHEEM",
  },
  {
    label: "Hospitality",
    slug: "hospitality",
    tagline: "Sasvata · Himalayan Sasvata · Golden Thread",
  },
  {
    label: "Other Industries",
    slug: "diversified",
    tagline: "WEAN · Lumbini · Pitstop · Consulate",
  },
];

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

/**
 * One entry in a sector's brand marquee: the product-level entity a visitor
 * recognises, e.g. Toyota rather than United Traders Syndicate. Only brands
 * with a logo of their own appear — the band shows artwork and nothing else,
 * so a brand with no logo has nothing to contribute and is left out.
 */
export type SectorMarqueeItem = {
  /** Stable React key, unique within the sector. */
  key: string;
  /** Carried on the link, not drawn: the logo already spells the name. */
  name: string;
  logo: string;
  /** The brand's own site when it has one, otherwise its page on this site. */
  href: string;
  external: boolean;
};

function toMarqueeItem(
  brand: SectorBrand | ChildBrand,
  key: string,
  internalHref: string,
): SectorMarqueeItem | null {
  if (!brand.logo) return null;
  return {
    key,
    name: brand.name,
    logo: brand.logo,
    href: brand.website ?? internalHref,
    external: Boolean(brand.website),
  };
}

/** Every logo-bearing brand in a sector's marquee, in company order. */
export function getSectorMarquee(slug: SectorSlug): SectorMarqueeItem[] {
  return sectorPages[slug].brands
    .flatMap((company) => {
      const companyHref = `${routes.industries}/${slug}/${company.slug}`;
      const children = company.children ?? [];
      if (children.length === 0) {
        return [toMarqueeItem(company, company.slug, companyHref)];
      }
      return children.map((child) =>
        toMarqueeItem(
          child,
          `${company.slug}/${child.slug}`,
          `${companyHref}/${child.slug}`,
        ),
      );
    })
    .filter((item): item is SectorMarqueeItem => item !== null);
}
