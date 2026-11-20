// AURÉA HAUTE PARFUMERIE — Master Product & Localization Catalog

export const BRAND = {
  name: "AURÉA",
  fullName: "AURÉA HAUTE PARFUMERIE",
  slogan: "SCENT IS PERSONAL",
  origin: "Grasse & Cairo",
  announcement: "COMPLIMENTARY COURIER DELIVERY IN CAIRO, GIZA & ALEXANDRIA OVER EGP 4,500",
  freeShippingThresholdEGP: 4500,
  currency: "EGP",
  usdRate: 49.50,
  phone: "+20 102 345 6789",
  email: "concierge@aurea-parfums.com",
  address: "15 El-Gezira Street, Building 4B, 3rd Floor, Apt 12, Zamalek, Cairo Governorate",
  landmark: "Facing Gezira Sporting Club",
  courier: "Bosta Express (24–48 Hours Delivery Guarantee)"
};

export const FRAGRANCES = [
  {
    id: "golden-amber",
    name: "Golden Amber",
    collection: "AURÉA PRIVATE ATELIER",
    concentration: "Eau de Parfum",
    concentrationPercent: "18–20%",
    mood: "Warm · Sensual · Enveloping",
    rating: 4.9,
    reviewCount: 142,
    matchScore: 96,
    familyId: "warm-amber",
    familyName: "Warm Amber & Resin",
    priceEGP: 9850,
    priceUSD: 199,
    sizes: [
      { volume: "50ml", priceEGP: 7150, priceUSD: 145 },
      { volume: "100ml", priceEGP: 9850, priceUSD: 199, default: true },
      { volume: "Discovery Vial 2ml", priceEGP: 590, priceUSD: 12 }
    ],
    image: "assets/golden_amber.png",
    thumbnails: [
      "assets/golden_amber.png",
      "assets/test15_cap.png",
      "assets/hero_hand.png",
      "assets/mood_romantic.png"
    ],
    description: "An intoxicating homage to dusk in Alexandria. Sun-drenched Mediterranean bergamot melts into a heart of royal golden amber and Madagascar bourbon vanilla, settling into an ethereal sillage of Australian sandalwood and smoked benzoin resin.",
    notes: ["Amber", "Vanilla", "Musk", "Bergamot", "Sandalwood"],
    pyramid: {
      top: {
        timeline: "Opening 15–30 Mins",
        notes: "Sicilian Bergamot · Pink Pepper · Golden Mandarin",
        character: "Fresh & Radiant"
      },
      heart: {
        timeline: "Core 2–4 Hours",
        notes: "Royal Golden Amber · Madagascar Bourbon Vanilla · Damask Rose",
        character: "Sensual Warmth"
      },
      base: {
        timeline: "Dry-down 8–12+ Hours",
        notes: "Australian Sandalwood · Smoked Benzoin Resin · Velvet Musk",
        character: "Deep Longevity"
      }
    },
    whyMatches: "Contains 4 of your 5 preferred notes. The Golden Amber heart delivers the radiant, long-lasting warmth you love."
  },
  {
    id: "rose-veil",
    name: "Rose Veil",
    collection: "AURÉA ATELIER",
    concentration: "Eau de Parfum",
    concentrationPercent: "18–20%",
    mood: "Soft · Romantic · Powdery",
    rating: 4.8,
    reviewCount: 98,
    matchScore: 84,
    familyId: "romantic-florals",
    familyName: "Romantic Florals",
    priceEGP: 8150,
    priceUSD: 165,
    sizes: [
      { volume: "50ml", priceEGP: 6200, priceUSD: 125 },
      { volume: "100ml", priceEGP: 8150, priceUSD: 165, default: true },
      { volume: "Discovery Vial 2ml", priceEGP: 590, priceUSD: 12 }
    ],
    image: "assets/rose_veil.png",
    thumbnails: [
      "assets/rose_veil.png",
      "assets/hero_hand.png",
      "assets/mood_romantic.png",
      "assets/golden_amber.png"
    ],
    description: "A tender morning in Grasse. Centifolia rose petals glistening with morning dew, kissed by powdery Florentine orris and whisper-soft white musks.",
    notes: ["Rose", "Jasmine", "Floral", "Musk", "Powdery"],
    pyramid: {
      top: {
        timeline: "Opening 15–30 Mins",
        notes: "Morning Dew · Lychee · Italian Bergamot",
        character: "Airy & Dewy"
      },
      heart: {
        timeline: "Core 2–4 Hours",
        notes: "Damask Rose Centifolia · Sambac Jasmine · Peony",
        character: "Romantic Floralcy"
      },
      base: {
        timeline: "Dry-down 8–12+ Hours",
        notes: "Florentine Orris · Powdery Cashmere · White Musk",
        character: "Velvet Caress"
      }
    },
    whyMatches: "Delicate floral composition anchored in powdery musk. Perfect lighter daytime signature complement."
  },
  {
    id: "midnight-oud",
    name: "Midnight Oud",
    collection: "AURÉA NOCTURNE",
    concentration: "Extrait de Parfum",
    concentrationPercent: "25–30%",
    mood: "Deep · Sensual · Resinous",
    rating: 5.0,
    reviewCount: 164,
    matchScore: 78,
    familyId: "oud-woods",
    familyName: "Oud & Deep Woods",
    priceEGP: 5950,
    priceUSD: 120,
    sizes: [
      { volume: "50ml", priceEGP: 4800, priceUSD: 95 },
      { volume: "100ml", priceEGP: 5950, priceUSD: 120, default: true },
      { volume: "Discovery Vial 2ml", priceEGP: 590, priceUSD: 12 }
    ],
    image: "assets/midnight_oud.png",
    thumbnails: [
      "assets/midnight_oud.png",
      "assets/mood_confident.png",
      "assets/noir_musk.png",
      "assets/golden_noir.png"
    ],
    description: "Darkness distilled. Rare wild Assam oud steeped with sacred incense, cedar shavings, and crushed cardamom pods, designed for unforgettable nocturnal presence.",
    notes: ["Oud", "Sandalwood", "Spicy", "Amber", "Woody"],
    pyramid: {
      top: {
        timeline: "Opening 15–30 Mins",
        notes: "Black Cardamom · Saffron Threads · Smoked Thyme",
        character: "Spicy Nocturne"
      },
      heart: {
        timeline: "Core 2–4 Hours",
        notes: "Aged Assam Oud · Frankincense · Atlas Cedar",
        character: "Resinous Shadow"
      },
      base: {
        timeline: "Dry-down 8–12+ Hours",
        notes: "Burnt Birch Tar · Dark Leather · Ambergris",
        character: "Eternal Sillage"
      }
    },
    whyMatches: "Rich Australian sandalwood base layered with smoked oud. Recommended for nocturnal events and cooler evenings."
  },
  {
    id: "noir-musk",
    name: "Noir Musk",
    collection: "AURÉA NOCTURNE",
    concentration: "Eau de Parfum",
    concentrationPercent: "18–20%",
    mood: "Bold · Intense · Animalic",
    rating: 4.7,
    reviewCount: 88,
    matchScore: 74,
    familyId: "oud-woods",
    familyName: "Oud & Deep Woods",
    priceEGP: 7450,
    priceUSD: 150,
    sizes: [
      { volume: "50ml", priceEGP: 5600, priceUSD: 110 },
      { volume: "100ml", priceEGP: 7450, priceUSD: 150, default: true },
      { volume: "Discovery Vial 2ml", priceEGP: 590, priceUSD: 12 }
    ],
    image: "assets/noir_musk.png",
    thumbnails: [
      "assets/noir_musk.png",
      "assets/golden_noir.png",
      "assets/midnight_oud.png",
      "assets/mood_confident.png"
    ],
    description: "A mysterious blend of skin-warmed black musk, golden amber resin, and aged patchouli leaves that leave a lasting and seductive aura.",
    notes: ["Musk", "Amber", "Oud", "Woody", "Spicy"],
    pyramid: {
      top: {
        timeline: "Opening 15–30 Mins",
        notes: "Nutmeg · Pink Pepper · Clove Bud",
        character: "Warm Spice"
      },
      heart: {
        timeline: "Core 2–4 Hours",
        notes: "Dark Velvet Musk · Benzoin · Indonesian Patchouli",
        character: "Animalic Core"
      },
      base: {
        timeline: "Dry-down 8–12+ Hours",
        notes: "Black Amber · Oakmoss · Vanilla Absolute",
        character: "Hypnotic Trail"
      }
    },
    whyMatches: "Intense animalic musk paired with warm resins for high evening projection."
  },
  {
    id: "sandal-whisper",
    name: "Sandal Whisper",
    collection: "AURÉA ATELIER",
    concentration: "Eau de Parfum",
    concentrationPercent: "18–20%",
    mood: "Woody · Calm · Meditative",
    rating: 4.9,
    reviewCount: 112,
    matchScore: 91,
    familyId: "woody-earthy",
    familyName: "Woody & Earthy",
    priceEGP: 7450,
    priceUSD: 150,
    sizes: [
      { volume: "50ml", priceEGP: 5600, priceUSD: 110 },
      { volume: "100ml", priceEGP: 7450, priceUSD: 150, default: true },
      { volume: "Discovery Vial 2ml", priceEGP: 590, priceUSD: 12 }
    ],
    image: "assets/sandal_whisper.png",
    thumbnails: [
      "assets/sandal_whisper.png",
      "assets/golden_amber.png",
      "assets/mood_performance.png",
      "assets/hero_hand.png"
    ],
    description: "Creamy Australian sandalwood embraced by French lavender flower water and crisp cedarwood. Serene, refined, and effortlessly timeless.",
    notes: ["Sandalwood", "Lavender", "Woody", "Fresh", "Powdery"],
    pyramid: {
      top: {
        timeline: "Opening 15–30 Mins",
        notes: "Highland Lavender · Clary Sage · Green Cardamom",
        character: "Aromatic Calm"
      },
      heart: {
        timeline: "Core 2–4 Hours",
        notes: "Sandalwood Album · Orris Butter · Violet Leaf",
        character: "Silken Wood"
      },
      base: {
        timeline: "Dry-down 8–12+ Hours",
        notes: "Virginian Cedar · Vetiver Haiti · Clean Musks",
        character: "Meditative Peace"
      }
    },
    whyMatches: "Matches your preference for calm sandalwood and powdery clean accords."
  },
  {
    id: "vanilla-bloom",
    name: "Vanilla Bloom",
    collection: "AURÉA PRIVATE ATELIER",
    concentration: "Eau de Parfum",
    concentrationPercent: "18–20%",
    mood: "Sweet · Cozy · Gourmand",
    rating: 4.8,
    reviewCount: 131,
    matchScore: 88,
    familyId: "gourmand-vanilla",
    familyName: "Gourmand & Vanilla",
    priceEGP: 6680,
    priceUSD: 135,
    sizes: [
      { volume: "50ml", priceEGP: 5100, priceUSD: 100 },
      { volume: "100ml", priceEGP: 6680, priceUSD: 135, default: true },
      { volume: "Discovery Vial 2ml", priceEGP: 590, priceUSD: 12 }
    ],
    image: "assets/vanilla_bloom.png",
    thumbnails: [
      "assets/vanilla_bloom.png",
      "assets/mood_fresh.png",
      "assets/golden_amber.png",
      "assets/hero_hand.png"
    ],
    description: "Sun-warmed Madagascar vanilla pods spun with golden honeycomb, fresh jasmine blossoms, and toasted almond cream. A luxurious confection for the senses.",
    notes: ["Vanilla", "Jasmine", "Floral", "Fruity", "Musk"],
    pyramid: {
      top: {
        timeline: "Opening 15–30 Mins",
        notes: "Sugared Lemon · Sweet Almond · Mirabelle Plum",
        character: "Delectable Sparkle"
      },
      heart: {
        timeline: "Core 2–4 Hours",
        notes: "Madagascar Vanilla Orchid · Heliotrope · Jasmine Petals",
        character: "Gourmand Floral"
      },
      base: {
        timeline: "Dry-down 8–12+ Hours",
        notes: "Bourbon Vanilla Pod · Golden Honey · Tonka Bean",
        character: "Cozy Warmth"
      }
    },
    whyMatches: "High overlap with your affinity for cozy Madagascar vanilla and delicate white florals."
  },
  {
    id: "golden-noir",
    name: "Golden Noir",
    collection: "AURÉA NOCTURNE",
    concentration: "Eau de Parfum",
    concentrationPercent: "18–20%",
    mood: "Warm · Mysterious · Alluring",
    rating: 4.9,
    reviewCount: 94,
    matchScore: 82,
    familyId: "warm-amber",
    familyName: "Warm Amber & Resin",
    priceEGP: 7450,
    priceUSD: 150,
    sizes: [
      { volume: "50ml", priceEGP: 5600, priceUSD: 110 },
      { volume: "100ml", priceEGP: 7450, priceUSD: 150, default: true },
      { volume: "Discovery Vial 2ml", priceEGP: 590, priceUSD: 12 }
    ],
    image: "assets/golden_noir.png",
    thumbnails: [
      "assets/golden_noir.png",
      "assets/noir_musk.png",
      "assets/golden_amber.png",
      "assets/hero_hand.png"
    ],
    description: "A prestigious harmony of black amber, Italian bergamot zest, and warm cashmere musk, crafted for those who leave an indelible presence.",
    notes: ["Bergamot", "Citrus", "Amber", "Vanilla", "Musk"],
    pyramid: {
      top: {
        timeline: "Opening 15–30 Mins",
        notes: "Calabrian Bergamot · Blood Orange · Pink Pepper",
        character: "Golden Citrus"
      },
      heart: {
        timeline: "Core 2–4 Hours",
        notes: "Dark Amber Crystal · Labdanum · White Leather",
        character: "Enigmatic Glow"
      },
      base: {
        timeline: "Dry-down 8–12+ Hours",
        notes: "Madagascar Vanilla · Smoked Woods · Clean Cashmere",
        character: "Signature Trail"
      }
    },
    whyMatches: "Blends sparkling citrus with warm amber for a versatile signature."
  }
];

export const FRAGRANCE_FAMILIES = [
  { id: "all", name: "All Families", count: 7 },
  { id: "warm-amber", name: "Warm Amber & Resin", count: 2, image: "assets/golden_amber.png" },
  { id: "woody-earthy", name: "Woody & Earthy", count: 1, image: "assets/sandal_whisper.png" },
  { id: "romantic-florals", name: "Romantic Florals", count: 1, image: "assets/rose_veil.png" },
  { id: "fresh-aquatic", name: "Fresh & Aquatic", count: 1, image: "assets/mood_fresh.png" },
  { id: "gourmand-vanilla", name: "Gourmand & Vanilla", count: 1, image: "assets/vanilla_bloom.png" },
  { id: "oud-woods", name: "Oud & Deep Woods", count: 2, image: "assets/midnight_oud.png" }
];

export const ALL_NOTES = [
  "Vanilla", "Amber", "Rose", "Oud", "Sandalwood", "Bergamot", "Musk", "Jasmine", "Lavender", "Woody", "Floral", "Spicy"
];

export const MOOD_INTENTIONS = [
  {
    id: "fresh",
    title: "Fresh & Radiant",
    notes: "Citrus · Bergamot · Neroli",
    image: "assets/mood_fresh.png",
    family: "fresh-aquatic"
  },
  {
    id: "romantic",
    title: "Sensual & Romantic",
    notes: "Damask Rose · Jasmine · Musk",
    image: "assets/mood_romantic.png",
    family: "romantic-florals"
  },
  {
    id: "bold",
    title: "Bold & Mysterious",
    notes: "Royal Amber · Smoke · Oud",
    image: "assets/mood_confident.png",
    family: "oud-woods"
  },
  {
    id: "calm",
    title: "Calm & Grounded",
    notes: "Sandalwood · Cedar · Iris",
    image: "assets/mood_performance.png",
    family: "woody-earthy"
  }
];

export const QUIZ_STEPS = [
  {
    step: 1,
    title: "What is your primary fragrance intention?",
    subtitle: "Select the atmosphere or aura you wish your perfume to radiate.",
    options: [
      { id: "fresh", title: "Fresh & Radiant", desc: "Crisp citrus, sea breeze, and sunny mornings" },
      { id: "romantic", title: "Sensual & Romantic", desc: "Velvety florals, soft musk, and intimate closeness" },
      { id: "bold", title: "Bold & Mysterious", desc: "Deep oud, resinous smoke, and commanding elegance" },
      { id: "calm", title: "Calm & Grounded", desc: "Earthy sandalwood, soothing herbs, and quiet luxury" }
    ]
  },
  {
    step: 2,
    title: "Which scent profiles resonate with you?",
    subtitle: "Select up to 3 families that define your desired personal aura.",
    maxSelect: 3,
    options: [
      { id: "warm-amber", title: "Warm Amber & Vanilla", desc: "Golden resins, cozy bourbon vanilla, benzoin", image: "assets/golden_amber.png" },
      { id: "woody-earthy", title: "Woody & Earthy", desc: "Sandalwood, cedar, vetiver, patchouli", image: "assets/sandal_whisper.png" },
      { id: "romantic-florals", title: "Romantic Florals", desc: "Damask rose, jasmine, tuberose, iris", image: "assets/rose_veil.png" },
      { id: "fresh-aquatic", title: "Fresh & Aquatic", desc: "Bergamot, sea breeze, neroli, ozone", image: "assets/mood_fresh.png" },
      { id: "oud-woods", title: "Smoky Oud & Leather", desc: "Assam oud, birch tar, incense, spices", image: "assets/midnight_oud.png" },
      { id: "gourmand-vanilla", title: "Cozy Gourmand", desc: "Praline, almond milk, tonka bean, cocoa", image: "assets/vanilla_bloom.png" }
    ]
  },
  {
    step: 3,
    title: "Select the raw notes you love most",
    subtitle: "Our algorithmic formulation will prioritize these ingredients.",
    notes: ["Vanilla", "Amber", "Rose", "Oud", "Sandalwood", "Bergamot", "Musk", "Jasmine", "Lavender", "Woody", "Floral", "Spicy"]
  },
  {
    step: 4,
    title: "When do you plan to wear this signature?",
    subtitle: "Egyptian climate and day-to-night temperatures determine concentration formulas.",
    options: [
      { id: "summer", title: "Warm Egyptian Daytime", desc: "Breathable sillage that stays luminous in Cairo sun" },
      { id: "evening", title: "Nocturnal & Soirées", desc: "Rich sillage with projection designed for dinner and events" },
      { id: "signature", title: "Year-Round Signature", desc: "Balanced versatile elegance for any hour and occasion" },
      { id: "intimate", title: "Private Sanctuary", desc: "Close-to-skin whisper for meditation and quiet moments" }
    ]
  },
  {
    step: 5,
    title: "Desired Sillage & Concentration",
    subtitle: "How do you want your fragrance to be perceived in a room?",
    options: [
      { id: "intimate", title: "Intimate Whisper (Skin Scent)", desc: "Perceived only by those closest to you" },
      { id: "moderate", title: "Graceful Aura (Arm's Length)", desc: "Leaves a gentle, memorable trail as you move" },
      { id: "potent", title: "Commanding Statement (Room Presence)", desc: "Long-lasting projection that announces your arrival" }
    ]
  }
];

export const EGYPT_PAYMENT_METHODS = [
  {
    id: "cod",
    name: "Cash on Delivery (COD)",
    badge: "UI Concept",
    description: "Pay in cash (EGP) upon delivery to courier. Please prepare exact total for smooth handover.",
    icon: "banknotes"
  },
  {
    id: "instapay",
    name: "InstaPay Transfer (Egypt IPN)",
    badge: "UI Concept",
    description: "Direct instant transfer to AURÉA Egypt via InstaPay identifier. QR code and IPN handle provided on confirmation.",
    icon: "lightning"
  },
  {
    id: "wallets",
    name: "Mobile Wallets (Vodafone Cash / Orange / Etisalat)",
    badge: "UI Concept",
    description: "Instant debit through your Egyptian mobile cash wallet. SMS OTP verification.",
    icon: "device-phone"
  },
  {
    id: "card",
    name: "Credit / Debit Card (Visa / Mastercard)",
    badge: "UI Concept",
    description: "Secured via tokenized gateway (Paymob / FawryPay iframe). Zero raw card data stored. 3D Secure enabled.",
    icon: "credit-card"
  },
  {
    id: "valu",
    name: "ValU BNPL Installments",
    badge: "UI Concept",
    description: "Split over 3, 6, or 12 monthly installments (Starting at EGP 2,240/mo) with ValU Egypt.",
    icon: "calendar"
  }
];

export const EGYPT_GOVERNORATES = [
  "Cairo Governorate (محافظة القاهرة)",
  "Giza Governorate (محافظة الجيزة)",
  "Alexandria Governorate (محافظة الإسكندرية)",
  "Qalyubia Governorate (محافظة القليوبية)",
  "Sharqia Governorate (محافظة الشرقية)",
  "Dakahlia Governorate (محافظة الدقهلية)",
  "Red Sea Governorate (محافظة البحر الأحمر)",
  "South Sinai Governorate (محافظة جنوب سيناء)"
];
