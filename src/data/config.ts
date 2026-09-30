/**
 * DS TRAVELS INDORE — Central Configuration File
 * Refined for Light Luxury Travel Theme
 * Warm Ivory Paper (#F7F4EE), Deep Olive (#20221F & #27352F), Champagne Gold (#B89452)
 */

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  highlights: string[];
  routeNote: string;
  approxDistanceNote: string;
  imageAlt: string;
  imageUrl: string;
  accentColor: string;
  featured?: boolean;
}

export interface VehicleOption {
  id: string;
  category: 'SMALL' | 'SEDAN' | 'SUV' | 'LARGE GROUPS';
  namePlaceholder: string;
  description: string;
  idealFor: string;
  imageUrl: string;
  specs: {
    passengers: string;
    luggage: string;
    ac: string;
    comfortLevel: string;
  };
  features: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  badge: string;
  imageUrl: string;
}

export const BUSINESS_CONFIG = {
  brandName: "DS Travels",
  brandLocation: "Indore",
  fullName: "DS Travels Indore",
  
  // Real verified contact details
  contact: {
    phone: "9630782056",
    displayPhone: "+91 96307 82056",
    whatsappPhone: "919630782056",
    whatsappDefaultMessage: "Hello DS Travels Indore, I would like to enquire about taxi service and travel packages.",
    // Configurable email placeholder
    email: "contact@dstravelsindore.com",
    emailPlaceholderNote: "Official business email will be updated upon client confirmation",
    location: "Indore, Madhya Pradesh",
    operatingPermit: "All India Permit",
  },

  // Color tokens reference
  theme: {
    bgPrimary: "#F7F4EE",
    bgSecondary: "#EFE9DE",
    bgCard: "#FFFDF9",
    textPrimary: "#20221F",
    textSecondary: "#686963",
    gold: "#B89452",
    deepOlive: "#27352F",
    warmAccent: "#A96F52",
    borderSubtle: "rgba(32, 34, 31, 0.12)",
  },

  // Trust items for editorial strip
  trustStripItems: [
    { title: "ALL INDIA PERMIT", desc: "Inter-state authorized" },
    { title: "LOCAL TAXI", desc: "Indore city transfers" },
    { title: "OUTSTATION", desc: "Flexible round & one-way" },
    { title: "MULTIPLE VEHICLES", desc: "Small cars to large vans" },
    { title: "INDORE BASED", desc: "Central MP dispatch" },
  ],

  // Services offered with rich photography
  services: [
    {
      id: "local-taxi",
      number: "01",
      title: "LOCAL TAXI",
      tagline: "Point-to-point & city travel",
      description: "For comfortable travel around Indore and nearby destinations, daily city errands, station or airport transfers.",
      features: [
        "Airport & Railway Station transfers",
        "Full-day & Half-day city packages",
        "Timely doorstep pickup across Indore",
        "Clean, chilled air-conditioned vehicles",
      ],
      badge: "Indore & Vicinity",
      imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "outstation-taxi",
      number: "02",
      title: "OUTSTATION TAXI",
      tagline: "Intercity & pilgrimage tours",
      description: "Comfortable long-distance travel with flexible journey options, one-way trips, and round-trip pilgrimage excursions.",
      features: [
        "One-way & round-trip flexible options",
        "Sacred pilgrimage routes (Ujjain, Omkareshwar)",
        "Experienced highway chauffeurs",
        "Flexible halts & customized travel pacing",
      ],
      badge: "State & Regional",
      imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "all-india-travel",
      number: "03",
      title: "ALL INDIA TAXI",
      tagline: "Nationwide journey capability",
      description: "Travel across India with verified All India Permit taxi services. Ideal for multi-state tours, corporate travel, and family vacations.",
      features: [
        "Certified All India Commercial Permit",
        "Long-distance touring comfort",
        "Inter-state toll & tax compliance support",
        "Multi-day continuous travel itineraries",
      ],
      badge: "Pan-India Coverage",
      imageUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
    },
  ] as ServiceItem[],

  // Local destinations currently offered
  destinations: [
    {
      id: "ujjain",
      name: "Ujjain / Mahakaleshwar",
      subtitle: "The Sacred Jyotirlinga City",
      tagline: "Indore to Mahakaleshwar Temple",
      description: "Home to the revered Mahakaleshwar Jyotirlinga, Shri Mahakal Lok corridor, and the sacred Shipra River ghats. One of the most sought-after spiritual journeys from Indore.",
      highlights: [
        "Direct highway pickup from anywhere in Indore",
        "Morning Bhasma Aarti and Darshan schedules accommodated",
        "Customizable round trips or multi-point darshan routes",
      ],
      routeNote: "Smooth highway connectivity via Indore-Ujjain road",
      approxDistanceNote: "Approx. 55 km from Indore city center",
      imageAlt: "Mahakaleshwar temple spire at twilight",
      imageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80",
      accentColor: "#B89452",
      featured: true,
    },
    {
      id: "omkareshwar",
      name: "Omkareshwar",
      subtitle: "Island Shrine on the Narmada",
      tagline: "Indore to Omkareshwar Jyotirlinga",
      description: "Situated on Mandhata island shaped like the sacred Om symbol, this ancient Jyotirlinga temple offers scenic views along the holy Narmada River.",
      highlights: [
        "Scenic drive through the Nimar valley",
        "Comfortable pilgrimage day trips or stopovers",
        "Flexible halt timing for Parikrama and temple queues",
      ],
      routeNote: "Connected via Indore-Khandwa highway corridor",
      approxDistanceNote: "Approx. 80 km from Indore",
      imageAlt: "Omkareshwar island temple and tranquil Narmada River",
      imageUrl: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
      accentColor: "#A96F52",
      featured: false,
    },
    {
      id: "maheshwar",
      name: "Maheshwar",
      subtitle: "Ahilya Fort & Narmada Ghats",
      tagline: "Indore to Ahilya Bai Heritage",
      description: "Famed for its imposing stone fort, magnificent river ghats on the Narmada, and centuries-old handloom weaving traditions established by Queen Ahilyabai Holkar.",
      highlights: [
        "Heritage architecture and panoramic riverfront ghats",
        "Ideal day excursion with calm scenic travel",
        "Spacious luggage accommodation for handloom purchases",
      ],
      routeNote: "Accessible via National Highway corridors",
      approxDistanceNote: "Approx. 90 km from Indore",
      imageAlt: "Ahilya Fort stone ghats along the Narmada River",
      imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      accentColor: "#686963",
      featured: false,
    },
    {
      id: "mandav",
      name: "Mandav",
      subtitle: "The Historic City of Joy",
      tagline: "Indore to Jahaz Mahal & Afghan Ruins",
      description: "A ruined fortress city perched on the Vindhya range, celebrated for Jahaz Mahal (Ship Palace), Hindola Mahal, and the romantic legends of Baz Bahadur and Rani Roopmati.",
      highlights: [
        "Picturesque hilltop drive and ancient palace complexes",
        "Perfect weekend getaway and monsoon heritage destination",
        "Custom itinerary with stops across all major monuments",
      ],
      routeNote: "Scenic route passing through Dhar and the plateau slopes",
      approxDistanceNote: "Approx. 95 km from Indore",
      imageAlt: "Historic Jahaz Mahal and ancient reservoirs in Mandav",
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      accentColor: "#B89452",
      featured: false,
    },
  ] as Destination[],

  // Vehicle Categories (Data-driven, placeholder names without inventing specific models)
  vehicles: [
    {
      id: "cat-small",
      category: "SMALL",
      namePlaceholder: "Vehicle Model",
      description: "Agile, fuel-efficient, and comfortable option designed for quick city commutes, solo travelers, or couple journeys.",
      idealFor: "City runs, local market trips, single or couple travelers",
      imageUrl: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
      specs: {
        passengers: "Up to 3-4 Passengers",
        luggage: "1-2 Standard Bags",
        ac: "Full Climate Control AC",
        comfortLevel: "Comfort Standard",
      },
      features: [
        "Clean, sanitized interior",
        "Compact footprint for easy city navigation",
        "Punctual point-to-point service",
        "Trained professional chauffeur",
      ],
    },
    {
      id: "cat-sedan",
      category: "SEDAN",
      namePlaceholder: "Vehicle Model",
      description: "Smooth highway ride with enhanced legroom and spacious boot space for airport transfers and outstation trips.",
      idealFor: "Family trips, executive business travel, outstation commutes",
      imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
      specs: {
        passengers: "Up to 4 Passengers",
        luggage: "2-3 Large Bags",
        ac: "High-Efficiency Chilled AC",
        comfortLevel: "Executive Comfort",
      },
      features: [
        "Enhanced rear legroom & cushioned seating",
        "Dedicated boot space for outstation luggage",
        "Highway stability for long drives",
        "Charging ports & mobile connectivity",
      ],
    },
    {
      id: "cat-suv",
      category: "SUV",
      namePlaceholder: "Vehicle Model",
      description: "Robust road presence, elevated seating, and ample room for families traveling together to pilgrimage centers and hills.",
      idealFor: "Family vacations, pilgrimage groups, long-distance touring",
      imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      specs: {
        passengers: "6-7 Passengers",
        luggage: "3-4 Large Bags",
        ac: "Dual AC / Multi-zone cooling",
        comfortLevel: "Premium Spacious Comfort",
      },
      features: [
        "Higher ground clearance for all road conditions",
        "Spacious 3-row flexible seating",
        "Ample luggage capacity with roof carrier option",
        "Smooth highway performance with All India Permit",
      ],
    },
    {
      id: "cat-large-groups",
      category: "LARGE GROUPS",
      namePlaceholder: "Vehicle Model",
      description: "Dedicated high-capacity vehicle designed for wedding parties, joint family yatras, corporate delegations, and group tours.",
      idealFor: "Group pilgrimages, wedding guest logistics, multi-family tours",
      imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
      specs: {
        passengers: "10+ Passengers (Configurable)",
        luggage: "Spacious Dedicated Luggage Bay",
        ac: "High-Capacity Cabin AC",
        comfortLevel: "Long-Haul Group Comfort",
      },
      features: [
        "Push-back reclining seats",
        "Dedicated luggage storage space",
        "Certified commercial highway permit",
        "Driver experienced with group itineraries",
      ],
    },
  ] as VehicleOption[],

  // 4 Core Benefits in "Why DS Travels"
  principles: [
    {
      title: "All India Permit",
      description: "Authorized for pan-India road travel, ensuring smooth inter-state crossing and hassle-free long-distance touring.",
    },
    {
      title: "Local Expertise",
      description: "Deep route familiarity with Malwa pilgrimage corridors, Indore city connections, and national highways.",
    },
    {
      title: "Comfortable Travel",
      description: "Well-maintained, clean, air-conditioned vehicles tailored to your journey length and group size.",
    },
    {
      title: "Flexible Journeys",
      description: "Prompt pickups, courteous chauffeurs, and customized itineraries from booking inquiry to trip completion.",
    },
  ],

  // 4-Step Journey Process (Section 16)
  processSteps: [
    {
      number: "01",
      title: "Tell Us Your Journey",
      description: "Select local city travel, pilgrimage tour, or outstation destination based on your schedule.",
    },
    {
      number: "02",
      title: "Choose Your Ride",
      description: "Pick from compact cars, executive sedans, spacious SUVs, or high-capacity group vans.",
    },
    {
      number: "03",
      title: "Confirm Your Trip",
      description: "Receive timely confirmation, route details, and transparent pricing directly from our desk.",
    },
    {
      number: "04",
      title: "Travel Comfortably",
      description: "Enjoy your seamless ride with professional chauffeur assistance and All India Permit.",
    },
  ],
};
