// AURÉA HAUTE PARFUMERIE — Standalone Universal Runtime
// AURÉA HAUTE PARFUMERIE — Master Product & Localization Catalog

const BRAND = {
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

const FRAGRANCES = [
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

const FRAGRANCE_FAMILIES = [
  { id: "all", name: "All Families", count: 7 },
  { id: "warm-amber", name: "Warm Amber & Resin", count: 2, image: "assets/golden_amber.png" },
  { id: "woody-earthy", name: "Woody & Earthy", count: 1, image: "assets/sandal_whisper.png" },
  { id: "romantic-florals", name: "Romantic Florals", count: 1, image: "assets/rose_veil.png" },
  { id: "fresh-aquatic", name: "Fresh & Aquatic", count: 1, image: "assets/mood_fresh.png" },
  { id: "gourmand-vanilla", name: "Gourmand & Vanilla", count: 1, image: "assets/vanilla_bloom.png" },
  { id: "oud-woods", name: "Oud & Deep Woods", count: 2, image: "assets/midnight_oud.png" }
];

const ALL_NOTES = [
  "Vanilla", "Amber", "Rose", "Oud", "Sandalwood", "Bergamot", "Musk", "Jasmine", "Lavender", "Woody", "Floral", "Spicy"
];

const MOOD_INTENTIONS = [
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

const QUIZ_STEPS = [
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

const EGYPT_PAYMENT_METHODS = [
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

const EGYPT_GOVERNORATES = [
  "Cairo Governorate (محافظة القاهرة)",
  "Giza Governorate (محافظة الجيزة)",
  "Alexandria Governorate (محافظة الإسكندرية)",
  "Qalyubia Governorate (محافظة القليوبية)",
  "Sharqia Governorate (محافظة الشرقية)",
  "Dakahlia Governorate (محافظة الدقهلية)",
  "Red Sea Governorate (محافظة البحر الأحمر)",
  "South Sinai Governorate (محافظة جنوب سيناء)"
];


// AURÉA HAUTE PARFUMERIE — Master Application Controller & Component Architecture

class AureaApp {
  constructor() {
    this.state = {
      currentRoute: 'home',
      pdpProductId: 'golden-amber',
      // Pre-seed cart with 3 items from Screen 07 & 08 for authentic design fidelity
      cart: [
        { product: FRAGRANCES.find(f => f.id === 'golden-amber'), size: '100ml', priceEGP: 9850, priceUSD: 199, quantity: 1 },
        { product: FRAGRANCES.find(f => f.id === 'rose-veil'), size: '100ml', priceEGP: 8150, priceUSD: 165, quantity: 1 },
        { product: FRAGRANCES.find(f => f.id === 'midnight-oud'), size: '100ml', priceEGP: 5950, priceUSD: 120, quantity: 1 }
      ],
      favorites: new Set(['golden-amber', 'rose-veil', 'sandal-whisper', 'golden-noir']),
      complimentarySamples: ['Vanilla Bloom (2ml Vial)', 'Noir Musk (2ml Vial)'],
      promoCode: { code: 'SIGNATURE10', discountRate: 0.10, applied: true, discountEGP: 990 },
      // Filters for explore page
      filters: {
        family: 'all',
        notes: [],
        minPrice: 5500,
        maxPrice: 12000,
        concentration: ['Eau de Parfum', 'Extrait de Parfum'],
        sortBy: 'match'
      },
      // Quiz flow state
      quiz: {
        step: 2, // Defaulting to step 2 as showcased in Screen 05
        answers: {
          mood: 'fresh',
          families: ['warm-amber', 'woody-earthy'],
          notes: ['Vanilla', 'Amber', 'Sandalwood'],
          season: 'summer',
          sillage: 'moderate'
        }
      },
      // Localized Egyptian Checkout state
      checkout: {
        name: 'Alexa Rawles',
        email: 'alexarawles@gmail.com',
        phone: '+20 102 345 6789',
        governorate: 'Cairo Governorate (محافظة القاهرة)',
        district: 'Zamalek (الزمالك)',
        address: '15 El-Gezira Street, Building 4B, 3rd Floor, Apt 12',
        landmark: 'Facing Gezira Sporting Club',
        courier: 'Bosta Express (24–48 Hours)',
        paymentMethod: 'cod'
      },
      // User Profile & Scent DNA
      profile: {
        name: 'Alexa Rawles',
        email: 'alexarawles@gmail.com',
        phone: '+20 102 345 6789',
        dna: [
          { accord: 'Warm Amber & Resin', percent: 40, color: '#C5A265' },
          { accord: 'Bourbon Vanilla & Gourmand', percent: 30, color: '#D4A373' },
          { accord: 'Woody & Australian Sandalwood', percent: 20, color: '#8C6D32' },
          { accord: 'Powdery White Musk', percent: 10, color: '#A0808A' }
        ]
      }
    };

    window.aureaApp = this;
    this.init();
  }

  init() {
    this.setupRouter();
    this.updateHeaderBadges();
    this.setupSearch();
    this.render();
  }

  // --- ROUTER ---
  setupRouter() {
    window.addEventListener('hashchange', () => {
      this.handleHashChange();
    });
    this.handleHashChange();
  }

  handleHashChange() {
    const rawHash = window.location.hash.slice(1) || 'home';
    const [route, queryString] = rawHash.split('?');
    this.state.currentRoute = route;

    if (queryString) {
      const params = new URLSearchParams(queryString);
      if (params.get('id')) {
        this.state.pdpProductId = params.get('id');
      }
      if (params.get('family')) {
        this.state.filters.family = params.get('family');
      }
    }

    this.updateActiveNavLinks();
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateTo(hash) {
    window.location.hash = hash;
  }

  updateActiveNavLinks() {
    document.querySelectorAll('.nav-link, .mobile-nav-item').forEach(el => {
      const page = el.getAttribute('data-page');
      if (page === this.state.currentRoute) {
        el.classList.add('text-[#7A3E4D]', 'border-[#7A3E4D]', 'font-bold');
        el.classList.remove('text-[#231B1E]', 'text-[#615257]', 'border-transparent');
      } else {
        el.classList.remove('text-[#7A3E4D]', 'border-[#7A3E4D]', 'font-bold');
        el.classList.add('text-[#231B1E]', 'border-transparent');
      }
    });
  }

  setupSearch() {
    const searchInput = document.getElementById('global-search');
    if (searchInput) {
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const val = searchInput.value.trim().toLowerCase();
          if (val) {
            this.state.filters.notes = [val];
            this.navigateTo('explore');
            this.showToast(`Filtered collection for "${val}"`);
          }
        }
      });
    }
  }

  // --- STATE MUTATIONS ---
  updateHeaderBadges() {
    const cartCount = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const counterEl = document.getElementById('cart-counter');
    if (counterEl) counterEl.textContent = `(${cartCount})`;

    const favBadge = document.getElementById('favorites-badge');
    if (favBadge) {
      const count = this.state.favorites.size;
      favBadge.textContent = count;
      favBadge.classList.toggle('hidden', count === 0);
    }
  }

  addToBag(productId, sizeVolume = '100ml', quantity = 1) {
    const product = FRAGRANCES.find(f => f.id === productId);
    if (!product) return;

    const sizeObj = product.sizes.find(s => s.volume === sizeVolume) || product.sizes[1];
    const existingIndex = this.state.cart.findIndex(i => i.product.id === productId && i.size === sizeVolume);

    if (existingIndex > -1) {
      this.state.cart[existingIndex].quantity += quantity;
    } else {
      this.state.cart.push({
        product,
        size: sizeVolume,
        priceEGP: sizeObj.priceEGP,
        priceUSD: sizeObj.priceUSD,
        quantity
      });
    }

    this.updateHeaderBadges();
    this.showToast(`Added ${product.name} (${sizeVolume}) to your Fragrance Edit`);
  }

  removeFromBag(index) {
    const item = this.state.cart[index];
    this.state.cart.splice(index, 1);
    this.updateHeaderBadges();
    this.render();
    if (item) this.showToast(`Removed ${item.product.name} from Bag`);
  }

  updateBagQuantity(index, delta) {
    if (!this.state.cart[index]) return;
    this.state.cart[index].quantity += delta;
    if (this.state.cart[index].quantity <= 0) {
      this.removeFromBag(index);
    } else {
      this.updateHeaderBadges();
      this.render();
    }
  }

  toggleFavorite(productId) {
    const product = FRAGRANCES.find(f => f.id === productId);
    if (!product) return;

    if (this.state.favorites.has(productId)) {
      this.state.favorites.delete(productId);
      this.showToast(`Removed ${product.name} from Favorites`);
    } else {
      this.state.favorites.add(productId);
      this.showToast(`Saved ${product.name} to Favorites`);
    }

    this.updateHeaderBadges();
    this.render();
  }

  // --- CALCULATIONS ---
  calculateCartTotals() {
    const subtotalEGP = this.state.cart.reduce((sum, item) => sum + (item.priceEGP * item.quantity), 0);
    const subtotalUSD = Math.round(subtotalEGP / BRAND.usdRate);

    // 14% Egypt VAT included/estimated
    const vatEGP = Math.round(subtotalEGP * 0.091); 
    const discountEGP = this.state.promoCode.applied ? Math.round(subtotalEGP * this.state.promoCode.discountRate) : 0;
    
    // Free courier shipping over EGP 4,500
    const shippingEGP = (subtotalEGP >= BRAND.freeShippingThresholdEGP || subtotalEGP === 0) ? 0 : 150;
    const finalTotalEGP = Math.max(0, subtotalEGP - discountEGP + shippingEGP);
    const finalTotalUSD = Math.round(finalTotalEGP / BRAND.usdRate);

    return { subtotalEGP, subtotalUSD, vatEGP, discountEGP, shippingEGP, finalTotalEGP, finalTotalUSD };
  }

  // --- TOAST NOTIFICATIONS ---
  showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'animate-toast bg-[#231B1E] text-white px-4 py-3 rounded-lg shadow-lg text-xs flex items-center gap-3 border border-[#3E3136] pointer-events-auto';
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-[#C5A265]"></span>
      <span class="font-medium">${message}</span>
      <button onclick="this.parentElement.remove()" class="text-white/60 hover:text-white ml-2 text-sm">&times;</button>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 3500);
  }

  // --- MODAL (QUICK VIEW) ---
  openQuickView(productId) {
    const p = FRAGRANCES.find(f => f.id === productId);
    if (!p) return;

    const modal = document.getElementById('modal-container');
    modal.classList.remove('hidden');
    modal.innerHTML = `
      <div class="animate-modal bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#E2D5D0] max-h-[90vh] overflow-y-auto">
        <button onclick="window.aureaApp.closeModal()" class="absolute top-4 right-4 text-[#8C7A7F] hover:text-[#231B1E] p-1.5 rounded-full hover:bg-[#FAF6F4] transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <!-- Flacon Photo -->
          <div class="bg-[#FAF6F4] rounded-xl p-4 flex items-center justify-center border border-[#E8DAD5]">
            <img src="${p.image}" alt="${p.name}" class="h-64 object-contain rounded-lg">
          </div>

          <!-- Quick Specs -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-[10px] uppercase tracking-widest text-[#C5A265] font-bold">${p.collection}</span>
              <span class="badge-match text-[10px] font-bold px-2 py-0.5 rounded-full">${p.matchScore}% Match</span>
            </div>

            <h3 class="font-display text-2xl font-bold text-[#231B1E]">${p.name}</h3>
            <p class="text-xs text-[#8C7A7F] italic">${p.mood}</p>

            <div class="text-lg font-bold text-[#7A3E4D]">
              EGP ${p.priceEGP.toLocaleString()} <span class="text-xs text-[#8C7A7F] font-normal">($${p.priceUSD} USD)</span>
            </div>

            <p class="text-xs text-[#615257] leading-relaxed line-clamp-3">${p.description}</p>

            <!-- Olfactory Chords -->
            <div>
              <div class="text-[10px] uppercase tracking-wider font-semibold text-[#8C7A7F] mb-1.5">Key Accord Chords:</div>
              <div class="flex flex-wrap gap-1">
                ${p.notes.map(n => `<span class="px-2 py-0.5 bg-[#F4ECE9] text-[10px] text-[#7A3E4D] rounded-full border border-[#E2D5D0]">${n}</span>`).join('')}
              </div>
            </div>

            <!-- Modal Action Buttons -->
            <div class="pt-2 flex flex-col gap-2">
              <button onclick="window.aureaApp.addToBag('${p.id}'); window.aureaApp.closeModal();" class="w-full py-2.5 bg-[#7A3E4D] hover:bg-[#5D2C39] text-white rounded-full text-xs font-semibold shadow-sm transition">
                Add to Bag — EGP ${p.priceEGP.toLocaleString()}
              </button>
              <button onclick="window.aureaApp.closeModal(); window.aureaApp.navigateTo('pdp?id=${p.id}');" class="w-full py-2 bg-white border border-[#E2D5D0] text-[#231B1E] hover:bg-[#FAF6F4] rounded-full text-xs font-medium transition text-center">
                Explore Fragrance Pyramid &amp; Full Story →
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  closeModal() {
    const modal = document.getElementById('modal-container');
    if (modal) modal.classList.add('hidden');
  }

  // --- RENDER MAIN VIEW ---
  render() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    switch (this.state.currentRoute) {
      case 'home':
        appEl.innerHTML = this.renderHome();
        break;
      case 'explore':
        appEl.innerHTML = this.renderExplore();
        break;
      case 'pdp':
        appEl.innerHTML = this.renderPDP();
        break;
      case 'quiz':
        appEl.innerHTML = this.renderQuiz();
        break;
      case 'recommendations':
        appEl.innerHTML = this.renderRecommendations();
        break;
      case 'cart':
        appEl.innerHTML = this.renderCart();
        break;
      case 'checkout':
        appEl.innerHTML = this.renderCheckout();
        break;
      case 'confirmation':
        appEl.innerHTML = this.renderConfirmation();
        break;
      case 'favorites':
        appEl.innerHTML = this.renderFavorites();
        break;
      case 'profile':
        appEl.innerHTML = this.renderProfile();
        break;
      case 'about':
        appEl.innerHTML = this.renderAbout();
        break;
      default:
        appEl.innerHTML = this.renderHome();
    }
  }

  // ===========================================================================
  // SCREEN 01: DESKTOP HOMEPAGE
  // ===========================================================================
  renderHome() {
    return `
      <!-- Hero Banner (Screen 01 & 17) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div class="bg-[#F4ECE9] rounded-2xl border border-[#E8DAD5] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <!-- Editorial Copy Column (Left) -->
          <div class="p-8 sm:p-12 lg:p-16 lg:col-span-6 space-y-6">
            <div class="text-[11px] uppercase tracking-[0.2em] text-[#C5A265] font-bold">
              THE ART OF PERSONALIZED FRAGRANCE · GRASSE &amp; CAIRO
            </div>
            
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl text-[#231B1E] leading-[1.1] font-normal">
              A scent for every version of you.
            </h1>
            
            <p class="text-xs sm:text-sm text-[#615257] leading-relaxed max-w-md">
              Find the fragrance that feels like you. AURÉA harmonizes rare olfactory notes to your personal mood, season, and skin chemistry.
            </p>

            <div class="flex flex-wrap items-center gap-3 pt-2">
              <a href="#quiz" class="px-6 py-3 bg-[#7A3E4D] hover:bg-[#5D2C39] text-white rounded-full text-xs font-semibold shadow-sm transition">
                Discover Your Scent &rarr;
              </a>
              <a href="#explore" class="px-6 py-3 bg-white hover:bg-[#FAF6F4] text-[#231B1E] border border-[#E2D5D0] rounded-full text-xs font-semibold transition">
                Explore Collection
              </a>
            </div>
          </div>

          <!-- Hero Photography Column (Right) -->
          <div class="lg:col-span-6 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-[#FAF6F4]">
            <img src="assets/hero_hand.png" alt="AURÉA Flacon in Hand" class="w-full h-full object-cover object-center">
          </div>

        </div>
      </section>

      <!-- Mood Intention Selector ("HOW DO YOU WANT TO FEEL TODAY?") -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-6">
          <div class="text-[11px] uppercase tracking-widest text-[#C5A265] font-bold">Olfactory Consultation</div>
          <h2 class="font-display text-2xl sm:text-3xl font-bold text-[#231B1E] mt-1">HOW DO YOU WANT TO FEEL TODAY?</h2>
          <p class="text-xs text-[#615257] mt-1">Choose an olfactory intention to begin your personalized discovery consultation.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          ${MOOD_INTENTIONS.map(m => `
            <div onclick="window.aureaApp.navigateTo('explore?family=${m.family}')" class="card-hover bg-white rounded-xl border border-[#E2D5D0] overflow-hidden cursor-pointer group">
              <div class="h-32 sm:h-36 overflow-hidden bg-[#FAF6F4]">
                <img src="${m.image}" alt="${m.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              </div>
              <div class="p-3">
                <h3 class="text-xs font-bold text-[#231B1E] group-hover:text-[#7A3E4D] transition">${m.title}</h3>
                <p class="text-[11px] text-[#8C7A7F] mt-0.5">${m.notes}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Curated Masterpieces Carousel (Bestsellers) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="flex items-end justify-between mb-6">
          <div>
            <div class="text-[11px] uppercase tracking-widest text-[#C5A265] font-bold">Atelier Signatures</div>
            <h2 class="font-display text-2xl sm:text-3xl font-bold text-[#231B1E] mt-1">CURATED MASTERPIECES</h2>
          </div>
          <a href="#explore" class="text-xs font-semibold text-[#7A3E4D] hover:underline flex items-center gap-1">
            View All 7 Creations &rarr;
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${FRAGRANCES.slice(0, 3).map(p => this.renderProductCard(p)).join('')}
        </div>
      </section>

      <!-- Editorial Atelier Story & Egyptian Sourcing -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-[#F4ECE9] rounded-2xl p-8 sm:p-12 border border-[#E8DAD5] grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div class="space-y-2">
            <span class="w-8 h-8 rounded-full bg-[#7A3E4D] text-white text-xs font-bold flex items-center justify-center mx-auto md:mx-0">01</span>
            <h3 class="font-display text-lg font-bold text-[#231B1E]">Handcrafted in Grasse</h3>
            <p class="text-xs text-[#615257] leading-relaxed">Formulated with master perfumers in the historic fragrance capital of Provence using rare botanicals and sustainable extractions.</p>
          </div>
          <div class="space-y-2">
            <span class="w-8 h-8 rounded-full bg-[#C5A265] text-white text-xs font-bold flex items-center justify-center mx-auto md:mx-0">02</span>
            <h3 class="font-display text-lg font-bold text-[#231B1E]">Algorithmic Note Matching</h3>
            <p class="text-xs text-[#615257] leading-relaxed">Our proprietary 5-step diagnostic engine translates personal mood chords into scientifically matched flacons with 90%+ confidence.</p>
          </div>
          <div class="space-y-2">
            <span class="w-8 h-8 rounded-full bg-[#7A3E4D] text-white text-xs font-bold flex items-center justify-center mx-auto md:mx-0">03</span>
            <h3 class="font-display text-lg font-bold text-[#231B1E]">Cairo Concierge Delivery</h3>
            <p class="text-xs text-[#615257] leading-relaxed">Complimentary climate-controlled courier transport by Bosta Express across Cairo, Giza, and Alexandria with EGP Cash on Delivery.</p>
          </div>
        </div>
      </section>
    `;
  }

  // ===========================================================================
  // SCREEN 02: EXPLORE & OLFACTORY LIBRARY
  // ===========================================================================
  renderExplore() {
    let filtered = [...FRAGRANCES];

    // Family filter
    if (this.state.filters.family !== 'all') {
      filtered = filtered.filter(f => f.familyId === this.state.filters.family);
    }

    // Notes filter
    if (this.state.filters.notes.length > 0) {
      filtered = filtered.filter(f => 
        this.state.filters.notes.some(note => 
          f.notes.map(n => n.toLowerCase()).includes(note.toLowerCase())
        )
      );
    }

    // Price slider filter
    filtered = filtered.filter(f => f.priceEGP >= this.state.filters.minPrice && f.priceEGP <= this.state.filters.maxPrice);

    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <!-- Breadcrumb & Header -->
        <div class="text-[11px] text-[#8C7A7F] mb-2">
          <a href="#home" class="hover:underline">Home</a> &nbsp;/&nbsp; 
          <span>Fragrance Collection</span> &nbsp;/&nbsp; 
          <span class="text-[#231B1E]">The Olfactory Library (${filtered.length} Creations)</span>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h1 class="font-display text-3xl sm:text-4xl font-bold text-[#231B1E]">THE OLFACTORY LIBRARY</h1>
            <p class="text-xs text-[#615257] mt-1">Discover our complete repertoire of artisanal compositions, cataloged by olfactory family, accord, and Egyptian climate suitability.</p>
          </div>

          <!-- Sort Select -->
          <div class="flex items-center gap-2">
            <span class="text-xs text-[#8C7A7F] whitespace-nowrap">Sort by:</span>
            <select onchange="window.aureaApp.state.filters.sortBy = this.value; window.aureaApp.render();" class="bg-white border border-[#E2D5D0] rounded-full px-3 py-1.5 text-xs text-[#231B1E] focus:outline-none focus:border-[#7A3E4D]">
              <option value="match" ${this.state.filters.sortBy === 'match' ? 'selected' : ''}>Personalized Match Fit</option>
              <option value="price-asc" ${this.state.filters.sortBy === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-desc" ${this.state.filters.sortBy === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
            </select>
          </div>
        </div>

        <!-- Layout Grid: 260px Faceted Sidebar (Desktop) + 3-Col Products -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- Sticky 260px Faceted Sidebar (Screen 02 Left) -->
          <aside class="lg:col-span-3 space-y-6">
            <div class="bg-white rounded-xl p-5 border border-[#E2D5D0] shadow-sm space-y-6">
              
              <div class="flex items-center justify-between pb-3 border-b border-[#E8DAD5]">
                <h3 class="text-xs uppercase tracking-widest font-bold text-[#231B1E]">Filter Collection</h3>
                <button onclick="window.aureaApp.resetFilters()" class="text-[11px] text-[#7A3E4D] hover:underline">Reset</button>
              </div>

              <!-- Fragrance Family Facet -->
              <div>
                <h4 class="text-xs font-semibold text-[#231B1E] mb-3">Fragrance Family</h4>
                <div class="space-y-2 text-xs">
                  ${FRAGRANCE_FAMILIES.map(fam => `
                    <label class="flex items-center justify-between cursor-pointer group">
                      <div class="flex items-center gap-2">
                        <input type="radio" name="family-filter" value="${fam.id}" ${this.state.filters.family === fam.id ? 'checked' : ''} onchange="window.aureaApp.state.filters.family = this.value; window.aureaApp.render();" class="accent-[#7A3E4D]">
                        <span class="text-[#615257] group-hover:text-[#231B1E] ${this.state.filters.family === fam.id ? 'font-bold text-[#7A3E4D]' : ''}">${fam.name}</span>
                      </div>
                      <span class="text-[10px] text-[#8C7A7F]">(${fam.count})</span>
                    </label>
                  `).join('')}
                </div>
              </div>

              <!-- Affinity Scent Notes Chip Cloud -->
              <div>
                <h4 class="text-xs font-semibold text-[#231B1E] mb-3">Affinity Scent Notes</h4>
                <div class="flex flex-wrap gap-1.5">
                  ${ALL_NOTES.map(note => {
                    const active = this.state.filters.notes.includes(note.toLowerCase());
                    return `
                      <button onclick="window.aureaApp.toggleNoteFilter('${note.toLowerCase()}')" class="px-2.5 py-1 rounded-full text-[11px] transition ${active ? 'bg-[#7A3E4D] text-white' : 'bg-[#F4ECE9] text-[#615257] hover:bg-[#E8DAD5]'} border border-[#E2D5D0]">
                        ${note}
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Price Range Slider in EGP -->
              <div>
                <div class="flex items-center justify-between mb-2">
                  <h4 class="text-xs font-semibold text-[#231B1E]">Price Range (EGP)</h4>
                  <span class="text-[11px] font-bold text-[#7A3E4D]">Up to EGP ${this.state.filters.maxPrice.toLocaleString()}</span>
                </div>
                <input type="range" min="5500" max="12000" step="500" value="${this.state.filters.maxPrice}" oninput="window.aureaApp.state.filters.maxPrice = Number(this.value); window.aureaApp.render();" class="w-full">
                <div class="flex justify-between text-[10px] text-[#8C7A7F] mt-1">
                  <span>EGP 5,500</span>
                  <span>EGP 12,000</span>
                </div>
              </div>

              <!-- Concentration -->
              <div>
                <h4 class="text-xs font-semibold text-[#231B1E] mb-2">Concentration</h4>
                <div class="space-y-1.5 text-xs text-[#615257]">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked class="accent-[#7A3E4D]">
                    <span>Eau de Parfum (18–20%)</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked class="accent-[#7A3E4D]">
                    <span>Extrait de Parfum (25–30%)</span>
                  </label>
                </div>
              </div>

            </div>
          </aside>

          <!-- 3-Column Product Grid (Screen 02 Right) -->
          <div class="lg:col-span-9">
            ${filtered.length === 0 ? `
              <div class="bg-white rounded-xl p-12 text-center border border-[#E2D5D0]">
                <h3 class="font-display text-xl font-bold text-[#231B1E]">No fragrances matched your filters.</h3>
                <p class="text-xs text-[#615257] mt-1">Try resetting your filters or selecting fewer notes.</p>
                <button onclick="window.aureaApp.resetFilters()" class="mt-4 px-4 py-2 bg-[#7A3E4D] text-white text-xs rounded-full">Reset Filters</button>
              </div>
            ` : `
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${filtered.map(p => this.renderProductCard(p)).join('')}
              </div>
            `}
          </div>

        </div>

      </div>
    `;
  }

  toggleNoteFilter(note) {
    const idx = this.state.filters.notes.indexOf(note);
    if (idx > -1) {
      this.state.filters.notes.splice(idx, 1);
    } else {
      this.state.filters.notes.push(note);
    }
    this.render();
  }

  resetFilters() {
    this.state.filters.family = 'all';
    this.state.filters.notes = [];
    this.state.filters.maxPrice = 12000;
    this.render();
  }

  // Common Product Card Component
  renderProductCard(p) {
    const isFav = this.state.favorites.has(p.id);
    return `
      <div class="card-hover bg-white rounded-xl border border-[#E2D5D0] overflow-hidden flex flex-col justify-between group">
        
        <!-- Image & Badges Container -->
        <div class="relative bg-[#FAF6F4] p-4 h-64 flex items-center justify-center border-b border-[#E8DAD5] overflow-hidden">
          
          <!-- Match Score Badge -->
          <div class="absolute top-3 left-3 z-10 badge-match text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
            ${p.matchScore}% Match
          </div>

          <!-- Favorite Heart Button -->
          <button onclick="window.aureaApp.toggleFavorite('${p.id}')" class="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-[#231B1E] flex items-center justify-center shadow-xs transition" title="Save Fragrance">
            <svg class="w-4 h-4 ${isFav ? 'text-[#7A3E4D] fill-[#7A3E4D]' : 'text-[#615257]'}" fill="${isFav ? '#7A3E4D' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>

          <!-- Bottle Image -->
          <img src="${p.image}" alt="${p.name}" class="h-52 object-contain group-hover:scale-105 transition duration-500 cursor-pointer" onclick="window.aureaApp.navigateTo('pdp?id=${p.id}')">
        </div>

        <!-- Product Metadata -->
        <div class="p-4 flex-grow flex flex-col justify-between space-y-3">
          <div>
            <div class="text-[9px] uppercase tracking-widest text-[#C5A265] font-bold">${p.collection}</div>
            <h3 class="font-display text-lg font-bold text-[#231B1E] hover:text-[#7A3E4D] transition cursor-pointer" onclick="window.aureaApp.navigateTo('pdp?id=${p.id}')">${p.name}</h3>
            <p class="text-[11px] text-[#8C7A7F] mt-0.5">${p.mood}</p>

            <!-- Note Chips -->
            <div class="flex flex-wrap gap-1 mt-2">
              ${p.notes.slice(0, 3).map(n => `<span class="px-2 py-0.5 bg-[#FAF6F4] text-[10px] text-[#615257] rounded border border-[#E8DAD5]">${n}</span>`).join('')}
            </div>
          </div>

          <!-- Dual Price & Actions -->
          <div class="pt-2 border-t border-[#E8DAD5] flex items-center justify-between">
            <div>
              <div class="text-sm font-bold text-[#231B1E]">EGP ${p.priceEGP.toLocaleString()}</div>
              <div class="text-[10px] text-[#8C7A7F]">($${p.priceUSD} USD)</div>
            </div>

            <div class="flex items-center gap-1.5">
              <button onclick="window.aureaApp.openQuickView('${p.id}')" class="px-3 py-1.5 bg-[#F4ECE9] hover:bg-[#E8DAD5] text-[#231B1E] rounded-full text-xs font-medium transition" title="Quick View">
                Quick View
              </button>
              <button onclick="window.aureaApp.addToBag('${p.id}')" class="p-2 bg-[#7A3E4D] hover:bg-[#5D2C39] text-white rounded-full transition" title="Add to Bag">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    `;
  }

  // ===========================================================================
  // SCREEN 03: PRODUCT DETAILS PAGE (PDP) & FRAGRANCE PYRAMID
  // ===========================================================================
  renderPDP() {
    const p = FRAGRANCES.find(f => f.id === this.state.pdpProductId) || FRAGRANCES[0];
    const isFav = this.state.favorites.has(p.id);

    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <!-- Breadcrumb -->
        <div class="text-[11px] text-[#8C7A7F] mb-6">
          <a href="#home" class="hover:underline">Home</a> &nbsp;/&nbsp; 
          <a href="#explore" class="hover:underline">Fragrance Collection</a> &nbsp;/&nbsp; 
          <a href="#explore?family=${p.familyId}" class="hover:underline">${p.familyName}</a> &nbsp;/&nbsp; 
          <span class="text-[#231B1E] font-medium">${p.name}</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column: Gallery & Complimentary Vials (Screen 03 Left) -->
          <div class="lg:col-span-6 space-y-4">
            
            <!-- Hero Flacon Main Photo -->
            <div class="bg-[#FAF6F4] rounded-2xl p-6 sm:p-10 border border-[#E8DAD5] flex items-center justify-center relative overflow-hidden">
              <span class="absolute top-4 left-4 badge-match text-xs font-bold px-3 py-1 rounded-full">
                ${p.matchScore}% Personal Scent Match
              </span>
              <img id="pdp-main-image" src="${p.image}" alt="${p.name}" class="h-80 sm:h-96 object-contain">
            </div>

            <!-- Thumbnail Carousel (4 Angles) -->
            <div class="grid grid-cols-4 gap-3">
              ${p.thumbnails.map((t, idx) => `
                <div onclick="document.getElementById('pdp-main-image').src = '${t}'" class="bg-white rounded-xl p-2 border border-[#E2D5D0] cursor-pointer hover:border-[#7A3E4D] transition flex items-center justify-center h-20">
                  <img src="${t}" alt="Angle ${idx+1}" class="h-full object-contain">
                </div>
              `).join('')}
            </div>

            <!-- Complimentary Discovery Vial Banner -->
            <div class="bg-[#F4ECE9] rounded-xl p-3.5 border border-[#E8DAD5] flex items-center gap-3 text-xs text-[#615257]">
              <span class="text-[#C5A265] text-lg font-bold">✦</span>
              <span>Includes <strong>2 complimentary 2ml discovery vials</strong> of your choice with every 100ml purchase.</span>
            </div>

          </div>

          <!-- Right Column: Specs, Pyramid & Purchase Engine (Screen 03 Right) -->
          <div class="lg:col-span-6 space-y-6">
            
            <div>
              <div class="text-[11px] uppercase tracking-[0.2em] text-[#C5A265] font-bold">${p.collection} · ${p.concentration}</div>
              <h1 class="font-display text-4xl sm:text-5xl font-bold text-[#231B1E] mt-1">${p.name}</h1>
              <p class="text-sm text-[#8C7A7F] italic mt-1">${p.mood}</p>
              
              <!-- Review Star Rating -->
              <div class="flex items-center gap-2 mt-2 text-xs text-[#8C7A7F]">
                <div class="flex text-[#C5A265]">★★★★★</div>
                <span>${p.rating} / 5.0 (${p.reviewCount} verified patron reviews)</span>
              </div>
            </div>

            <!-- Dual Pricing & ValU Installments -->
            <div class="p-4 bg-white rounded-xl border border-[#E2D5D0] space-y-1">
              <div class="flex items-baseline gap-3">
                <span class="font-display text-3xl font-bold text-[#7A3E4D]">EGP ${p.priceEGP.toLocaleString()}</span>
                <span class="text-xs text-[#8C7A7F]">($${p.priceUSD} USD)</span>
              </div>
              <p class="text-xs text-[#615257]">
                or 3 monthly payments of <strong>EGP ${(Math.round(p.priceEGP / 3)).toLocaleString()}</strong> with ValU / InstaPay.
              </p>
            </div>

            <!-- Sensory Narrative -->
            <p class="text-xs sm:text-sm text-[#615257] leading-relaxed">
              ${p.description}
            </p>

            <!-- THE 3-TIER OLFACTORY PYRAMID (Screen 03 & Hand-off Spec) -->
            <div class="bg-[#FAF6F4] rounded-xl p-5 border border-[#E8DAD5] space-y-4">
              <div class="flex items-center justify-between pb-2 border-b border-[#E8DAD5]">
                <h3 class="text-xs uppercase tracking-widest font-bold text-[#231B1E]">THE OLFACTORY PYRAMID</h3>
                <span class="text-[11px] text-[#C5A265] font-semibold">Evaporation Timeline</span>
              </div>

              <!-- Top Tier -->
              <div class="border-l-2 border-[#C5A265] pl-3 py-1 space-y-0.5">
                <div class="text-[10px] uppercase tracking-wider text-[#8C7A7F] font-bold">TOP NOTES (${p.pyramid.top.timeline})</div>
                <div class="text-xs font-semibold text-[#231B1E]">${p.pyramid.top.notes}</div>
                <div class="text-[11px] text-[#7A3E4D] italic">${p.pyramid.top.character}</div>
              </div>

              <!-- Heart Tier -->
              <div class="border-l-2 border-[#7A3E4D] pl-3 py-1 space-y-0.5">
                <div class="text-[10px] uppercase tracking-wider text-[#8C7A7F] font-bold">HEART NOTES (${p.pyramid.heart.timeline})</div>
                <div class="text-xs font-semibold text-[#231B1E]">${p.pyramid.heart.notes}</div>
                <div class="text-[11px] text-[#7A3E4D] italic">${p.pyramid.heart.character}</div>
              </div>

              <!-- Base Tier -->
              <div class="border-l-2 border-[#231B1E] pl-3 py-1 space-y-0.5">
                <div class="text-[10px] uppercase tracking-wider text-[#8C7A7F] font-bold">BASE NOTES (${p.pyramid.base.timeline})</div>
                <div class="text-xs font-semibold text-[#231B1E]">${p.pyramid.base.notes}</div>
                <div class="text-[11px] text-[#7A3E4D] italic">${p.pyramid.base.character}</div>
              </div>
            </div>

            <!-- Flacon Size Selector -->
            <div>
              <label class="block text-xs font-bold text-[#231B1E] uppercase tracking-wider mb-2">Select Flacon Size:</label>
              <div class="grid grid-cols-3 gap-2" id="pdp-size-selector">
                ${p.sizes.map((s, idx) => `
                  <button onclick="window.aureaApp.selectPdpSize('${s.volume}', ${s.priceEGP})" class="size-btn p-2.5 rounded-xl border text-center transition ${idx === 1 ? 'border-[#7A3E4D] bg-[#F4ECE9] font-bold text-[#7A3E4D]' : 'border-[#E2D5D0] bg-white text-[#231B1E] hover:bg-[#FAF6F4]'}">
                    <div class="text-xs">${s.volume}</div>
                    <div class="text-[11px] text-[#8C7A7F] mt-0.5">EGP ${s.priceEGP.toLocaleString()}</div>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Add to Bag CTAs -->
            <div class="flex items-center gap-3 pt-2">
              <!-- Stepper -->
              <div class="flex items-center border border-[#E2D5D0] rounded-full bg-white px-3 py-2">
                <button onclick="let q = document.getElementById('pdp-qty'); q.textContent = Math.max(1, Number(q.textContent)-1)" class="text-sm font-bold text-[#615257] px-2 hover:text-[#231B1E]">-</button>
                <span id="pdp-qty" class="text-xs font-bold px-2 text-[#231B1E]">1</span>
                <button onclick="let q = document.getElementById('pdp-qty'); q.textContent = Number(q.textContent)+1" class="text-sm font-bold text-[#615257] px-2 hover:text-[#231B1E]">+</button>
              </div>

              <!-- Main Add to Bag Button -->
              <button onclick="window.aureaApp.addToBag('${p.id}', window.aureaApp.selectedPdpSize || '100ml', Number(document.getElementById('pdp-qty').textContent))" class="flex-grow py-3 bg-[#7A3E4D] hover:bg-[#5D2C39] text-white rounded-full text-xs font-semibold shadow-sm transition">
                Add to Bag — EGP ${p.priceEGP.toLocaleString()}
              </button>

              <!-- Heart Button -->
              <button onclick="window.aureaApp.toggleFavorite('${p.id}')" class="p-3 bg-white border border-[#E2D5D0] rounded-full text-[#231B1E] hover:text-[#7A3E4D] transition" title="Save Fragrance">
                <svg class="w-4 h-4 ${isFav ? 'text-[#7A3E4D] fill-[#7A3E4D]' : 'text-[#615257]'}" fill="${isFav ? '#7A3E4D' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              </button>
            </div>

            <!-- Egyptian Courier Guarantee -->
            <div class="text-[11px] text-[#615257] space-y-1 pt-2 border-t border-[#E8DAD5]">
              <div class="flex items-center gap-2">
                <span class="text-[#C5A265]">✓</span>
                <span>Free Courier Delivery across Cairo &amp; Giza within 24–48 hours (Bosta Express).</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[#C5A265]">✓</span>
                <span>Cash on Delivery (COD) in EGP &amp; Mobile Wallets / InstaPay accepted upon courier arrival.</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <!-- Sticky Mobile Bottom Conversion Bar (Screen 14 Mobile PDP) -->
      <div class="md:hidden fixed bottom-14 left-0 right-0 z-30 bg-[#FAF6F4] border-t border-[#E8DAD5] p-3 flex items-center justify-between shadow-lg">
        <div>
          <div class="text-[10px] text-[#8C7A7F] uppercase">${p.name} (100ml)</div>
          <div class="text-sm font-bold text-[#7A3E4D]">EGP ${p.priceEGP.toLocaleString()}</div>
        </div>
        <button onclick="window.aureaApp.addToBag('${p.id}')" class="px-5 py-2.5 bg-[#7A3E4D] text-white text-xs font-semibold rounded-full shadow-sm">
          Add to Bag
        </button>
      </div>
    `;
  }

  selectPdpSize(volume, price) {
    this.selectedPdpSize = volume;
    this.showToast(`Selected size: ${volume} (EGP ${price.toLocaleString()})`);
  }

  // ===========================================================================
  // SCREEN 05: SCENT DISCOVERY QUIZ (STEP 2 OF 5)
  // ===========================================================================
  renderQuiz() {
    const step = this.state.quiz.step;
    const stepData = QUIZ_STEPS[step - 1];

    return `
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <!-- Step Progress Indicator -->
        <div class="text-center mb-8">
          <div class="text-[11px] uppercase tracking-[0.2em] text-[#C5A265] font-bold">
            STEP ${step} OF 5: ${step === 2 ? 'FRAGRANCE FAMILIES' : 'PERSONAL PREFERENCES'}
          </div>
          <h1 class="font-display text-3xl sm:text-4xl font-bold text-[#231B1E] mt-1">${stepData.title}</h1>
          <p class="text-xs text-[#615257] mt-1">${stepData.subtitle}</p>

          <!-- Progress Bar -->
          <div class="w-48 sm:w-64 h-1 bg-[#E8DAD5] rounded-full mx-auto mt-4 overflow-hidden">
            <div class="h-full bg-[#7A3E4D] transition-all duration-300" style="width: ${(step / 5) * 100}%"></div>
          </div>
        </div>

        <!-- Step Content -->
        ${step === 2 ? `
          <!-- 6 Tactile Fragrance Family Cards (Screen 05 Layout) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            ${stepData.options.map(opt => {
              const selected = this.state.quiz.answers.families.includes(opt.id);
              return `
                <div onclick="window.aureaApp.toggleQuizFamily('${opt.id}')" class="card-hover bg-white rounded-xl border ${selected ? 'border-[#7A3E4D] ring-2 ring-[#7A3E4D]/20' : 'border-[#E2D5D0]'} overflow-hidden cursor-pointer transition">
                  <div class="h-32 bg-[#FAF6F4] relative">
                    <img src="${opt.image}" alt="${opt.title}" class="w-full h-full object-cover">
                    ${selected ? `
                      <div class="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#7A3E4D] text-white flex items-center justify-center text-xs">✓</div>
                    ` : ''}
                  </div>
                  <div class="p-3.5">
                    <h3 class="text-xs font-bold text-[#231B1E]">${opt.title}</h3>
                    <p class="text-[11px] text-[#615257] mt-0.5">${opt.desc}</p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <!-- Alternate Steps (Mood, Notes, Occasion) -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D5D0] mb-8 space-y-4">
            ${stepData.notes ? `
              <div class="flex flex-wrap gap-2 justify-center py-4">
                ${stepData.notes.map(note => {
                  const active = this.state.quiz.answers.notes.includes(note);
                  return `
                    <button onclick="window.aureaApp.toggleQuizNote('${note}')" class="px-4 py-2 rounded-full text-xs transition ${active ? 'bg-[#7A3E4D] text-white font-semibold' : 'bg-[#FAF6F4] text-[#615257] border border-[#E2D5D0] hover:bg-[#F4ECE9]'}">
                      ${active ? '✓ ' : ''}${note}
                    </button>
                  `;
                }).join('')}
              </div>
            ` : `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${stepData.options.map(opt => `
                  <div onclick="window.aureaApp.nextQuizStep()" class="p-4 rounded-xl border border-[#E2D5D0] hover:border-[#7A3E4D] hover:bg-[#FAF6F4] cursor-pointer transition">
                    <h4 class="text-xs font-bold text-[#231B1E]">${opt.title}</h4>
                    <p class="text-[11px] text-[#615257] mt-1">${opt.desc}</p>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        `}

        <!-- Step Navigation Controls -->
        <div class="flex items-center justify-between border-t border-[#E8DAD5] pt-6">
          <button onclick="window.aureaApp.prevQuizStep()" class="px-6 py-2.5 rounded-full border border-[#E2D5D0] bg-white text-xs font-semibold text-[#615257] hover:bg-[#FAF6F4] transition ${step === 1 ? 'invisible' : ''}">
            &larr; Previous
          </button>

          <span class="text-xs text-[#8C7A7F]">
            ${step === 2 ? `${this.state.quiz.answers.families.length} of 3 families selected` : `Step ${step} of 5`}
          </span>

          <button onclick="window.aureaApp.nextQuizStep()" class="px-6 py-2.5 rounded-full bg-[#7A3E4D] hover:bg-[#5D2C39] text-white text-xs font-semibold shadow-sm transition">
            ${step === 5 ? 'Reveal Matches &rarr;' : 'Continue to Notes &rarr;'}
          </button>
        </div>

      </div>
    `;
  }

  toggleQuizFamily(familyId) {
    const list = this.state.quiz.answers.families;
    const idx = list.indexOf(familyId);
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      if (list.length < 3) list.push(familyId);
      else this.showToast('You can choose up to 3 families.');
    }
    this.render();
  }

  toggleQuizNote(note) {
    const list = this.state.quiz.answers.notes;
    const idx = list.indexOf(note);
    if (idx > -1) list.splice(idx, 1);
    else list.push(note);
    this.render();
  }

  nextQuizStep() {
    if (this.state.quiz.step < 5) {
      this.state.quiz.step += 1;
      this.render();
    } else {
      this.navigateTo('recommendations');
    }
  }

  prevQuizStep() {
    if (this.state.quiz.step > 1) {
      this.state.quiz.step -= 1;
      this.render();
    }
  }

  // ===========================================================================
  // SCREEN 06: PERSONALIZED RECOMMENDATIONS ("MADE FOR YOUR SENSES")
  // ===========================================================================
  renderRecommendations() {
    const topMatches = [
      FRAGRANCES.find(f => f.id === 'golden-amber'),
      FRAGRANCES.find(f => f.id === 'rose-veil'),
      FRAGRANCES.find(f => f.id === 'midnight-oud')
    ];

    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div class="text-[11px] uppercase tracking-[0.2em] text-[#C5A265] font-bold">YOUR BESPOKE OLFACTORY PROFILE</div>
            <h1 class="font-display text-3xl sm:text-4xl font-bold text-[#231B1E] mt-1">Made for Your Senses: Alexa’s Signature Edit</h1>
            <p class="text-xs text-[#615257] mt-1">Based on your affinity for Warm Amber, Madagascar Vanilla, and Australian Sandalwood.</p>
          </div>

          <a href="#quiz" class="px-4 py-2 rounded-full border border-[#E2D5D0] bg-white text-xs font-semibold text-[#615257] hover:bg-[#FAF6F4] transition whitespace-nowrap">
            Retake Scent Quiz ↺
          </a>
        </div>

        <!-- 3 Recommended Flacons (Screen 06 Layout) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          ${topMatches.map(p => `
            <div class="bg-white rounded-xl border border-[#E2D5D0] p-4 flex flex-col justify-between shadow-sm space-y-4">
              <div class="relative bg-[#FAF6F4] rounded-lg p-4 h-56 flex items-center justify-center">
                <span class="absolute top-2 left-2 badge-match text-[10px] font-bold px-2 py-0.5 rounded-full">${p.matchScore}% Match</span>
                <img src="${p.image}" alt="${p.name}" class="h-44 object-contain">
              </div>

              <div class="space-y-1">
                <div class="text-[9px] uppercase tracking-wider text-[#C5A265] font-bold">${p.collection}</div>
                <h3 class="font-display text-lg font-bold text-[#231B1E]">${p.name}</h3>
                <p class="text-[11px] text-[#8C7A7F] italic">${p.mood}</p>
                <div class="text-sm font-bold text-[#7A3E4D] pt-1">
                  EGP ${p.priceEGP.toLocaleString()} <span class="text-[10px] text-[#8C7A7F] font-normal">($${p.priceUSD} USD)</span>
                </div>
              </div>

              <!-- Recommendation Rationale (Why it matches you) -->
              <div class="bg-[#FAF6F4] p-3 rounded-lg border border-[#E8DAD5] text-xs space-y-1">
                <div class="text-[10px] uppercase font-bold text-[#8C7A7F]">Why it matches you (${p.matchScore}%):</div>
                <p class="text-[11px] text-[#615257] leading-relaxed">${p.whyMatches}</p>
              </div>

              <button onclick="window.aureaApp.addToBag('${p.id}')" class="w-full py-2.5 bg-[#7A3E4D] hover:bg-[#5D2C39] text-white rounded-full text-xs font-semibold transition">
                Add to Bag
              </button>
            </div>
          `).join('')}
        </div>

        <!-- Bespoke Discovery Set Banner (Screen 06 Bottom Banner) -->
        <div class="bg-[#F4ECE9] rounded-2xl p-6 sm:p-8 border border-[#E8DAD5] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-1">
            <span class="text-[10px] uppercase tracking-wider text-[#C5A265] font-bold">NOT READY TO COMMIT TO FULL FLACONS?</span>
            <h2 class="font-display text-xl sm:text-2xl font-bold text-[#231B1E]">
              Order Alexa's Bespoke Discovery Set (3 x 2ml Vials) — EGP 1,750 ($35 USD)
            </h2>
            <p class="text-xs text-[#615257]">
              Includes EGP 1,750 store voucher toward your first 100ml flacon. Free express delivery in Cairo &amp; Giza.
            </p>
          </div>

          <button onclick="window.aureaApp.showToast('Added Bespoke Discovery Set (3 x 2ml Vials) to Bag'); window.aureaApp.navigateTo('cart');" class="px-6 py-3 bg-[#7A3E4D] hover:bg-[#5D2C39] text-white rounded-full text-xs font-semibold transition whitespace-nowrap">
            Order Discovery Kit &rarr;
          </button>
        </div>

      </div>
    `;
  }

  // ===========================================================================
  // SCREEN 07: SHOPPING CART ("YOUR FRAGRANCE EDIT")
  // ===========================================================================
  renderCart() {
    const totals = this.calculateCartTotals();

    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div class="mb-6">
          <h1 class="font-display text-3xl sm:text-4xl font-bold text-[#231B1E]">YOUR FRAGRANCE EDIT</h1>
          <p class="text-xs text-[#615257] mt-1">Your cart: carefully chosen, uniquely you.</p>
        </div>

        <!-- Free Delivery Progress Meter (> EGP 4,500) -->
        <div class="bg-[#F4ECE9] rounded-xl p-3.5 mb-8 border border-[#E8DAD5] text-xs text-[#231B1E] flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-[#C5A265] font-bold">✦</span>
            <span>You have unlocked <strong>COMPLIMENTARY COURIER DELIVERY</strong> across Egypt (Order exceeds EGP 4,500)!</span>
          </div>
          <span class="text-[11px] font-bold text-[#7A3E4D]">Free Shipping</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Cart Items Table (Left 8 Cols) -->
          <div class="lg:col-span-8 space-y-4">
            ${this.state.cart.length === 0 ? `
              <div class="bg-white rounded-xl p-12 text-center border border-[#E2D5D0]">
                <h3 class="font-display text-xl font-bold text-[#231B1E]">Your Fragrance Edit is empty.</h3>
                <p class="text-xs text-[#615257] mt-1">Make room for your next signature.</p>
                <a href="#explore" class="inline-block mt-4 px-6 py-2.5 bg-[#7A3E4D] text-white text-xs font-semibold rounded-full">Continue Discovering</a>
              </div>
            ` : `
              ${this.state.cart.map((item, index) => `
                <div class="bg-white rounded-xl p-4 sm:p-5 border border-[#E2D5D0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div class="flex items-center gap-4">
                    <img src="${item.product.image}" alt="${item.product.name}" class="w-16 h-16 object-contain bg-[#FAF6F4] rounded-lg p-1 border border-[#E8DAD5]">
                    <div>
                      <h3 class="font-display text-base font-bold text-[#231B1E]">${item.product.name}</h3>
                      <p class="text-[11px] text-[#8C7A7F]">Eau de Parfum · ${item.size}</p>
                      <div class="flex items-center gap-3 text-[11px] text-[#7A3E4D] mt-1">
                        <button onclick="window.aureaApp.toggleFavorite('${item.product.id}')" class="hover:underline">♡ Move to Wishlist</button>
                        <span>·</span>
                        <button onclick="window.aureaApp.removeFromBag(${index})" class="text-[#8C7A7F] hover:underline">Remove</button>
                      </div>
                    </div>
                  </div>

                  <!-- Stepper & Price -->
                  <div class="flex items-center justify-between sm:justify-end gap-6">
                    <div class="flex items-center border border-[#E2D5D0] rounded-full px-2 py-1 bg-[#FAF6F4]">
                      <button onclick="window.aureaApp.updateBagQuantity(${index}, -1)" class="px-2 text-xs font-bold text-[#615257] hover:text-[#231B1E]">-</button>
                      <span class="text-xs font-bold px-2">${item.quantity}</span>
                      <button onclick="window.aureaApp.updateBagQuantity(${index}, 1)" class="px-2 text-xs font-bold text-[#615257] hover:text-[#231B1E]">+</button>
                    </div>

                    <div class="text-right">
                      <div class="text-sm font-bold text-[#231B1E]">EGP ${(item.priceEGP * item.quantity).toLocaleString()}</div>
                      <div class="text-[10px] text-[#8C7A7F]">($${(item.priceUSD * item.quantity)} USD)</div>
                    </div>
                  </div>
                </div>
              `).join('')}

              <!-- Included Discovery Samples Card -->
              <div class="bg-[#FAF6F4] rounded-xl p-4 border border-[#E8DAD5] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <div class="text-[10px] uppercase font-bold text-[#C5A265]">INCLUDED COMPLIMENTARY DISCOVERY SAMPLES (2 SELECTED):</div>
                  <div class="font-medium text-[#231B1E] mt-0.5">${this.state.complimentarySamples.join(' &nbsp;·&nbsp; ')}</div>
                </div>
                <button onclick="window.aureaApp.showToast('Sample selection saved');" class="text-[11px] text-[#7A3E4D] font-semibold hover:underline">Change Samples</button>
              </div>
            `}
          </div>

          <!-- Order Summary Card (Right 4 Cols - Screen 07 Right) -->
          <div class="lg:col-span-4">
            <div class="bg-white rounded-2xl p-6 border border-[#E2D5D0] shadow-sm space-y-4">
              <h2 class="text-xs uppercase tracking-widest font-bold text-[#231B1E]">Order Summary</h2>

              <div class="space-y-2 text-xs text-[#615257] border-b border-[#E8DAD5] pb-4">
                <div class="flex justify-between">
                  <span>Subtotal (${this.state.cart.reduce((s, i) => s + i.quantity, 0)} Fragrances)</span>
                  <span class="text-[#231B1E] font-medium">EGP ${totals.subtotalEGP.toLocaleString()} ($${totals.subtotalUSD})</span>
                </div>
                <div class="flex justify-between">
                  <span>Complimentary Discovery Set</span>
                  <span class="text-[#7A3E4D] font-semibold">EGP 0.00 (Gift)</span>
                </div>
                <div class="flex justify-between">
                  <span>Estimated VAT (14% Egypt)</span>
                  <span>EGP ${totals.vatEGP.toLocaleString()}</span>
                </div>
                <div class="flex justify-between">
                  <span>Bosta Courier Shipping (Cairo)</span>
                  <span class="text-[#7A3E4D] font-semibold">FREE</span>
                </div>
                ${totals.discountEGP > 0 ? `
                  <div class="flex justify-between text-[#7A3E4D] font-semibold">
                    <span>VIP Scent Pass Discount (10%)</span>
                    <span>-EGP ${totals.discountEGP.toLocaleString()}</span>
                  </div>
                ` : ''}
              </div>

              <!-- Promo Code Tag -->
              <div class="bg-[#F4ECE9] p-2.5 rounded-lg flex items-center justify-between text-xs">
                <span class="font-bold text-[#7A3E4D]">${this.state.promoCode.code} Applied</span>
                <span class="text-[#C5A265]">✓</span>
              </div>

              <!-- Final Total -->
              <div class="pt-2 flex items-baseline justify-between">
                <div>
                  <div class="font-display text-xl font-bold text-[#231B1E]">Total Amount</div>
                  <div class="text-[10px] text-[#8C7A7F]">Inclusive of all Egyptian duties</div>
                </div>
                <div class="text-right">
                  <div class="font-display text-2xl font-bold text-[#7A3E4D]">EGP ${totals.finalTotalEGP.toLocaleString()}</div>
                  <div class="text-xs text-[#8C7A7F]">($${totals.finalTotalUSD} USD)</div>
                </div>
              </div>

              <!-- Checkout CTA Button -->
              <a href="#checkout" class="block w-full py-3 bg-[#7A3E4D] hover:bg-[#5D2C39] text-white rounded-full text-xs font-semibold text-center shadow-sm transition">
                Proceed to Checkout &rarr;
              </a>

              <div class="text-[10px] text-[#8C7A7F] text-center space-y-0.5">
                <div>🔒 Secure 256-Bit SSL Checkout</div>
                <div>Cash on Delivery Available Across Egypt</div>
              </div>

            </div>
          </div>

        </div>

      </div>
    `;
  }

  // ===========================================================================
  // SCREEN 08: LOCALIZED EGYPTIAN CHECKOUT & PAYMENT SELECTION
  // ===========================================================================
  renderCheckout() {
    const totals = this.calculateCartTotals();
    const c = this.state.checkout;

    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <!-- PROMINENT UI CONCEPT DISCLAIMER BANNER (Screen 08 Top) -->
        <div class="bg-[#FFF8EE] border border-[#E5CFAB] text-[#8C6D32] text-[11px] p-3 rounded-xl mb-6 text-center font-medium">
          ✦ DESIGN SPECIFICATION &amp; PROTOTYPE ONLY · NO LIVE FINANCIAL TRANSACTIONS PROCESSED · PREPARED FOR SECURE GATEWAY INTEGRATION
        </div>

        <div class="mb-6">
          <h1 class="font-display text-3xl sm:text-4xl font-bold text-[#231B1E]">CHECKOUT &amp; EGYPTIAN DELIVERY</h1>
          <p class="text-xs text-[#615257] mt-1">Please review your delivery details and choose your preferred local payment method.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Checkout Steps (Left 8 Cols) -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- Step 1: Customer Information -->
            <div class="bg-white rounded-xl p-5 border border-[#E2D5D0] shadow-sm">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xs uppercase tracking-wider font-bold text-[#231B1E]">1. Customer Information</h3>
                <button onclick="window.aureaApp.showToast('Editing contact details');" class="text-[11px] text-[#7A3E4D] font-semibold hover:underline">Edit</button>
              </div>
              <div class="text-xs text-[#615257] space-y-1">
                <div class="font-semibold text-[#231B1E]">${c.name} &nbsp;·&nbsp; ${c.email}</div>
                <div class="text-[#7A3E4D] font-mono font-medium">${c.phone} (Egypt Mobile)</div>
              </div>
            </div>

            <!-- Step 2: Delivery Address (Egypt Localized) -->
            <div class="bg-white rounded-xl p-5 border border-[#E2D5D0] shadow-sm">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xs uppercase tracking-wider font-bold text-[#231B1E]">2. Delivery Address (Egypt Localized)</h3>
                <button onclick="window.aureaApp.showToast('Editing delivery address');" class="text-[11px] text-[#7A3E4D] font-semibold hover:underline">Edit</button>
              </div>
              <div class="text-xs text-[#615257] space-y-1">
                <div class="font-semibold text-[#231B1E]">${c.address}</div>
                <div>${c.district}, ${c.governorate}</div>
                <div class="text-[11px] text-[#8C7A7F]">Landmark: ${c.landmark} &nbsp;·&nbsp; Courier: <span class="text-[#7A3E4D] font-semibold">${c.courier}</span></div>
              </div>
            </div>

            <!-- Step 3: Payment Method Selector (All Tagged UI Concept) -->
            <div class="bg-white rounded-xl p-5 border-2 border-[#7A3E4D] shadow-sm space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-xs uppercase tracking-wider font-bold text-[#7A3E4D]">3. Select Payment Method</h3>
                  <p class="text-[10px] text-[#8C7A7F]">(UI Prototype Concept — Real Payment Gateways to be Integrated in Development)</p>
                </div>
              </div>

              <!-- Payment Method Radios -->
              <div class="space-y-3 pt-2">
                ${EGYPT_PAYMENT_METHODS.map(m => {
                  const isSelected = c.paymentMethod === m.id;
                  return `
                    <label onclick="window.aureaApp.state.checkout.paymentMethod = '${m.id}'; window.aureaApp.render();" class="p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition ${isSelected ? 'border-[#7A3E4D] bg-[#FAF6F4]' : 'border-[#E2D5D0] bg-white hover:bg-[#FAF6F4]'}">
                      <input type="radio" name="checkout-payment" value="${m.id}" ${isSelected ? 'checked' : ''} class="mt-0.5 accent-[#7A3E4D]">
                      <div class="flex-grow">
                        <div class="flex items-center gap-2">
                          <span class="text-xs font-bold text-[#231B1E]">${m.name}</span>
                          <span class="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#FFF8EE] text-[#8C6D32] border border-[#E5CFAB] font-bold">[${m.badge}]</span>
                        </div>
                        <p class="text-[11px] text-[#615257] mt-0.5 leading-relaxed">${m.description}</p>
                        ${m.id === 'cod' && isSelected ? `
                          <div class="mt-2 p-2 bg-[#F4ECE9] rounded text-[11px] text-[#7A3E4D] font-medium">
                            Please prepare exact cash total: <strong>EGP ${totals.finalTotalEGP.toLocaleString()}</strong> upon courier arrival.
                          </div>
                        ` : ''}
                      </div>
                    </label>
                  `;
                }).join('')}
              </div>

              <div class="text-[10px] text-[#8C7A7F] pt-2">
                🛡️ Security &amp; Compliance: AURÉA does not collect or store raw card credentials. All flows prepare for tokenized gateway iframe integration (Paymob / FawryPay).
              </div>

            </div>

          </div>

          <!-- Order Review Column (Right 4 Cols) -->
          <div class="lg:col-span-4">
            <div class="bg-white rounded-2xl p-6 border border-[#E2D5D0] shadow-sm space-y-4">
              <h2 class="text-xs uppercase tracking-widest font-bold text-[#231B1E]">Order Review (3 Items)</h2>

              <!-- Items Mini List -->
              <div class="space-y-3 pb-3 border-b border-[#E8DAD5]">
                ${this.state.cart.map(i => `
                  <div class="flex items-center justify-between text-xs">
                    <div class="flex items-center gap-2">
                      <img src="${i.product.image}" alt="${i.product.name}" class="w-8 h-8 object-contain bg-[#FAF6F4] rounded border border-[#E8DAD5]">
                      <div>
                        <div class="font-bold text-[#231B1E]">${i.product.name}</div>
                        <div class="text-[10px] text-[#8C7A7F]">${i.size}</div>
                      </div>
                    </div>
                    <span class="font-medium text-[#231B1E]">EGP ${(i.priceEGP * i.quantity).toLocaleString()}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Subtotals -->
              <div class="space-y-1.5 text-xs text-[#615257] border-b border-[#E8DAD5] pb-3">
                <div class="flex justify-between">
                  <span>Subtotal</span>
                  <span>EGP ${totals.subtotalEGP.toLocaleString()}</span>
                </div>
                <div class="flex justify-between">
                  <span>Delivery in Cairo</span>
                  <span class="text-[#7A3E4D] font-semibold">FREE</span>
                </div>
                <div class="flex justify-between">
                  <span>Payment Method</span>
                  <span class="font-semibold text-[#231B1E]">${c.paymentMethod.toUpperCase()}</span>
                </div>
              </div>

              <!-- Final Total -->
              <div class="pt-1 flex items-baseline justify-between">
                <span class="font-display text-xl font-bold text-[#231B1E]">Final Total</span>
                <div class="text-right">
                  <div class="font-display text-2xl font-bold text-[#7A3E4D]">EGP ${totals.finalTotalEGP.toLocaleString()}</div>
                  <div class="text-xs text-[#8C7A7F]">($${totals.finalTotalUSD} USD)</div>
                </div>
              </div>

              <!-- Confirm Order Button -->
              <button onclick="window.aureaApp.navigateTo('confirmation')" class="w-full py-3 bg-[#7A3E4D] hover:bg-[#5D2C39] text-white rounded-full text-xs font-semibold shadow-sm transition">
                Confirm &amp; Place Order &rarr;
              </button>

            </div>
          </div>

        </div>

      </div>
    `;
  }

  // ===========================================================================
  // SCREEN 09: ORDER CONFIRMATION & CONCIERGE TRACKING
  // ===========================================================================
  renderConfirmation() {
    const totals = this.calculateCartTotals();

    return `
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-white rounded-2xl p-8 sm:p-12 border border-[#E2D5D0] shadow-sm text-center space-y-6">
          
          <!-- Crest Checkmark -->
          <div class="w-16 h-16 rounded-full bg-[#F4ECE9] text-[#7A3E4D] border-2 border-[#C5A265] flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>

          <div>
            <div class="text-[11px] uppercase tracking-[0.2em] text-[#C5A265] font-bold">YOUR ORDER HAS BEEN CONFIRMED</div>
            <h1 class="font-display text-3xl sm:text-4xl font-bold text-[#231B1E] mt-1">Thank you for choosing AURÉA, Alexa.</h1>
            <p class="text-xs text-[#615257] mt-1">We have begun hand-preparing and bottling your personalized fragrance edit.</p>
            <p class="text-[11px] text-[#8C6D32] italic mt-0.5">Prototype demonstration confirmation — No live charge processed.</p>
          </div>

          <!-- Order Summary Badge Grid -->
          <div class="bg-[#FAF6F4] rounded-xl p-4 border border-[#E8DAD5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div>
              <div class="text-[10px] uppercase text-[#8C7A7F] font-bold">Order Number</div>
              <div class="text-sm font-bold text-[#231B1E]">#AUR-89241</div>
            </div>
            <div>
              <div class="text-[10px] uppercase text-[#8C7A7F] font-bold">Estimated Arrival</div>
              <div class="text-sm font-bold text-[#231B1E]">Sunday, Nov 23 (48h Express)</div>
            </div>
            <div>
              <div class="text-[10px] uppercase text-[#8C7A7F] font-bold">Payment Method (COD)</div>
              <div class="text-sm font-bold text-[#7A3E4D]">EGP ${totals.finalTotalEGP.toLocaleString()} ($${totals.finalTotalUSD})</div>
            </div>
          </div>

          <div class="text-xs text-[#615257] text-left border-t border-[#E8DAD5] pt-4">
            <strong>Delivery Address:</strong> 15 El-Gezira Street, Zamalek, Cairo · <strong>Courier:</strong> Bosta Express (Tracking #BST-773910)
          </div>

          <!-- Specialized Egyptian Climate Care Card -->
          <div class="bg-[#FFF8EE] rounded-xl p-4 border border-[#E5CFAB] text-left text-xs space-y-1">
            <div class="text-[10px] uppercase font-bold text-[#8C6D32]">✦ HOW TO PRESERVE YOUR NEW AURÉA FLACONS</div>
            <p class="text-[11px] text-[#615257] leading-relaxed">
              Store flacons away from direct sunlight and Egyptian summer heat. Allow the perfume to rest for 24 hours after courier transport to stabilize delicate top notes.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button onclick="window.aureaApp.showToast('Tracking #BST-773910 opened with Bosta Express courier portal')" class="w-full sm:w-auto px-6 py-2.5 bg-[#7A3E4D] hover:bg-[#5D2C39] text-white rounded-full text-xs font-semibold transition">
              Track Bosta Courier &rarr;
            </button>
            <a href="#home" class="w-full sm:w-auto px-6 py-2.5 bg-white border border-[#E2D5D0] hover:bg-[#FAF6F4] text-[#231B1E] rounded-full text-xs font-semibold transition">
              Back to Atelier Home
            </a>
          </div>

        </div>
      </div>
    `;
  }

  // ===========================================================================
  // SCREEN 10: WISHLIST / FAVORITES
  // ===========================================================================
  renderFavorites() {
    const favProducts = FRAGRANCES.filter(f => this.state.favorites.has(f.id));

    return `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-8">
          <h1 class="font-display text-3xl sm:text-4xl font-bold text-[#231B1E]">YOUR FAVORITES</h1>
          <p class="text-xs text-[#615257] mt-1">A curated collection of scents worth coming back to.</p>
        </div>

        ${favProducts.length === 0 ? `
          <div class="bg-white rounded-xl p-12 text-center border border-[#E2D5D0]">
            <h3 class="font-display text-xl font-bold text-[#231B1E]">Keep your next signature close.</h3>
            <p class="text-xs text-[#615257] mt-1">Tap a heart to save a fragrance, or tap again to remove it.</p>
            <a href="#explore" class="inline-block mt-4 px-6 py-2.5 bg-[#7A3E4D] text-white text-xs font-semibold rounded-full">Explore Scents</a>
          </div>
        ` : `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${favProducts.map(p => this.renderProductCard(p)).join('')}
          </div>
        `}
      </div>
    `;
  }

  // ===========================================================================
  // SCREEN 11 & 12: CUSTOMER PROFILE & AUTH SUITE
  // ===========================================================================
  renderProfile() {
    const prof = this.state.profile;

    return `
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-8">
          <h1 class="font-display text-3xl sm:text-4xl font-bold text-[#231B1E]">Welcome, ${prof.name.split(' ')[0]}</h1>
          <p class="text-xs text-[#615257] mt-1">Personal details and your unique Olfactory DNA.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <!-- Left Column: User Card & Navigation -->
          <div class="md:col-span-4 bg-white rounded-2xl p-6 border border-[#E2D5D0] shadow-sm space-y-4">
            <div class="flex items-center gap-3">
              <img src="assets/user_avatar.png" alt="${prof.name}" class="w-12 h-12 rounded-full object-cover border border-[#E2D5D0]" onerror="this.src='assets/hero_hand.png'">
              <div>
                <h3 class="font-bold text-sm text-[#231B1E]">${prof.name}</h3>
                <p class="text-[11px] text-[#8C7A7F]">${prof.email}</p>
              </div>
            </div>

            <div class="pt-4 border-t border-[#E8DAD5] space-y-2">
              <button class="w-full py-2 px-3 bg-[#7A3E4D] text-white rounded-xl text-xs font-semibold text-left">My Scent Preferences</button>
              <a href="#favorites" class="block w-full py-2 px-3 text-[#615257] hover:bg-[#FAF6F4] rounded-xl text-xs text-left">My Favorites (${this.state.favorites.size})</a>
              <a href="#explore" class="block w-full py-2 px-3 text-[#615257] hover:bg-[#FAF6F4] rounded-xl text-xs text-left">Continue Shopping</a>
            </div>
          </div>

          <!-- Right Column: Personal Details & Scent DNA Radar -->
          <div class="md:col-span-8 space-y-6">
            
            <!-- Personal Details Form -->
            <div class="bg-white rounded-2xl p-6 border border-[#E2D5D0] shadow-sm space-y-4">
              <h3 class="text-xs uppercase tracking-wider font-bold text-[#231B1E]">Personal Details</h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label class="block text-[#8C7A7F] text-[11px] mb-1">Full Name</label>
                  <input type="text" value="${prof.name}" class="w-full p-2.5 rounded-xl border border-[#E2D5D0] bg-[#FAF6F4]">
                </div>
                <div>
                  <label class="block text-[#8C7A7F] text-[11px] mb-1">Email Account</label>
                  <input type="email" value="${prof.email}" class="w-full p-2.5 rounded-xl border border-[#E2D5D0] bg-[#FAF6F4]">
                </div>
                <div>
                  <label class="block text-[#8C7A7F] text-[11px] mb-1">Mobile Number (Egypt +20)</label>
                  <input type="tel" value="${prof.phone}" class="w-full p-2.5 rounded-xl border border-[#E2D5D0] bg-[#FAF6F4]">
                </div>
                <div>
                  <label class="block text-[#8C7A7F] text-[11px] mb-1">Country / Region</label>
                  <input type="text" value="Egypt (Cairo Atelier)" class="w-full p-2.5 rounded-xl border border-[#E2D5D0] bg-[#FAF6F4]">
                </div>
              </div>

              <button onclick="window.aureaApp.showToast('Profile changes saved');" class="py-2.5 px-6 bg-[#7A3E4D] text-white rounded-full text-xs font-semibold hover:bg-[#5D2C39] transition">
                Save Changes
              </button>
            </div>

            <!-- OLFACTORY DNA ACCORD RADAR BARS -->
            <div class="bg-white rounded-2xl p-6 border border-[#E2D5D0] shadow-sm space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-xs uppercase tracking-wider font-bold text-[#231B1E]">Your Olfactory DNA</h3>
                  <p class="text-[11px] text-[#8C7A7F]">Harmonized chord distribution based on your diagnostic quiz answers.</p>
                </div>
                <a href="#quiz" class="text-xs text-[#7A3E4D] font-semibold hover:underline">Re-calibrate DNA</a>
              </div>

              <div class="space-y-3 pt-2">
                ${prof.dna.map(d => `
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span class="font-semibold text-[#231B1E]">${d.accord}</span>
                      <span class="text-[#8C7A7F] font-mono">${d.percent}%</span>
                    </div>
                    <div class="w-full h-2 bg-[#F4ECE9] rounded-full overflow-hidden">
                      <div class="h-full rounded-full transition-all duration-500" style="width: ${d.percent}%; background-color: ${d.color};"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>

        </div>
      </div>
    `;
  }

  // ===========================================================================
  // ABOUT / OUR HOUSE PAGE
  // ===========================================================================
  renderAbout() {
    return `
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div class="text-center space-y-3">
          <div class="text-[11px] uppercase tracking-[0.25em] text-[#C5A265] font-bold">OUR HOUSE · LA MAISON</div>
          <h1 class="font-display text-4xl sm:text-5xl font-bold text-[#231B1E]">The Story of AURÉA</h1>
          <p class="text-xs sm:text-sm text-[#615257] max-w-lg mx-auto leading-relaxed">
            Founded on the intimate philosophy that fragrance is not a mask, but an extension of one’s truest self.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-8 border border-[#E2D5D0] shadow-sm space-y-6 text-xs text-[#615257] leading-relaxed">
          <p>
            AURÉA was conceived in Grasse, France — the ancestral capital of high perfumery — and curated for clients across Europe and Egypt who reject mass-produced commercial fragrances.
          </p>
          <p>
            Each AURÉA flacon is compounded in small batches using sustainably harvested botanical absolutes, rare resin extracts, and ethical musks. We believe in transparency: our 3-Tier Olfactory Pyramids demystify note evaporation timelines so clients understand exactly how their scent evolves across 12 hours of wear.
          </p>
          <div class="p-4 bg-[#FAF6F4] rounded-xl border border-[#E8DAD5] space-y-2">
            <h4 class="font-bold text-[#231B1E] uppercase text-[11px] tracking-wider">The Cairo Atelier</h4>
            <p>
              Located in the diplomatic quarter of Zamalek, our Cairo concierge coordinates express temperature-controlled courier delivery across Cairo, Giza, and Alexandria, with full support for domestic Cash on Delivery in Egyptian Pounds (EGP), InstaPay transfers, and ValU installment plans.
            </p>
          </div>
        </div>

        <div class="text-center">
          <a href="#quiz" class="px-8 py-3 bg-[#7A3E4D] hover:bg-[#5D2C39] text-white rounded-full text-xs font-semibold shadow-sm transition">
            Begin Your Olfactory Diagnostic &rarr;
          </a>
        </div>
      </div>
    `;
  }
}

// Instantiate on DOM load
document.addEventListener('DOMContentLoaded', () => {
  new AureaApp();
});