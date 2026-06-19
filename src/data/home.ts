// Home page content: hero, features, founder spotlight, businesses, testimonials
// Part of the VOITH site content. Edit freely — re-exported via data/content.ts.

import { routes } from "./shared";

export type HeroItem = { title: string; sub: string; href: string };

export const heroItems: HeroItem[] = [
  {
    title: "United Traders Syndicate",
    sub: "Toyota · Keeway · Benelli · Morbidelli · Est. 1967",
    href: routes.industries,
  },
  {
    title: "Vaidya Energy",
    sub: "Nepal's #1 EV Scooter · Ather Energy",
    href: routes.industries,
  },
  {
    title: "UHEEM",
    sub: "XCMG construction equipment · Est. 2018",
    href: routes.industries,
  },
];

export type Feature = {
  label: string;
  value: string;
  icon: "people" | "growth";
};

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
    sub: "UTS · Trayana · Vaidya Energy · UHEEM",
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
    sub: "Sasvata Wildlife Resort · Himalayan Sasvata · Golden Thread",
    description:
      "VOITH Hospitality — a tribute to Nepal's timeless diversity. Three flagship destinations from the jungles of Chitwan to the gateway of Everest, turning natural and cultural heritage into world-class travel experiences.",
    image: "/sectors/hospitality.jpg",
  },
  {
    letter: "I",
    color: "#6B21A8",
    category: "Other Industries",
    sub: "WEAN · Lumbini · Pitstop · Philippines Consulate",
    description:
      "Micro-credit empowering millions of Nepali women, one of Nepal's largest insurance companies, a boutique automotive workshop, and the Honorary Consulate General of the Philippines — diversified services across Nepal.",
    image: "/sectors/other_industries.webp",
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
      'WWF Nepal is proud to have been a partner with VOITH in the "Drive for Anti-Poaching" — strengthening the conservation of rhinos in Chitwan National Park.',
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
