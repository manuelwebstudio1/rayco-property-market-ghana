export type PropertyCategory = "buy" | "rent" | "land" | "commercial";
export type PropertyType =
  | "House"
  | "Apartment"
  | "Villa"
  | "Townhouse"
  | "Land"
  | "Office"
  | "Shop"
  | "Warehouse";
export type PropertyStatus = "For Sale" | "For Rent";

export type Property = {
  id: string;
  title: string;
  type: PropertyType;
  category: PropertyCategory;
  status: PropertyStatus;
  location: string;
  locationKey: string;
  price: number;
  pricePeriod: "month" | null;
  bedrooms: number | null;
  bathrooms: number | null;
  size: number;
  sizeUnit: "sq ft" | "acres";
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  features: string[];
  featured: boolean;
};

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    id: "labone-5bed-residence",
    title: "5 Bedroom Executive Residence",
    type: "House",
    category: "buy",
    status: "For Sale",
    location: "Labone, Accra",
    locationKey: "labone",
    price: 5800000,
    pricePeriod: null,
    bedrooms: 5,
    bathrooms: 5,
    size: 4100,
    sizeUnit: "sq ft",
    image: img("photo-1605276374104-dee2a0ed3cd6"),
    gallery: [
      img("photo-1605276374104-dee2a0ed3cd6"),
      img("photo-1600566753376-12c8ab7fb75b"),
      img("photo-1600210491369-e753d80a41f3"),
      img("photo-1600047509782-20d39509f26d"),
    ],
    description:
      "A substantial five-bedroom residence in Labone, suited to a family or an executive household that wants a central Accra address. Rayco can arrange viewings for local buyers and multinational assignees relocating to Ghana.",
    amenities: ["Walled compound", "Staff quarters", "Covered parking", "Backup power", "Borehole"],
    features: ["Formal living room", "Study", "Covered terrace", "En-suite bedrooms"],
    featured: true,
  },
  {
    id: "ridge-3bed-apartment",
    title: "Serviced 3 Bedroom Apartment",
    type: "Apartment",
    category: "rent",
    status: "For Rent",
    location: "Ridge, Accra",
    locationKey: "ridge",
    price: 9500,
    pricePeriod: "month",
    bedrooms: 3,
    bathrooms: 3,
    size: 1750,
    sizeUnit: "sq ft",
    image: img("photo-1560185127-6ed189bf02f4"),
    gallery: [
      img("photo-1560185127-6ed189bf02f4"),
      img("photo-1560184897-ae75f418493e"),
      img("photo-1560448075-bb485b067938"),
      img("photo-1502005097973-6a7082348e28"),
    ],
    description:
      "A well-finished three-bedroom apartment on Ridge, close to ministries, hotels and the city centre. Practical for professionals and multinational staff who need a managed, central home.",
    amenities: ["24-hour security", "Standby generator", "Lift", "Assigned parking", "Water reservoir"],
    features: ["Balcony", "Fitted kitchen", "Air conditioning", "Visitor washroom"],
    featured: true,
  },
  {
    id: "trasacco-4bed-villa",
    title: "4 Bedroom Garden Villa",
    type: "Villa",
    category: "buy",
    status: "For Sale",
    location: "Trasacco Valley, Accra",
    locationKey: "trasacco",
    price: 7200000,
    pricePeriod: null,
    bedrooms: 4,
    bathrooms: 5,
    size: 3900,
    sizeUnit: "sq ft",
    image: img("photo-1600585152220-90363fe7e115"),
    gallery: [
      img("photo-1600585152220-90363fe7e115"),
      img("photo-1600047509358-9dc75590d1e5"),
      img("photo-1600573472591-ee6981cf35b6"),
      img("photo-1512917774080-9991f1c4c750"),
    ],
    description:
      "A four-bedroom villa in Trasacco Valley with a private garden and a quiet gated setting. Presented for clients who want space, security and a recognised Accra neighbourhood.",
    amenities: ["Gated community", "Swimming pool", "Double garage", "Garden irrigation", "CCTV"],
    features: ["Open-plan living", "Walk-in closet", "Outdoor lounge", "Guest suite"],
    featured: true,
  },
  {
    id: "airport-hills-2bed",
    title: "Modern 2 Bedroom Apartment",
    type: "Apartment",
    category: "rent",
    status: "For Rent",
    location: "Airport Hills, Accra",
    locationKey: "airport-hills",
    price: 6500,
    pricePeriod: "month",
    bedrooms: 2,
    bathrooms: 2,
    size: 1150,
    sizeUnit: "sq ft",
    image: img("photo-1616594039964-ae9021a400a0"),
    gallery: [
      img("photo-1616594039964-ae9021a400a0"),
      img("photo-1560448204-603b3fc33ddc"),
      img("photo-1493809842364-82840c0156b0"),
      img("photo-1560185007-cde436f6a4d0"),
    ],
    description:
      "A bright two-bedroom apartment in Airport Hills, convenient for the airport, shops and the Accra–Tema corridor. A straightforward option for a couple, a small family or a visiting professional.",
    amenities: ["Security", "Parking", "Shared generator", "Water supply", "Gym access"],
    features: ["Open kitchen", "Built-in wardrobes", "City views", "Tiled floors"],
    featured: true,
  },
  {
    id: "cantonments-penthouse",
    title: "Furnished 3 Bedroom Penthouse",
    type: "Apartment",
    category: "rent",
    status: "For Rent",
    location: "Cantonments, Accra",
    locationKey: "cantonments",
    price: 28000,
    pricePeriod: "month",
    bedrooms: 3,
    bathrooms: 3,
    size: 2400,
    sizeUnit: "sq ft",
    image: img("photo-1600566753376-12c8ab7fb75b"),
    gallery: [
      img("photo-1600566753376-12c8ab7fb75b"),
      img("photo-1600210491369-e753d80a41f3"),
      img("photo-1502005097973-6a7082348e28"),
      img("photo-1560185127-6ed189bf02f4"),
    ],
    description:
      "A furnished penthouse in Cantonments, ready for an executive household or a multinational posting. Rayco can coordinate viewings and occupancy timelines with your relocation brief.",
    amenities: ["Furnished", "Generator", "Secure parking", "DSTV ready", "Concierge"],
    features: ["Roof terrace", "Formal dining", "Study nook", "Premium finishes"],
    featured: true,
  },
  {
    id: "achimota-4bed-house",
    title: "Contemporary 4 Bedroom House",
    type: "House",
    category: "buy",
    status: "For Sale",
    location: "Achimota, Accra",
    locationKey: "achimota",
    price: 2450000,
    pricePeriod: null,
    bedrooms: 4,
    bathrooms: 4,
    size: 2300,
    sizeUnit: "sq ft",
    image: img("photo-1600047509358-9dc75590d1e5"),
    gallery: [
      img("photo-1600047509358-9dc75590d1e5"),
      img("photo-1600573472591-ee6981cf35b6"),
      img("photo-1600047509782-20d39509f26d"),
      img("photo-1605276374104-dee2a0ed3cd6"),
    ],
    description:
      "A contemporary four-bedroom house in Achimota with a private compound and practical living spaces. Well placed for households that want access to the N1 without living in the inner city.",
    amenities: ["Walled compound", "Parking for 3 cars", "Kitchen pantry", "Backup water"],
    features: ["High ceilings", "Family lounge", "Outdoor kitchen space", "Guest room"],
    featured: false,
  },
  {
    id: "haatso-townhouse",
    title: "3 Bedroom Townhouse",
    type: "Townhouse",
    category: "rent",
    status: "For Rent",
    location: "Haatso, Accra",
    locationKey: "haatso",
    price: 7500,
    pricePeriod: "month",
    bedrooms: 3,
    bathrooms: 3,
    size: 1900,
    sizeUnit: "sq ft",
    image: img("photo-1600047509782-20d39509f26d"),
    gallery: [
      img("photo-1600047509782-20d39509f26d"),
      img("photo-1600585152220-90363fe7e115"),
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1600566753376-12c8ab7fb75b"),
    ],
    description:
      "A three-bedroom townhouse in a quiet Haatso compound. Family-friendly layout with parking and easy access to Legon, Madina and the eastern Accra corridor.",
    amenities: ["Gated compound", "Generator", "Parking", "Borehole", "Security"],
    features: ["Two living areas", "Patio", "Fitted wardrobes", "Store room"],
    featured: false,
  },
  {
    id: "abokobi-residential-plot",
    title: "Residential Plot, Abokobi",
    type: "Land",
    category: "land",
    status: "For Sale",
    location: "Abokobi, Accra",
    locationKey: "abokobi",
    price: 620000,
    pricePeriod: null,
    bedrooms: null,
    bathrooms: null,
    size: 0.35,
    sizeUnit: "acres",
    image: img("photo-1500382017468-9049fed747ef"),
    gallery: [
      img("photo-1500382017468-9049fed747ef"),
      img("photo-1464146072230-91cabc968266"),
      img("photo-1472214103451-9374bd1c798e"),
      img("photo-1449844908441-8829872d2607"),
    ],
    description:
      "A surveyed residential plot in Abokobi, suitable for a private home. Rayco will help you review access, boundaries and intended use before you commit.",
    amenities: ["Road access", "Surveyed plot", "Nearby utilities"],
    features: ["Quiet street", "Rising residential area", "Clear boundaries"],
    featured: false,
  },
  {
    id: "airport-city-office",
    title: "Corporate Office Floor",
    type: "Office",
    category: "commercial",
    status: "For Rent",
    location: "Airport City, Accra",
    locationKey: "airport-hills",
    price: 32000,
    pricePeriod: "month",
    bedrooms: null,
    bathrooms: 3,
    size: 2800,
    sizeUnit: "sq ft",
    image: img("photo-1497366754035-16d5aca96d2c"),
    gallery: [
      img("photo-1497366754035-16d5aca96d2c"),
      img("photo-1497366216548-37526070297c"),
      img("photo-1524758631624-e2822e304c36"),
      img("photo-1486406146926-c627a92ad1ab"),
    ],
    description:
      "A ready office floor in Airport City for a professional firm or a multinational that needs a central Accra presence. Meeting rooms, reception and reliable power are in place.",
    amenities: ["Reception", "Standby power", "Parking", "Air conditioning", "Fibre ready"],
    features: ["Open work area", "Boardroom", "Kitchenette", "Client lounge"],
    featured: false,
  },
  {
    id: "weija-family-house",
    title: "3 Bedroom Family House",
    type: "House",
    category: "buy",
    status: "For Sale",
    location: "Weija, Accra",
    locationKey: "weija",
    price: 1150000,
    pricePeriod: null,
    bedrooms: 3,
    bathrooms: 3,
    size: 1650,
    sizeUnit: "sq ft",
    image: img("photo-1570129477492-45c003edd2be"),
    gallery: [
      img("photo-1570129477492-45c003edd2be"),
      img("photo-1568605114967-8130f3a36994"),
      img("photo-1600047509358-9dc75590d1e5"),
      img("photo-1599809275671-b5942cabc7a2"),
    ],
    description:
      "A practical three-bedroom family house in Weija, with a compound and straightforward access toward the Accra–Cape Coast corridor. A considered option for a first home or a longer-term hold.",
    amenities: ["Compound", "Parking", "Water tank", "Security bars"],
    features: ["Dining area", "Porch", "Store room", "Outdoor kitchen space"],
    featured: false,
  },
  {
    id: "community-18-warehouse",
    title: "Warehouse with Loading Yard",
    type: "Warehouse",
    category: "commercial",
    status: "For Rent",
    location: "Community 18, Tema",
    locationKey: "community-18",
    price: 18500,
    pricePeriod: "month",
    bedrooms: null,
    bathrooms: 2,
    size: 9500,
    sizeUnit: "sq ft",
    image: img("photo-1586528116311-ad8dd3c8310d"),
    gallery: [
      img("photo-1586528116311-ad8dd3c8310d"),
      img("photo-1553413077-190dd305871c"),
      img("photo-1587293852726-70cdb56c2866"),
      img("photo-1565610222536-ef125c59da2e"),
    ],
    description:
      "A warehouse with a loading yard in Tema Community 18. Suitable for distribution, storage or light operations close to the port and the motorway.",
    amenities: ["Loading bay", "Yard parking", "Security post", "Three-phase power"],
    features: ["High clearance", "Office annex", "Walled perimeter"],
    featured: false,
  },
  {
    id: "osu-showroom",
    title: "Street-Front Showroom",
    type: "Shop",
    category: "commercial",
    status: "For Rent",
    location: "Osu, Accra",
    locationKey: "labone",
    price: 9000,
    pricePeriod: "month",
    bedrooms: null,
    bathrooms: 1,
    size: 720,
    sizeUnit: "sq ft",
    image: img("photo-1441986300917-64674bd600d8"),
    gallery: [
      img("photo-1441986300917-64674bd600d8"),
      img("photo-1441984904996-e0b6ba687e04"),
      img("photo-1472851294608-062f824d29cc"),
      img("photo-1556742049-0cfed4f6a45d"),
    ],
    description:
      "A visible ground-floor showroom on a busy Osu stretch. Suitable for retail, a brand outlet or a service business that needs walk-in traffic.",
    amenities: ["Street frontage", "Shutters", "Power", "Water"],
    features: ["Display windows", "Rear store", "Single washroom"],
    featured: false,
  },
  {
    id: "east-legon-hills-land",
    title: "Development Land, East Legon Hills",
    type: "Land",
    category: "land",
    status: "For Sale",
    location: "East Legon Hills, Accra",
    locationKey: "trasacco",
    price: 1400000,
    pricePeriod: null,
    bedrooms: null,
    bathrooms: null,
    size: 0.6,
    sizeUnit: "acres",
    image: img("photo-1628624747186-a941c476b7ef"),
    gallery: [
      img("photo-1628624747186-a941c476b7ef"),
      img("photo-1500382017468-9049fed747ef"),
      img("photo-1464146072230-91cabc968266"),
      img("photo-1472214103451-9374bd1c798e"),
    ],
    description:
      "Six-tenths of an acre in East Legon Hills, suitable for a private residence or a small development. Growing neighbourhood infrastructure with road frontage.",
    amenities: ["Road frontage", "Surveyed", "Nearby utilities"],
    features: ["Development potential", "Rectangular shape", "Quiet approach road"],
    featured: false,
  },
  {
    id: "dzorwulu-family-house",
    title: "4 Bedroom Family House",
    type: "House",
    category: "buy",
    status: "For Sale",
    location: "Dzorwulu, Accra",
    locationKey: "cantonments",
    price: 3100000,
    pricePeriod: null,
    bedrooms: 4,
    bathrooms: 4,
    size: 2600,
    sizeUnit: "sq ft",
    image: img("photo-1600573472591-ee6981cf35b6"),
    gallery: [
      img("photo-1600573472591-ee6981cf35b6"),
      img("photo-1605276374104-dee2a0ed3cd6"),
      img("photo-1600585152220-90363fe7e115"),
      img("photo-1600047509358-9dc75590d1e5"),
    ],
    description:
      "A four-bedroom family house in Dzorwulu with a private garden and easy access to international schools and the city. A considered home for a household that wants an established Accra neighbourhood.",
    amenities: ["Private garden", "Generator", "Parking", "Security gate", "Borehole"],
    features: ["Two living rooms", "Maid's room", "Study", "Covered patio"],
    featured: false,
  },
];

export const propertyTypes: PropertyType[] = [
  "House",
  "Apartment",
  "Villa",
  "Townhouse",
  "Land",
  "Office",
  "Shop",
  "Warehouse",
];

export const searchTabs: { id: PropertyCategory; label: string }[] = [
  { id: "buy", label: "Buy" },
  { id: "rent", label: "Rent" },
  { id: "land", label: "Land" },
  { id: "commercial", label: "Commercial" },
];

export const priceRanges: Record<
  PropertyCategory,
  { label: string; min: number; max: number }[]
> = {
  buy: [
    { label: "Under GH₵ 1,000,000", min: 0, max: 1000000 },
    { label: "GH₵ 1M – 2.5M", min: 1000000, max: 2500000 },
    { label: "GH₵ 2.5M – 5M", min: 2500000, max: 5000000 },
    { label: "Above GH₵ 5M", min: 5000000, max: Infinity },
  ],
  rent: [
    { label: "Under GH₵ 5,000", min: 0, max: 5000 },
    { label: "GH₵ 5,000 – 10,000", min: 5000, max: 10000 },
    { label: "GH₵ 10,000 – 20,000", min: 10000, max: 20000 },
    { label: "Above GH₵ 20,000", min: 20000, max: Infinity },
  ],
  land: [
    { label: "Under GH₵ 400,000", min: 0, max: 400000 },
    { label: "GH₵ 400,000 – 1M", min: 400000, max: 1000000 },
    { label: "Above GH₵ 1M", min: 1000000, max: Infinity },
  ],
  commercial: [
    { label: "Under GH₵ 10,000 / mo", min: 0, max: 10000 },
    { label: "GH₵ 10,000 – 20,000 / mo", min: 10000, max: 20000 },
    { label: "Above GH₵ 20,000 / mo", min: 20000, max: Infinity },
  ],
};

export function getPropertyById(id: string) {
  return properties.find((p) => p.id === id);
}

export function getFeaturedProperties() {
  return properties.filter((p) => p.featured).slice(0, 4);
}

export function getRelatedProperties(property: Property, limit = 3) {
  return properties
    .filter((p) => p.id !== property.id && (p.locationKey === property.locationKey || p.category === property.category))
    .slice(0, limit);
}
