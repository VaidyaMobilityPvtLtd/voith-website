// Site-wide content: company info, routes, nav, page meta, footer, global features
// Part of the VOITH site content. Edit freely — re-exported via data/content.ts.

export const VOITH_FOUNDED_YEAR = 1964;

/** Full legal / brand name (VOITH). */
export const companyFullName =
  "Vaidya's Organization of Industries & Trading Houses" as const;

export const companyTagline = "Serving · Caring · Growing Together" as const;

/** Full calendar years since founding; increments each January 1. */
export function getYearsSinceFounding(): number {
  return new Date().getFullYear() - VOITH_FOUNDED_YEAR;
}

export const routes = {
  home: "/",
  industries: "/industries",
  impact: "/impact",
  people: "/people",
  future: "/future",
  contact: "/contact",
  whyChooseUs: "/why-choose-us",
  legal: "/legal",
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Industries", href: routes.industries },
  { label: "Impact", href: routes.impact },
  { label: "People", href: routes.people },
  { label: "Future", href: routes.future },
];

export const pageMeta = {
  industries: {
    eyebrow: "Our Group",
    title: "Industries & Businesses",
    description:
      "Mobility, construction, hospitality, and diversified services — VOITH's four sectors building Nepal's economy.",
    stat: "4",
    statLabel: "Core sectors",
    heroImage: "/IndustriesHero.png",
  },
  impact: {
    eyebrow: "Community",
    title: "Impact & Legacy",
    description:
      "Partnerships, values, and milestones that reflect VOITH's commitment to Nepal's people and institutions.",
    stat: "60+",
    statLabel: "Years of contribution",
    heroImage: "/timeline/home2.png",
  },
  people: {
    eyebrow: "Leadership",
    title: "People & Family",
    description:
      "The Vaidya family and leadership team guiding VOITH across generations of entrepreneurship in Nepal.",
    stat: "4",
    statLabel: "Generations leading",
    heroImage: "/people/hero-team.png",
  },
  future: {
    eyebrow: "Forward",
    title: "The Future",
    description:
      "Hospitality, electric mobility, digital platforms, and local manufacturing — where VOITH is headed next.",
    stat: "6",
    statLabel: "Major initiatives",
    heroImage: "/timeline/home2.png",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Contact VOITH",
    description:
      "From dealership inquiries to partnership opportunities and press — reach the right team at VOITH directly.",
    stat: "24h",
    statLabel: "Typical reply",
    heroImage: "/timeline/homepage.jpg",
  },
} as const;

export const values = [
  "United",
  "Power of Identity",
  "Business Ethics",
  "Human Value",
  "Creating Value",
  "Adaptive",
  "Sustainability",
  "Trust",
  "Pioneering",
] as const;

export const globalFeatures = [
  {
    icon: "🤝",
    title: "15 International Partners",
    description:
      "Toyota, Ather, Huaxin, Keeway, Benelli, Morbidelli, XCMG and more — world leaders in every sector VOITH operates in.",
  },
  {
    icon: "🌐",
    title: "8+ Partner Countries",
    description:
      "Japan, China, India, Italy, Germany, South Korea, Philippines — four continents of expertise flowing into Nepal's economy.",
  },
  {
    icon: "📍",
    title: "Nationwide Presence",
    description:
      "Dealer and service networks spanning East to West Nepal, with 30 Ather Grid fast-chargers and an expanding footprint across all regions.",
  },
] as const;

/** Same destinations as the main nav, plus Contact. */
export const footerLinks: NavLink[] = [
  ...navLinks,
  { label: "Contact", href: routes.contact },
];

export type FooterColumn = { heading: string; links: NavLink[] };

/**
 * Grouped footer navigation. Every href resolves to a real page or to an
 * on-page section anchor that exists in the codebase (e.g. #history, #global).
 */
export const footerColumns: FooterColumn[] = [
  {
    heading: "Explore",
    links: [
      { label: "Industries", href: routes.industries },
      { label: "Impact", href: routes.impact },
      { label: "People", href: routes.people },
      { label: "Future", href: routes.future },
      { label: "Contact", href: routes.contact },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Mobility", href: `${routes.industries}/mobility` },
      { label: "Construction", href: `${routes.industries}/construction` },
      { label: "Hospitality", href: `${routes.industries}/hospitality` },
      { label: "Other Industries", href: `${routes.industries}/diversified` },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Why Choose Us", href: routes.whyChooseUs },
      { label: "Our Story", href: `${routes.home}#history` },
      { label: "Global Reach", href: `${routes.home}#global` },
      { label: "Philosophy", href: `${routes.home}#philosophy` },
      { label: "Milestones", href: `${routes.home}#milestones` },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: `${routes.legal}#privacy` },
      { label: "Terms of Use", href: `${routes.legal}#terms` },
      { label: "Cookie Policy", href: `${routes.legal}#cookies` },
      { label: "Disclaimer", href: `${routes.legal}#disclaimer` },
    ],
  },
];

export const footerSocial = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "TikTok", href: "https://www.tiktok.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
] as const;

export const footerContact = {
  email: "info@voith.com.np",
  addressLines: [
    "Registered Office Address",
    "VOITH Complex,",
    "Ananda Nagar, Dhumbarahi",
    "P.O. BOX: 233/2640,",
    "Kathmandu, Nepal",
  ],
} as const;
