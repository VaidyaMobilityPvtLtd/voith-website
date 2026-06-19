// Impact page content: milestones, story timeline, footprint map
// Part of the VOITH site content. Edit freely — re-exported via data/content.ts.

export type Milestone = {
  /** URL segment for the detail page at /milestones/[slug]. */
  slug: string;
  date: string;
  title: string;
  description: string;
  /** Short category label shown above the title on the detail hero. */
  category: string;
  /** Hero / card image for the detail page. */
  heroImage: string;
};

export const milestones: Milestone[] = [
  {
    slug: "benelli-morbidelli-signed",
    date: "December 2025",
    title: "Benelli & Morbidelli Signed",
    category: "Mobility · Two-Wheelers",
    heroImage: "/brands/benelli.png",
    description:
      "Italian heritage motorcycle brands officially enter Nepal under VOITH's expanding two-wheeler division — building toward local assembly.",
  },
  {
    slug: "ather-best-stall-nada",
    date: "August 2024",
    title: "Ather Wins Best Stall at NADA",
    category: "Electric Mobility",
    heroImage: "/timeline/2024-ather-nada.png",
    description:
      "Vaidya Energy's Ather EV takes Best Stall at Nepal's premier auto show — cementing its position as Nepal's No. 1 electric scooter brand.",
  },
  {
    slug: "kathmandu-to-kailash",
    date: "2024",
    title: "Kathmandu to Kailash — EV Journey",
    category: "Electric Mobility",
    heroImage: "/timeline/2025-kailash.png",
    description:
      "Nepal's first long-distance EV journey from Kathmandu to Kailash Manasarovar, showcasing the capability of electric mobility in the Himalayas.",
  },
  {
    slug: "sasvata-postcard-mou",
    date: "December 2023",
    title: "Sasvata Signs MOU with The Postcard Hotel",
    category: "Hospitality · Partnership",
    heroImage: "/brands/sasvata-wellness-resort.png",
    description:
      "Sasvata Wildlife Resort partners with The Postcard Hotel — one of Asia's leading luxury boutique brands — to position Nepal as a global leader in boutique, nature-based travel on the doorstep of Chitwan National Park.",
  },
  {
    slug: "huaxin-cement-narayani",
    date: "May 2022",
    title: "Huaxin Cement Narayani Begins",
    category: "Construction · Cement",
    heroImage: "/timeline/2022-huaxin-cement.png",
    description:
      "VOITH ventures into cement with Huaxin Cement Co. Ltd. — USD 250M investment, production from May 2022 at 4,000 tons per day between Kathmandu and Pokhara, employing around 1,000 personnel.",
  },
];

/** Look up a single milestone by its URL slug. */
export function getMilestone(slug: string): Milestone | undefined {
  return milestones.find((m) => m.slug === slug);
}

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
    year: "2023",
    chipLabel: "Dec 2023",
    topic: "Sasvata Signs MOU with The Postcard Hotel",
    body: "Sasvata Wildlife Resort partnered with The Postcard Hotel — one of Asia’s leading luxury boutique brands — to position Nepal as a global leader in boutique, nature-based travel on the doorstep of Chitwan National Park.",
    image: "/brands/sasvata-wellness-resort.png",
    imagePosition: "center center",
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
  {
    brand: "TOYOTA",
    color: "#EE2222",
    category: "automotive",
    sales: 8,
    service: 10,
    others: 0,
  },
  {
    brand: "ATHER",
    color: "#9BE0F0",
    category: "automotive",
    sales: 9,
    service: 8,
    others: "30 Ather Grid (Fast Chargers)",
  },
  {
    brand: "XCMG",
    color: "#7B3FB0",
    category: "automotive",
    sales: 5,
    service: 6,
    others: 0,
  },
  {
    brand: "Keeway GROUP",
    color: "#1D4F8E",
    category: "automotive",
    sales: 3,
    service: 6,
    others: 0,
  },
  {
    brand: "ULTRAVIOLETTE",
    color: "#3AB870",
    category: "automotive",
    sales: 1,
    service: 1,
    others: 0,
  },
  {
    brand: "HUAXIN",
    color: "#F5C842",
    category: "others",
    notes: "Factory and Mines",
  },
  {
    brand: "ŠASVATA",
    color: "#FFFFFF",
    category: "others",
    notes: "Flatlands to Mountains",
  },
];

export type FootprintMarker = {
  brand: string;
  city: string;
  lon: number;
  lat: number;
};

export const footprintMarkers: FootprintMarker[] = [
  // Kathmandu valley cluster (HQ region — concentrated brands)
  {
    brand: "TOYOTA",
    city: "Kathmandu — VOITH Complex",
    lon: 85.33,
    lat: 27.73,
  },
  { brand: "TOYOTA", city: "Kathmandu — Naxal", lon: 85.327, lat: 27.717 },
  { brand: "ATHER", city: "Kathmandu — Thapathali", lon: 85.319, lat: 27.694 },
  { brand: "ATHER", city: "Kathmandu — Naxal Grid", lon: 85.33, lat: 27.713 },
  { brand: "ATHER", city: "Lalitpur — Pulchowk", lon: 85.317, lat: 27.679 },
  {
    brand: "Keeway GROUP",
    city: "Kathmandu — Tinkune",
    lon: 85.348,
    lat: 27.687,
  },
  {
    brand: "XCMG",
    city: "Bhaktapur — Industrial Area",
    lon: 85.428,
    lat: 27.671,
  },
  {
    brand: "ULTRAVIOLETTE",
    city: "Kathmandu — Durbarmarg",
    lon: 85.32,
    lat: 27.713,
  },
  { brand: "ŠASVATA", city: "Kathmandu Valley HQ", lon: 85.31, lat: 27.7 },

  // Pokhara region
  { brand: "TOYOTA", city: "Pokhara", lon: 83.985, lat: 28.21 },
  { brand: "ATHER", city: "Pokhara", lon: 83.996, lat: 28.199 },
  { brand: "Keeway GROUP", city: "Pokhara", lon: 83.978, lat: 28.221 },
  { brand: "ATHER", city: "Damauli", lon: 84.276, lat: 27.962 },

  // Central Terai
  { brand: "TOYOTA", city: "Bharatpur (Chitwan)", lon: 84.433, lat: 27.683 },
  { brand: "ATHER", city: "Bharatpur", lon: 84.443, lat: 27.677 },
  { brand: "XCMG", city: "Bharatpur", lon: 84.45, lat: 27.69 },
  { brand: "TOYOTA", city: "Birgunj", lon: 84.88, lat: 27.01 },
  { brand: "XCMG", city: "Birgunj", lon: 84.872, lat: 27.02 },
  { brand: "TOYOTA", city: "Hetauda", lon: 85.04, lat: 27.42 },
  { brand: "ATHER", city: "Hetauda", lon: 85.045, lat: 27.427 },

  // Western Terai
  { brand: "TOYOTA", city: "Butwal", lon: 83.466, lat: 27.7 },
  { brand: "ATHER", city: "Butwal", lon: 83.476, lat: 27.708 },
  { brand: "Keeway GROUP", city: "Butwal", lon: 83.452, lat: 27.696 },
  { brand: "TOYOTA", city: "Tansen (Palpa)", lon: 83.55, lat: 27.866 },

  // Lumbini
  { brand: "TOYOTA", city: "Bhairahawa", lon: 83.45, lat: 27.5 },
  { brand: "ATHER", city: "Lumbini Corridor", lon: 83.28, lat: 27.49 },

  // Mid-West
  { brand: "TOYOTA", city: "Nepalgunj", lon: 81.616, lat: 28.05 },
  { brand: "XCMG", city: "Nepalgunj", lon: 81.625, lat: 28.06 },
  { brand: "TOYOTA", city: "Surkhet", lon: 81.626, lat: 28.602 },

  // Far-West
  { brand: "TOYOTA", city: "Dhangadhi", lon: 80.589, lat: 28.695 },
  { brand: "ATHER", city: "Dhangadhi", lon: 80.601, lat: 28.701 },
  { brand: "XCMG", city: "Mahendranagar", lon: 80.18, lat: 28.965 },

  // Eastern Terai
  { brand: "TOYOTA", city: "Biratnagar", lon: 87.27, lat: 26.45 },
  { brand: "ATHER", city: "Biratnagar", lon: 87.282, lat: 26.46 },
  { brand: "Keeway GROUP", city: "Biratnagar", lon: 87.263, lat: 26.44 },
  { brand: "TOYOTA", city: "Itahari", lon: 87.275, lat: 26.66 },
  { brand: "TOYOTA", city: "Janakpur", lon: 85.92, lat: 26.73 },
  { brand: "ATHER", city: "Janakpur", lon: 85.928, lat: 26.737 },
  { brand: "TOYOTA", city: "Damak (Jhapa)", lon: 87.7, lat: 26.66 },
  { brand: "ATHER", city: "Birtamod (Jhapa)", lon: 87.985, lat: 26.64 },

  // Plant & Mining (Huaxin) — yellow
  {
    brand: "HUAXIN",
    city: "Huaxin Cement Narayani — Nuwakot",
    lon: 85.168,
    lat: 27.91,
  },
  {
    brand: "HUAXIN",
    city: "TCLI Quarry — Suryagadhi, Nuwakot",
    lon: 85.134,
    lat: 27.943,
  },
];
