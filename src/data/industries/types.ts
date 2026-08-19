// Industries, shared types for sectors, companies, and brands
// Part of the VOITH site content. Edit freely, re-exported via data/content.ts.

export type SectorSlug =
  | "mobility"
  | "construction"
  | "hospitality"
  | "diversified";

export type IndustryDropdownItem = {
  label: string;
  slug: SectorSlug;
  tagline: string;
};

/** A physical location, showroom, service centre, charging station, dealer. */
export type BrandLocation = {
  name: string;
  /** Short type label, e.g. "Showroom & Service Center", "Charging Station". */
  kind?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
};

/** A named group of models or products, e.g. "Trail Series". */
export type BrandLineupGroup = { category: string; items: string[] };

export type BrandStat = { value: string; label: string };

export type BrandHighlight = { title: string; description: string };

/** Optional rich content rendered on a brand's child page. */
export type BrandDetail = {
  /** Founding / launch line, e.g. "Established · August 2021". */
  established?: string;
  /** Origin / manufacturer line, e.g. "Toyota Motor Corporation, Japan". */
  origin?: string;
  /** Overview paragraphs (longer than `description`). */
  intro?: string[];
  /** Key figures shown below the overview prose. */
  stats?: BrandStat[];
  /** Short callout cards for differentiators and milestones. */
  highlights?: BrandHighlight[];
  /** Heading above the lineup grid, e.g. "Models available in Nepal". */
  lineupLabel?: string;
  lineup?: BrandLineupGroup[];
  /** Flat list of services offered (used instead of / alongside lineup). */
  services?: string[];
  /** Heading above the locations list. */
  locationsLabel?: string;
  locations?: BrandLocation[];
};

/**
 * A child brand under an operating company, e.g. Toyota or Morbidelli under
 * United Traders Syndicate. Rendered at
 * /industries/[slug]/[company]/[brand] with its own detailed page.
 */
export type ChildBrand = {
  /** URL segment under /industries/[slug]/[company]/[brand]. */
  slug: string;
  /** Short initials shown inside the blob mark. */
  mark: string;
  name: string;
  role: string;
  description: string;
  /**
   * Optional grouping label used by companies that categorise their child
   * brands, e.g. UTS → "Two Wheelers" / "Four Wheelers". Must match one of the
   * parent company's `childGroups` entries. Ignored unless the company sets
   * `childGroups`.
   */
  category?: string;
  /** Optional card/hero image. Falls back to a branded placeholder. */
  image?: string;
  /**
   * Optional brand logo, shown on brand cards (carousel + related-brand grids)
   * in place of the photo. The brand page hero/feature still uses `image`, not
   * this logo. Falls back to `image`, then the branded placeholder.
   */
  logo?: string;
  /** Optional official external website, surfaced as a "Visit website" button. */
  website?: string;
  /** Optional expanded content shown on the brand page. */
  detail?: BrandDetail;
  /** Marks an announced-but-not-yet-live brand. */
  comingSoon?: boolean;
};

/**
 * An operating company under a VOITH sector, e.g. United Traders Syndicate.
 * Rendered at /industries/[slug]/[company]. May own child brands; a company
 * with no children renders its own `detail` directly (a leaf node).
 */
export type SectorBrand = {
  /** URL segment under /industries/[slug]/[company]. */
  slug: string;
  /** Short initials shown inside the blob mark. */
  mark: string;
  name: string;
  role: string;
  description: string;
  /** Optional card/hero image. Falls back to a branded placeholder. */
  image?: string;
  /**
   * Optional brand logo, shown on related-brand cards in place of the photo.
   * The sector figure and company page hero/feature still use `image`, not
   * this logo. Falls back to `image`, then the branded placeholder.
   */
  logo?: string;
  /** Optional official external website, surfaced as a "Visit website" button. */
  website?: string;
  /** Optional expanded content shown on the company page. */
  detail?: BrandDetail;
  /** Child brands distributed/operated by this company. */
  children?: ChildBrand[];
  /**
   * When set, the company page groups its child brands under these category
   * headings (rendered in this order) instead of a single carousel. Categories
   * match each child's `category`; children without a listed category fall into
   * an "Other" group at the end. Currently used by United Traders Syndicate to
   * split Two Wheelers / Four Wheelers; add labels here to introduce new groups.
   */
  childGroups?: string[];
  /** Marks an announced-but-not-yet-live company. */
  comingSoon?: boolean;
  /**
   * Short status badge shown on cards and the company hero without hiding the
   * detail content, e.g. "Coming Soon", "Opening 13 Oct 2026". Use instead of
   * `comingSoon` when there IS content to show alongside the badge.
   */
  status?: string;
};

export type SectorStat = { value: string; label: string };

export type SectorHighlight = { title: string; description: string };

export type SectorPage = {
  slug: SectorSlug;
  label: string;
  letter: string;
  color: string;
  eyebrow: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  heroImage: string;
  intro: string;
  stats: SectorStat[];
  brands: SectorBrand[];
  highlights: SectorHighlight[];
  closing: string;
};
