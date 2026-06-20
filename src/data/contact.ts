// Contact page content: channels, offices, topics
// Part of the VOITH site content. Edit freely, re-exported via data/content.ts.

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
    label: "Sales, Toyota Nepal (UTS)",
    description:
      "Vehicle purchase inquiries, test drives, fleet, and dealership appointments.",
    email: "sales@uts.com.np",
    phone: "+977 1 442 1967",
  },
  {
    label: "Vaidya Energy, Ather",
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
    city: "Kathmandu, Head Office",
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
    city: "Nuwakot, Quarry & Plant",
    role: "TCLI · TMCC · Huaxin Cement Narayani",
    addressLines: [
      "Tadi Cement & Lime Industries",
      "Suryagadhi Rural Municipality-05",
      "Nuwakot District, Bagmati Province",
    ],
    hours: "Sun – Fri · 08:00 – 17:00 NPT",
  },
  {
    city: "Nationwide, Dealer Network",
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
