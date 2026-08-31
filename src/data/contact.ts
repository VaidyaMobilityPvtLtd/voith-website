// Contact page content: the group contact desk, offices, topics
// Part of the VOITH site content. Edit freely, re-exported via data/content.ts.

export type ContactEmail = {
  label: string;
  address: string;
};

export type ContactPhone = {
  label: string;
  number: string;
};

/** Single group-wide contact desk shown on the contact page. */
export const contactDirect = {
  emails: [
    { label: "General inquiries", address: "info@voith.com.np" },
    { label: "Toyota Nepal (UTS)", address: "uts@voith.com.np" },
    { label: "Vehicle Sales Department", address: "vsd@voith.com.np" },
  ] as ContactEmail[],
  phones: [{ label: "Reception", number: "+977 01-4008801" }] as ContactPhone[],
  /** Reception hours, rendered on two lines: days above, times below. */
  hoursDays: "Sun – Fri",
  hoursTime: "9 am – 6 pm NPT",
};

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
