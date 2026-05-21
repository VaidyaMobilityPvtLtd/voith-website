export const VOITH_FOUNDED_YEAR = 1964;

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
  },
  impact: {
    eyebrow: "Community",
    title: "Impact & Legacy",
    description:
      "Partnerships, values, and milestones that reflect VOITH's commitment to Nepal's people and institutions.",
    stat: "60+",
    statLabel: "Years of contribution",
  },
  people: {
    eyebrow: "Leadership",
    title: "People & Family",
    description:
      "The Vaidya family and leadership team guiding VOITH across generations of entrepreneurship in Nepal.",
    stat: "4",
    statLabel: "Generations leading",
  },
  future: {
    eyebrow: "Forward",
    title: "The Future",
    description:
      "Hospitality, electric mobility, and local manufacturing — where VOITH is headed next.",
    stat: "3",
    statLabel: "Major initiatives",
  },
} as const;

export const topbarSectors = [
  "Mobility",
  "Construction",
  "Hospitality",
  "Industries",
] as const;

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
    title: "Huaxin Narayani Cement",
    sub: "4,000 tons/day · USD 250M investment",
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
} as const;

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
    letter: "H",
    color: "#B45309",
    category: "Hospitality",
    sub: "Sasvata Wellness Resort",
    description:
      "The most luxurious all-inclusive premium resort in the spiritual Himalayas of Nepal — where guests depart as friends and return as family.",
  },
  {
    letter: "I",
    color: "#6B21A8",
    category: "Industries",
    sub: "WEAN Nepal · Lumbini Insurance · Pitstop",
    description:
      "Micro-credit empowering millions of Nepali women, one of Nepal's largest insurance companies, and a boutique automotive workshop — diversified industrial and financial services across Nepal.",
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

export type StoryMilestone = {
  year: string;
  chipLabel: string;
  topic: string;
  body: string;
  image: string;
};

/** VOITH Profile / Our Story — seventeen milestones (1960–2025). */
export const storyMilestones: StoryMilestone[] = [
  {
    year: "1960",
    chipLabel: "1960",
    topic: "Tiger Taxi in Nepal :",
    body: "In the late 1960s, Kathmandu embraced modern mobility with the iconic “tiger taxis.” As private ownership grew, drivers shifted to new vehicles, and Toyota emerged as the trusted brand, shaping Nepal’s automotive legacy.",
    image: "/timeline/homepage.jpg",
  },
  {
    year: "1967",
    chipLabel: "1967",
    topic: "The UTS–Toyota partnership,",
    body: "The beginning of an enduring UTS–Toyota partnership, symbolized by a historic handshake and later honored through cultural exchange, reflecting a legacy of trust, respect, and long-term collaboration.",
    image: "/timeline/home2.png",
  },
  {
    year: "1970",
    chipLabel: "1970",
    topic: "Little Things We Do:",
    body: "At VOITH, sustainability is a collective commitment. Every month, team members come together to clean, green, and protect public spaces, contributing to a cleaner and more sustainable Nepal.",
    image: "/timeline/homepage.jpg",
  },
  {
    year: "1975",
    chipLabel: "1975",
    topic: "King Birendra Coronation:",
    body: "During the coronation of King Birendra, Toyota Nepal (United Traders Syndicate) proudly supplied VIP vehicles for the royal ceremony, showcasing Toyota’s reliability and prestige at a historic national event.",
    image: "/timeline/home2.png",
  },
  {
    year: "1978",
    chipLabel: "1978",
    topic: "Kathmandu to Calcutta:",
    body: "United Traders Syndicate organized a historic Kathmandu–Calcutta motor rally with the Toyota Celica, symbolizing cross-border friendship, regional connectivity, and confidence in reliable mobility—led personally by the Chairman.",
    image: "/timeline/homepage.jpg",
  },
  {
    year: "1979",
    chipLabel: "1979",
    topic: "Red Cross Ambulance :",
    body: "United Traders Syndicate donated two fully equipped Toyota ambulances to the Nepal Red Cross Society and Pariwar Niyojan Nepal, reinforcing its commitment to accessible and timely healthcare for communities across Nepal.",
    image: "/timeline/home2.png",
  },
  {
    year: "1987",
    chipLabel: "1987",
    topic: "Hockey Game:",
    body: "United Traders Syndicate organized friendly hockey and basketball matches to promote youth engagement, healthy lifestyles, and teamwork, fostering unity and sportsmanship among young people.",
    image: "/timeline/homepage.jpg",
  },
  {
    year: "2000",
    chipLabel: "2000",
    topic: "Dr. Shoichiro Toyoda’s landmark visit to Nepal,",
    body: "United Traders Syndicate was honored to host Dr. Shoichiro Toyoda in Nepal, marking a historic visit that celebrated cultural exchange, leadership ties, and a shared commitment to sustainability.",
    image: "/timeline/home2.png",
  },
  {
    year: "Since 2004",
    chipLabel: "2004 · Rally",
    topic: "Toyota Women’s Rally",
    body: "Launched in 2004, the Toyota Women’s Rally is Nepal’s pioneering women-focused motorsport initiative, celebrating women’s confidence, skill, and independence. It has grown into a powerful symbol of empowerment and inclusion, inspiring women from diverse backgrounds to take the driver’s seat—on the road and in life.",
    image: "/timeline/homepage.jpg",
  },
  {
    year: "Since 2004",
    chipLabel: "2004 · Art",
    topic: "Dream car Art Contest:",
    body: "Launched in 2004, the Toyota Dream Car Art Contest inspires children to imagine the future of mobility through creativity and art, encouraging young minds to dream big and think beyond boundaries.",
    image: "/timeline/home2.png",
  },
  {
    year: "Since 2005",
    chipLabel: "2005 · Sports",
    topic: "VOITH’s Legacy in Uplifting Sports:",
    body: "VOITH has played a pioneering role in strengthening Nepal’s sports ecosystem, driven by a deep belief in the power of sports to inspire excellence and uplift communities. Under the leadership of Chairman Vaidya, a former college cricket captain, VOITH has consistently supported athletes, infrastructure, and major sporting events across decades.",
    image: "/timeline/homepage.jpg",
  },
  {
    year: "2017",
    chipLabel: "2017",
    topic: "50 Years of Toyota in Nepal :",
    body: "Marking 50 years in Nepal, UTS celebrated this milestone with the inauguration of Toyota’s new state-of-the-art 3S (Sales, Service, Spare) facility at the newly constructed VOITH Complex, Dhumbarahi, Kathmandu, reaffirming Toyota’s long-standing commitment to quality, innovation, and customer trust in Nepal.",
    image: "/timeline/home2.png",
  },
  {
    year: "2019",
    chipLabel: "2019",
    topic: "“Rush to Mustang”",
    body: "In 2019, UTS organized the “Rush to Mustang” rally, where a convoy of Toyota Rush SUVs conquered rugged terrains from Kathmandu to Mustang, showcasing the vehicle’s off-road capability and reliability. The successful journey and strong public response led to immediate bookings, reinforcing Toyota Rush as a trusted adventure SUV in Nepal.",
    image: "/timeline/homepage.jpg",
  },
  {
    year: "2021",
    chipLabel: "2021 · N8W",
    topic: "Toyota Nepal × Nepal8thWonder Pvt. Ltd.",
    body: "Toyota Nepal, in partnership with Nepal8thWonder Pvt. Ltd., launched Toyota Travel to promote Nepal’s travel and tourism through cinematic road journeys. The initiative showcases the country’s diverse landscapes—from Bardiya to Mustang, Rasuwa, and Manang—highlighting adventure, culture, and connection experienced behind the wheel of a Toyota.",
    image: "/timeline/home2.png",
  },
  {
    year: "2021",
    chipLabel: "2021 · MMC",
    topic: "Football Sponsorship:",
    body: "The collaboration underscored Toyota’s dedication to supporting local sports initiatives and promoting healthy lifestyles.",
    image: "/timeline/homepage.jpg",
  },
  {
    year: "2024",
    chipLabel: "2024",
    topic: "Toyota Start Your Impossible :",
    body: "This collaboration marked a milestone, making Nabita the first Nepali athlete to join Toyota’s Global Team Toyota Athletes (GTTA), a program celebrating over 200 athletes worldwide who excel in sports and community impact.",
    image: "/timeline/home2.png",
  },
  {
    year: "2025",
    chipLabel: "2025",
    topic: "Kathmandu to Kailash Manasarovar:",
    body: "From Kathmandu to Kailash Mansarovar, 19 Toyota vehicles and 62 passionate explorers embarked on a spiritual journey like no other. More than just a route, this was a celebration of purpose, exploration, and the joy of the drive. Driving a Toyota is not just about reaching the destination — it’s about the thrill of the journey, the courage to push boundaries, and the spirit to lead with purpose.\n\nThrough this expedition, we reignited our love for adventure and created memories that go beyond the road.",
    image: "/timeline/homepage.jpg",
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

export const footerLinks = [
  { label: "Our Work", href: routes.industries },
  { label: "Gallery", href: `${routes.home}#businesses` },
  { label: "About", href: routes.impact },
  { label: "Contact", href: "mailto:info@voith.com.np" },
] as const;

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
