export const VOITH_FOUNDED_YEAR = 1964;

/** Full legal / brand name (VOITH). */
export const companyFullName =
  "Vaidya's Organization of Industry & Trading Houses" as const;

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
    heroImage: "/timeline/homepage.jpg",
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
    heroImage: "/timeline/homepage.jpg",
  },
  future: {
    eyebrow: "Forward",
    title: "The Future",
    description:
      "Hospitality, electric mobility, and local manufacturing — where VOITH is headed next.",
    stat: "3",
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

export type SectorSlug = "mobility" | "construction" | "hospitality" | "diversified";

/**
 * Placeholder card/hero imagery reused from the sector library until
 * brand-specific photography lands. Repeats across sectors are intentional.
 */
export const sectorPlaceholderImages: Record<SectorSlug, string> = {
  mobility: "/sectors/other_industries.webp",
  construction: "/sectors/construction.jpg",
  hospitality: "/sectors/hospitality.jpg",
  diversified: "/sectors/other_industries.webp",
};

export type IndustryDropdownItem = { label: string; slug: SectorSlug; tagline: string };

export const industryDropdown: IndustryDropdownItem[] = [
  { label: "Mobility", slug: "mobility", tagline: "Toyota · Ather · Two-wheelers" },
  { label: "Construction", slug: "construction", tagline: "Huaxin Narayani · Tadi" },
  { label: "Hospitality", slug: "hospitality", tagline: "Sasvata Wellness Resort" },
  { label: "Other Industries", slug: "diversified", tagline: "WEAN · Lumbini · Pitstop" },
];

/** A physical location — showroom, service centre, charging station, dealer. */
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

/** Optional rich content rendered on a brand's child page. */
export type BrandDetail = {
  /** Founding / launch line, e.g. "Established · August 2021". */
  established?: string;
  /** Origin / manufacturer line, e.g. "Toyota Motor Corporation — Japan". */
  origin?: string;
  /** Overview paragraphs (longer than `description`). */
  intro?: string[];
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
 * A child brand under an operating company — e.g. Toyota or Morbidelli under
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
  /** Optional card/hero image. Falls back to a branded placeholder. */
  image?: string;
  /** Optional expanded content shown on the brand page. */
  detail?: BrandDetail;
  /** Marks an announced-but-not-yet-live brand. */
  comingSoon?: boolean;
};

/**
 * An operating company under a VOITH sector — e.g. United Traders Syndicate.
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
  /** Optional expanded content shown on the company page. */
  detail?: BrandDetail;
  /** Child brands distributed/operated by this company. */
  children?: ChildBrand[];
  /** Marks an announced-but-not-yet-live company. */
  comingSoon?: boolean;
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

export const sectorPages: Record<SectorSlug, SectorPage> = {
  mobility: {
    slug: "mobility",
    label: "Mobility",
    letter: "M",
    color: "#C41A1A",
    eyebrow: "Sector 01",
    title: "Moving Nepal forward",
    description:
      "From Toyota to Ather EV, from Italian heritage motorcycles to construction equipment — Nepal's most complete mobility portfolio.",
    stat: "55+",
    statLabel: "Years on the road",
    heroImage: "/timeline/homepage.jpg",
    intro:
      "Mobility is the heritage VOITH was built on. Since 1967, when UTS first partnered with Toyota Motor Corporation, we have shaped how Nepal moves — through dealerships, service networks, electrification, and bringing global mobility brands to Himalayan roads.",
    stats: [
      { value: "1967", label: "UTS–Toyota partnership" },
      { value: "#1", label: "EV scooter brand (Ather)" },
      { value: "30+", label: "Ather Grid fast-chargers" },
      { value: "5", label: "Two-wheeler marques" },
    ],
    brands: [
      {
        slug: "uheem",
        mark: "UHEEM",
        name: "United Heavy Equipment and Earth Movers",
        role: "UHEEM · Heavy & construction equipment · Est. 2018",
        image: "/brands/uheem.png",
        description:
          "VOITH's heavy-equipment company and the sole authorised distributor of XCMG construction machinery in Nepal.",
        detail: {
          established: "Established · April 2018",
          origin: "Sole distributor — XCMG, China",
          intro: [
            "United Heavy Equipment and Earth Movers (UHEEM) is VOITH's specialised heavy-equipment and construction-machinery company. Established in April 2018, it strengthens the group's presence in Nepal's heavy-equipment and infrastructure-development sector.",
            "UHEEM is the sole authorised distributor of XCMG construction machinery in Nepal, focusing on distribution, sales, and after-sales support — backed by reliable spare-parts availability and professional service across the country.",
          ],
          locationsLabel: "Offices",
          locations: [
            {
              name: "UHEEM — Kathmandu",
              kind: "Head Office",
              address: "Anandanagar, Dhumbarahi, Kathmandu 44600, Nepal",
              phone: "+977 985-1217690 · 01-4008813",
              email: "customercare@uheem.com.np",
            },
            {
              name: "UHEEM — Laxminiya",
              kind: "Branch",
              address: "Laxminiya Gaunpalika-07, on the Janakpur highway",
              phone: "9851114569 · 01-4542901",
              email: "info@uheem.com.np",
            },
          ],
        },
        children: [
          {
            slug: "xcmg",
            mark: "XC",
            name: "XCMG",
            role: "Construction & industrial machinery — China",
            image: "/brands/xcmg.png",
            description:
              "One of the world's leading construction-equipment manufacturers, distributed exclusively in Nepal by UHEEM.",
            detail: {
              origin: "XCMG — China",
              intro: [
                "XCMG is one of the world's leading manufacturers of construction equipment and industrial machinery. Founded in China, it is globally recognised for advanced engineering across earth-moving, lifting, road-building, and concrete machinery.",
                "In Nepal, XCMG is distributed exclusively by UHEEM, bringing world-class construction machinery and dependable after-sales support to the country's infrastructure projects.",
              ],
              lineupLabel: "XCMG products available",
              lineup: [
                {
                  category: "Construction machinery",
                  items: [
                    "Earth Moving Machinery",
                    "Road Building Machinery",
                    "Hoisting Machinery",
                    "Underground Mining Machinery",
                    "Drilling Machinery",
                    "Concrete Machinery",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        slug: "united-traders-syndicate",
        mark: "UTS",
        name: "United Traders Syndicate",
        role: "Toyota Nepal · Est. 1967",
        image: "/brands/uts.png",
        description:
          "VOITH's flagship automotive company and Nepal's authorised Toyota distributor since 1967 — now expanding into premium two-wheelers with Keeway, Benelli, and Morbidelli.",
        detail: {
          established: "UTS–Toyota partnership · December 1967",
          origin: "Authorised distributor — Toyota Motor Corporation, Japan",
          intro: [
            "United Traders Syndicate (UTS) is VOITH's flagship automotive company and the authorised distributor in Nepal for Toyota, established in December 1967. Founded by the late Dr. V. G. Vaidya and today led by Mr. Suraj Vaidya (President) and Mrs. Ritu Singh Vaidya (Managing Director), UTS has played a pioneering role in shaping Nepal's automotive industry for over five decades.",
            "Beyond Toyota, UTS has expanded into the two-wheeler segment — recently partnering with the Keeway Group, Benelli, and the Italian luxury marque Morbidelli — building toward a complete on-road mobility portfolio backed by a nationwide sales, service, and spare-parts network.",
          ],
        },
        children: [
          {
            slug: "toyota",
            mark: "TO",
            name: "Toyota",
            role: "Toyota Motor Corporation — Japan",
            image: "/brands/toyota.png",
            description:
              "Nepal's most trusted automotive brand — from electrified hybrids to rugged SUVs — distributed by UTS since 1967.",
            detail: {
              established: "In Nepal since 1967",
              origin: "Toyota Motor Corporation — Japan",
              intro: [
                "Toyota, manufactured by Toyota Motor Corporation of Japan, has earned the trust of Nepali customers through its commitment to quality, durability, reliability, and customer satisfaction. Introduced to Nepal by United Traders Syndicate in 1967, it remains one of the country's most trusted automotive brands.",
                "Supported by an extensive nationwide network, Toyota delivers world-class mobility solutions, genuine spare parts, and professional after-sales services — from electrified hybrids to rugged SUVs and commercial vehicles.",
              ],
              lineupLabel: "Toyota models available in Nepal",
              lineup: [
                {
                  category: "Electrified — Hybrid",
                  items: [
                    "Corolla Cross Hybrid",
                    "Camry Hybrid",
                    "Yaris Cross Hybrid",
                    "RAV4 Core Hybrid",
                  ],
                },
                {
                  category: "SUV",
                  items: [
                    "Fortuner",
                    "Land Cruiser 70",
                    "Land Cruiser 250",
                    "Land Cruiser",
                    "Yaris Cross",
                    "RAV4",
                  ],
                },
                { category: "Pickup & Bus", items: ["Hilux", "Hiace", "Ace"] },
                { category: "Sedan", items: ["Camry"] },
              ],
              locationsLabel: "Dealer network — Sales · Service · Spares",
              locations: [
                {
                  name: "Biratnagar — AB Group",
                  kind: "Sales · Service · Spares",
                  address: "Biratnagar-3, Airport Road, Biratnagar 56613",
                  phone: "9852033953 · 021-461846 · 021-460965",
                  email: "abgroupbrt@gmail.com",
                },
                {
                  name: "Butwal — Autoways",
                  kind: "Sales · Service · Spares",
                  address: "Kalikanagar, Butwal 32907",
                  phone: "9857030854 · 071-419017 · 071-419026",
                  email: "autowaysbtl@gmail.com",
                },
                {
                  name: "Bharatpur — Autoways",
                  kind: "Sales · Service · Spares",
                  address: "Balmandir Chowk, Bharatpur 44207",
                  phone: "9855063549 · 056-525935 · 056-532292",
                  email: "autowaysngt@gmail.com",
                },
                {
                  name: "Pokhara — Autoways",
                  kind: "Sales · Service · Spares",
                  address: "Nayabazar Rd, Pokhara 33700",
                  phone: "9856037046 · 061-540356 · 061-540349",
                  email: "info@autoways.com.np",
                },
              ],
            },
          },
          {
            slug: "morbidelli",
            mark: "MB",
            name: "Morbidelli",
            role: "Italian luxury motorcycles — Recently partnered",
            image: "/brands/morbidelli.png",
            description:
              "The Italian motorcycle marque, introduced to Nepal in November 2025 — Trail, Street Fighter, and Cruiser series for the luxury segment.",
            detail: {
              established: "Introduced in Nepal · November 2025",
              origin: "Morbidelli — Italy",
              intro: [
                "Morbidelli is the Italian motorcycle marque introduced to Nepal in November 2025 through VOITH's United Traders Syndicate, marking the group's entry into the country's growing luxury motorcycle segment.",
                "With a strong Italian design heritage and performance-driven engineering, Morbidelli offers a versatile lineup built for adventure, urban performance, and cruising — bringing globally recognised mobility solutions to Nepali riders.",
              ],
              lineupLabel: "Morbidelli models available in Nepal",
              lineup: [
                { category: "Trail Series", items: ["T1002VX", "T502X", "T352X"] },
                { category: "Street Fighter Series", items: ["F352"] },
                { category: "Cruiser Series", items: ["C252V"] },
              ],
              locationsLabel: "Morbidelli showrooms & service centers",
              locations: [
                {
                  name: "Morbidelli Service Center — Tinkune",
                  kind: "Service Center",
                  address: "Tinkune, Kathmandu, Bagmati Province 44600",
                  phone: "977-9851404606",
                  email: "sadvisor@morbidelli.com.np",
                  hours: "Mon–Fri 10:00 AM – 6:00 PM · Sun open (Sat off)",
                },
                {
                  name: "Morbidelli Showroom & Service Center — Bhaktapur",
                  kind: "Showroom & Service Center",
                  address: "Gatthaghar Road, Madhyapur Thimi, Bagmati Province 44600",
                  phone: "977-9802324632",
                  hours: "Mon–Fri 9:30 AM – 6:30 PM · Sun open (Sat off)",
                },
                {
                  name: "Morbidelli Showroom — Naxal",
                  kind: "Showroom",
                  address: "Naxal, Kathmandu, Bagmati Province 44600",
                  phone: "977-9802324632",
                  hours: "Mon–Fri 10:00 AM – 6:00 PM · Sun open (Sat off)",
                },
              ],
            },
          },
          {
            slug: "keeway",
            mark: "KW",
            name: "Keeway",
            role: "European-styled motorcycles — Recently partnered",
            image: "/brands/keeway.png",
            description:
              "Contemporary European-styled motorcycles and scooters from the Keeway Group, joining UTS's growing two-wheeler lineup.",
            detail: {
              origin: "Keeway Group",
              intro: [
                "Keeway is an international motorcycle and scooter brand known for its contemporary European styling and accessible performance. Part of the Qianjiang group, Keeway offers a broad range of two-wheelers spanning commuter, cruiser, and lifestyle segments.",
                "In Nepal, Keeway joins VOITH's growing two-wheeler portfolio under United Traders Syndicate, backed by the group's nationwide sales and after-sales network.",
              ],
            },
          },
          {
            slug: "benelli",
            mark: "BN",
            name: "Benelli",
            role: "Italian heritage motorcycles — Recently partnered",
            image: "/brands/benelli.png",
            description:
              "One of the world's oldest motorcycle makers, founded in Pesaro, Italy, in 1911 — now part of VOITH's two-wheeler portfolio.",
            detail: {
              origin: "Benelli — Italy (est. 1911)",
              intro: [
                "Benelli is one of the world's oldest motorcycle manufacturers, founded in Pesaro, Italy, in 1911. Renowned for its racing heritage and distinctive design, the brand today combines Italian styling with modern engineering across a versatile motorcycle range.",
                "Benelli enters Nepal under VOITH's United Traders Syndicate as part of the group's expanding two-wheeler portfolio, supported by a nationwide service network.",
              ],
            },
          },
        ],
      },
      {
        slug: "trayana",
        mark: "TR",
        name: "Trayana",
        role: "New venture — Coming soon",
        description:
          "A new addition to VOITH's mobility portfolio. Details will be announced soon.",
        comingSoon: true,
      },
      {
        slug: "vaidya-energy",
        mark: "VE",
        name: "Vaidya Energy",
        role: "EV & mobility division · Est. 2023",
        image: "/brands/vaidya-energy.png",
        description:
          "VOITH's EV and mobility division, driving Nepal's electric transition — home to Ather Energy and Ultraviolette, with a growing Ather Grid charging network.",
        detail: {
          established: "EV division launched · 2023",
          origin: "VOITH EV & mobility division",
          intro: [
            "Vaidya Energy is VOITH's EV and mobility division, driving Nepal's transition to electric mobility. As the authorised distributor for its partner brands, it oversees sales, distribution, service management, charging infrastructure, and after-sales support across the country.",
            "Its portfolio pairs Ather Energy — Nepal's #1 electric scooter brand and Best Stall winner at NADA 2024 — with Ultraviolette's high-performance electric motorcycles, supported by a growing nationwide network of experience centres and Ather Grid fast-chargers.",
          ],
        },
        children: [
          {
            slug: "ather",
            mark: "AT",
            name: "Ather Energy",
            role: "Electric scooters — India",
            description:
              "Nepal's #1 electric scooter brand — connected, performance-oriented EVs backed by the Ather Grid charging network.",
            detail: {
              established: "Ather in Nepal · November 2023",
              origin: "Ather Energy — India",
              intro: [
                "Ather Energy is an advanced electric scooter brand from India, known for its connected mobility technology, smart features, and performance-oriented design. In Nepal, Ather was officially introduced in November 2023 under the VOITH Organization group through its EV and mobility division, Vaidya Energy.",
                "In October 2024 the brand opened its first experience center in Kathmandu, marking its official entry into Nepal's electric-mobility market. Vaidya Energy serves as the authorised distributor — overseeing sales, distribution, service management, charging infrastructure, and after-sales support nationwide.",
              ],
              lineupLabel: "Ather models available in Nepal",
              lineup: [
                {
                  category: "Electric scooters",
                  items: ["Ather 450S", "Ather 450X", "Ather Rizta"],
                },
              ],
              locationsLabel: "Service, experience & charging network",
              locations: [
                {
                  name: "Ather Energy Service Center — Tinkune",
                  kind: "Service Center",
                  address: "Tinkune, Kathmandu",
                  phone: "9851356195",
                  hours: "10:00 AM – 6:00 PM",
                },
                {
                  name: "Ather Energy Service Center — Sallaghari",
                  kind: "Service Center",
                  address: "Sallaghari, Bhaktapur",
                  phone: "9851356195",
                  hours: "10:00 AM – 6:00 PM",
                },
                {
                  name: "Ather Space Service Center — Satdobato",
                  kind: "Service Center",
                  address: "Satdobato, opposite Patan Industrial Estate",
                  phone: "9851356195",
                  hours: "10:00 AM – 6:00 PM",
                },
                {
                  name: "Ather Energy Service Center — Chitwan",
                  kind: "Service Center",
                  address: "Astha Chowk, Chitwan",
                  phone: "9869308240",
                  hours: "10:00 AM – 6:00 PM",
                },
                {
                  name: "Ather Energy Service Center — Pokhara",
                  kind: "Service Center",
                  address: "Near Pokhara Industrial Estate",
                  phone: "9856007979",
                  hours: "10:00 AM – 6:00 PM",
                },
                {
                  name: "Ather Energy Service Center — Butwal",
                  kind: "Service Center",
                  address: "Kalikanagar, Butwal",
                  phone: "9851402391",
                  hours: "10:00 AM – 6:00 PM",
                },
                {
                  name: "Ather Energy Service Center — Itahari",
                  kind: "Service Center",
                  address: "Kheti Khola, Paschim Line, Itahari",
                  phone: "9851406109",
                  hours: "10:00 AM – 6:00 PM",
                },
                {
                  name: "Ather Energy Service Center — Janakpur",
                  kind: "Service Center",
                  address: "Mills Area, Janakpur-11, Madhesh Pradesh",
                  phone: "985-4086430",
                  hours: "10:00 AM – 6:00 PM",
                },
                {
                  name: "Ather Service Center — Birtamod",
                  kind: "Service Center",
                  address: "Ram Chowk, Birtamod",
                  phone: "984-0068644",
                  hours: "10:00 AM – 6:00 PM",
                },
                {
                  name: "Ather Space Experience Center — Naxal",
                  kind: "Experience Center",
                  address: "Naxal, Kathmandu",
                  phone: "9851354103",
                  hours: "Open 24 / 7",
                },
                {
                  name: "Ather Space Experience Center — Jhamsikhel",
                  kind: "Experience Center",
                  address: "Square Hotel, Jhamsikhel",
                  phone: "9851354103",
                  hours: "Open 24 / 7",
                },
                {
                  name: "AirCharge Charging Station — Satdobato",
                  kind: "Charging Station",
                  address: "Satdobato, Lalitpur",
                  phone: "9851354103",
                  hours: "Open 24 / 7",
                },
                {
                  name: "Charging Station — Kalanki",
                  kind: "Charging Station",
                  address: "Bhat-Bhateni, Kalanki",
                  phone: "9851354103",
                  hours: "7:00 AM – 8:00 PM",
                },
              ],
            },
          },
          {
            slug: "ultraviolette",
            mark: "UV",
            name: "Ultraviolette",
            role: "Electric motorcycles — India",
            description:
              "High-performance electric motorcycles from India — the flagship F77, launched through the UV Space Pod in Naxal.",
            detail: {
              established: "Launched in Nepal · January 2026",
              origin: "Ultraviolette — India",
              intro: [
                "Ultraviolette is a high-performance electric motorcycle brand from India, recognised for its performance-focused mobility technology, next-generation design, and advanced engineering. In Nepal, Ultraviolette launched in January 2026 under the VOITH Organization group through its EV and mobility division, Vaidya Energy.",
                "The brand's first experience centre — the UV Space Pod — was inaugurated in Naxal, Kathmandu, marking its entry into Nepal's premium electric-motorcycle category. Its fully electric platform delivers zero-emission performance, contributing to cleaner, more eco-friendly mobility in Nepal.",
              ],
              lineupLabel: "Models available in Nepal",
              lineup: [
                { category: "Electric motorcycle", items: ["Ultraviolette F77"] },
              ],
              locationsLabel: "Experience centre",
              locations: [
                {
                  name: "UV Space Pod — Naxal",
                  kind: "Experience Centre",
                  address: "Narayanchaur, Naxal, Kathmandu 44600, Nepal",
                  phone: "9851404609",
                  email: "ultraviolettenepal@gmail.com",
                },
              ],
            },
          },
        ],
      },
    ],
    highlights: [
      {
        title: "Kathmandu to Kailash — 2024",
        description:
          "Nepal's first long-distance EV journey took Ather scooters from Kathmandu to Kailash Manasarovar, proving electric mobility in the Himalayas.",
      },
      {
        title: "Toyota Women's Rally — since 2004",
        description:
          "Nepal's pioneering women-focused motorsport initiative, celebrating two decades of confidence behind the wheel.",
      },
      {
        title: "50 Years of Toyota in Nepal",
        description:
          "Marked in 2017 with the inauguration of a new state-of-the-art 3S facility at VOITH Complex, Dhumbarahi.",
      },
    ],
    closing:
      "From tiger taxis in 1960s Kathmandu to electric scooters charging across the country today — mobility is how VOITH meets every generation.",
  },
  construction: {
    slug: "construction",
    label: "Construction",
    letter: "C",
    color: "#1D6DB5",
    eyebrow: "Sector 02",
    title: "Building Nepal's foundations",
    description:
      "From limestone quarries in Nuwakot to Nepal's largest cement plant — a USD 250M joint venture with the world leader Huaxin Cement.",
    stat: "4,000",
    statLabel: "Tons per day capacity",
    heroImage: "/timeline/home2.png",
    intro:
      "Nepal's construction sector contributes about 10–11% of GDP and uses roughly 35% of the national budget, employing millions as the country advances rapid infrastructure development. VOITH's construction arm is anchored by Huaxin Cement Narayani — Nepal's largest cement facility — and the Tadi group: Tadi Cement & Lime Industries and Tadi Mining & Construction, supplying limestone and minerals from Nuwakot for highways, housing, hydropower, and the next decade of build-out.",
    stats: [
      { value: "USD 250M", label: "Total investment" },
      { value: "4,000 t/day", label: "Current capacity" },
      { value: "~1,000", label: "Direct employees" },
      { value: "May 2022", label: "Production began" },
    ],
    brands: [
      {
        slug: "huaxin-narayani-cement",
        mark: "HN",
        name: "Huaxin Cement Narayani",
        role: "Joint venture with Huaxin Cement Co., Ltd. · Est. 2022",
        image: "/brands/huaxin-cement-narayani.png",
        description:
          "VOITH's cement venture with one of the world's top cement companies — a USD 250M state-of-the-art plant between Kathmandu and Pokhara, producing 4,000 tons per day with plans to expand to 6,000.",
        detail: {
          established: "Production commenced · May 2022",
          origin: "Joint venture — Huaxin Cement Co., Ltd., China",
          intro: [
            "VOITH has ventured into cement production with the world's top cement company — Huaxin Cement Co. Ltd. The total investment in the project in Nepal is USD 250 million. Production commenced in May 2022.",
            "The state-of-the-art plant has been designed with sustainability and growth in mind, and has drastically improved the quality of life in the geographic region around it.",
            "The plant is located between two populous cities, Kathmandu and Pokhara, and has a production capacity of 4,000 tons a day — with plans to expand to 6,000 tons in the future. It directly employs around 1,000 personnel.",
          ],
        },
      },
      {
        slug: "tadi-cement-lime-industries",
        mark: "TC",
        name: "Tadi Cement & Lime Industries",
        role: "Limestone mining & supply · Est. 2019",
        description:
          "TCLI is a limestone mining and supplier company established in 2019. The quarry at Suryagadhi Rural Municipality-05, Nuwakot spans 1.66 hectares, producing 200 tons per day across 270 working days per annum.",
        detail: {
          established: "Established · 2019 A.D.",
          origin: "Limestone quarry — Suryagadhi, Nuwakot",
          intro: [
            "Tadi Cement & Lime Industries (TCLI) is a limestone mining and supplier company established in 2019 A.D. The mine is located in Suryagadhi Rural Municipality-05, Nuwakot with a 1.66 ha. quarry area.",
            "Limestone production at the quarry site is 200 tons per day for 270 working days per annum — supplying the raw material backbone for Huaxin Cement Narayani and Nepal's growing infrastructure pipeline.",
          ],
        },
      },
      {
        slug: "tadi-mining-construction",
        mark: "TM",
        name: "Tadi Mining & Construction",
        role: "Mineral mining & treatment · Est. 2019",
        description:
          "TMCC is a sister company of TCLI, established in 2019. It focuses on the mining, purification, and treatment of natural minerals such as limestone, sandstone, and marbles.",
        detail: {
          established: "Established · 2019 A.D.",
          origin: "Sister company — Tadi Cement & Lime Industries",
          intro: [
            "Tadi Mining & Construction (TMCC) is a sister company of TCLI established in 2019 A.D.",
            "TMCC focuses on the mining, purification, and treatment of natural minerals such as limestone, sandstone, and marbles — extending VOITH's upstream control from raw extraction through processed material ready for construction.",
          ],
        },
      },
    ],
    highlights: [
      {
        title: "Largest cement plant in Nepal",
        description:
          "4,000 tons per day today, with a planned expansion to 6,000 tons — supplying housing, hydropower, and highway construction at industrial scale.",
      },
      {
        title: "Between Kathmandu and Pokhara",
        description:
          "Strategically located between Nepal's two most populous cities, the plant directly employs around 1,000 personnel and has transformed quality of life in the surrounding region.",
      },
      {
        title: "Sustainability at scale",
        description:
          "A USD 250M partnership with Huaxin Cement Co. Ltd. brings global engineering standards to a state-of-the-art facility designed for long-term growth and environmental responsibility.",
      },
    ],
    closing:
      "Cement is rarely glamorous — but it is the literal foundation of a developing economy. VOITH chose to invest at the largest possible scale, with the most credible partner, to do it right.",
  },
  hospitality: {
    slug: "hospitality",
    label: "Hospitality",
    letter: "H",
    color: "#B45309",
    eyebrow: "Sector 03",
    title: "Where guests become family",
    description:
      "The most luxurious all-inclusive premium resort in the spiritual Himalayas of Nepal — where guests depart as friends and return as family.",
    stat: "1",
    statLabel: "Flagship resort coming soon",
    heroImage: "/timeline/homepage.jpg",
    intro:
      "Hospitality is VOITH's next chapter. Sasvata Wellness Resort is an all-inclusive premium destination set in the spiritual landscape of the Himalayas — a sanctuary built around wellness, culture, and the conviction that hospitality is, at its core, a relationship.",
    stats: [
      { value: "Premium", label: "All-inclusive positioning" },
      { value: "Himalayas", label: "Spiritual setting" },
      { value: "Upcoming", label: "Opening soon" },
      { value: "Wellness", label: "Core experience" },
    ],
    brands: [
      {
        slug: "sasvata-wellness-resort",
        mark: "SW",
        name: "Sasvata Wellness Resort",
        role: "Upcoming flagship — Himalayan Nepal",
        image: "/brands/sasvata-wellness-resort.png",
        description:
          "A premium all-inclusive resort designed around wellness, culture, and the spiritual presence of the Himalayas. Built for guests who want depth as well as luxury — and who VOITH hopes will return again and again as friends.",
      },
    ],
    highlights: [
      {
        title: "All-inclusive premium",
        description:
          "Every element of the stay — wellness, dining, experiences, mountain access — designed and delivered under one roof, without the upsell.",
      },
      {
        title: "Spiritual Himalayan setting",
        description:
          "Sasvata draws on the cultural and natural heart of Nepal, locating the experience in landscapes that have drawn pilgrims and travellers for centuries.",
      },
      {
        title: "Guests as family",
        description:
          "The operating philosophy: hospitality is a relationship, not a transaction. The measure of success is how many guests return.",
      },
    ],
    closing:
      "Sasvata is more than VOITH's first hospitality property — it is a statement about how Nepal can host the world.",
  },
  diversified: {
    slug: "diversified",
    label: "Other Industries",
    letter: "I",
    color: "#6B21A8",
    eyebrow: "Sector 04",
    title: "Diversified services for Nepal",
    description:
      "Micro-credit empowering millions of Nepali women, one of Nepal's largest insurance companies, and a boutique automotive workshop — diversified industrial and financial services across the country.",
    stat: "3",
    statLabel: "Service businesses",
    heroImage: "/timeline/home2.png",
    intro:
      "Beyond mobility, construction, and hospitality, VOITH operates a portfolio of diversified industrial and financial services that quietly reach millions of Nepali households — through micro-credit, insurance, and specialised automotive care.",
    stats: [
      { value: "Millions", label: "Women served by micro-credit" },
      { value: "Top 5", label: "Insurance presence in Nepal" },
      { value: "Boutique", label: "Automotive workshop" },
      { value: "Nationwide", label: "Combined footprint" },
    ],
    brands: [
      {
        slug: "wean-nepal",
        mark: "WN",
        name: "WEAN Nepal",
        role: "Women's Entrepreneurship Association — micro-credit",
        description:
          "A micro-credit institution focused on financial inclusion for Nepali women. Small loans, large outcomes — capital that fuels small businesses, education, and household resilience in communities banks rarely reach.",
      },
      {
        slug: "lumbini-insurance",
        mark: "LI",
        name: "Lumbini Insurance",
        role: "One of Nepal's largest insurance companies",
        description:
          "A diversified insurer with broad reach across Nepal, protecting households, businesses, and assets. A long-standing pillar of the country's financial-services landscape.",
      },
      {
        slug: "pitstop",
        mark: "PS",
        name: "Pitstop",
        role: "Boutique automotive workshop",
        description:
          "A specialised service workshop bringing dealership-grade automotive care to independent owners — the same engineering culture that runs through UTS, applied at boutique scale.",
        detail: {
          established: "Established · August 2021",
          origin: "Pitstop Incorporated — Kathmandu, Nepal",
          intro: [
            "Pitstop Incorporated is a specialised automotive care and service provider under the VOITH Organization group. Established in August 2021, it was created to strengthen VOITH's presence in Nepal's automotive after-sales and service sector.",
            "Operating a modern boutique workshop equipped with advanced automotive care and restoration facilities, Pitstop focuses on excellence, accuracy, and customer delight — delivering responsive after-sales support and maintaining high standards of automotive care across its operations.",
          ],
          services: [
            "Vehicle servicing and maintenance",
            "Detailing and coating services",
            "Paint Protection Film (PPF) application",
            "Vinyl wrapping",
            "Denting, painting, and restoration",
            "Modification and fabrication",
            "Universal automotive accessories",
          ],
          locationsLabel: "Workshop",
          locations: [
            {
              name: "Pitstop Incorporated — Dhumbarahi",
              kind: "Boutique Workshop",
              address: "Anandanagar, Dhumbarahi, Kathmandu 44600, Nepal",
              phone: "+977 981-6050907",
              email: "pitstopnepal@gmail.com",
            },
          ],
        },
      },
    ],
    highlights: [
      {
        title: "Financial inclusion at scale",
        description:
          "WEAN extends credit and confidence to Nepali women excluded from formal banking — one of the most concrete forms of long-term economic impact VOITH operates.",
      },
      {
        title: "Insurance as infrastructure",
        description:
          "Lumbini Insurance gives Nepali families and small businesses access to risk protection that underpins everything from home ownership to enterprise.",
      },
      {
        title: "Care for every vehicle",
        description:
          "Pitstop extends VOITH's service ethos beyond Toyota — boutique automotive expertise available to any Nepali vehicle owner.",
      },
    ],
    closing:
      "These three businesses don't share a sector — but they share a thesis: building services that quietly carry the weight of everyday Nepali life.",
  },
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
export function allCompanyParams(): Array<{ slug: SectorSlug; company: string }> {
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

export type HeroItem = { title: string; sub: string; href: string };

export const heroItems: HeroItem[] = [
  {
    title: "United Traders Syndicate",
    sub: "Toyota Nepal · Est. 1967 · Revenue NPR 633 Cr",
    href: routes.industries,
  },
  {
    title: "Vaidya Energy",
    sub: "Nepal's #1 EV Scooter · Ather Energy",
    href: routes.industries,
  },
  {
    title: "Huaxin Cement Narayani",
    sub: "4,000 t/day · ~1,000 employees · USD 250M",
    href: routes.industries,
  },
];

export type Feature = { label: string; value: string; icon: "people" | "growth" };

export const features: Feature[] = [
  { label: "Employed", value: "2000+", icon: "people" },
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
    sub: "UTS · Vaidya Energy · 2-Wheeler · UHEEM",
    description:
      "From Toyota to Ather EV, from Italian motorcycles to construction equipment — Nepal's most complete mobility portfolio, serving every segment of the market.",
    image: "/timeline/homepage.jpg",
  },
  {
    letter: "C",
    color: "#1D6DB5",
    category: "Construction",
    sub: "Huaxin Narayani · TCLI · TMCC",
    description:
      "From limestone quarries in Nuwakot to Nepal's largest cement plant — 4,000 tons per day, a USD 250M joint venture with world leader Huaxin Cement.",
    image: "/sectors/construction.jpg",
  },
  {
    letter: "H",
    color: "#B45309",
    category: "Hospitality",
    sub: "Sasvata Wellness Resort",
    description:
      "The most luxurious all-inclusive premium resort in the spiritual Himalayas of Nepal — where guests depart as friends and return as family.",
    image: "/sectors/hospitality.jpg",
  },
  {
    letter: "I",
    color: "#6B21A8",
    category: "Other Industries",
    sub: "WEAN Nepal · Lumbini Insurance · Pitstop",
    description:
      "Micro-credit empowering millions of Nepali women, one of Nepal's largest insurance companies, and a boutique automotive workshop — diversified industrial and financial services across Nepal.",
    image: "/sectors/other_industries.webp",
  },
];

export type Milestone = { date: string; title: string; description: string };

export const milestones: Milestone[] = [
  {
    date: "December 2025",
    title: "Benelli & Morbidelli Signed",
    description:
      "Italian heritage motorcycle brands officially enter Nepal under VOITH's expanding two-wheeler division — building toward local assembly.",
  },
  {
    date: "August 2024",
    title: "Ather Wins Best Stall at NADA",
    description:
      "Vaidya Energy's Ather EV takes Best Stall at Nepal's premier auto show — cementing its position as Nepal's No. 1 electric scooter brand.",
  },
  {
    date: "2024",
    title: "Kathmandu to Kailash — EV Journey",
    description:
      "Nepal's first long-distance EV journey from Kathmandu to Kailash Manasarovar, showcasing the capability of electric mobility in the Himalayas.",
  },
  {
    date: "May 2022",
    title: "Huaxin Cement Narayani Begins",
    description:
      "VOITH ventures into cement with Huaxin Cement Co. Ltd. — USD 250M investment, production from May 2022 at 4,000 tons per day between Kathmandu and Pokhara, employing around 1,000 personnel.",
  },
];

export type StoryMilestone = {
  year: string;
  chipLabel: string;
  topic: string;
  body: string;
  image: string;
  /** CSS object-position / background-position for image framing in timeline cards */
  imagePosition?: string;
};

/** VOITH Profile 2026 — Our History timeline (Canva pages 8–9, 1960–2025). */
export const storyMilestones: StoryMilestone[] = [
  {
    year: "1960",
    chipLabel: "1960",
    topic: "Tiger Taxi in Nepal",
    body: "In the late 1960s, Kathmandu embraced modern mobility with the iconic “tiger taxis.” As private ownership grew, drivers shifted to new vehicles, and Toyota emerged as the trusted brand, shaping Nepal’s automotive legacy.",
    image: "/timeline/1960-tiger-taxi.png",
    imagePosition: "center 62%",
  },
  {
    year: "1967",
    chipLabel: "1967",
    topic: "Ties that Bind",
    body: "The beginning of an enduring UTS–Toyota partnership, symbolized by a historic handshake and later honored through cultural exchange — a legacy of trust, respect, and long-term collaboration.",
    image: "/timeline/1967-ties-that-bind.png",
    imagePosition: "center 30%",
  },
  {
    year: "1970",
    chipLabel: "1970",
    topic: "Little Things We Do",
    body: "At VOITH, sustainability is a collective commitment. Every month, team members come together to clean, green, and protect public spaces, contributing to a cleaner and more sustainable Nepal.",
    image: "/timeline/1970-little-things.png",
    imagePosition: "center 45%",
  },
  {
    year: "1975",
    chipLabel: "1975",
    topic: "King Birendra Coronation",
    body: "During the coronation of King Birendra, Toyota Nepal (United Traders Syndicate) proudly supplied VIP vehicles for the royal ceremony, showcasing Toyota’s reliability and prestige at a historic national event.",
    image: "/timeline/1975-coronation.png",
    imagePosition: "center 50%",
  },
  {
    year: "1978",
    chipLabel: "1978",
    topic: "Kathmandu to Calcutta",
    body: "United Traders Syndicate organized a historic Kathmandu–Calcutta motor rally with the Toyota Celica, symbolizing cross-border friendship, regional connectivity, and confidence in reliable mobility — led personally by the Chairman.",
    image: "/timeline/1978-kathmandu-calcutta.png",
    imagePosition: "center 45%",
  },
  {
    year: "1979",
    chipLabel: "1979",
    topic: "Red Cross Ambulance",
    body: "United Traders Syndicate donated two fully equipped Toyota ambulances to the Nepal Red Cross Society and Pariwar Niyojan Nepal, reinforcing its commitment to accessible and timely healthcare for communities across Nepal.",
    image: "/timeline/1979-red-cross.png",
    imagePosition: "center 22%",
  },
  {
    year: "1987",
    chipLabel: "1987",
    topic: "Hockey Game",
    body: "United Traders Syndicate organized friendly hockey and basketball matches to promote youth engagement, healthy lifestyles, and teamwork, fostering unity and sportsmanship among young people.",
    image: "/timeline/1987-hockey.png",
    imagePosition: "center 45%",
  },
  {
    year: "1991",
    chipLabel: "1991",
    topic: "Mahindra MOU Signed",
    body: "United Traders Syndicate signed an official memorandum of understanding with Mahindra, expanding VOITH’s mobility portfolio and strengthening its role in Nepal’s automotive market.",
    image: "/timeline/1991-mahindra.png",
    imagePosition: "center center",
  },
  {
    year: "2000",
    chipLabel: "2000",
    topic: "Dr. Shoichiro Toyoda’s Landmark Visit to Nepal",
    body: "United Traders Syndicate was honored to host Dr. Shoichiro Toyoda in Nepal, marking a historic visit that celebrated cultural exchange, leadership ties, and a shared commitment to sustainability.",
    image: "/timeline/2000-toyoda-visit.png",
    imagePosition: "center 30%",
  },
  {
    year: "2003",
    chipLabel: "2003",
    topic: "Guranse Tea Factory Established",
    body: "VOITH established the Guranse Tea factory, supporting Nepal’s tea industry and creating opportunities for rural communities in the eastern hills.",
    image: "/timeline/2003-guranse-tea.png",
    imagePosition: "center 40%",
  },
  {
    year: "2004",
    chipLabel: "2004 · Rally",
    topic: "Women’s Rally",
    body: "Launched in 2004, the Toyota Women’s Rally is Nepal’s pioneering women-focused motorsport initiative, celebrating women’s confidence, skill, and independence — a powerful symbol of empowerment on the road and in life.",
    image: "/timeline/2004-womens-rally.png",
    imagePosition: "center 35%",
  },
  {
    year: "2004",
    chipLabel: "2004 · Art",
    topic: "Dream Car Art Contest",
    body: "Launched in 2004, the Toyota Dream Car Art Contest inspires children to imagine the future of mobility through creativity and art, encouraging young minds to dream big and think beyond boundaries.",
    image: "/timeline/2004-dream-car.png",
    imagePosition: "center center",
  },
  {
    year: "2005",
    chipLabel: "2005",
    topic: "VOITH’s Legacy in Uplifting Sports",
    body: "VOITH has played a pioneering role in strengthening Nepal’s sports ecosystem, driven by a deep belief in the power of sports to inspire excellence and uplift communities. Under the leadership of Chairman Vaidya, a former college cricket captain, VOITH has consistently supported athletes, infrastructure, and major sporting events across decades.",
    image: "/timeline/2005-sports-legacy.png",
    imagePosition: "center 25%",
  },
  {
    year: "2006",
    chipLabel: "2006",
    topic: "Subaru Official MOU Signed",
    body: "VOITH signed an official memorandum of understanding with Subaru, adding another trusted global automotive brand to its portfolio in Nepal.",
    image: "/timeline/2006-subaru-mou.png",
    imagePosition: "center center",
  },
  {
    year: "2007",
    chipLabel: "2007",
    topic: "ViZu Poultry",
    body: "ViZu poultry was established as part of VOITH’s diversified ventures, reflecting the group’s investment in agriculture and food security for Nepal.",
    image: "/timeline/2007-vizu-poultry.png",
    imagePosition: "center 35%",
  },
  {
    year: "2017",
    chipLabel: "2017",
    topic: "50 Years in Nepal",
    body: "Marking 50 years in Nepal, UTS celebrated this milestone with the inauguration of Toyota’s new state-of-the-art 3S (Sales, Service, Spare) facility at the newly constructed VOITH Complex, Dhumbarahi, Kathmandu — reaffirming Toyota’s long-standing commitment to quality, innovation, and customer trust.",
    image: "/timeline/2017-50-years.png",
    imagePosition: "center 30%",
  },
  {
    year: "2019",
    chipLabel: "2019 · Rally",
    topic: "Rush to Mustang",
    body: "UTS organized the “Rush to Mustang” rally, where a convoy of Toyota Rush SUVs conquered rugged terrain from Kathmandu to Mustang, showcasing off-road capability and reliability — and driving strong public response and bookings.",
    image: "/timeline/2019-rush-mustang.png",
    imagePosition: "center 45%",
  },
  {
    year: "2019",
    chipLabel: "2019 · UHEEM",
    topic: "UHEEM Brand Officially Launched in Nepal",
    body: "The UHEEM brand was officially launched in Nepal, bringing XCMG heavy equipment and construction machinery to the country’s growing infrastructure sector.",
    image: "/timeline/2019-uheem-launch.png",
    imagePosition: "center 45%",
  },
  {
    year: "2021",
    chipLabel: "2021",
    topic: "Football Sponsorship",
    body: "Toyota Nepal’s football sponsorship underscored the company’s dedication to supporting local sports initiatives and promoting healthy, active lifestyles.",
    image: "/timeline/2021-football.png",
    imagePosition: "center 30%",
  },
  {
    year: "2022",
    chipLabel: "2022",
    topic: "Huaxin Cement Narayani Started",
    body: "VOITH ventured into cement production with Huaxin Cement Co. Ltd. — a USD 250M state-of-the-art plant between Kathmandu and Pokhara. Production commenced in May 2022 at 4,000 tons per day, with plans to expand to 6,000 tons, directly employing around 1,000 personnel.",
    image: "/timeline/2022-huaxin-cement.png",
    imagePosition: "center 45%",
  },
  {
    year: "2023",
    chipLabel: "2023",
    topic: "Launch of Ather",
    body: "Vaidya Energy launched Ather Energy as the sole authorised distributor in Nepal, marking VOITH’s entry into the country’s electric two-wheeler market.",
    image: "/timeline/2023-ather-launch.png",
    imagePosition: "center 25%",
  },
  {
    year: "2024",
    chipLabel: "2024",
    topic: "Start Your Impossible",
    body: "This collaboration marked a milestone, making Nabita the first Nepali athlete to join Toyota’s Global Team Toyota Athletes (GTTA), a program celebrating over 200 athletes worldwide who excel in sports and community impact.",
    image: "/timeline/2024-start-impossible.png",
    imagePosition: "center 35%",
  },
  {
    year: "2024",
    chipLabel: "Aug 2024",
    topic: "Ather Won Best Stall at NADA Auto Show",
    body: "Vaidya Energy’s Ather EV took Best Stall at Nepal’s premier auto show — cementing its position as Nepal’s No. 1 electric scooter brand.",
    image: "/timeline/2024-ather-nada.png",
    imagePosition: "center 40%",
  },
  {
    year: "2025",
    chipLabel: "2025",
    topic: "Kathmandu to Kailash Manasarovar",
    body: "From Kathmandu to Kailash Mansarovar, 19 Toyota vehicles and 62 passionate explorers embarked on a spiritual journey — a celebration of purpose, exploration, and the joy of the drive.",
    image: "/timeline/2025-kailash.png",
    imagePosition: "center 55%",
  },
  {
    year: "2025",
    chipLabel: "Dec 2025",
    topic: "Benelli and Morbidelli Signed",
    body: "In December 2025, Italian heritage motorcycle brands Benelli and Morbidelli officially entered Nepal under VOITH’s expanding two-wheeler division — building toward local assembly.",
    image: "/timeline/2025-benelli-morbidelli.png",
    imagePosition: "center center",
  },
];

export type FamilyMember = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  full?: boolean;
};

export const family: FamilyMember[] = [
  {
    initials: "VGV",
    name: "Dr. Vijaya Gajananda Vaidya",
    role: "Founder & Late Chairman",
    bio: "A pioneering entrepreneur who founded a small business at 34 that grew into Nepal's leading business conglomerate. Became an authorized Toyota dealer in 1968 and formally founded Vaidya's Organization in 1981. Honorary Consul of the Philippines. Dr. Vaidya sold 353 cars in his very first year against a target of six — that relentless drive remains the company's defining character.",
    full: true,
  },
  {
    initials: "SV",
    name: "Suraj Vaidya",
    role: "Chairman",
    bio: "Promoter of economic growth. Former President of SAARC Chamber of Commerce & Industry and FNCCI. Advisor to the Prime Minister's Economic Council. Recipient of Jana Sewa Shree — one of Nepal's highest civilian honours. Honorary Consul General of the Philippines.",
  },
  {
    initials: "RSV",
    name: "Ritu Singh Vaidya",
    role: "Managing Director",
    bio: "Miss India 1991. First runner-up Miss World. President of NAIMA — Nepal Automotive Importers and Manufacturers Association. The only woman shark on Shark Tank Nepal. Past President of Young Presidents' Organisation (YPO).",
  },
  {
    initials: "SuV",
    name: "Suryansh Vaidya",
    role: "CEO, Vaidya Energy · Strategic Growth Director",
    bio: "Driving Nepal's EV transition as CEO of Vaidya Energy — sole authorised Ather Energy distributor. Ather won Best Stall at NADA 2024. Finalising new EV partnerships and expanding the two-wheeler portfolio. Honorary Consul General of the Philippines in Nepal.",
  },
];

export type PersonCard = {
  initials: string;
  name: string;
  role: string;
  badge?: string;
  image?: string;
  bio?: string;
};

export type FamilyTeam = {
  business: string;
  unit: string;
  description: string;
  members: PersonCard[];
};

export type FamilyStat = { value: string; label: string };

export const executiveTeam: PersonCard[] = [
  {
    initials: "SV",
    name: "Suraj Vaidya",
    role: "Chairman & Group CEO",
    image: "/SurajSir.JPG",
    bio: "Promoter of economic growth. Former President of SAARC Chamber of Commerce & Industry and FNCCI. Advisor to the Prime Minister's Economic Council. Recipient of Jana Sewa Shree — one of Nepal's highest civilian honours. Honorary Consul General of the Philippines. Leads VOITH's group strategy across mobility, construction, hospitality and diversified services.",
  },
  {
    initials: "RSV",
    name: "Ritu Singh Vaidya",
    role: "Managing Director",
    image: "/RituMam.JPG",
    bio: "Miss India 1991 and First runner-up Miss World. President of NAIMA — Nepal Automotive Importers and Manufacturers Association. The only woman shark on Shark Tank Nepal. Past President of Young Presidents' Organisation (YPO). Drives operational excellence, brand and culture across VOITH's portfolio.",
  },
  {
    initials: "SuV",
    name: "Suryansh Vaidya",
    role: "CEO, Vaidya Energy · Strategic Growth Director",
    image: "/SuryanshSir.JPG",
    bio: "Driving Nepal's EV transition as CEO of Vaidya Energy — sole authorised Ather Energy distributor. Ather won Best Stall at NADA 2024. Finalising new EV partnerships and expanding the two-wheeler portfolio. Honorary Consul General of the Philippines in Nepal. Leads strategic growth initiatives across the next-generation VOITH portfolio.",
  },
];

export const boardOfDirectors: PersonCard[] = [
  {
    initials: "VGV",
    name: "Dr. Vijaya Gajananda Vaidya",
    role: "Founder & Late Chairman",
    badge: "In Memoriam",
  },
  {
    initials: "SV",
    name: "Suraj Vaidya",
    role: "Chairman of the Board",
  },
  {
    initials: "RSV",
    name: "Ritu Singh Vaidya",
    role: "Managing Director",
  },
  {
    initials: "SuV",
    name: "Suryansh Vaidya",
    role: "Director — Strategic Growth",
  },
  {
    initials: "RKA",
    name: "Rajendra K. Acharya",
    role: "Independent Director",
  },
  {
    initials: "SMR",
    name: "Saroj M. Rana",
    role: "Independent Director",
  },
];

export const voithFamilyStats: FamilyStat[] = [
  { value: "2,000+", label: "Team members" },
  { value: "4", label: "Core sectors" },
  { value: "10+", label: "Operating companies" },
  { value: "All 7", label: "Provinces served" },
];

export const voithFamily: FamilyTeam[] = [
  {
    business: "Mobility",
    unit: "United Traders Syndicate — Toyota Nepal",
    description:
      "Sales, service, and spare parts teams keeping Nepal's largest Toyota network running for over five decades.",
    members: [
      { initials: "AS", name: "Anil Shrestha", role: "Chief Operating Officer" },
      { initials: "BP", name: "Bishal Pandey", role: "Head of Sales" },
      { initials: "RT", name: "Rashmi Tamrakar", role: "Customer Experience Lead" },
      { initials: "DK", name: "Deepak Karki", role: "Head of After-Sales & Service" },
    ],
  },
  {
    business: "Mobility",
    unit: "Vaidya Energy — Ather & Two-Wheelers",
    description:
      "The team behind Nepal's #1 EV scooter brand, the Ather Grid charging network, and the growing two-wheeler portfolio.",
    members: [
      { initials: "NT", name: "Niraj Thapa", role: "Head of EV Operations" },
      { initials: "SM", name: "Sweta Maharjan", role: "Brand & Marketing Lead" },
      { initials: "PB", name: "Pratik Bhattarai", role: "Charging Network Manager" },
      { initials: "AKC", name: "Ashish K.C.", role: "Two-Wheeler Division Manager" },
    ],
  },
  {
    business: "Construction",
    unit: "Huaxin Cement Narayani · TCLI · TMCC",
    description:
      "Plant engineers, mining operators, and logistics crews running Huaxin Cement Narayani — around 1,000 personnel at 4,000 tons per day between Kathmandu and Pokhara.",
    members: [
      { initials: "RG", name: "Ramesh Gurung", role: "Plant General Manager" },
      { initials: "SP", name: "Sunita Pokharel", role: "Quality Assurance Lead" },
      { initials: "BL", name: "Bikash Lama", role: "Mining Operations — Nuwakot" },
      { initials: "MM", name: "Manoj Mahato", role: "Logistics & Distribution" },
    ],
  },
  {
    business: "Hospitality",
    unit: "Sasvata Wellness Resort",
    description:
      "The opening team building VOITH's flagship Himalayan resort — hospitality, wellness, culinary, and guest-experience leaders.",
    members: [
      { initials: "PA", name: "Pratiksha Adhikari", role: "General Manager — Opening Team" },
      { initials: "RJ", name: "Roshan Joshi", role: "Director of Wellness" },
      { initials: "ST", name: "Sajan Tuladhar", role: "Executive Chef" },
      { initials: "MR", name: "Maya Rai", role: "Guest Experience Lead" },
    ],
  },
  {
    business: "Other Industries",
    unit: "WEAN Nepal · Lumbini Insurance · Pitstop",
    description:
      "Field officers, underwriters, and workshop technicians delivering credit, insurance, and automotive care to Nepali households nationwide.",
    members: [
      { initials: "KS", name: "Kabita Shrestha", role: "WEAN — Field Operations Lead" },
      { initials: "DA", name: "Dipesh Acharya", role: "Lumbini Insurance — Head of Claims" },
      { initials: "BS", name: "Binita Subedi", role: "Lumbini Insurance — Underwriting" },
      { initials: "UR", name: "Umesh Rajbhandari", role: "Pitstop — Service Manager" },
    ],
  },
];

export type FutureItem = { pill: string; title: string; description: string };

export const futureItems: FutureItem[] = [
  {
    pill: "Hospitality — Upcoming",
    title: "Sasvata Wellness Resort",
    description:
      "The most luxurious all-inclusive premium resort in the spiritual Himalayas of Nepal — where guests depart as friends and return as family.",
  },
  {
    pill: "Electric Vehicles — 2026",
    title: "EV Portfolio Expansion",
    description:
      "New international EV distribution agreements in the final stages of completion — extending VOITH's commitment to clean mobility across Nepal.",
  },
  {
    pill: "Manufacturing — In Progress",
    title: "Nepal Motorcycle Assembly",
    description:
      "Not just selling motorcycles — but building them in Nepal. Local SKD assembly of Keeway, Benelli, Morbidelli, and QJ Motors to create technical expertise and economic value.",
  },
];

export type Testimonial = { quote: string; author: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "UTS is one of our most loyal and trustworthy partners. The company has long conducted its business under the maxim of \"customers first\" and has gained great trust from customers in Nepal.",
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
      "WWF Nepal is proud to have been a partner with VOITH in the \"Drive for Anti-Poaching\" — strengthening the conservation of rhinos in Chitwan National Park.",
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

export type FootprintBrand = {
  brand: string;
  color: string;
  category: "automotive" | "others";
  sales?: number;
  service?: number;
  others?: number | string;
  notes?: string;
};

export const footprintBrands: FootprintBrand[] = [
  { brand: "TOYOTA", color: "#EE2222", category: "automotive", sales: 8, service: 10, others: 0 },
  { brand: "ATHER", color: "#9BE0F0", category: "automotive", sales: 9, service: 8, others: "30 Ather Grid (Fast Chargers)" },
  { brand: "XCMG", color: "#7B3FB0", category: "automotive", sales: 5, service: 6, others: 0 },
  { brand: "Keeway GROUP", color: "#1D4F8E", category: "automotive", sales: 3, service: 6, others: 0 },
  { brand: "ULTRAVIOLETTE", color: "#3AB870", category: "automotive", sales: 1, service: 1, others: 0 },
  { brand: "HUAXIN", color: "#F5C842", category: "others", notes: "Factory and Mines" },
  { brand: "ŠASVATA", color: "#FFFFFF", category: "others", notes: "Flatlands to Mountains" },
];

export type FootprintMarker = {
  brand: string;
  city: string;
  lon: number;
  lat: number;
};

export const footprintMarkers: FootprintMarker[] = [
  // Kathmandu valley cluster (HQ region — concentrated brands)
  { brand: "TOYOTA", city: "Kathmandu — VOITH Complex", lon: 85.330, lat: 27.730 },
  { brand: "TOYOTA", city: "Kathmandu — Naxal", lon: 85.327, lat: 27.717 },
  { brand: "ATHER", city: "Kathmandu — Thapathali", lon: 85.319, lat: 27.694 },
  { brand: "ATHER", city: "Kathmandu — Naxal Grid", lon: 85.330, lat: 27.713 },
  { brand: "ATHER", city: "Lalitpur — Pulchowk", lon: 85.317, lat: 27.679 },
  { brand: "Keeway GROUP", city: "Kathmandu — Tinkune", lon: 85.348, lat: 27.687 },
  { brand: "XCMG", city: "Bhaktapur — Industrial Area", lon: 85.428, lat: 27.671 },
  { brand: "ULTRAVIOLETTE", city: "Kathmandu — Durbarmarg", lon: 85.320, lat: 27.713 },
  { brand: "ŠASVATA", city: "Kathmandu Valley HQ", lon: 85.310, lat: 27.700 },

  // Pokhara region
  { brand: "TOYOTA", city: "Pokhara", lon: 83.985, lat: 28.210 },
  { brand: "ATHER", city: "Pokhara", lon: 83.996, lat: 28.199 },
  { brand: "Keeway GROUP", city: "Pokhara", lon: 83.978, lat: 28.221 },
  { brand: "ATHER", city: "Damauli", lon: 84.276, lat: 27.962 },

  // Central Terai
  { brand: "TOYOTA", city: "Bharatpur (Chitwan)", lon: 84.433, lat: 27.683 },
  { brand: "ATHER", city: "Bharatpur", lon: 84.443, lat: 27.677 },
  { brand: "XCMG", city: "Bharatpur", lon: 84.450, lat: 27.690 },
  { brand: "TOYOTA", city: "Birgunj", lon: 84.880, lat: 27.010 },
  { brand: "XCMG", city: "Birgunj", lon: 84.872, lat: 27.020 },
  { brand: "TOYOTA", city: "Hetauda", lon: 85.040, lat: 27.420 },
  { brand: "ATHER", city: "Hetauda", lon: 85.045, lat: 27.427 },

  // Western Terai
  { brand: "TOYOTA", city: "Butwal", lon: 83.466, lat: 27.700 },
  { brand: "ATHER", city: "Butwal", lon: 83.476, lat: 27.708 },
  { brand: "Keeway GROUP", city: "Butwal", lon: 83.452, lat: 27.696 },
  { brand: "TOYOTA", city: "Tansen (Palpa)", lon: 83.550, lat: 27.866 },

  // Lumbini
  { brand: "TOYOTA", city: "Bhairahawa", lon: 83.450, lat: 27.500 },
  { brand: "ATHER", city: "Lumbini Corridor", lon: 83.280, lat: 27.490 },

  // Mid-West
  { brand: "TOYOTA", city: "Nepalgunj", lon: 81.616, lat: 28.050 },
  { brand: "XCMG", city: "Nepalgunj", lon: 81.625, lat: 28.060 },
  { brand: "TOYOTA", city: "Surkhet", lon: 81.626, lat: 28.602 },

  // Far-West
  { brand: "TOYOTA", city: "Dhangadhi", lon: 80.589, lat: 28.695 },
  { brand: "ATHER", city: "Dhangadhi", lon: 80.601, lat: 28.701 },
  { brand: "XCMG", city: "Mahendranagar", lon: 80.180, lat: 28.965 },

  // Eastern Terai
  { brand: "TOYOTA", city: "Biratnagar", lon: 87.270, lat: 26.450 },
  { brand: "ATHER", city: "Biratnagar", lon: 87.282, lat: 26.460 },
  { brand: "Keeway GROUP", city: "Biratnagar", lon: 87.263, lat: 26.440 },
  { brand: "TOYOTA", city: "Itahari", lon: 87.275, lat: 26.660 },
  { brand: "TOYOTA", city: "Janakpur", lon: 85.920, lat: 26.730 },
  { brand: "ATHER", city: "Janakpur", lon: 85.928, lat: 26.737 },
  { brand: "TOYOTA", city: "Damak (Jhapa)", lon: 87.700, lat: 26.660 },
  { brand: "ATHER", city: "Birtamod (Jhapa)", lon: 87.985, lat: 26.640 },

  // Plant & Mining (Huaxin) — yellow
  { brand: "HUAXIN", city: "Huaxin Cement Narayani — Nuwakot", lon: 85.168, lat: 27.910 },
  { brand: "HUAXIN", city: "TCLI Quarry — Suryagadhi, Nuwakot", lon: 85.134, lat: 27.943 },
];

export type ContactChannel = {
  label: string;
  description: string;
  email: string;
  phone?: string;
};

export const contactChannels: ContactChannel[] = [
  {
    label: "General inquiries",
    description:
      "Press, media, partnerships, or anything that doesn't fit another channel.",
    email: "info@voith.com.np",
    phone: "+977 1 442 0000",
  },
  {
    label: "Sales — Toyota Nepal (UTS)",
    description:
      "Vehicle purchase inquiries, test drives, fleet, and dealership appointments.",
    email: "sales@uts.com.np",
    phone: "+977 1 442 1967",
  },
  {
    label: "Vaidya Energy — Ather",
    description:
      "EV bookings, Ather Grid charging support, and two-wheeler distribution.",
    email: "hello@vaidyaenergy.com",
    phone: "+977 1 442 2024",
  },
  {
    label: "Partnerships & Investments",
    description:
      "Joint ventures, distribution rights, and corporate development conversations.",
    email: "partnerships@voith.com.np",
  },
];

export type ContactOffice = {
  city: string;
  role: string;
  addressLines: string[];
  hours: string;
};

export const contactOffices: ContactOffice[] = [
  {
    city: "Kathmandu — Head Office",
    role: "VOITH Complex",
    addressLines: [
      "VOITH Complex",
      "Ananda Nagar, Dhumbarahi",
      "P.O. BOX: 233/2640",
      "Kathmandu, Nepal",
    ],
    hours: "Sun – Fri · 09:00 – 18:00 NPT",
  },
  {
    city: "Nuwakot — Quarry & Plant",
    role: "TCLI · TMCC · Huaxin Cement Narayani",
    addressLines: [
      "Tadi Cement & Lime Industries",
      "Suryagadhi Rural Municipality-05",
      "Nuwakot District, Bagmati Province",
    ],
    hours: "Sun – Fri · 08:00 – 17:00 NPT",
  },
  {
    city: "Nationwide — Dealer Network",
    role: "UTS & Vaidya Energy",
    addressLines: [
      "Toyota dealerships and Ather experience centres",
      "across all seven provinces of Nepal",
      "30+ Ather Grid fast-chargers nationwide",
    ],
    hours: "Mon – Sat · 10:00 – 19:00 NPT",
  },
];

export const contactTopics = [
  "General inquiry",
  "Toyota / vehicle sales",
  "Ather / EV inquiry",
  "Construction & cement",
  "Hospitality (Sasvata)",
  "Partnerships / press",
  "Careers",
] as const;

/* ── Why Choose Us page ── */

export type WhyReason = {
  stat: string;
  title: string;
  description: string;
};

export const whyReasons: WhyReason[] = [
  {
    stat: "60+",
    title: "Six decades of trust",
    description:
      "Founded in 1964, VOITH has served Nepal across four generations — building a reputation for reliability that few institutions in the country can match.",
  },
  {
    stat: "4",
    title: "Four core sectors",
    description:
      "Mobility, construction, hospitality, and diversified services. A diversified portfolio that lets us weather change and invest for the long term.",
  },
  {
    stat: "15+",
    title: "World-class partners",
    description:
      "Toyota, Ather, Huaxin, Keeway, Benelli, XCMG and more — we bring global engineering and standards directly to Nepali customers.",
  },
  {
    stat: "2,000+",
    title: "People behind the promise",
    description:
      "Sales, service, plant, and field teams across all seven provinces — the everyday reason customers come back to VOITH.",
  },
  {
    stat: "#1",
    title: "Category leadership",
    description:
      "From Nepal's authorised Toyota dealer to the country's #1 electric scooter brand and its largest cement plant — we lead where we operate.",
  },
  {
    stat: "All 7",
    title: "Nationwide reach",
    description:
      "Dealerships, service centres, and 30+ Ather Grid fast-chargers spanning East to West Nepal, with the network still expanding.",
  },
];

export const whyChooseUsClosing =
  "Serving · Caring · Growing Together — the same maxim that guided a single Toyota dealership in 1964 now shapes every business VOITH operates.";

/* ── Legal page ── */

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const legalUpdated = "Last updated: 1 January 2026";

export const legalSections: LegalSection[] = [
  {
    id: "privacy",
    title: "Privacy Policy",
    paragraphs: [
      "This Privacy Policy explains how Vaidya's Organization of Industry & Trading Houses (\"VOITH\", \"we\", \"us\") collects, uses, and protects information you share with us through this website.",
      "We collect only the information you choose to provide — such as your name, email address, phone number, and message when you use our contact or inquiry forms. We use this information solely to respond to your request, provide the services you ask for, and improve our communication with you.",
      "We do not sell or rent your personal information. We may share it with the relevant VOITH business unit or an authorised brand partner strictly to fulfil your request, and only to the extent required to do so.",
      "You may ask us to access, correct, or delete the personal information we hold about you at any time by writing to info@voith.com.np.",
    ],
  },
  {
    id: "terms",
    title: "Terms of Use",
    paragraphs: [
      "By accessing this website you agree to use it for lawful purposes only and in a way that does not infringe the rights of, or restrict the use of this site by, any third party.",
      "The content on this website — including text, images, logos, and brand names — is provided for general information about VOITH and its businesses. Product details, figures, and availability may change without notice and do not constitute a binding offer.",
      "Trademarks and brand names referenced on this site (including those of our partners) remain the property of their respective owners and are used here for identification purposes only.",
      "VOITH reserves the right to modify or withdraw any part of this website at any time without liability.",
    ],
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    paragraphs: [
      "This website may use cookies and similar technologies to keep the site functioning, remember your preferences, and understand how visitors use our pages so we can improve them.",
      "Essential cookies are required for the site to work and cannot be switched off. Any analytics or preference cookies are used only in aggregate and never to identify you personally.",
      "You can control or delete cookies through your browser settings at any time. Disabling certain cookies may affect how parts of the site behave.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    paragraphs: [
      "The information on this website is provided in good faith and for general guidance only. While we make every effort to keep it accurate and current, we make no warranty as to its completeness or fitness for any particular purpose.",
      "Figures such as revenues, capacities, dates, and rankings are indicative and may be rounded or subject to revision. For confirmed, up-to-date details about any product, service, or business, please contact the relevant VOITH team directly.",
      "VOITH is not responsible for the content of any external website linked from this site.",
    ],
  },
];
