// Industries · mobility sector, companies, brands, images
// Part of the VOITH site content. Edit freely, re-exported via data/content.ts.

import type { SectorPage } from "./types";

export const mobilitySector: SectorPage = {
  slug: "mobility",
  label: "Mobility",
  letter: "M",
  color: "#C41A1A",
  eyebrow: "Sector 01",
  title: "Moving Nepal forward",
  description:
    "From Toyota to Ather EV, from Italian heritage motorcycles to construction equipment, Nepal's most complete mobility portfolio.",
  stat: "55+",
  statLabel: "Years on the road",
  heroImage: "/timeline/homepage.jpg",
  intro:
    "Mobility is the heritage VOITH was built on. Since 1967, when UTS first partnered with Toyota Motor Corporation, we have shaped how Nepal moves through dealerships, service networks, electrification, and by bringing global mobility brands to Himalayan roads.",
  stats: [
    { value: "1967", label: "UTS–Toyota partnership" },
    { value: "NADA", label: "Best Stall 2024 (Ather)" },
    { value: "30+", label: "Ather Grid fast-chargers" },
    { value: "5", label: "Two-wheeler marques" },
  ],
  brands: [
    {
      slug: "uheem",
      mark: "UHEEM",
      name: "Construction & Heavy Equipment and Earth Movers",
      role: "XCMG · Sole distributor · Est. 2018",
      image: "/brands/uheem.png",
      website: "https://uheem.com.np",
      description:
        "VOITH's heavy-equipment company, Construction & Heavy Equipment and Earth Movers Pvt. Ltd. (UHEEM), and the sole authorised distributor of XCMG construction machinery in Nepal, supporting infrastructure projects nationwide with sales, service, and genuine parts.",
      detail: {
        established: "Established · April 2018",
        origin: "Sole distributor, XCMG, China",
        intro: [
          "Construction & Heavy Equipment and Earth Movers Pvt. Ltd. (UHEEM) is VOITH's specialised heavy-equipment and construction-machinery company. Established in April 2018, it strengthens the group's presence in Nepal's heavy-equipment and infrastructure-development sector.",
          "UHEEM is the sole authorised distributor of XCMG construction machinery in Nepal, focusing on distribution, sales, and after-sales support, backed by reliable spare-parts availability and professional service across the country.",
          "From excavators and wheel loaders to motor graders, backhoe loaders, pneumatic rollers, and horizontal directional drills, UHEEM brings world-class Chinese engineering to Nepal's highways, hydropower, housing, and mining projects.",
          "Guided by VOITH's long-term commitment to customer-first service, UHEEM builds enduring business relationships based on mutual goals, delivering quality, affordable heavy equipment tailored to the needs of contractors and developers across Nepal.",
        ],
        stats: [
          { value: "2018", label: "Established" },
          { value: "XCMG", label: "Exclusive brand" },
          { value: "2", label: "Offices · KTM & Laxminiya" },
        ],
        highlights: [
          {
            title: "Exclusive XCMG partnership",
            description:
              "UHEEM is Nepal's sole authorised distributor for XCMG, one of the world's leading construction-equipment manufacturers, covering earth-moving, lifting, road-building, and concrete machinery.",
          },
          {
            title: "Nationwide after-sales support",
            description:
              "Professional service teams, genuine spare parts, and responsive customer care ensure equipment uptime for contractors working on Nepal's most demanding infrastructure projects.",
          },
          {
            title: "Part of the VOITH group",
            description:
              "UHEEM sits alongside United Traders Syndicate, Vaidya Energy, Trayana, and Pitstop under Vaidya's Organization of Industries & Trading Houses, Nepal's leading business group.",
          },
        ],
        locationsLabel: "Offices",
        locations: [
          {
            name: "UHEEM, Kathmandu",
            kind: "Head Office",
            address: "Anandanagar, Dhumbarahi, Kathmandu 44600, Nepal",
            phone: "+977 985-1217690 · 01-4008813",
            email: "customercare@uheem.com.np",
          },
          {
            name: "UHEEM, Laxminiya",
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
          role: "Construction & industrial machinery, China",
          image: "/brands/xcmg.png",
          logo: "/brands/xcmg_logo.png",
          description:
            "One of the world's leading construction-equipment manufacturers, distributed exclusively in Nepal by UHEEM.",
          detail: {
            origin: "XCMG, China",
            intro: [
              "XCMG is one of the world's leading manufacturers of construction equipment and industrial machinery. Founded in China, it is globally recognised for advanced engineering across earth-moving, lifting, road-building, and concrete machinery.",
              "In Nepal, XCMG is distributed exclusively by UHEEM, bringing world-class construction machinery and dependable after-sales support to the country's infrastructure projects, from urban road networks to remote hydropower sites.",
              "XCMG's product range spans excavators, wheel loaders, motor graders, backhoe loaders, pneumatic rollers, and horizontal directional drills, equipment engineered for durability, performance, and total cost of ownership in demanding conditions.",
            ],
            stats: [
              { value: "6+", label: "Equipment categories" },
              { value: "Global", label: "Top-3 manufacturer" },
              { value: "UHEEM", label: "Nepal distributor" },
            ],
            highlights: [
              {
                title: "Built for Nepal's terrain",
                description:
                  "XCMG machinery is deployed across highways, housing, hydropower, and mining, engineered to perform in Himalayan conditions and on Nepal's challenging construction sites.",
              },
              {
                title: "Full lifecycle support",
                description:
                  "UHEEM provides sales, operator guidance, maintenance, and genuine spare parts, keeping XCMG fleets productive throughout the project lifecycle.",
              },
            ],
            lineupLabel: "XCMG equipment available in Nepal",
            lineup: [
              {
                category: "Earth moving",
                items: ["Excavator", "Wheel Loader", "Backhoe Loader"],
              },
              {
                category: "Road & compaction",
                items: ["Motor Grader", "Pneumatic Roller"],
              },
              {
                category: "Specialised machinery",
                items: [
                  "Horizontal Directional Drill",
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
      role: "Toyota · Keeway · Benelli · Morbidelli · Est. 1967",
      image: "/brands/uts.png",
      description:
        "VOITH's flagship automotive company and Nepal's authorised Toyota distributor since 1967, now expanding into premium two-wheelers with Keeway, Benelli, and Morbidelli, backed by a nationwide sales, service, and spare-parts network.",
      detail: {
        established: "UTS–Toyota partnership · December 1967",
        origin: "Authorised distributor, Toyota Motor Corporation, Japan",
        intro: [
          "United Traders Syndicate (UTS) is VOITH's flagship automotive company and the authorised distributor in Nepal for Toyota, established in December 1967. Founded by the late Dr. V. G. Vaidya and today led by Mr. Suraj Vaidya (President) and Mrs. Ritu Singh Vaidya (Managing Director), UTS has played a pioneering role in shaping Nepal's automotive industry for over five decades.",
          "Toyota Nepal, represented by UTS, is the official distributor of Toyota vehicles, parts, and services in Nepal. With over five decades of presence, Toyota Nepal offers a wide range of reliable cars, SUVs, pickups, and MPVs, along with comprehensive after-sales support through showrooms and service centres across the country.",
          "Beyond Toyota, UTS has expanded into the two-wheeler segment, recently partnering with the Keeway Group, Benelli, and the Italian luxury marque Morbidelli, building toward a complete on-road mobility portfolio backed by a nationwide sales, service, and spare-parts network.",
          "From supplying VIP vehicles for King Birendra's coronation to organising the Kathmandu–Calcutta motor rally and Nepal's pioneering Toyota Women's Rally, UTS has been at the centre of Nepal's automotive history, earning recognition from Toyota Motor Corporation as one of its most loyal and trustworthy partners worldwide.",
        ],
        stats: [
          { value: "1967", label: "Toyota partnership" },
          { value: "55+", label: "Years in Nepal" },
          { value: "4", label: "Brand marques" },
        ],
        highlights: [
          {
            title: "Nepal's longest-standing Toyota partner",
            description:
              "UTS introduced Toyota to Nepal in 1967 and remains the country's authorised distributor, from electrified hybrids and rugged SUVs to commercial Hilux, Hiace, and Ace models.",
          },
          {
            title: "Growing two-wheeler portfolio",
            description:
              "Keeway, Benelli, and Morbidelli joined UTS in 2025, expanding VOITH's reach into commuter, lifestyle, and luxury motorcycle segments with local assembly on the horizon.",
          },
          {
            title: "Nationwide dealer network",
            description:
              "Authorised sales, service, and spares partners in Biratnagar, Butwal, Bharatpur, Pokhara, and across the Kathmandu Valley, keeping Toyota owners supported wherever they drive.",
          },
          {
            title: "Community & motorsport legacy",
            description:
              "From the Toyota Women's Rally (since 2004) and Dream Car Art Contest to Red Cross ambulance donations and youth sports programmes, UTS invests in Nepal beyond the showroom floor.",
          },
        ],
        locationsLabel: "Head office & flagship facilities",
        locations: [
          {
            name: "VOITH Complex, Dhumbarahi",
            kind: "Head Office · 3S Facility",
            address: "Anandanagar, Dhumbarahi, Kathmandu 44600, Nepal",
            phone: "+977 01-4542901",
            email: "info@voith.com.np",
          },
        ],
      },
      children: [
        {
          slug: "toyota",
          mark: "TO",
          name: "Toyota",
          role: "Toyota Motor Corporation, Japan",
          image: "/brands/toyota-hero.jpg",
          logo: "/brands/toyota_logo.png",
          website: "https://www.toyota.com.np/en.html",
          description:
            "Nepal's most trusted automotive brand, from electrified hybrids to rugged SUVs, distributed by UTS since 1967.",
          detail: {
            established: "In Nepal since 1967",
            origin: "Toyota Motor Corporation, Japan",
            intro: [
              "Toyota, manufactured by Toyota Motor Corporation of Japan, has earned the trust of Nepali customers through its commitment to quality, durability, reliability, and customer satisfaction. Introduced to Nepal by United Traders Syndicate in 1967, it remains one of the country's most trusted automotive brands.",
              "Supported by an extensive nationwide network, Toyota delivers world-class mobility solutions, genuine spare parts, and professional after-sales services, from electrified hybrids to rugged SUVs and commercial vehicles.",
              "In 2017, UTS marked 50 years of Toyota in Nepal with the inauguration of a new state-of-the-art 3S facility at VOITH Complex, Dhumbarahi, a milestone in the country's automotive infrastructure.",
              'UTS is one of Toyota Motor Corporation\'s most loyal and trustworthy partners worldwide, conducting business under the maxim of "customers first" and gaining great trust from customers across Nepal.',
            ],
            stats: [
              { value: "1967", label: "In Nepal since" },
              { value: "50+", label: "Years of partnership" },
              { value: "Hybrid", label: "Electrified lineup" },
              { value: "4", label: "Regional dealer partners" },
            ],
            highlights: [
              {
                title: "Electrified & hybrid range",
                description:
                  "Corolla Cross Hybrid, Camry Hybrid, Yaris Cross Hybrid, and RAV4 Core Hybrid, bringing Toyota's global electrification strategy to Nepali roads.",
              },
              {
                title: "From city to expedition",
                description:
                  "Fortuner, Land Cruiser 70, Land Cruiser 250, Hilux, and Hiace, vehicles trusted for everything from daily commuting to Kailash Manasarovar expeditions.",
              },
            ],
            lineupLabel: "Toyota models available in Nepal",
            lineup: [
              {
                category: "Electrified, Hybrid",
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
            locationsLabel: "Dealer network, Sales · Service · Spares",
            locations: [
              {
                name: "Biratnagar, AB Group",
                kind: "Sales · Service · Spares",
                address: "Biratnagar-3, Airport Road, Biratnagar 56613",
                phone: "9852033953 · 021-461846 · 021-460965",
                email: "abgroupbrt@gmail.com",
              },
              {
                name: "Butwal, Autoways",
                kind: "Sales · Service · Spares",
                address: "Kalikanagar, Butwal 32907",
                phone: "9857030854 · 071-419017 · 071-419026",
                email: "autowaysbtl@gmail.com",
              },
              {
                name: "Bharatpur, Autoways",
                kind: "Sales · Service · Spares",
                address: "Balmandir Chowk, Bharatpur 44207",
                phone: "9855063549 · 056-525935 · 056-532292",
                email: "autowaysngt@gmail.com",
              },
              {
                name: "Pokhara, Autoways",
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
          role: "Italian luxury motorcycles, Recently partnered",
          image: "/brands/morbidelli_hero.jpg",
          logo: "/brands/morbidelli_logo.png",
          website: "https://www.morbidelli.com/np-en",
          description:
            "The Italian motorcycle marque, introduced to Nepal in November 2025, Trail, Street Fighter, and Cruiser series for the luxury segment.",
          detail: {
            established: "Introduced in Nepal · November 2025",
            origin: "Morbidelli, Italy",
            intro: [
              "Morbidelli is the Italian motorcycle marque introduced to Nepal in November 2025 through VOITH's United Traders Syndicate, marking the group's entry into the country's growing luxury motorcycle segment.",
              "With a strong Italian design heritage and performance-driven engineering, Morbidelli offers a versatile lineup built for adventure, urban performance, and cruising, bringing globally recognised mobility solutions to Nepali riders.",
              "Showrooms and service centres in Tinkune, Bhaktapur, and Naxal give riders access to the full Trail, Street Fighter, and Cruiser series, backed by UTS's nationwide after-sales infrastructure.",
            ],
            stats: [
              { value: "Nov 2025", label: "Launched in Nepal" },
              { value: "Italy", label: "Brand origin" },
              { value: "3", label: "Showrooms & service centres" },
            ],
            highlights: [
              {
                title: "Italian luxury motorcycles",
                description:
                  "Trail Series (T1002VX, T502X, T352X), Street Fighter Series (F352), and Cruiser Series (C252V), designed for adventure, urban performance, and long-distance cruising.",
              },
              {
                title: "Local assembly planned",
                description:
                  "VOITH is building toward SKD assembly of Morbidelli, and other two-wheeler marques, in Nepal, creating technical expertise and economic value beyond import.",
              },
            ],
            lineupLabel: "Morbidelli models available in Nepal",
            lineup: [
              {
                category: "Trail Series",
                items: ["T1002VX", "T502X", "T352X"],
              },
              { category: "Street Fighter Series", items: ["F352"] },
              { category: "Cruiser Series", items: ["C252V"] },
            ],
            locationsLabel: "Morbidelli showrooms & service centers",
            locations: [
              {
                name: "Morbidelli Service Center, Tinkune",
                kind: "Service Center",
                address: "Tinkune, Kathmandu, Bagmati Province 44600",
                phone: "977-9851404606",
                email: "sadvisor@morbidelli.com.np",
                hours: "Mon–Fri 10:00 AM – 6:00 PM · Sun open (Sat off)",
              },
              {
                name: "Morbidelli Showroom & Service Center, Bhaktapur",
                kind: "Showroom & Service Center",
                address:
                  "Gatthaghar Road, Madhyapur Thimi, Bagmati Province 44600",
                phone: "977-9802324632",
                hours: "Mon–Fri 9:30 AM – 6:30 PM · Sun open (Sat off)",
              },
              {
                name: "Morbidelli Showroom, Naxal",
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
          role: "European-styled motorcycles, Recently partnered",
          image: "/brands/keeway.png",
          logo: "/brands/keeway_logo.png",
          description:
            "Contemporary European-styled motorcycles and scooters from the Keeway Group, joining UTS's growing two-wheeler lineup.",
          detail: {
            established: "Recently partnered · Keeway Group",
            origin: "Keeway Group, Qianjiang, China",
            intro: [
              "Keeway is an international motorcycle and scooter brand known for its contemporary European styling and accessible performance. Part of the Qianjiang group, Keeway offers a broad range of two-wheelers spanning commuter, cruiser, and lifestyle segments.",
              "In Nepal, Keeway joins VOITH's growing two-wheeler portfolio under United Traders Syndicate, backed by the group's nationwide sales and after-sales network.",
              "As part of the Keeway Group alongside Benelli and Morbidelli, Keeway strengthens UTS's position across every price point in Nepal's rapidly expanding motorcycle market.",
            ],
            stats: [
              { value: "2025", label: "Recently partnered" },
              { value: "Keeway Group", label: "Global parent" },
              { value: "UTS", label: "Nepal distributor" },
            ],
            highlights: [
              {
                title: "European-styled accessibility",
                description:
                  "Contemporary design and accessible performance across commuter, cruiser, and lifestyle segments, making premium styling available to a broader range of Nepali riders.",
              },
              {
                title: "Backed by VOITH's network",
                description:
                  "Sales, service, and spare parts through United Traders Syndicate's established nationwide infrastructure. The same trust that has carried Toyota for over five decades.",
              },
            ],
          },
        },
        {
          slug: "benelli",
          mark: "BN",
          name: "Benelli",
          role: "Italian heritage motorcycles, Recently partnered",
          image: "/brands/benelli.png",
          logo: "/brands/benelli_logo.png",
          website: "https://www.benelli.com/np-en",
          description:
            "One of the world's oldest motorcycle makers, founded in Pesaro, Italy, in 1911, now part of VOITH's two-wheeler portfolio.",
          detail: {
            established: "Recently partnered · December 2025",
            origin: "Benelli, Italy (est. 1911)",
            intro: [
              "Benelli is one of the world's oldest motorcycle manufacturers, founded in Pesaro, Italy, in 1911. Renowned for its racing heritage and distinctive design, the brand today combines Italian styling with modern engineering across a versatile motorcycle range.",
              "Benelli enters Nepal under VOITH's United Traders Syndicate as part of the group's expanding two-wheeler portfolio, supported by a nationwide service network.",
              "Signed alongside Morbidelli in December 2025, Benelli represents VOITH's commitment to bringing globally recognised two-wheeler brands to Nepal, with local SKD assembly planned to create technical jobs and economic value.",
            ],
            stats: [
              { value: "1911", label: "Founded · Italy" },
              { value: "Dec 2025", label: "Entered Nepal" },
              { value: "UTS", label: "Authorised distributor" },
            ],
            highlights: [
              {
                title: "Racing heritage since 1911",
                description:
                  "Over a century of Italian motorcycle craftsmanship, from early racing dominance to today's versatile range combining distinctive design with modern engineering.",
              },
              {
                title: "Part of the Keeway Group portfolio",
                description:
                  "Benelli sits alongside Keeway and Morbidelli under UTS, giving Nepali riders choice across commuter, sport, and luxury segments under one trusted distributor.",
              },
            ],
          },
        },
      ],
    },
    {
      slug: "trayana",
      mark: "TR",
      name: "Trayana",
      role: "Ultraviolette · Recently partnered",
      image: "/brands/trayana-hero.png",
      description:
        "VOITH's electric-motorcycle venture and the home of Ultraviolette, high-performance EV bikes for Nepal's premium mobility segment, recently partnered in January 2026.",
      detail: {
        established: "Ultraviolette partnership · January 2026",
        origin: "VOITH electric-motorcycle division",
        intro: [
          "Trayana is VOITH's dedicated venture for premium electric motorcycles, recently partnering with Ultraviolette, India's high-performance EV motorcycle brand.",
          "Through Trayana, VOITH brings next-generation electric motorcycle technology to Nepal, backed by the group's nationwide sales, service, and customer-support infrastructure.",
          "Ultraviolette's launch in January 2026 marks VOITH's expansion beyond scooters into the premium electric-motorcycle category, complementing Vaidya Energy's Ather portfolio and UTS's growing two-wheeler lineup.",
          "The UV Space Pod experience centre in Naxal, Kathmandu, serves as the brand's flagship touchpoint, offering test rides, product discovery, and after-sales support for Nepal's most advanced electric motorcycle platform.",
        ],
        stats: [
          { value: "Jan 2026", label: "Recently partnered" },
          { value: "Ultraviolette", label: "Launch brand" },
          { value: "F77", label: "Flagship model" },
        ],
        highlights: [
          {
            title: "Premium EV motorcycles",
            description:
              "Ultraviolette's F77 delivers high-performance, zero-emission riding, bringing India's most advanced electric motorcycle technology to Nepal's premium segment.",
          },
          {
            title: "VOITH group synergy",
            description:
              "Trayana leverages VOITH's mobility infrastructure, from UTS's service culture to Vaidya Energy's EV expertise, to build a complete electric two-wheeler ecosystem.",
          },
        ],
      },
      children: [
        {
          slug: "ultraviolette",
          mark: "UV",
          name: "Ultraviolette",
          role: "Electric motorcycles, India",
          image: "/brands/ultraviolette_hero.jpg",
          logo: "/brands/ultraviolette_logo.png",
          website: "https://www.ultraviolette.com/np",
          description:
            "High-performance electric motorcycles from India, the flagship F77, launched through the UV Space Pod in Naxal.",
          detail: {
            established: "Launched in Nepal · January 2026",
            origin: "Ultraviolette, India",
            intro: [
              "Ultraviolette is a high-performance electric motorcycle brand from India, recognised for its performance-focused mobility technology, next-generation design, and advanced engineering. In Nepal, Ultraviolette launched in January 2026 under the VOITH Organization group through Trayana.",
              "The brand's first experience centre, the UV Space Pod, was inaugurated in Naxal, Kathmandu, marking its entry into Nepal's premium electric-motorcycle category. Its fully electric platform delivers zero-emission performance, contributing to cleaner, more eco-friendly mobility in Nepal.",
              "The flagship Ultraviolette F77 combines connected technology, advanced battery management, and performance-oriented design, setting a new benchmark for electric motorcycles in the Himalayan market.",
            ],
            stats: [
              { value: "Jan 2026", label: "Launched in Nepal" },
              { value: "F77", label: "Flagship model" },
              { value: "India", label: "Brand origin" },
            ],
            highlights: [
              {
                title: "UV Space Pod, Naxal",
                description:
                  "Nepal's first Ultraviolette experience centre at Narayanchaur, Naxal, offering product discovery, test rides, and dedicated after-sales support for F77 owners.",
              },
              {
                title: "Zero-emission performance",
                description:
                  "A fully electric platform engineered for high performance, contributing to VOITH's broader commitment to clean mobility across scooters, motorcycles, and passenger vehicles.",
              },
            ],
            lineupLabel: "Models available in Nepal",
            lineup: [
              { category: "Electric motorcycle", items: ["Ultraviolette F77"] },
            ],
            locationsLabel: "Experience centre",
            locations: [
              {
                name: "UV Space Pod, Naxal",
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
    {
      slug: "vaidya-energy",
      mark: "VE",
      name: "Vaidya Energy",
      role: "Ather Energy · EV division · Est. 2023",
      image: "/brands/vaidya-energy.png",
      description:
        "VOITH's EV and mobility division, driving Nepal's electric transition, home to Ather Energy, Nepal's leading electric scooter brand, and a growing Ather Grid fast-charging network.",
      detail: {
        established: "EV division launched · 2023",
        origin: "VOITH EV & mobility division",
        intro: [
          "Vaidya Energy is VOITH's EV and mobility division, driving Nepal's transition to electric mobility. As the authorised distributor for Ather Energy, it oversees sales, distribution, service management, charging infrastructure, and after-sales support across the country.",
          "Ather Nepal brings Ather Energy's smart, high-performance electric scooters to Nepal, offering advanced battery technology, fast charging, and a premium riding experience. The brand focuses on sustainable mobility, strong after-sales support, and building a reliable charging ecosystem to accelerate Nepal's shift toward clean electric transportation.",
          "Ather Energy, Nepal's leading electric scooter brand and Best Stall winner at NADA 2024, is supported by a growing nationwide network of experience centres, service centres, and Ather Grid fast-chargers spanning Kathmandu, Pokhara, Chitwan, Butwal, Itahari, Janakpur, and Birtamod.",
          "In October 2024, Ather opened its first experience centre in Kathmandu, marking its official entry into Nepal's electric-mobility market. Vaidya Energy's team has since proven EV capability on Himalayan routes, including Nepal's first long-distance EV journey from Kathmandu to Kailash Manasarovar.",
        ],
        stats: [
          { value: "NADA", label: "Best Stall 2024" },
          { value: "30+", label: "Ather Grid chargers" },
          { value: "2023", label: "Launched in Nepal" },
        ],
        highlights: [
          {
            title: "Best Stall at NADA 2024",
            description:
              "Ather took Best Stall at Nepal's premier auto show, cementing its position as the country's leading electric scooter brand and validating Vaidya Energy's go-to-market strategy.",
          },
          {
            title: "Kathmandu to Kailash, EV first",
            description:
              "Nepal's first long-distance EV journey proved electric scooters can perform in Himalayan conditions, a landmark demonstration of Vaidya Energy's product and charging infrastructure.",
          },
          {
            title: "Nationwide charging network",
            description:
              "Ather Grid fast-chargers and AirCharge stations across major cities, building the charging backbone Nepal needs for mass EV adoption.",
          },
        ],
      },
      children: [
        {
          slug: "ather",
          mark: "AT",
          name: "Ather Energy",
          role: "Electric scooters, India",
          image: "/brands/ather_energy_hero.webp",
          logo: "/brands/ather_energy_logo.png",
          website: "https://www.atherenergy.com.np",
          description:
            "Nepal's leading electric scooter brand, connected, performance-oriented EVs backed by the Ather Grid charging network.",
          detail: {
            established: "Ather in Nepal · November 2023",
            origin: "Ather Energy, India",
            intro: [
              "Ather Energy is an advanced electric scooter brand from India, known for its connected mobility technology, smart features, and performance-oriented design. In Nepal, Ather was officially introduced in November 2023 under the VOITH Organization group through its EV and mobility division, Vaidya Energy.",
              "In October 2024 the brand opened its first experience center in Kathmandu, marking its official entry into Nepal's electric-mobility market. Vaidya Energy serves as the authorised distributor, overseeing sales, distribution, service management, charging infrastructure, and after-sales support nationwide.",
              "The Ather 450S, 450X, and Rizta form the core lineup, connected, performance-oriented scooters backed by the Ather Grid charging network and a growing service footprint from Tinkune to Birtamod.",
            ],
            stats: [
              { value: "Nov 2023", label: "Launched in Nepal" },
              { value: "3", label: "Scooter models" },
              { value: "10+", label: "Service centres" },
              { value: "4+", label: "Experience & charging hubs" },
            ],
            highlights: [
              {
                title: "Connected smart scooters",
                description:
                  "Ather 450S, 450X, and Rizta feature connected mobility technology, smart dashboards, and performance-oriented design, setting the standard for premium EV scooters in Nepal.",
              },
              {
                title: "Open 24/7 experience centres",
                description:
                  "Ather Space centres in Naxal and Jhamsikhel operate around the clock, making EV ownership accessible and visible in Nepal's most active urban corridors.",
              },
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
                name: "Ather Energy Service Center, Tinkune",
                kind: "Service Center",
                address: "Tinkune, Kathmandu",
                phone: "9851356195",
                hours: "10:00 AM – 6:00 PM",
              },
              {
                name: "Ather Energy Service Center, Sallaghari",
                kind: "Service Center",
                address: "Sallaghari, Bhaktapur",
                phone: "9851356195",
                hours: "10:00 AM – 6:00 PM",
              },
              {
                name: "Ather Space Service Center, Satdobato",
                kind: "Service Center",
                address: "Satdobato, opposite Patan Industrial Estate",
                phone: "9851356195",
                hours: "10:00 AM – 6:00 PM",
              },
              {
                name: "Ather Energy Service Center, Chitwan",
                kind: "Service Center",
                address: "Astha Chowk, Chitwan",
                phone: "9869308240",
                hours: "10:00 AM – 6:00 PM",
              },
              {
                name: "Ather Energy Service Center, Pokhara",
                kind: "Service Center",
                address: "Near Pokhara Industrial Estate",
                phone: "9856007979",
                hours: "10:00 AM – 6:00 PM",
              },
              {
                name: "Ather Energy Service Center, Butwal",
                kind: "Service Center",
                address: "Kalikanagar, Butwal",
                phone: "9851402391",
                hours: "10:00 AM – 6:00 PM",
              },
              {
                name: "Ather Energy Service Center, Itahari",
                kind: "Service Center",
                address: "Kheti Khola, Paschim Line, Itahari",
                phone: "9851406109",
                hours: "10:00 AM – 6:00 PM",
              },
              {
                name: "Ather Energy Service Center, Janakpur",
                kind: "Service Center",
                address: "Mills Area, Janakpur-11, Madhesh Pradesh",
                phone: "985-4086430",
                hours: "10:00 AM – 6:00 PM",
              },
              {
                name: "Ather Service Center, Birtamod",
                kind: "Service Center",
                address: "Ram Chowk, Birtamod",
                phone: "984-0068644",
                hours: "10:00 AM – 6:00 PM",
              },
              {
                name: "Ather Space Experience Center, Naxal",
                kind: "Experience Center",
                address: "Naxal, Kathmandu",
                phone: "9851354103",
                hours: "Open 24 / 7",
              },
              {
                name: "Ather Space Experience Center, Jhamsikhel",
                kind: "Experience Center",
                address: "Square Hotel, Jhamsikhel",
                phone: "9851354103",
                hours: "Open 24 / 7",
              },
              {
                name: "AirCharge Charging Station, Satdobato",
                kind: "Charging Station",
                address: "Satdobato, Lalitpur",
                phone: "9851354103",
                hours: "Open 24 / 7",
              },
              {
                name: "Charging Station, Kalanki",
                kind: "Charging Station",
                address: "Bhat-Bhateni, Kalanki",
                phone: "9851354103",
                hours: "7:00 AM – 8:00 PM",
              },
            ],
          },
        },
      ],
    },
  ],
  highlights: [
    {
      title: "Kathmandu to Kailash, 2024",
      description:
        "Nepal's first long-distance EV journey took Ather scooters from Kathmandu to Kailash Manasarovar, proving electric mobility in the Himalayas.",
    },
    {
      title: "Toyota Women's Rally, since 2004",
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
    "From tiger taxis in 1960s Kathmandu to electric scooters charging across the country today, mobility is how VOITH meets every generation.",
};
