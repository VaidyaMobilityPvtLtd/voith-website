// Home page content: hero, features, founder spotlight, businesses, testimonials
// Part of the VOITH site content. Edit freely, re-exported via data/content.ts.

import { routes } from "./shared";
import { sectorOrder, sectorPages } from "./industries";
import type { SectorSlug } from "./industries/types";

export type HeroItem = {
  title: string;
  sub: string;
  href: string;
  /** Optional badge, e.g. "Coming Soon", mirrors the company's `status`. */
  status?: string;
};

/** One sector's operating companies, as rendered in the hero panel list. */
export type HeroGroup = {
  slug: SectorSlug;
  label: string;
  items: HeroItem[];
};

/**
 * Compact hero titles for companies whose registered name is too long for a
 * panel row. Keyed by company slug; every other company uses its `name`.
 */
const heroTitleOverrides: Record<string, string> = {
  uheem: "UHEEM",
  "philippines-consulate": "Philippines Consulate General",
};

/**
 * Every operating company across the four sectors, grouped by sector and
 * linked to its own page. Derived from `sectorPages` so the hero list stays
 * in step whenever a company is added, renamed, or moved.
 */
export const heroGroups: HeroGroup[] = sectorOrder.map((slug) => ({
  slug,
  label: sectorPages[slug].label,
  items: sectorPages[slug].brands.map((company) => ({
    title: heroTitleOverrides[company.slug] ?? company.name,
    sub: company.role,
    href: `${routes.industries}/${slug}/${company.slug}`,
    status: company.status ?? (company.comingSoon ? "Coming Soon" : undefined),
  })),
}));

/** The same companies as a flat list, in sector order. */
export const heroItems: HeroItem[] = heroGroups.flatMap((group) => group.items);

/** Total number of operating companies shown in the hero. */
export const heroCompanyCount = heroItems.length;

export type Feature = {
  label: string;
  value: string;
  icon: "people" | "growth";
};

export const features: Feature[] = [
  { label: "Employed", value: "300+", icon: "people" },
  { label: "Industries", value: "4 Sectors", icon: "growth" },
];

export const founderSpotlight = {
  name: "Dr. Vijaya Gajananda Vaidya",
  paragraphs: [
    "Late Chairman Dr. V. G. VAIDYA, a pioneering entrepreneur, founded a small business at 34 that grew into a leading business conglomerate in Nepal. Besides being the Honorary Counsel of the Philippines.",
    "He also actively contributed to social sectors such as the environment, education, health, and shelter for vulnerable groups. His diverse business interests spanned construction, tourism, aviation, fertilizers, heavy equipment, and more.",
    "Starting with a modest investment, he established partnerships with Korea and Japan, eventually becoming an authorized dealer for Toyota Motors in 1968 and founding Vaidya's Organization in 1981.",
  ],
  yatraPdf: {
    href: "/vijay-yatra.pdf",
    label: "Read Vijay Yatra",
  },
} as const;

export type Business = {
  letter: string;
  color: string;
  category: string;
  sub: string;
  description: string;
  image: string;
};

export const businesses: Business[] = [
  {
    letter: "M",
    color: "#C41A1A",
    category: "Mobility",
    sub: "UTS · Trayana · Vaidya Energy",
    description:
      "From Toyota to Ather EV to Italian motorcycles, Nepal's most complete mobility portfolio, serving every segment of the market.",
    image: "/timeline/homepage.jpg",
  },
  {
    letter: "C",
    color: "#1D6DB5",
    category: "Construction",
    sub: "Huaxin Narayani · TCLI · TMCC · UHEEM",
    description:
      "From limestone quarries in Nuwakot to Nepal's largest cement plant (4,000 tons per day), a USD 250M joint venture with world leader Huaxin Cement.",
    image: "/sectors/construction.jpg",
  },
  {
    letter: "H",
    color: "#B45309",
    category: "Hospitality",
    sub: "Sasvata Wildlife Resort · Himalayan Sasvata · Golden Thread",
    description:
      "VOITH Hospitality, a tribute to Nepal's timeless diversity. Three flagship destinations from the jungles of Chitwan to the gateway of Everest, turning natural and cultural heritage into world-class travel experiences.",
    image: "/sectors/hospitality.jpg",
  },
  {
    letter: "I",
    color: "#6B21A8",
    category: "Other Industries",
    sub: "WEAN · Lumbini · Pitstop · Philippines Consulate",
    description:
      "Micro-credit empowering millions of Nepali women, one of Nepal's largest insurance companies, a boutique automotive workshop, and the Honorary Consulate General of the Philippines, diversified services across Nepal.",
    image: "/sectors/diversified-hero.jpg",
  },
];

export type Testimonial = { quote: string; author: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      'UTS is one of our most loyal and trustworthy partners. The company has long conducted its business under the maxim of "customers first" and has gained great trust from customers in Nepal.',
    author: "Dr. Shoichiro Toyoda",
    role: "Honorary Chairman, Toyota Motor Corporation",
  },
  {
    quote:
      "It's the kind of ideals, vision, and efforts of VOITH that makes it possible for writers, literateurs, artists, patriots, and intellectuals to contribute to raising the glory of this country.",
    author: "Dr. Saphalya Amatya",
    role: "Archaeologist",
  },
  {
    quote:
      "When the education sector produces quality manpower, industry will foster. Kathmandu University acknowledges the growing interest of VOITH in the development of technical-oriented education.",
    author: "Dr. Suresh Raj Sharma",
    role: "Vice-Chancellor, Kathmandu University",
  },
  {
    quote:
      'WWF Nepal is proud to have been a partner with VOITH in the "Drive for Anti-Poaching", strengthening the conservation of rhinos in Chitwan National Park.',
    author: "Anil Manandhar",
    role: "Country Representative, WWF Nepal",
  },
  {
    quote:
      "Through its assistance, VOITH has won the admiration and trust of nearly one million visitors who come to the Central Zoo each year.",
    author: "R. K. Shrestha",
    role: "Director, Central Zoo",
  },
  {
    quote:
      "It's my hope that the VOITH family will become an indispensable part of the country and create a sky under whose roof a lot of people can find shelter.",
    author: "Krishna Chandra Singh Pradhan",
    role: "Scholar",
  },
];
