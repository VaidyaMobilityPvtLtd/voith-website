export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Industries", href: "#businesses" },
  { label: "History", href: "#history" },
  { label: "About", href: "#philosophy" },
  { label: "Leadership", href: "#family" },
  { label: "Future", href: "#future" },
];

export const topbarSectors = [
  "Mobility",
  "Agriculture",
  "Construction",
  "Finance",
  "Services",
] as const;

export type HeroItem = { title: string; sub: string; href: string };

export const heroItems: HeroItem[] = [
  {
    title: "United Traders Syndicate",
    sub: "Toyota Nepal · Est. 1967 · Revenue NPR 633 Cr",
    href: "#businesses",
  },
  {
    title: "Vaidya Energy",
    sub: "Nepal's #1 EV Scooter · Ather Energy",
    href: "#businesses",
  },
  {
    title: "Huaxin Narayani Cement",
    sub: "4,000 tons/day · USD 250M investment",
    href: "#businesses",
  },
];

export type Feature = { label: string; value: string; icon: "bars" | "people" | "growth" };

export const features: Feature[] = [
  { label: "Group Revenue", value: "NPR 708 Cr", icon: "bars" },
  { label: "Employed", value: "2000+", icon: "people" },
  { label: "Industries", value: "7 Sectors", icon: "growth" },
];

export type Business = {
  letter: string;
  color: string;
  category: string;
  sub: string;
  description: string;
};

export const businesses: Business[] = [
  {
    letter: "M",
    color: "#C41A1A",
    category: "Mobility",
    sub: "UTS · Vaidya Energy · 2-Wheeler · UHEEM",
    description:
      "From Toyota to Ather EV, from Italian motorcycles to construction equipment — Nepal's most complete mobility portfolio, serving every segment of the market.",
  },
  {
    letter: "C",
    color: "#1D6DB5",
    category: "Construction",
    sub: "Huaxin Narayani Cement · Tadi Cement & Mining",
    description:
      "From limestone quarries in Nuwakot to Nepal's largest cement plant — 4,000 tons per day, a USD 250M joint venture with world leader Huaxin Cement.",
  },
  {
    letter: "A",
    color: "#1B8A4A",
    category: "Agriculture",
    sub: "Guranse Tea · Vizu Poultry · Wellhope Agri-Tech",
    description:
      "200 hectares of premium Himalayan tea, 200,000 chicks per week, and one of Nepal's largest animal feed producers — rooted in Nepal's agricultural heartland.",
  },
  {
    letter: "F",
    color: "#6B21A8",
    category: "Finance & Services",
    sub: "WEAN Nepal · Lumbini Insurance · Pitstop",
    description:
      "Micro-credit empowering millions of Nepali women, one of Nepal's largest insurance companies, and a boutique automotive workshop born from the passion for vehicles.",
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
    title: "Huaxin Narayani Cement Begins",
    description:
      "Nepal's largest cement facility commences production — 4,000 tons per day with USD 250M joint investment with Huaxin Cement Co. Ltd.",
  },
];

export type Era = {
  title: string;
  entries: { year: string; description: string }[];
};

export const eras: Era[] = [
  {
    title: "Foundations\n1960s — 1980s",
    entries: [
      { year: "1962", description: "Tiger Taxi — Dr. Vaidya's first mobility venture in Nepal" },
      {
        year: "1967",
        description: "United Traders Syndicate established — among Nepal's first automotive distributors",
      },
      {
        year: "1968",
        description: "Authorized Toyota dealer. Dr. Vaidya sells 353 cars in year one against a target of six",
      },
      {
        year: "1981",
        description: "Vaidya's Organization of Industries & Trading Houses formally constituted",
      },
    ],
  },
  {
    title: "Growth\n1990s — 2010s",
    entries: [
      { year: "1991", description: "Mahindra MOU signed — expanding the automotive portfolio" },
      {
        year: "2000",
        description: "Dr. Shoichiro Toyoda's landmark visit — recognition of UTS global excellence",
      },
      {
        year: "2003",
        description: "Guranse Tea Estate factory established — 200 hectares of Himalayan premium tea",
      },
      { year: "2019", description: "UHEEM launched. Tadi Cement & Mining established in Nuwakot" },
    ],
  },
  {
    title: "Electric Era\n2022 — Now",
    entries: [
      {
        year: "2022",
        description: "Huaxin Narayani Cement begins — 4,000 tons/day, USD 250M investment",
      },
      { year: "2023", description: "Vaidya Energy launches Ather Energy — VOITH enters Nepal's EV era" },
      { year: "2024", description: "Ather wins Best Stall at NADA. Kathmandu to Kailash EV journey" },
      { year: "2025", description: "Benelli & Morbidelli signed — Italian heritage brands enter Nepal" },
    ],
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
      "Toyota, Ather, Huaxin, Keeway, Benelli, Morbidelli, XCMG, Wellhope and more — world leaders in every sector VOITH operates in.",
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
