// Demo content for a fictional developer. Names, prices and dates are illustrative.
// Photos are Unsplash stand-ins, referenced by their CDN key.

export type PropertyType = "Apartment" | "Villa" | "Townhouse" | "Penthouse";
export type Status = "Off-plan" | "Ready";
export type Plan = "60/40" | "70/30" | "80/20" | "50/50" | "1% monthly" | "Post-handover";

export type Community = {
  slug: string;
  name: string;
  district: string;
  tagline: string;
  intro: string;
  highlights: string[];
  image: string;
  alt: string;
  map: { lat: number; lon: number };
};

export type Project = {
  slug: string;
  name: string;
  community: string;
  type: PropertyType;
  beds: [number, number];
  size: [number, number];
  priceFrom: number;
  handover: string;
  status: Status;
  plan: Plan;
  summary: string;
  description: string[];
  amenities: string[];
  images: { src: string; alt: string }[];
  branded?: string;
  launch?: boolean;
};

export const communities: Community[] = [
  {
    slug: "harbour-bay",
    name: "Harbour Bay",
    district: "Dubai Harbour",
    tagline: "A marina district with its own beach and a 2 km promenade.",
    intro:
      "Harbour Bay sits on the water between Dubai Marina and Palm Jumeirah. Towers step down to a public beach, a 300-berth marina and a promenade lined with cafés, so most errands are a walk rather than a drive.",
    highlights: [
      "Private beach for residents, 600 m long",
      "300-berth marina with yacht club",
      "Tram stop and taxi rank inside the district",
      "15 minutes to Dubai Internet City",
    ],
    image: "photo-1526495124232-a04e1849168c",
    alt: "Marina towers lit at dusk with traffic trails below",
    map: { lat: 25.092, lon: 55.14 },
  },
  {
    slug: "the-dunes-estate",
    name: "The Dunes Estate",
    district: "Dubailand",
    tagline: "Villas and townhouses around a 4 km lagoon trail.",
    intro:
      "A low-rise community of 1,800 homes built around swimmable lagoons, shaded cycle paths and two schools. Every villa backs onto green space or water, and the estate keeps cars to its outer ring.",
    highlights: [
      "4 km lagoon trail with swimmable beaches",
      "Two international schools on site",
      "Car-free inner streets",
      "25 minutes to Downtown Dubai",
    ],
    image: "photo-1613490493576-7fde63acd811",
    alt: "White modern villa beside a long swimming pool",
    map: { lat: 25.048, lon: 55.3 },
  },
  {
    slug: "creekside-heights",
    name: "Creekside Heights",
    district: "Dubai Creek",
    tagline: "City apartments beside a wildlife sanctuary and the old creek.",
    intro:
      "Creekside Heights faces the Ras Al Khor flamingo sanctuary on one side and the Downtown skyline on the other. It is the most affordable way into a Hom community, with studios and one-bedroom homes from AED 1.2M.",
    highlights: [
      "Views over the Ras Al Khor sanctuary",
      "Metro link planned for 2029",
      "Waterfront park and boardwalk",
      "10 minutes to Dubai International Airport",
    ],
    image: "photo-1582407947304-fd86f028f716",
    alt: "Glass residential towers against a clear blue sky",
    map: { lat: 25.2, lon: 55.345 },
  },
  {
    slug: "palm-crescent",
    name: "Palm Crescent",
    district: "Palm Jumeirah",
    tagline: "Beachfront villas and apartments on the outer crescent.",
    intro:
      "Our homes on Palm Jumeirah sit on the crescent that wraps the island, where every plot faces open sea. The collection is small: 64 villas and two low-rise residence buildings, each with its own beach access.",
    highlights: [
      "Direct beach access from every home",
      "Open sea views to the west",
      "Boat moorings for villa owners",
      "20 minutes to Dubai Marina by water taxi",
    ],
    image: "photo-1489516408517-0c0a15662682",
    alt: "Aerial view of Palm Jumeirah and its crescent over turquoise water",
    map: { lat: 25.1124, lon: 55.139 },
  },
  {
    slug: "skyline-quarter",
    name: "Skyline Quarter",
    district: "Downtown Dubai",
    tagline: "High-floor apartments within walking distance of the Burj Khalifa.",
    intro:
      "Skyline Quarter is our Downtown address: three towers on the boulevard, a short walk from Dubai Mall and the opera house. Homes start on the 20th floor, so most look straight at the fountain and the tower.",
    highlights: [
      "Five minutes on foot to Dubai Mall",
      "Homes from the 20th floor up",
      "Concierge and valet in every tower",
      "Metro station at the end of the boulevard",
    ],
    image: "photo-1580674684081-7617fbf3d745",
    alt: "Burj Khalifa and Downtown towers framed by palm trees",
    map: { lat: 25.1972, lon: 55.2744 },
  },
];

export const projects: Project[] = [
  {
    slug: "harbour-bay-residences",
    name: "Harbour Bay Residences",
    community: "harbour-bay",
    type: "Apartment",
    beds: [1, 4],
    size: [780, 3150],
    priceFrom: 1_850_000,
    handover: "Q4 2028",
    status: "Off-plan",
    plan: "60/40",
    launch: true,
    summary: "Two towers on the marina edge, every home with a sea-facing balcony.",
    description: [
      "Harbour Bay Residences is phase two of the district: two 38-storey towers set back from the marina, with homes from one to four bedrooms.",
      "Every apartment has a balcony that faces the water. Kitchens come fitted with Gaggenau appliances, and four-bedroom homes include a maid's room and a private lift lobby.",
    ],
    amenities: ["Infinity pool on level 40", "Residents' beach club", "Gym and spa", "Children's pool", "Co-working lounge", "Two parking spaces for 3–4 bed homes"],
    images: [
      { src: "photo-1526495124232-a04e1849168c", alt: "Marina towers at night" },
      { src: "photo-1600210492486-724fe5c67fb0", alt: "Bright living room with sofa and armchairs" },
      { src: "photo-1616594039964-ae9021a400a0", alt: "Bedroom with an upholstered bed and pendant light" },
    ],
  },
  {
    slug: "marea-penthouses",
    name: "Marea Penthouses",
    community: "harbour-bay",
    type: "Penthouse",
    beds: [4, 5],
    size: [6400, 9800],
    priceFrom: 14_500_000,
    handover: "Q2 2029",
    status: "Off-plan",
    plan: "70/30",
    branded: "Maison Verre",
    summary: "Twelve full-floor penthouses with interiors by Maison Verre.",
    description: [
      "Twelve penthouses take the top floors of the Marea tower, one home per floor. Each has a private pool terrace and an unbroken view from the marina to the Burj Al Arab.",
      "Interiors are by the Paris glass and lighting house Maison Verre: hand-blown glass fittings, travertine floors and a kitchen in brushed brass.",
    ],
    amenities: ["Private pool terrace", "Dedicated lift and lobby", "Maison Verre interiors", "Wine room", "Four parking bays", "Butler service"],
    images: [
      { src: "photo-1518684079-3c830dcef090", alt: "Aerial view of the Burj Al Arab and the coast" },
      { src: "photo-1600607687939-ce8a6c25118c", alt: "Living room with a timber feature wall" },
      { src: "photo-1559599238-308793637427", alt: "Calm bedroom with a tufted headboard" },
    ],
  },
  {
    slug: "dune-villas",
    name: "Dune Villas",
    community: "the-dunes-estate",
    type: "Villa",
    beds: [4, 6],
    size: [4200, 7600],
    priceFrom: 6_200_000,
    handover: "Q3 2027",
    status: "Off-plan",
    plan: "1% monthly",
    launch: true,
    summary: "Detached villas on the lagoon trail, each with its own pool.",
    description: [
      "Dune Villas is the final release on the lagoon: 140 detached homes on plots of up to 9,000 sq ft, each with a private pool and a garden that opens onto the trail.",
      "The plan suits buyers who would rather spread the cost: 10% on booking, then 1% a month during construction and the balance on handover.",
    ],
    amenities: ["Private pool", "Lagoon-facing garden", "Roof terrace", "Two-car garage", "Solar-ready roof", "Smart home wiring"],
    images: [
      { src: "photo-1613490493576-7fde63acd811", alt: "White villa with a long pool" },
      { src: "photo-1600596542815-ffad4c1539a9", alt: "Contemporary villa beside a pool at dusk" },
      { src: "photo-1512917774080-9991f1c4c750", alt: "Two-storey villa with a terrace and pool" },
    ],
  },
  {
    slug: "sandstone-townhouses",
    name: "Sandstone Townhouses",
    community: "the-dunes-estate",
    type: "Townhouse",
    beds: [3, 4],
    size: [2350, 3100],
    priceFrom: 2_900_000,
    handover: "Ready now",
    status: "Ready",
    plan: "Post-handover",
    summary: "Finished three and four-bedroom townhouses, keys this month.",
    description: [
      "Sandstone is complete. Its 220 townhouses line the shaded streets of the estate's east side, two minutes from the school and the community pool.",
      "Buyers can move in on transfer and pay 40% of the price over three years after handover.",
    ],
    amenities: ["Private garden", "Community pool", "Covered parking for two cars", "Walk to two schools", "Shaded cycle paths", "Ready to move in"],
    images: [
      { src: "photo-1600566753190-17f0baa2a6c3", alt: "Timber-clad townhouse facade with lawn" },
      { src: "photo-1600047509807-ba8f99d2cdde", alt: "Modern two-storey home with timber and white render" },
      { src: "photo-1600585154340-be6161a56a0c", alt: "Home lit from inside at dusk under a large tree" },
    ],
  },
  {
    slug: "creekside-one",
    name: "Creekside One",
    community: "creekside-heights",
    type: "Apartment",
    beds: [1, 3],
    size: [690, 1850],
    priceFrom: 1_200_000,
    handover: "Q1 2028",
    status: "Off-plan",
    plan: "80/20",
    summary: "First homes at Creekside Heights, facing the flamingo sanctuary.",
    description: [
      "Creekside One is the first tower in the district, 32 floors of one to three-bedroom homes over a podium of shops and a supermarket.",
      "The 80/20 plan keeps the handover payment low: 80% is paid through construction, 20% when you collect the keys.",
    ],
    amenities: ["Sanctuary-view pool deck", "Gym", "Retail podium", "Children's play area", "Covered parking", "Boardwalk access"],
    images: [
      { src: "photo-1582407947304-fd86f028f716", alt: "Glass towers from street level" },
      { src: "photo-1600566753086-00f18fb6b3ea", alt: "Open-plan living room with a dog on the rug" },
      { src: "photo-1559599238-308793637427", alt: "Bedroom with soft grey linen" },
    ],
  },
  {
    slug: "crescent-grand-villas",
    name: "Crescent Grand Villas",
    community: "palm-crescent",
    type: "Villa",
    beds: [5, 7],
    size: [9200, 15400],
    priceFrom: 32_000_000,
    handover: "Q4 2027",
    status: "Off-plan",
    plan: "50/50",
    launch: true,
    summary: "Sixty-four beachfront villas on the outer crescent of the Palm.",
    description: [
      "Each villa sits on its own beach plot with a 25 m pool, a mooring and a guest house. Façades are in pale limestone and bronze-framed glass.",
      "Half is paid during construction and half on handover, which is scheduled for the last quarter of 2027.",
    ],
    amenities: ["Private beach", "25 m pool", "Boat mooring", "Guest house", "Cinema room", "Staff quarters"],
    images: [
      { src: "photo-1600585154526-990dced4db0d", alt: "Dark-clad villa lit at dusk" },
      { src: "photo-1564013799919-ab600027ffc6", alt: "Villa with verandas and a pool under palm trees" },
      { src: "photo-1571003123894-1f0594d2b5d9", alt: "Infinity pool between draped cabanas at sunset" },
    ],
  },
  {
    slug: "shoreline-residences",
    name: "Shoreline Residences",
    community: "palm-crescent",
    type: "Apartment",
    beds: [2, 4],
    size: [1550, 3900],
    priceFrom: 4_100_000,
    handover: "Ready now",
    status: "Ready",
    plan: "Post-handover",
    summary: "Low-rise beach apartments on the Palm, finished and handed over.",
    description: [
      "Two seven-storey buildings with 96 apartments between them, all facing the sea across a private beach and a resort-style pool.",
      "The buildings are complete, and a limited number of homes are available with 30% payable over two years after handover.",
    ],
    amenities: ["Private beach", "Resort pool and cabanas", "Beach restaurant", "Spa", "Valet parking", "Concierge"],
    images: [
      { src: "photo-1546412414-e1885259563a", alt: "Burj Al Arab seen from the beach at sunset" },
      { src: "photo-1566073771259-6a8506099945", alt: "Pool deck with loungers and a timber pavilion" },
      { src: "photo-1520250497591-112f2f40a3f4", alt: "Pool surrounded by palms and garden pavilions" },
    ],
  },
  {
    slug: "atelier-residences",
    name: "Atelier Residences",
    community: "skyline-quarter",
    type: "Apartment",
    beds: [2, 4],
    size: [1650, 4200],
    priceFrom: 5_800_000,
    handover: "Q2 2029",
    status: "Off-plan",
    plan: "70/30",
    branded: "Casa Lumen",
    summary: "Downtown apartments furnished by the Milan studio Casa Lumen.",
    description: [
      "Atelier Residences is a 54-storey tower on the boulevard, with interiors and furniture by the Milan design studio Casa Lumen.",
      "Every home is delivered furnished, down to the lighting and linen, and owners can join a managed rental programme run by the tower's concierge.",
    ],
    amenities: ["Furnished by Casa Lumen", "Sky lounge on level 50", "Lap pool", "Private screening room", "Managed rental programme", "Valet parking"],
    images: [
      { src: "photo-1597659840241-37e2b9c2f55f", alt: "Burj Khalifa facade at night" },
      { src: "photo-1616594039964-ae9021a400a0", alt: "Furnished bedroom with designer lighting" },
      { src: "photo-1600607687939-ce8a6c25118c", alt: "Living area with timber wall and grey sofa" },
    ],
  },
  {
    slug: "skyline-tower",
    name: "Skyline Tower",
    community: "skyline-quarter",
    type: "Apartment",
    beds: [1, 3],
    size: [820, 2100],
    priceFrom: 2_400_000,
    handover: "Ready now",
    status: "Ready",
    plan: "Post-handover",
    summary: "Finished homes with fountain views, five minutes from Dubai Mall.",
    description: [
      "Skyline Tower was completed in 2025. Its remaining one to three-bedroom homes are on floors 20 to 46, most facing the fountain and the Burj Khalifa.",
      "Ready homes can be bought with a mortgage or with 40% payable over three years after transfer.",
    ],
    amenities: ["Fountain views", "Pool and sun deck", "Gym", "Concierge", "Valet parking", "Walk to the metro"],
    images: [
      { src: "photo-1582672060674-bc2bd808a8b5", alt: "Burj Khalifa between palm fronds" },
      { src: "photo-1600210492486-724fe5c67fb0", alt: "Sunlit living room with large windows" },
      { src: "photo-1600566753086-00f18fb6b3ea", alt: "Open living space with wooden floor" },
    ],
  },
];

export const journal = [
  {
    date: "2026-11-04",
    title: "Phase two of Harbour Bay opens for registration",
    excerpt: "Two towers, 640 homes and the first release of four-bedroom apartments on the marina edge.",
    href: "/projects/harbour-bay-residences",
    image: "photo-1526495124232-a04e1849168c",
    alt: "Marina towers at dusk",
  },
  {
    date: "2026-10-18",
    title: "Keys handed over at Sandstone Townhouses",
    excerpt: "The first 120 families have moved in, three months ahead of the contract date.",
    href: "/projects/sandstone-townhouses",
    image: "photo-1600585154340-be6161a56a0c",
    alt: "Townhouse lit from inside at dusk",
  },
  {
    date: "2026-09-30",
    title: "How the 10-year Golden Visa works for property buyers",
    excerpt: "The AED 2M threshold, what counts towards it and how off-plan purchases qualify.",
    href: "/#invest",
    image: "photo-1528702748617-c64d49f918af",
    alt: "Camels on a Dubai beach with towers behind",
  },
];

export const stats = [
  { value: "2008", label: "Founded in Dubai" },
  { value: "24,600", label: "Homes handed over" },
  { value: "5", label: "Master communities" },
  { value: "9,200", label: "Homes under construction" },
];

export function communityBySlug(slug: string) {
  return communities.find((c) => c.slug === slug);
}

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectsIn(communitySlug: string) {
  return projects.filter((p) => p.community === communitySlug);
}

export type PlanStep = { share: string; title: string; detail: string };

export function planSteps(plan: Plan): PlanStep[] {
  switch (plan) {
    case "60/40":
      return [
        { share: "10%", title: "On booking", detail: "Reserves your home and signs the sale agreement." },
        { share: "50%", title: "During construction", detail: "Six instalments, each tied to a building milestone." },
        { share: "40%", title: "On handover", detail: "Paid in cash or with a mortgage when you collect the keys." },
      ];
    case "70/30":
      return [
        { share: "20%", title: "On booking", detail: "Reserves your home and signs the sale agreement." },
        { share: "50%", title: "During construction", detail: "Five instalments, each tied to a building milestone." },
        { share: "30%", title: "On handover", detail: "Paid in cash or with a mortgage when you collect the keys." },
      ];
    case "80/20":
      return [
        { share: "10%", title: "On booking", detail: "Reserves your home and signs the sale agreement." },
        { share: "70%", title: "During construction", detail: "Seven instalments, each tied to a building milestone." },
        { share: "20%", title: "On handover", detail: "A smaller final payment when you collect the keys." },
      ];
    case "50/50":
      return [
        { share: "20%", title: "On booking", detail: "Reserves your plot and signs the sale agreement." },
        { share: "30%", title: "During construction", detail: "Three instalments, each tied to a building milestone." },
        { share: "50%", title: "On handover", detail: "Paid in cash or with a mortgage when you collect the keys." },
      ];
    case "1% monthly":
      return [
        { share: "10%", title: "On booking", detail: "Reserves your villa and signs the sale agreement." },
        { share: "1%", title: "Every month", detail: "Fifty monthly payments of 1% while the villa is built." },
        { share: "40%", title: "On handover", detail: "Paid in cash or with a mortgage when you collect the keys." },
      ];
    case "Post-handover":
      return [
        { share: "20%", title: "On reservation", detail: "Reserves your home; the 4% DLD fee is paid at transfer." },
        { share: "40%", title: "On transfer", detail: "Title is registered in your name and you move in." },
        { share: "40%", title: "After handover", detail: "Spread over up to three years, interest-free." },
      ];
  }
}
