// People page content: family, board, VOITH family teams
// Part of the VOITH site content. Edit freely - re-exported via data/content.ts.

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
    bio: "A pioneering entrepreneur who founded a small business at 34 that grew into Nepal's leading business conglomerate. Became an authorized Toyota dealer in 1968 and formally founded Vaidya's Organization in 1981. Honorary Consul of the Philippines. Dr. Vaidya sold 353 cars in his very first year against a target of six. That relentless drive remains the company's defining character.",
    full: true,
  },
  {
    initials: "SV",
    name: "Suraj Vaidya",
    role: "President",
    bio: "Promoter of economic growth. Former President of SAARC Chamber of Commerce & Industry and FNCCI. Advisor to the Prime Minister's Economic Council. Recipient of Jana Sewa Shree, one of Nepal's highest civilian honours. Honorary Consul General of the Philippines.",
  },
  {
    initials: "RSV",
    name: "Ritu Singh Vaidya",
    role: "Managing Director",
    bio: "Miss India 1991. First runner-up Miss World. President of NAIMA, the Nepal Automotive Importers and Manufacturers Association. The only woman shark on Shark Tank Nepal. Past President of Young Presidents' Organisation (YPO).",
  },
  {
    initials: "SuV",
    name: "Suryansh Vaidya",
    role: "CEO, Vaidya Energy · Strategic Growth Director",
    bio: "Driving Nepal's EV transition as CEO of Vaidya Energy, sole authorised Ather Energy distributor. Ather won Best Stall at NADA 2024. Finalising new EV partnerships and expanding the two-wheeler portfolio. Honorary Consul General of the Philippines in Nepal.",
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

/**
 * The group's founder, featured on his own at the top of the people page,
 * ahead of the current management.
 */
export const founder: PersonCard = {
  initials: "VGV",
  name: "Dr. Vijaya Gajananda Vaidya",
  role: "Founder & Late Chairman",
  badge: "In Memoriam",
  image: "/dr-vaidya.png",
  bio: "A pioneering entrepreneur who founded a small business at 34 that grew into Nepal's leading business conglomerate. He became an authorised Toyota dealer in 1968 and formally founded Vaidya's Organization in 1981, later serving as Honorary Consul of the Philippines. In his very first year he sold 353 cars against a target of six. That relentless drive remains the company's defining character.",
};

/** Current leadership: the board of directors, without the founder. */
export const management: PersonCard[] = [
  {
    initials: "SV",
    name: "Suraj Vaidya",
    role: "President",
    image: "/SurajSir.JPG",
    bio: "Promoter of economic growth. Former President of SAARC Chamber of Commerce & Industry and FNCCI. Advisor to the Prime Minister's Economic Council. Recipient of Jana Sewa Shree, one of Nepal's highest civilian honours. Honorary Consul General of the Philippines. Leads VOITH's group strategy across mobility, construction, hospitality and diversified services.",
  },
  {
    initials: "RSV",
    name: "Ritu Singh Vaidya",
    role: "Managing Director",
    image: "/IMG1.png",
    bio: "Miss India 1991 and First runner-up Miss World. President of NAIMA, the Nepal Automotive Importers and Manufacturers Association. The only woman shark on Shark Tank Nepal. Past President of Young Presidents' Organisation (YPO). Drives operational excellence, brand and culture across VOITH's portfolio.",
  },
  {
    initials: "SVB",
    name: "Savanna Vaidya Basnyat",
    role: "Director, VOITH Hospitality",
    image: "/people/SavanaMam.png",
    bio: "Savanna is a seasoned hospitality professional with over 15 years of experience, known for her strategic approach to business development. With a deep focus on time, adaptation, and the human aspects that drive business success, she blends business acumen with a passion for the hospitality industry, expertise shaped by work with prestigious brands like Taj and spanning operations, development, and organisational growth. She is expanding VOITH's portfolio in the hospitality sector as the Founder of Sasvata Wildlife Resort and Himalayan Sasvata, focusing on innovative hotel-development projects that leverage Nepal's mega biodiversity.",
  },
  {
    initials: "SuV",
    name: "Suryansh Vaidya",
    role: "CEO, Vaidya Energy · Strategic Growth Director",
    image: "/SuryanshSir.JPG",
    bio: "Driving Nepal's EV transition as CEO of Vaidya Energy, sole authorised Ather Energy distributor. Ather won Best Stall at NADA 2024. Finalising new EV partnerships and expanding the two-wheeler portfolio. Honorary Consul General of the Philippines in Nepal. Leads strategic growth initiatives across the next-generation VOITH portfolio.",
  },
];

/** The full board, founder first. */
export const boardOfDirectors: PersonCard[] = [founder, ...management];


export const voithFamilyStats: FamilyStat[] = [
  { value: "2,000+", label: "Team members" },
  { value: "4", label: "Core sectors" },
  { value: "10+", label: "Operating companies" },
  { value: "All 7", label: "Provinces served" },
];

/** Fallback team groupings when the live employee directory is unavailable. */
export const voithFamily: FamilyTeam[] = [
  {
    business: "Mobility",
    unit: "United Traders Syndicate · Toyota Nepal",
    description:
      "Sales, service, and spare parts teams keeping Nepal's largest Toyota network running for over five decades.",
    members: [],
  },
  {
    business: "Mobility",
    unit: "Vaidya Energy · Ather Energy",
    description:
      "The team behind Nepal's leading EV scooter brand and the Ather Grid charging network.",
    members: [],
  },
  {
    business: "Mobility",
    unit: "Trayana · Ultraviolette",
    description:
      "The team launching Nepal's premium electric-motorcycle segment through the Ultraviolette partnership.",
    members: [],
  },
  {
    business: "Construction",
    unit: "Huaxin Cement Narayani · TCLI · TMCC",
    description:
      "Plant engineers, mining operators, and logistics crews running Huaxin Cement Narayani, with around 1,000 personnel at 4,000 tons per day between Kathmandu and Pokhara.",
    members: [],
  },
  {
    business: "Hospitality",
    unit: "VOITH Hospitality · Sasvata",
    description:
      "The opening team behind Sasvata Wildlife Resort in Chitwan and Himalayan Sasvata in the Everest region.",
    members: [],
  },
  {
    business: "Other Industries",
    unit: "WEAN Nepal · Lumbini Insurance · Pitstop · Philippines Consulate",
    description:
      "Field officers, underwriters, workshop technicians, and consular staff serving communities nationwide.",
    members: [],
  },
];
