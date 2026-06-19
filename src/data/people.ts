// People page content: family, executive team, board, VOITH family teams
// Part of the VOITH site content. Edit freely — re-exported via data/content.ts.

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

export const boardOfDirectors: PersonCard[] = [
  {
    initials: "VGV",
    name: "Dr. Vijaya Gajananda Vaidya",
    role: "Founder & Late Chairman",
    badge: "In Memoriam",
    image: "/dr-vaidya.png",
  },
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
  {
    initials: "SVB",
    name: "Savanna Vaidya Basnyat",
    role: "Director — VOITH Hospitality",
    image: "/people/SavanaMam.png",
    bio: "Savanna is a seasoned hospitality professional with over 15 years of experience, known for her strategic approach to business development. With a deep focus on time, adaptation, and the human aspects that drive business success, she blends business acumen with a passion for the hospitality industry — expertise shaped by work with prestigious brands like Taj and spanning operations, development, and organisational growth. She is expanding VOITH's portfolio in the hospitality sector as the Founder of Sasvata Wildlife Resort and Himalayan Sasvata, focusing on innovative hotel-development projects that leverage Nepal's mega biodiversity. Beyond her professional achievements, Savanna is a dedicated mother and a continuously evolving individual who values both personal growth and the impact of her work on the communities she engages with.",
  },
  // Independent / non-executive directors — placeholder names, replace with real appointees.
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
  {
    initials: "AT",
    name: "Anjana Tamang",
    role: "Independent Director",
  },
  {
    initials: "PS",
    name: "Prabesh Sherchan",
    role: "Non-Executive Director",
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
      {
        initials: "AS",
        name: "Anil Shrestha",
        role: "Chief Operating Officer",
      },
      { initials: "BP", name: "Bishal Pandey", role: "Head of Sales" },
      {
        initials: "RT",
        name: "Rashmi Tamrakar",
        role: "Customer Experience Lead",
      },
      {
        initials: "DK",
        name: "Deepak Karki",
        role: "Head of After-Sales & Service",
      },
    ],
  },
  {
    business: "Mobility",
    unit: "Vaidya Energy — Ather Energy",
    description:
      "The team behind Nepal's #1 EV scooter brand and the Ather Grid charging network.",
    members: [
      { initials: "NT", name: "Niraj Thapa", role: "Head of EV Operations" },
      {
        initials: "SM",
        name: "Sweta Maharjan",
        role: "Brand & Marketing Lead",
      },
      {
        initials: "PB",
        name: "Pratik Bhattarai",
        role: "Charging Network Manager",
      },
    ],
  },
  {
    business: "Mobility",
    unit: "Trayana — Ultraviolette",
    description:
      "The team launching Nepal's premium electric-motorcycle segment through the Ultraviolette partnership.",
    members: [
      {
        initials: "AKC",
        name: "Ashish K.C.",
        role: "Electric Motorcycle Division Manager",
      },
    ],
  },
  {
    business: "Construction",
    unit: "Huaxin Cement Narayani · TCLI · TMCC",
    description:
      "Plant engineers, mining operators, and logistics crews running Huaxin Cement Narayani — around 1,000 personnel at 4,000 tons per day between Kathmandu and Pokhara.",
    members: [
      { initials: "RG", name: "Ramesh Gurung", role: "Plant General Manager" },
      {
        initials: "SP",
        name: "Sunita Pokharel",
        role: "Quality Assurance Lead",
      },
      {
        initials: "BL",
        name: "Bikash Lama",
        role: "Mining Operations — Nuwakot",
      },
      {
        initials: "MM",
        name: "Manoj Mahato",
        role: "Logistics & Distribution",
      },
    ],
  },
  {
    business: "Hospitality",
    unit: "VOITH Hospitality — Sasvata",
    description:
      "The opening team behind VOITH Hospitality — building Sasvata Wildlife Resort in Chitwan and Himalayan Sasvata in the Everest region with hospitality, wellness, culinary, and guest-experience leaders.",
    members: [
      {
        initials: "PA",
        name: "Pratiksha Adhikari",
        role: "General Manager — Opening Team",
      },
      { initials: "RJ", name: "Roshan Joshi", role: "Director of Wellness" },
      { initials: "ST", name: "Sajan Tuladhar", role: "Executive Chef" },
      { initials: "MR", name: "Maya Rai", role: "Guest Experience Lead" },
    ],
  },
  {
    business: "Other Industries",
    unit: "WEAN Nepal · Lumbini Insurance · Pitstop · Philippines Consulate",
    description:
      "Field officers, underwriters, workshop technicians, and consular staff delivering credit, insurance, automotive care, and diplomatic services to Nepali and Filipino communities nationwide.",
    members: [
      {
        initials: "KS",
        name: "Kabita Shrestha",
        role: "WEAN — Field Operations Lead",
      },
      {
        initials: "DA",
        name: "Dipesh Acharya",
        role: "Lumbini Insurance — Head of Claims",
      },
      {
        initials: "BS",
        name: "Binita Subedi",
        role: "Lumbini Insurance — Underwriting",
      },
      {
        initials: "UR",
        name: "Umesh Rajbhandari",
        role: "Pitstop — Service Manager",
      },
    ],
  },
];
