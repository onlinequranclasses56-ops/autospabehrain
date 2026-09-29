export interface ServiceProcess {
  step: string
  detail: string
}

export interface ServicePricing {
  vehicle: string
  range: string
  note?: string
}

export interface ServiceFaq {
  q: string
  a: string
}

export interface ServiceData {
  slug: string
  name: string
  tagline: string
  heroImage: string
  metaTitle: string
  metaDescription: string
  intro: string
  whyBahrain: string
  process: ServiceProcess[]
  benefits: string[]
  pricing: ServicePricing[]
  duration: string
  faqs: ServiceFaq[]
  relatedSlugs: string[]
  badge?: string
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: 'ceramic-coating-bahrain',
    name: '9H Ceramic Coating',
    tagline: 'SiO₂ Nano-Ceramic — 2+ Year Protection',
    heroImage: '/autospa-bahrain-ceramic-coating-lexus-lx-maqaba-budaiya.webp',
    metaTitle: 'Ceramic Coating Bahrain | 9H Nano Ceramic from BHD 150 — AutoSpa Budaiya',
    metaDescription:
      'Best ceramic coating in Bahrain from BHD 150. Professional 9H SiO₂ nano ceramic — 2+ year UV protection & hydrophobic self-cleaning finish. AutoSpa Bahrain, Budaiya. Free collection from Manama, Riffa & Seef.',
    intro:
      'A 9H ceramic coating is a nano-scale silicon dioxide (SiO₂) liquid polymer that bonds chemically to your vehicle\'s factory clear coat, forming a permanent protective shell rated 9H on the pencil hardness scale. Once cured, it delivers a hydrophobic, self-cleaning surface that repels water, sand, and contaminants while blocking up to 99% of UV radiation from degrading your paint. Unlike a wax or sealant that sits on top of the paint and wears off within months, a professionally applied ceramic coating integrates into the clear coat and lasts two or more years under Bahrain\'s extreme conditions.',
    whyBahrain:
      "Bahrain ranks among the harshest environments on earth for automotive paintwork. The Kingdom's average UV index peaks at 11–12 during summer — the \"extreme\" category — and surface temperatures on a parked car can exceed 70 °C. Combined with 85%+ relative humidity from the Gulf, fine silica sand carried on Shamal winds, and alkaline water from desalination plants that leaves mineral deposits after every wash, unprotected clear coat oxidises, chalks, and fades visibly within 18–24 months. A SiO₂ ceramic coating acts as a sacrificial UV shield, prevents water spotting by causing water to bead and sheet off, and reduces the abrasive micro-scratching caused by sand particles during washing. For any vehicle in Bahrain — from a Toyota Land Cruiser doing daily commutes to a Porsche stored in a villa garage — ceramic coating is the single most cost-effective way to preserve paint condition and resale value long-term.",
    process: [
      {
        step: 'Decontamination Wash',
        detail:
          'A two-bucket pH-neutral wash removes loose contamination. An iron fallout remover dissolves embedded brake dust and metallic particles. A clay bar treatment lifts bonded industrial fallout, tree sap, and road tar — leaving the surface perfectly clean before any correction work begins.',
      },
      {
        step: 'Paint Correction',
        detail:
          'Under high-intensity LED lighting we inspect every panel for swirl marks, buffer trails, and wash-induced scratches. Where required, single- or dual-stage machine polishing with a DA or rotary polisher removes defects so the ceramic coating bonds to the clearest possible surface. This step is what separates a professional result from a DIY application.',
      },
      {
        step: 'Panel Wipe-Down & IPA Prep',
        detail:
          'All polishing oils and residues are removed with an isopropyl alcohol (IPA) panel wipe, bringing the surface to a completely bare, grease-free state. This step is critical — any residual contamination prevents chemical bonding and can cause high spots or delamination.',
      },
      {
        step: 'Ceramic Coating Application',
        detail:
          'The SiO₂ coating is applied panel-by-panel using folded applicator cloths, working in small sections at temperatures between 15 °C and 25 °C in our climate-controlled workshop bay. The product is levelled and buffed within the correct flash-off window. Multiple layers are applied for maximum depth and longevity.',
      },
      {
        step: 'Cure & Quality Inspection',
        detail:
          'The coated vehicle is kept in our dust-free bay for an initial cure period of 12–24 hours before any water contact. A final inspection under LED lighting confirms full coverage, even gloss levels, and zero high spots. We walk you through aftercare — the first 7 days are critical to achieving full hardness.',
      },
    ],
    benefits: [
      '9H pencil hardness — significantly harder than unprotected clear coat, resisting light abrasion and scratching',
      'Hydrophobic water-beading effect makes the car self-cleaning and dramatically easier to wash',
      'Blocks up to 99% of UV radiation, preventing paint oxidation and colour fade in Bahrain\'s extreme sun',
      'Chemical resistance protects against bird droppings, insect acid, alkaline car wash soaps, and road salts',
      'High-gloss, mirror-like finish that deepens the colour of dark vehicles and the shimmer of metallics',
      '2+ year longevity under Bahrain\'s harsh conditions, compared to 3–6 months for a traditional wax',
    ],
    pricing: [
      { vehicle: 'Sedan', range: 'BHD 150 – 250', note: 'Toyota Camry, BMW 3 Series, Mercedes C-Class' },
      { vehicle: 'SUV', range: 'BHD 220 – 360', note: 'Land Cruiser, Range Rover, BMW X5, Lexus LX' },
      { vehicle: 'Supercar', range: 'BHD 380 – 750', note: 'Porsche, Ferrari, Lamborghini, Bentley Continental' },
    ],
    duration: '1–2 days (paint correction day 1; coating application and initial cure day 2)',
    faqs: [
      {
        q: 'How long does a ceramic coating last in Bahrain\'s climate?',
        a: 'A professionally applied 9H ceramic coating from AutoSpa Bahrain lasts a minimum of 2 years under Bahrain\'s conditions, and many of our clients see 3–4 years with correct maintenance. The key variables are coating quality, number of layers applied, and how the car is washed afterwards — hand washing with a pH-neutral shampoo and avoiding automated brush car washes extends the life significantly.',
      },
      {
        q: 'Is paint correction always required before ceramic coating?',
        a: 'On nearly all vehicles, yes. If swirl marks, water spots, or fine scratches are present when the coating is applied, the ceramic layer locks those defects in permanently. For a new car with absolutely clean paintwork, minor prep may suffice. For any used vehicle, we include at minimum a light machine polish as standard. We will assess your car\'s specific paint condition when you bring it in or send us photos on WhatsApp.',
      },
      {
        q: 'Can ceramic coating be applied over PPF?',
        a: 'Yes, and this is actually the premium combination many Porsche, Land Rover, and Lexus owners in Bahrain choose. PPF is applied first on high-impact panels (front bumper, bonnet, door edges), and then ceramic coating is applied over the entire car — including over the film. This gives you physical stone chip protection from the PPF plus the hydrophobic, UV-blocking, easy-clean benefits of the ceramic layer on top.',
      },
      {
        q: 'What should I do to maintain a ceramic-coated car in Bahrain?',
        a: 'Wash the car every 1–2 weeks to prevent sand and mineral deposits from bonding to the coating. Always use a pH-neutral car shampoo (we recommend Zymöl Auto Wash). Never use automated brush car washes — the stiff bristles will abrade the coating. For stubborn water spots left by Bahrain\'s desalinated water, use a dedicated ceramic coating maintenance spray. We are happy to advise on specific products when you collect your vehicle.',
      },
      {
        q: 'What is nano ceramic coating and is it different from regular ceramic coating?',
        a: 'Nano ceramic coating and ceramic coating refer to the same technology — the "nano" prefix describes the nanoscale silicon dioxide (SiO₂) particles that form the protective layer. At AutoSpa Bahrain, our 9H ceramic coating is a professional-grade nano ceramic product, meaning the SiO₂ particles are engineered at nanometre scale to bond chemically at a molecular level with your car\'s clear coat. Consumer-grade sprays marketed as "nano ceramic" typically contain a much lower concentration of SiO₂ and do not achieve the same hardness, durability, or bond strength as a professionally applied coating. If you are searching for nano ceramic coating in Bahrain, our 9H product is what you are looking for.',
      },
    ],
    relatedSlugs: ['paint-protection-film-bahrain', 'full-showroom-detail-bahrain', 'paint-correction-bahrain'],
    badge: 'Most Popular',
  },

  {
    slug: 'paint-protection-film-bahrain',
    name: 'Paint Protection Film (PPF)',
    tagline: 'Self-Healing Urethane — Full or Partial Car',
    heroImage: '/autospa-bahrain-paint-protection-film-ppf-land-cruiser-defender-maqaba.webp',
    metaTitle: 'PPF Bahrain | Paint Protection Film from BHD 120 — AutoSpa Budaiya',
    metaDescription:
      'Best PPF installation in Bahrain from BHD 120. Self-healing paint protection film against stone chips, road debris & UV. Full or partial car. Free collection from Manama, Riffa & Seef. AutoSpa Bahrain.',
    intro:
      'Paint Protection Film (PPF) is a clear, optically transparent thermoplastic urethane film professionally cut and applied to your vehicle\'s exterior panels to act as a physical barrier against stone chips, road debris, scratches, and UV damage. Modern PPF features a self-healing top coat — minor surface scratches and swirl marks disappear with exposure to heat (from sunlight or warm water), restoring the film to an optically clear finish. PPF can be applied to the full vehicle or strategically to the highest-impact zones: front bumper, bonnet leading edge, door cups, door edges, and rocker panels.',
    whyBahrain:
      "Bahrain\'s road network — particularly the highways linking Manama to Budaiya, Riffa, and the Southern Governorate — generates significant stone chip and road debris hazard. Aggregate from construction sites, gravel from roadside landscaping work, and the sheer traffic density on the Budaiya Highway mean that unprotected front bumpers and bonnets accumulate chips rapidly, especially on low-slung sports cars and luxury SUVs. Beyond chips, Bahrain\'s fine silica sand carried on seasonal Shamal winds acts as an abrasive on paint panels over time. UV intensity at this latitude (26°N) causes yellowing and embrittlement of unprotected paint — particularly on lighter colours. For a new Land Rover Defender, Toyota Land Cruiser 300, or Porsche arriving from the showroom in Seef or Riffa, PPF installation within the first weeks is the most direct way to protect the investment.",
    process: [
      {
        step: 'Vehicle Measurement & Film Cutting',
        detail:
          'We use precision cutting software with manufacturer-specific templates to cut the PPF to exact panel dimensions before a single piece of film touches the car. Custom cuts for unique body shapes, pre-facelift models, or modified bodywork are handled in-house.',
      },
      {
        step: 'Paint Decontamination Wash',
        detail:
          'A thorough wash and decontamination using iron fallout remover and clay bar is performed. Any paint defects that will be visible through the transparent film are addressed with machine polishing at this stage — unlike ceramic coating, imperfections under PPF remain permanently visible if not corrected first.',
      },
      {
        step: 'Panel Prep & IPA Wipe',
        detail:
          'All panels to receive film are wiped with isopropyl alcohol solution to remove all oils and residues. Panel edges are inspected for chips that need touch-up before film application. In our Budaiya workshop, the installation bay is climate-controlled and positively pressurised to minimise airborne dust during application.',
      },
      {
        step: 'Film Application & Squeegee',
        detail:
          'Film is applied wet using a slip solution. Our technicians hand-stretch and precisely position each panel section before squeegeeing out all moisture and air bubbles. Edges are carefully tucked into door jambs and panel gaps for a seamless, invisible finish. Full-car installations take 2–3 days for accurate workmanship.',
      },
      {
        step: 'Cure, Inspect & Handover',
        detail:
          'The film is left to cure for 24–48 hours. During this period, small water pockets under the film (normal and expected) will dry out and disappear. We perform a final inspection under LED lighting to confirm edge adhesion, clarity, and absence of contamination under the film before the vehicle is returned.',
      },
    ],
    benefits: [
      'Physical barrier against stone chips, gravel impact, and road debris that would permanently scar paint',
      'Self-healing top coat eliminates light surface scratches and swirl marks with heat — the film restores itself',
      'Near-invisible optical clarity — high-quality film is genuinely undetectable on the finished vehicle',
      'UV-resistant formulation prevents film yellowing and protects the paint beneath from sun bleaching',
      'Protects resale value — a chip-free, original-paint vehicle commands significantly higher resale in Bahrain\'s used car market',
      'Partial coverage options let you protect the most vulnerable zones (front bumper, hood, mirrors) within a targeted budget',
    ],
    pricing: [
      {
        vehicle: 'Sedan — Full Car PPF',
        range: 'BHD 280 – 420',
        note: 'Toyota Camry, BMW 3 Series, Mercedes E-Class',
      },
      {
        vehicle: 'SUV — Full Car PPF',
        range: 'BHD 380 – 580',
        note: 'Land Cruiser, Range Rover, Lexus LX, Defender',
      },
      {
        vehicle: 'Supercar — Full Car PPF',
        range: 'BHD 580 – 1,200',
        note: 'Porsche 911, Ferrari, Lamborghini, Bentley',
      },
      {
        vehicle: 'Sedan — Partial PPF',
        range: 'BHD 120 – 190',
        note: 'Front bumper, hood, mirrors, door edges',
      },
      {
        vehicle: 'SUV — Partial PPF',
        range: 'BHD 160 – 270',
        note: 'Front bumper, hood, mirrors, door edges',
      },
      {
        vehicle: 'Supercar — Partial PPF',
        range: 'BHD 260 – 520',
        note: 'Front bumper, hood, mirrors, door edges',
      },
    ],
    duration: '1 day (partial); 2–3 days (full car)',
    faqs: [
      {
        q: 'What is the difference between gloss and matte PPF?',
        a: 'Gloss PPF is optically clear and designed to be invisible over standard gloss paintwork — it enhances shine and is self-healing. Matte PPF is designed for factory matte-finish vehicles or to convert a gloss finish to a satin/matte appearance. Matte PPF is also self-healing. AutoSpa Bahrain installs both. If you are considering a colour change or matte conversion, we can show you samples before any decision is made.',
      },
      {
        q: 'Can PPF be removed later without damaging the paint?',
        a: 'Yes. High-quality PPF can be removed cleanly without damaging factory paintwork, provided it is removed correctly using heat (a heat gun) and the appropriate peel technique. This is one of the key advantages of PPF over vinyl wraps — the adhesive is designed for long-term use but clean removal. We recommend professional removal rather than a DIY attempt to avoid any risk of paint pull-off on older vehicles.',
      },
      {
        q: 'Is PPF worth it for a Toyota Land Cruiser or daily driver in Bahrain?',
        a: 'Absolutely. Land Cruiser 200 and 300 Series owners in Bahrain are among our most frequent PPF customers, and for good reason — these vehicles are driven on a mix of highway, town, and occasionally rough terrain, and the front-end chips up quickly. A partial PPF on the front bumper, hood, and mirrors (BHD 160–270 for an SUV) pays for itself at the first resale. For a new Land Cruiser, we strongly recommend booking PPF within the first few weeks before chips occur.',
      },
      {
        q: 'How do I care for a PPF-protected car in Bahrain?',
        a: 'For the first 7 days after installation, avoid washing the vehicle and keep it away from heavy rain to allow the film to fully bond. Thereafter, wash normally with a pH-neutral shampoo. Avoid pressure washing directly at film edges, which can cause edge lifting over time. For matte PPF, never use gloss-enhancing spray waxes or sealants — they will create shiny spots on the matte surface. Annual inspections are recommended to check edge adhesion.',
      },
      {
        q: 'Where can I get PPF installed near me in Bahrain?',
        a: 'AutoSpa Bahrain is the leading PPF installation workshop in Bahrain, based in Budaiya on the Budaiya Highway — conveniently accessible from Saar (5 km), Seef (15 km), Manama (20 km), Riffa (25 km), and Hamala (8 km). We offer free vehicle collection from all areas across Bahrain, so you do not need to drive to us — we come to you, complete the PPF installation at our Budaiya workshop, and deliver your car back when it is ready. WhatsApp us on +973 1759 5971 to arrange collection.',
      },
    ],
    relatedSlugs: ['ceramic-coating-bahrain', 'full-showroom-detail-bahrain', 'paint-correction-bahrain'],
    badge: 'Premium',
  },

  {
    slug: 'zymol-luxury-detailing-bahrain',
    name: 'Zymöl Luxury Detailing',
    tagline: 'Authorized Zymöl Centre — Concours-Grade Finish',
    heroImage: '/autospa-bahrain-luxury-car-valeting-bentley-continental-maqaba-budaiya.webp',
    metaTitle: 'Zymöl Luxury Car Detailing Bahrain | Authorized Centre, Budaiya',
    metaDescription:
      'Authorized Zymöl luxury detailing in Bahrain from BHD 70. Natural carnauba wax, botanical oils, concours-grade finish. Trusted by Bentley, Porsche & Ferrari owners in Bahrain.',
    intro:
      'Zymöl luxury detailing is a concours-grade automotive care process using Zymöl\'s heritage range of natural carnauba wax, botanical oils, and plant-derived conditioning compounds — entirely free of silicones, petrochemicals, and synthetic polymers. As one of only a small number of Authorized Zymöl Detailers in the Middle East, AutoSpa Bahrain applies Zymöl products according to certified protocols, building genuine depth of gloss through hand-application techniques refined for collector cars, daily drivers, and everything in between. The result is a warm, living gloss that car enthusiasts immediately distinguish from a sealant or spray wax.',
    whyBahrain:
      "Bahrain\'s climate is particularly demanding on traditional wax finishes — the combination of 45 °C summer temperatures, intense UV, and salt-laden Gulf humidity means a standard carnauba wax applied without the correct preparation is consumed within 6–8 weeks. Zymöl\'s formulations are engineered for exactly these conditions: the carnauba content is stratified through multiple preparation grades, with harder, more heat-resistant waxes used as a base and softer, high-gloss topcoats applied over them. The result is a wax finish that holds up through a Bahrain summer significantly longer than comparable products. For concours-level vehicles — the Bentley Continental GT owners in Seef, the classic Mercedes collectors in Riffa, or the Porsche 911 RS owners who want their car to look exactly as it did the day it arrived — Zymöl is the definitive choice.",
    process: [
      {
        step: 'Pre-Wash Inspection & Documentation',
        detail:
          'Every panel is inspected in natural and LED lighting and documented photographically before work begins. This establishes a baseline and ensures any pre-existing damage is noted. For collector and concours vehicles, this documentation is provided to the owner.',
      },
      {
        step: 'Deep Decontamination Wash',
        detail:
          'A multi-stage wash using Zymöl Auto Wash shampoo is performed with separate wash media for different car zones to eliminate cross-contamination. Iron fallout remover treats embedded brake dust. A clay bar lifts bonded industrial contamination. The vehicle is dried using filtered compressed air and dedicated microfibre towels.',
      },
      {
        step: 'Paint Correction',
        detail:
          'Under showroom-grade LED lighting, paint depth gauge readings are taken before any machine polishing. Swirl marks, holograms, oxidation, and micro-scratches are removed via single or multi-stage machine correction. This step is not optional for Zymöl work — applying wax over defective paint magnifies rather than conceals imperfections.',
      },
      {
        step: 'Zymöl Cleaner Wax & Base Coat',
        detail:
          'A Zymöl cleaner wax is applied by hand in circular motions, working panel by panel. This light-abrasive wax performs a final micro-correction and begins building the wax foundation. It is removed and buffed by hand before the base coat is applied. No machines touch the car during wax stages — the warmth and pressure of hand application is integral to the Zymöl process.',
      },
      {
        step: 'Zymöl Topcoat, Glass, Wheel & Interior Dressing',
        detail:
          'The finishing topcoat carnauba wax is applied in thin, uniform layers and left to haze before careful hand removal. Glass is treated with Zymöl Clear glass cleaner. Wheels are cleaned, dressed with a non-silicone tyre gel. Rubber seals and plastic trim receive Zymöl Vinyl conditioner. The interior receives a light vacuum and wipe-down to complement the exterior finish.',
      },
    ],
    benefits: [
      'Natural carnauba wax and botanical oils — zero silicones, zero petrochemicals, safe for exotic paint systems',
      'Authorized application protocol ensures the product performs as intended — not a DIY result',
      'Concours-depth gloss with a warm, refractive quality that chemical sealants cannot replicate',
      'Safe for PPF-coated vehicles — Zymöl wax complements both coated and uncoated surfaces',
      'Includes full glass, wheel, trim, and interior cabin dressing — a complete presentation',
      'The benchmark choice for Bentley, Rolls-Royce, Ferrari, and classic vehicle owners in Bahrain',
    ],
    pricing: [
      { vehicle: 'Sedan', range: 'BHD 70 – 110', note: 'BMW 5 Series, Mercedes E-Class, Lexus ES' },
      { vehicle: 'SUV', range: 'BHD 100 – 150', note: 'Range Rover, Land Cruiser, Porsche Cayenne' },
      { vehicle: 'Supercar / Collectible', range: 'BHD 180 – 380', note: 'Bentley, Ferrari, Rolls-Royce, Porsche 911' },
    ],
    duration: '1 full day (8–10 hours); multi-stage concours prep: 2 days',
    faqs: [
      {
        q: 'What makes Zymöl different from other luxury car waxes?',
        a: 'Zymöl was founded in 1975 and is one of the few wax brands that uses genuine high-grade carnauba (T-1 grade, sourced from the Copernicia prunifera palm in Brazil) combined with conditioning botanical oils — the same class of ingredients used in fine leather care and cosmetics. There are no silicones or petrochemicals in the formulation. The brand holds official approval from several European marques including Aston Martin. The authorized application protocol matters as much as the product — Zymöl wax applied incorrectly yields poor results.',
      },
      {
        q: 'Is Zymöl detailing suitable for cars that already have ceramic coating?',
        a: 'Yes. Zymöl wax is compatible with ceramic coatings and PPF surfaces and is frequently used as a top-coat maintenance layer over ceramic-coated vehicles. Applying Zymöl over a ceramic coating slightly enhances the visual depth and provides an additional sacrificial layer. However, Zymöl detailing is not a substitute for ceramic coating — if you want long-term chemical and UV protection, ceramic coating is the foundation and Zymöl is the premium finish applied on top.',
      },
      {
        q: 'How often should I book a Zymöl detail in Bahrain?',
        a: 'For vehicles kept as daily drivers in Bahrain, we recommend a full Zymöl detail every 3–4 months to maintain the wax depth and protection. For garage-kept collector cars that are driven occasionally, once or twice per year is sufficient. Between full details, a Zymöl spray wax (available from us) can maintain the surface after each wash.',
      },
      {
        q: 'Do you offer Zymöl detailing for classic or concours cars in Bahrain?',
        a: 'Yes — this is actually one of our core specialisms. Bahrain has a small but serious classic car community, and several collectors in areas like Riffa, Saar, and Hamala bring their vehicles to us specifically for our concours preparation experience. We handle pre-event detailing, long-term storage preparation, and post-storage recommissioning waxwork for classic Mercedes-Benz, classic Porsche, and similar vehicles. Contact us via WhatsApp to discuss your specific vehicle.',
      },
    ],
    relatedSlugs: ['full-showroom-detail-bahrain', 'ceramic-coating-bahrain', 'paint-correction-bahrain'],
    badge: 'Exclusive',
  },

  {
    slug: 'interior-detailing-bahrain',
    name: 'Interior Steam & Leather Care',
    tagline: 'High-Temp Steam Sanitisation & Leather Conditioning',
    heroImage: '/autospa-bahrain-car-detailing-lexus-es-maqaba-budaiya.webp',
    metaTitle: 'Interior Car Detailing Bahrain | Steam Clean & Leather Care from BHD 55',
    metaDescription:
      'Deep interior car detailing in Bahrain from BHD 55. Steam sanitisation kills bacteria & removes embedded sand. Leather conditioning for luxury cars. Free collection from Manama, Riffa & Seef. AutoSpa Bahrain.',
    intro:
      'Interior steam detailing uses commercial-grade steam generators producing dry steam at 150–180 °C to deep-clean all cabin surfaces — fabric, leather, plastics, carpets, door cards, and vents — without the use of harsh chemical solvents. At these temperatures, steam kills 99.9% of bacteria, dust mites, and allergens on contact, simultaneously dissolving grease, food residue, and sand embedded in fibres. For leather interiors, we follow steam cleaning with a multi-stage conditioning treatment using pH-balanced leather cleaner, colour-safe leather conditioner, and a UV-protective leather sealant to nourish, restore suppleness, and prevent cracking.',
    whyBahrain:
      "Bahrain\'s climate creates specific interior deterioration patterns that differ significantly from cooler climates. Fine desert sand infiltrates every cabin gap and embeds in seat fabric and carpet pile, acting as an abrasive under occupants. Leather seating in a car exposed to 70 °C cabin temperatures for hours — common in an unshaded Bahrain parking lot in July — loses moisture and begins cracking within 2–3 years if not conditioned regularly. High Gulf humidity also promotes mould and bacterial growth inside air conditioning vents and under floor mats, leading to the musty odour common in cars that sit in covered parking. Steam detailing addresses all of these simultaneously: the high-temperature steam penetrates AC vents and kills mould spores, removes embedded sand from carpets and leather grain, and resets the interior to a hygienic baseline. We recommend interior steam detailing every 4–6 months for vehicles driven regularly in Bahrain.",
    process: [
      {
        step: 'Full Interior Strip & Pre-Vacuum',
        detail:
          'Floor mats are removed and pre-treated separately. Seats are vacuumed with a high-suction tool and narrow attachment to clear sand and debris from seams, headrests, and under the seat tracks. All door pockets, cup holders, and cubby holes are cleared and vacuumed.',
      },
      {
        step: 'Steam Treatment — Fabric & Hard Surfaces',
        detail:
          'The steam generator is applied systematically across all fabric surfaces (headliner, carpets, seat fabric where present), all hard plastics (dashboard, door cards, centre console), and into all AC vents. The 150–180 °C dry steam dissolves grease and kills bacteria without soaking surfaces or leaving moisture that could promote mould growth.',
      },
      {
        step: 'Leather Cleaning & Conditioning',
        detail:
          'Leather seats, steering wheel, door card inserts, and gear lever are cleaned using a pH-balanced leather cleaner applied with a soft bristle brush to remove surface grime, perspiration salts, and UV-bleached product residue from the grain. Following cleaning, a hydrating leather conditioner is worked into the leather to restore moisture content lost to Bahrain\'s heat.',
      },
      {
        step: 'Glass & Mirror Detail',
        detail:
          'Interior glass is cleaned with an ammonia-free glass cleaner applied in overlapping strokes and buffed with dedicated glass cloths. Interior mirrors and camera lenses are cleared of fogging and residue.',
      },
      {
        step: 'Odour Elimination & Finishing',
        detail:
          'An enzyme-based odour eliminator is applied to any fabric areas with persistent odours — especially under mats and in the boot. The interior is finished with a light application of non-silicone dashboard dressing on plastic trim, and mats are returned cleaned and dried. The vehicle is left with windows slightly open for 30 minutes to air the cabin.',
      },
    ],
    benefits: [
      'High-temperature steam eliminates 99.9% of bacteria, mould spores, and dust mites without chemical solvents',
      'Removes deeply embedded desert sand from carpet pile and leather grain — Bahrain-specific problem solved',
      'Eliminates interior odours at source — not masked with fragrance',
      'Leather conditioning restores moisture, prevents cracking, and extends leather life significantly in Bahrain\'s heat',
      'AC vent steam treatment clears mould and reduces the musty smell common in Gulf-climate vehicles',
      'Safe for all interior materials — no bleaching, no chemical damage to dyed leather or coloured plastics',
    ],
    pricing: [
      { vehicle: 'Sedan', range: 'BHD 55 – 90', note: 'Toyota Camry, Honda Accord, BMW 3 Series' },
      { vehicle: 'SUV', range: 'BHD 75 – 120', note: 'Land Cruiser, Prado, Range Rover, Lexus LX' },
      { vehicle: 'Supercar / Large Vehicle', range: 'BHD 130 – 250', note: 'Bentley, Rolls-Royce, large MPVs' },
    ],
    duration: '3–5 hours depending on vehicle size and condition',
    faqs: [
      {
        q: 'Does steam cleaning damage leather or fabric in a car?',
        a: 'When performed correctly, steam cleaning is one of the safest methods available. We use dry steam (low moisture content) at calibrated temperatures, and our technicians hold the nozzle at the correct distance for each material type. Leather is never steamed directly for prolonged periods — we use steam to loosen surface contamination and then immediately follow with physical wiping. The conditioning step after cleaning is essential to restore any moisture temporarily released by the heat.',
      },
      {
        q: 'Can steam detailing remove pet hair and deeply embedded sand from car seats?',
        a: 'Steam significantly loosens embedded sand particles and pet hair from fabric fibres, making subsequent vacuuming far more effective. For heavily matted pet hair in fabric upholstery, we use a rubber pet hair removal tool before and after steaming. In our experience with Bahrain vehicles, the combination of high-temperature steam and professional vacuuming removes 90–95% of embedded sand from seat seams, carpet pile, and boot areas.',
      },
      {
        q: 'My leather seats are cracked — can interior detailing repair them?',
        a: 'Light surface dryness and hairline cracking can be significantly improved with our multi-stage leather conditioning treatment. Deeper cracks and colour wear require leather repair and recolouring, which is a separate specialist service. When you bring your vehicle in, we assess the leather condition and advise honestly on what conditioning alone can achieve versus what would benefit from leather restoration work.',
      },
      {
        q: 'How long does the interior stay clean after a steam detail in Bahrain?',
        a: 'In normal use, a full interior steam detail in Bahrain will look noticeably better for 2–4 months, depending on usage. Vehicles with children or pets, or those driven daily in dusty conditions, will require more frequent treatment. We typically see clients booking interior details every 3–6 months. The leather conditioning benefit lasts 3–4 months before the leather begins to dry again in Bahrain\'s heat.',
      },
      {
        q: 'Where can I get my car interior professionally cleaned near me in Bahrain?',
        a: 'AutoSpa Bahrain offers professional interior car detailing from our workshop in Budaiya, and we collect vehicles from all areas of Bahrain including Manama, Riffa, Seef, Saar, Hamala, and Isa Town. Interior steam clean and leather care is typically completed in 3–5 hours, so we can often collect in the morning and return your car the same afternoon. WhatsApp us on +973 1759 5971 to arrange collection from your area.',
      },
    ],
    relatedSlugs: ['full-showroom-detail-bahrain', 'zymol-luxury-detailing-bahrain', 'ceramic-coating-bahrain'],
  },

  {
    slug: 'full-showroom-detail-bahrain',
    name: 'Full Showroom Detail',
    tagline: 'Multi-Stage Exterior + Interior — Factory Condition',
    heroImage: '/classic-mercedes-luxury-car-polishing-autospa-bahrain.webp',
    metaTitle: 'Full Showroom Car Detail Bahrain | AutoSpa Bahrain, Budaiya',
    metaDescription:
      'Complete showroom detail in Bahrain from BHD 180. Paint correction, decontamination, exterior protection & full interior steam clean. Serving all areas across Bahrain.',
    intro:
      'A full showroom detail is AutoSpa Bahrain\'s flagship multi-stage service, combining every exterior and interior process into a single comprehensive treatment designed to return your vehicle to factory delivery condition — or better. The service includes a full decontamination wash, clay bar treatment, paint correction (single or multi-stage), exterior protection (wax, sealant, or ceramic coating layer), complete interior steam clean, leather conditioning, glass polish inside and out, and a final presentation detail. This is the service to book before a sale, after a long period of neglect, or as an annual reset for a vehicle you care deeply about.',
    whyBahrain:
      "Vehicles in Bahrain accumulate a specific combination of deterioration that a standard car wash cannot address: a season of Shamal wind deposits silica sand and desert dust into every panel gap and seal; daily driving in stop-start traffic embeds brake dust into wheel faces and front bumpers; UV-intense summers oxidise any unprotected painted surface; and interior heat cycling through 25 °C nights to 45 °C days dessicates leather and plastics. A full showroom detail addresses all of these simultaneously, which is why we see many of our clients in Budaiya, Seef, Saar, and Riffa booking this service either annually or before preparing a vehicle for sale. The price difference between a clean showroom-presented vehicle and a neglected one in Bahrain\'s used car market routinely exceeds BHD 500–2,000 for premium models — making a full detail at BHD 180–480 one of the most financially sound decisions a car owner can make.",
    process: [
      {
        step: 'Initial Assessment & Pre-Wash Documentation',
        detail:
          'All panels are inspected under LED lighting and pre-existing damage is documented. A paint thickness gauge is used to check clear coat depth before any polishing work begins. This data guides our correction decisions and protects both client and workshop from any ambiguity.',
      },
      {
        step: 'Decontamination Wash, Wheel Detail & Clay Bar',
        detail:
          'A full two-bucket pre-wash foam, contact wash, wheel barrel cleaning, iron fallout treatment, and clay bar decontamination. The car leaves this stage completely free of bonded contamination. Wheels are individually cleaned, wheel arches are dressed, and tyre sidewalls cleaned.',
      },
      {
        step: 'Multi-Stage Paint Correction',
        detail:
          'Based on the initial assessment, we perform single-stage (heavy cut + finish) or multi-stage (cut, refine, finish) machine polishing using DA and/or rotary polishers. Correction targets swirl marks, buffer trails, water etching, and oxidation. After correction, the car is IPA-wiped to reveal a clean, defect-free paint surface.',
      },
      {
        step: 'Exterior Protection Application',
        detail:
          'Depending on the client\'s preference and budget, we apply either a Zymöl carnauba wax, a synthetic paint sealant, or a ceramic coating base layer. This is discussed and confirmed before booking. Glass is polished inside and out. Plastic trim and rubber seals are dressed with UV-protectant.',
      },
      {
        step: 'Full Interior Steam & Leather Treatment',
        detail:
          'The complete interior steam and leather care process (see our Interior Detailing service for full detail): strip and vacuum, steam all surfaces, leather clean and condition, glass inside, odour elimination, and finishing dressings. The car is presented with cleaned mats and a dressed, scent-neutral cabin.',
      },
    ],
    benefits: [
      'The only service that addresses exterior and interior deterioration in a single visit',
      'Recovers resale value — a showroom-conditioned car commands BHD 500–2,000+ more at point of sale in Bahrain',
      'Paint correction removes accumulated swirls, etching, and oxidation that build up over 12+ months',
      'Suitable as a pre-sale preparation, post-accident restoration, or annual premium maintenance',
      'Full documentation of pre- and post-condition with photographs provided to the owner',
      'Flexible — the exterior protection layer (wax, sealant, or ceramic) is chosen to match your budget and goals',
    ],
    pricing: [
      { vehicle: 'Sedan', range: 'BHD 180 – 320', note: 'BMW 5 Series, Mercedes E-Class, Lexus ES, Toyota Camry' },
      { vehicle: 'SUV', range: 'BHD 270 – 480', note: 'Land Cruiser, Range Rover, Lexus LX, BMW X7' },
      {
        vehicle: 'Supercar / Prestige',
        range: 'BHD 500 – 1,500',
        note: 'Bentley Continental, Ferrari, Rolls-Royce, Lamborghini',
      },
    ],
    duration: '2–3 days (condition-dependent)',
    faqs: [
      {
        q: 'What is included in a full showroom detail versus a standard car wash?',
        a: 'A standard car wash cleans the surface. A full showroom detail restores the surface. Specifically, our full showroom detail includes clay bar decontamination (removes bonded contamination that washing cannot), machine paint correction (removes scratches and swirls invisible in a standard wash bay), exterior protection (wax, sealant, or ceramic layer applied after correction), full interior steam clean and leather conditioning, interior and exterior glass polishing, wheel and arch detail, and plastic and rubber dressing. The result is measured in hours of skilled labour — typically 12–18 hours total — versus 20 minutes for a car wash.',
      },
      {
        q: 'Is a full showroom detail worth it before selling a car in Bahrain?',
        a: 'In almost every case, yes. Bahrain\'s used car buyers — both dealers and private buyers — examine paint condition carefully, and a car presented with swirl-free, gleaming paintwork, a fresh interior, and polished glass commands a measurably higher price and sells faster. We regularly see clients bring vehicles in that achieve BHD 800–2,500 more at auction or private sale after a full detail, comfortably exceeding the cost of the service. For premium marques (BMW, Mercedes, Land Rover, Lexus), the return is even stronger.',
      },
      {
        q: 'How is the full showroom detail different from the Zymöl luxury detailing?',
        a: 'The full showroom detail is a comprehensive package that includes paint correction (machine polishing to remove defects) and a full interior steam clean alongside exterior protection. The Zymöl luxury detailing focuses specifically on the highest level of exterior wax application using Zymöl\'s certified products — it includes paint correction but is not a full interior service package. Many clients book both: the full showroom detail as the baseline reset, and a Zymöl detail every few months to maintain the finish.',
      },
      {
        q: 'Can you collect my car from Riffa or Manama for a full showroom detail?',
        a: 'Yes. We regularly collect vehicles from Riffa, Manama, Seef, Saar, and Hamala for full showroom details. The service typically takes 2–3 days, so we arrange collection on day one, the car stays in our Budaiya workshop for the duration of the work, and we deliver it back on completion. Contact us on WhatsApp with your location, vehicle, and preferred date.',
      },
    ],
    relatedSlugs: ['ceramic-coating-bahrain', 'paint-protection-film-bahrain', 'zymol-luxury-detailing-bahrain'],
    badge: 'Flagship',
  },

  {
    slug: 'paint-correction-bahrain',
    name: 'Paint Correction & Machine Polish',
    tagline: 'Swirl Removal, Clay Bar & Multi-Stage Correction',
    heroImage: '/sports-coupe-paint-correction-interior-detailing-budaiya.webp',
    metaTitle: 'Paint Correction Bahrain | Machine Polish & Swirl Removal, Budaiya',
    metaDescription:
      'Professional paint correction in Bahrain from BHD 80. Swirl removal, clay bar, single & multi-stage machine polish. Prepares paint for ceramic coating or PPF. Free collection available.',
    intro:
      'Paint correction is the process of removing imperfections from a vehicle\'s clear coat — swirl marks, buffer trails, water etching, oxidation, and fine scratches — using machine polishers (dual-action and rotary) with abrasive compound and finishing polish pads. The result is a defect-free, optically clear surface with dramatically improved gloss and depth. Paint correction is a prerequisite for ceramic coating and PPF installation, and is also booked as a standalone service to restore a neglected vehicle\'s finish or prepare it for sale.',
    whyBahrain:
      "Paint defects accumulate faster in Bahrain than in most other countries. The primary culprit is washing technique: the majority of vehicles in Bahrain are washed by hand or at automated brush car washes where fine silica sand — present on every exterior surface after a Shamal wind event — is dragged across the clear coat under a sponge or brush, creating characteristic circular swirl marks visible in direct sunlight and under artificial lighting. Secondary causes include water etching (Bahrain\'s desalinated water is mildly alkaline and leaves mineral deposits that etch into clear coat if not removed promptly), bird dropping acid burns (UV heat accelerates the etching process), and UV oxidation of older vehicles. A BMW 3 Series or Lexus ES driven in Bahrain for two years without paint correction typically shows a paint surface that looks milky in sunlight and lacks the depth of colour visible on a new car. A single-stage paint correction recovers most of this — a multi-stage correction on a car like a Porsche 911 or Mercedes S-Class returns the paint to a mirror finish.",
    process: [
      {
        step: 'Paint Thickness Measurement',
        detail:
          'Before any abrasive work, we use an electronic paint depth gauge to measure clear coat thickness on every panel. This guides how aggressively we can safely correct — a panel showing 60–80 microns of clear coat can tolerate more correction than one at 30 microns from previous polishing work. We share these readings with clients on request.',
      },
      {
        step: 'Decontamination Wash & Clay Bar',
        detail:
          'A thorough decontamination wash removes loose contamination. An iron fallout spray is applied to dissolve metallic particles. Clay bar treatment follows — pulling the bar across a lubricated panel surface removes all bonded contamination (rail dust, tree sap, industrial fallout) that would otherwise cause scratching during the polishing stage.',
      },
      {
        step: 'Defect Assessment Under LED Lighting',
        detail:
          'With the car completely decontaminated, we inspect every panel under high-intensity LED lamps at multiple angles. Swirl marks, buffer trails, holograms, water etching, and deeper scratches are identified and marked. This determines whether single-stage (compound only) or multi-stage (compound + refine + finish) correction is required for each panel.',
      },
      {
        step: 'Machine Polishing — Correction Stages',
        detail:
          'For single-stage correction, a cutting compound and medium-cut pad on a DA or rotary polisher removes defects in one pass, followed by a finishing polish to refine the surface. Multi-stage correction uses progressively finer compounds and pads to maximise defect removal while minimising total clear coat removal. Each panel is wiped and checked under lighting between stages.',
      },
      {
        step: 'Final IPA Wipe & Finish Inspection',
        detail:
          'An isopropyl alcohol wipe removes all polishing oils, revealing the true corrected finish without any filler masking remaining defects. A final LED inspection confirms correction level. At this stage the car is ready for ceramic coating, PPF installation, or wax application — or it can be returned as-is with a sealant for immediate protection.',
      },
    ],
    benefits: [
      'Removes swirl marks, water etching, and fine scratches that standard washing cannot address',
      'Dramatically increases gloss depth and clarity — dark cars in particular show an immediate transformation',
      'Essential preparation step for ceramic coating and PPF — defects locked under coating cannot be corrected later',
      'Recovers resale value — corrected paintwork photographs and presents significantly better in the used car market',
      'Paint depth gauge measurements ensure safe correction without compromising clear coat integrity',
      'Available as a standalone service or bundled with ceramic coating, PPF, or Zymöl detailing',
    ],
    pricing: [
      { vehicle: 'Sedan', range: 'BHD 80 – 150', note: 'Single-stage to full multi-stage; BMW 3 Series, Toyota Camry' },
      { vehicle: 'SUV', range: 'BHD 120 – 200', note: 'Land Cruiser, Range Rover Sport, BMW X5, Lexus LX' },
      { vehicle: 'Supercar / Prestige', range: 'BHD 220 – 480', note: 'Porsche 911, Ferrari, Mercedes AMG GT' },
    ],
    duration: '1 day (single-stage); 1.5–2 days (multi-stage)',
    faqs: [
      {
        q: 'What is the difference between single-stage and multi-stage paint correction?',
        a: 'Single-stage correction uses one cutting compound and one finishing polish pass to remove defects. It is suitable for vehicles with light to moderate swirling and standard paint hardness, and takes roughly 1 day. Multi-stage correction uses two or more compound grades — a heavier cutting compound to address deeper defects, followed by progressively finer compounds to refine the surface to a maximum gloss. Multi-stage is recommended for dark-coloured vehicles where swirls are most visible, older vehicles with accumulated oxidation, or when the goal is a concours-grade finish prior to ceramic coating. It adds approximately half a day to the process.',
      },
      {
        q: 'Will paint correction remove deep scratches that go through the clear coat?',
        a: 'Paint correction can only remove defects that exist within the clear coat layer. Scratches that penetrate through the clear coat into the base coat or primer — visible as a lighter or white streak rather than just a shadow — cannot be corrected by polishing alone and require paint touch-up or panel respray. We will identify the depth of all significant scratches during the initial LED inspection and advise you honestly on what correction can achieve.',
      },
      {
        q: 'Can I book paint correction separately before getting ceramic coating later?',
        a: 'Technically yes, but practically we recommend doing them together in a single booking. If the car is corrected and then driven and washed before the ceramic coating is applied, new light scratches will be introduced before the coating protects the surface. For the best result, correction and ceramic coating are done in the same visit — we do the correction on day one and apply the coating on day two.',
      },
      {
        q: 'My Porsche / BMW / Land Rover has soft paint from the factory — is paint correction safe?',
        a: 'Yes, provided the technician measures paint depth before starting (which we always do) and uses appropriate pad and compound combinations for the paint hardness. German paint systems (BMW, Mercedes, Porsche, Audi) and Japanese systems (Toyota, Lexus, Nissan) have different hardness characteristics. Our team is experienced with a wide range of OEM paint systems. Soft-paint vehicles benefit most from DA polisher technique rather than aggressive rotary correction.',
      },
    ],
    relatedSlugs: ['ceramic-coating-bahrain', 'paint-protection-film-bahrain', 'full-showroom-detail-bahrain'],
  },

  {
    slug: 'window-tinting-bahrain',
    name: 'Window Tinting',
    tagline: 'UV & Heat Rejection Film',
    heroImage: '/autospa-bahrain-car-detailing-lexus-es-maqaba-budaiya.webp',
    metaTitle: 'Window Tinting Bahrain | Car Tinting from BHD 60 — AutoSpa Budaiya',
    metaDescription:
      'Professional car window tinting in Bahrain from BHD 60. Ceramic, carbon & UV heat rejection films. Legal VLT compliance. Serving Manama, Budaiya, Riffa & Seef. AutoSpa Bahrain — WhatsApp to book today.',
    intro:
      "Car window tinting is one of the most practical investments a Bahrain driver can make. AutoSpa Bahrain installs high-performance window tint films that reject up to 99% of UV radiation and significantly reduce solar heat gain inside the cabin — lowering interior temperatures by up to 15 °C, protecting leather and dashboard surfaces from UV fading, and reducing strain on the air conditioning system. Whether you need a basic dyed tint for privacy or a premium ceramic window tint for maximum heat rejection, we cut all films precisely using digital templating for a factory-fit finish with no bubbles, lifting edges, or distortion. We serve all of Bahrain including Manama, Riffa, Seef, Hamala, Saar and Budaiya.",
    whyBahrain:
      "Bahrain's summer sun is extreme — UV Index 11–12 is routine, and cabin temperatures in a parked car regularly exceed 70–80 °C without protection. This heat degrades leather, fades fabric, dries out plastic trim, and makes every entry into an unshaded vehicle uncomfortable. Beyond comfort, prolonged UV exposure is a major cause of dashboard cracking and interior fading in Bahrain's vehicles. A quality ceramic window film addresses all of these: it rejects heat, blocks UV, improves cabin comfort substantially, and prolongs the life of interior surfaces. We install all films in compliance with Bahrain's legal visible light transmission (VLT) requirements, ensuring your vehicle passes inspection.",
    process: [
      { step: 'Film Selection', detail: 'We discuss your priority — privacy, heat rejection, or UV protection — and recommend the appropriate film grade (dyed, carbon, ceramic, or nano-ceramic) for your budget and requirements.' },
      { step: 'Glass Preparation', detail: 'All glass surfaces are cleaned using specialist glass cleaner and a clay bar to remove silica deposits, water spots, and any previous tint adhesive residue before application.' },
      { step: 'Digital Template Cut', detail: 'Film is precision-cut using digital templates matched to your vehicle model and year — no hand-cutting guesswork, resulting in tight edge fits to the rubber seals on all windows.' },
      { step: 'Application & Squeegee', detail: 'Film is applied using a slip solution and squeeged from centre outward to eliminate air pockets and ensure complete adhesion across the full glass area.' },
      { step: 'Cure Period', detail: 'Newly tinted windows require a 3–5 day cure period before rolling down. We advise on correct post-install care to ensure the film sets without bubbling.' },
    ],
    benefits: [
      'Up to 99% UV rejection — protects skin and interior surfaces',
      'Significant heat reduction — up to 60% solar heat rejection with ceramic films',
      'Reduced air conditioning load — improves fuel economy',
      'Glare reduction for safer driving in Bahrain\'s bright conditions',
      'Enhanced privacy and security — harder to see valuables inside',
      'Legal VLT compliance for all installed films',
      'Protects leather, plastics, and dashboard from UV fading',
    ],
    pricing: [
      { vehicle: 'Saloon / Sedan', range: 'BHD 60–160', note: 'Dyed to ceramic-grade film' },
      { vehicle: 'SUV / 4WD', range: 'BHD 80–200', note: 'Full 5-window or all windows incl. panoramic' },
      { vehicle: 'Front Windscreen Film', range: 'BHD 40–80', note: 'UV-clear or light-tint (legal compliance maintained)' },
    ],
    duration: '3–5 hours depending on vehicle and film type',
    faqs: [
      {
        q: 'Is window tinting legal in Bahrain?',
        a: 'Yes, within Bahrain Traffic Law VLT limits. Side windows must maintain a minimum visible light transmission of 30% (darker than this is illegal), and the windscreen must use a UV-clear or very light tint with no significant VLT reduction. We install all films within legal limits and can provide documentation of VLT compliance on request.',
      },
      {
        q: 'What is the difference between dyed, carbon, and ceramic window tint?',
        a: 'Dyed film is the entry level — it provides basic privacy and some heat reduction but has limited longevity in Bahrain\'s UV. Carbon film blocks more heat than dyed and does not fade. Ceramic and nano-ceramic films are the premium tier: they reject the highest amount of heat and UV using infrared-blocking ceramic particles, are completely signal-transparent (no interference with GPS, phone, or TPMS), and last the lifetime of the vehicle. For Bahrain\'s conditions, we recommend ceramic film as the best long-term value.',
      },
      {
        q: 'How long does window tint last in Bahrain\'s heat?',
        a: 'Quality ceramic and carbon films last 10+ years under Bahrain\'s conditions. Entry-level dyed films typically show fading and purple discolouration within 2–3 years due to UV degradation. If you are investing in long-term protection, the additional cost of ceramic film pays for itself in longevity and performance.',
      },
      {
        q: 'Where can I get my car windows tinted near me in Bahrain?',
        a: 'AutoSpa Bahrain\'s window tinting workshop is in Budaiya, accessible from across Bahrain. We offer free vehicle collection from Manama, Riffa, Seef, Saar, Hamala, and other areas — so you do not need to come to us. Our technicians use digital template cutting for exact-fit results on any make or model. Tinting is typically completed within a single day. WhatsApp us on +973 1759 5971 to book or arrange collection.',
      },
      {
        q: 'What is the best window tint film for Bahrain\'s climate?',
        a: 'For Bahrain\'s extreme heat and UV, we recommend ceramic or nano-ceramic window tint films as the best long-term investment. Ceramic tints reject significantly more solar heat than dyed or metalised films, do not interfere with GPS or mobile signals, and do not fade or turn purple over time. Carbon film is a mid-tier option offering good heat rejection at a lower price point than ceramic. For the front windscreen, we use UV-clear ceramic film that meets Bahrain\'s VLT legal requirements while still blocking heat and UV radiation.',
      },
    ],
    relatedSlugs: ['ceramic-coating-bahrain', 'paint-protection-film-bahrain', 'interior-detailing-bahrain'],
  },

  {
    slug: 'professional-car-wash-bahrain',
    name: 'Professional Car Wash',
    tagline: 'Hand Wash — Two-Bucket Method',
    heroImage: '/autospa-bahrain-luxury-car-valeting-bentley-continental-maqaba-budaiya.webp',
    metaTitle: 'Professional Car Wash Bahrain | Hand Wash & Valet — AutoSpa Budaiya',
    metaDescription:
      'Professional hand car wash in Budaiya, Bahrain from BHD 15. Two-bucket method, rinse-less wash, and foam cannon pre-wash. No brush marks — safe for coated and detailed vehicles. Book on WhatsApp.',
    intro:
      "AutoSpa Bahrain's professional car wash goes far beyond a standard tunnel wash or automatic machine. We use a two-bucket hand wash system with pH-neutral shampoo, a foam cannon pre-soak to loosen road grime safely, and a dedicated rinse bucket to prevent cross-contamination between washes. Every contact with the paint surface is made with a premium microfibre wash mitt, not a sponge or brush that drags abrasive particles across the clear coat. For clients with ceramic-coated or recently detailed vehicles, we offer a no-contact rinse-less wash using waterless wash products approved for coated surfaces. The result is a clean car with zero fresh scratches — every time.",
    whyBahrain:
      "In Bahrain, the default car wash experience is either an automatic roller brush machine (which introduces micro-scratches across the clear coat with every visit) or a quick pressure wash with the same sponge used on the previous 50 cars. Neither is acceptable for a vehicle that has had professional paint correction, ceramic coating, or PPF applied. AutoSpa Bahrain's professional wash service is designed for owners who understand that the wrong wash technique undoes months of detailing investment. We use the same clean-contact protocol on a BHD 20 wash as we use during a BHD 500 full showroom detail — because the paint surface cannot tell the difference.",
    process: [
      { step: 'Pre-Rinse & Foam Cannon', detail: 'High-pressure rinse removes loose surface sand and grit. A foam cannon applies thick pH-neutral snow foam that dwells on the surface to emulsify road grime without contact, minimising abrasion risk.' },
      { step: 'Two-Bucket Hand Wash', detail: 'One bucket contains fresh soapy water; the second is a dedicated rinse bucket. The wash mitt is rinsed in the rinse bucket after every panel to avoid dragging grit back across the paint.' },
      { step: 'Wheel & Arch Cleaning', detail: 'Alloy wheels, arches, and tyres are cleaned with dedicated brushes and wheel-safe chemicals — never with the same mitt used on painted surfaces.' },
      { step: 'Final Rinse & Blow Dry', detail: 'A final rinse removes all shampoo residue. The car is dried using clean, dry microfibre drying towels in a straight wiping motion to eliminate water spots and avoid swirl marks.' },
      { step: 'Tyre Dressing & Glass Wipe', detail: 'Tyres are dressed with a satin-finish tyre gel for presentation. Glass is wiped down with a streak-free glass cleaner for clear visibility.' },
    ],
    benefits: [
      'Zero swirl marks — microfibre-only contact, two-bucket method',
      'Safe for ceramic-coated, PPF-wrapped, and freshly corrected vehicles',
      'pH-neutral shampoo preserves wax, sealant, and coating layers',
      'Foam pre-soak removes grit before any contact with the paint surface',
      'Dedicated wheel cleaning — no cross-contamination with paint mitts',
      'Consistent professional result — not dependent on a rushed forecourt wash',
    ],
    pricing: [
      { vehicle: 'Small Car / Saloon', range: 'BHD 15–25', note: 'Exterior wash + tyre dress' },
      { vehicle: 'SUV / 4WD / MPV', range: 'BHD 20–35', note: 'Exterior wash + tyre dress + wheel face clean' },
      { vehicle: 'Wash + Interior Vacuum', range: 'BHD 25–45', note: 'Exterior wash + full interior vacuum and wipe' },
    ],
    duration: '1–2 hours',
    faqs: [
      {
        q: 'Why is a professional hand wash better than an automatic car wash in Bahrain?',
        a: 'Automatic car wash brushes and cloth rollers accumulate abrasive sand, grit, and paint particles from every vehicle that passes through them. Each wash drags these particles across your clear coat, inflicting micro-scratches that accumulate into the dull, swirl-marked finish you see on most older vehicles in Bahrain. A two-bucket hand wash with a clean microfibre mitt makes zero abrasive contact with the paint, preserving gloss and protecting any coating or wax layer.',
      },
      {
        q: 'I have a ceramic coating — can I get a regular wash at AutoSpa Bahrain?',
        a: 'Yes, and we strongly recommend it. Ceramic-coated vehicles still need regular washing to remove road contamination, bird lime, and industrial fallout that accumulates on the coating surface. We use coating-safe, pH-neutral shampoo that does not strip or degrade the SiO₂ layer. We also offer a top-up spray sealant coat for coated vehicles that have been in service for 6+ months to refresh the hydrophobic properties.',
      },
      {
        q: 'How often should I wash my car in Bahrain?',
        a: 'In Bahrain\'s dusty conditions, a wash every 2–3 weeks is the practical minimum for maintaining appearance. During periods of Shamal wind activity (typically November–March), weekly washing may be necessary to prevent abrasive sand sitting on the paint surface. Vehicles parked outdoors accumulate contamination faster than garage-kept vehicles. A ceramic coating significantly reduces contamination adherence and makes each wash faster and easier.',
      },
    ],
    relatedSlugs: ['ceramic-coating-bahrain', 'interior-detailing-bahrain', 'full-showroom-detail-bahrain'],
  },

  {
    slug: 'headlight-restoration-bahrain',
    name: 'Headlight Restoration',
    tagline: 'Clear Lens — UV Seal Protection',
    heroImage: '/sports-coupe-paint-correction-interior-detailing-budaiya.webp',
    metaTitle: 'Headlight Restoration Bahrain | Yellowed Headlights Fixed — AutoSpa Bahrain',
    metaDescription:
      'Headlight restoration in Bahrain from BHD 25 per pair. Removes yellowing, oxidation, and hazing for MOT compliance and improved night visibility. UV-sealed finish at AutoSpa Budaiya.',
    intro:
      "Headlight restoration removes the yellowing, oxidation, and hazing that accumulates on polycarbonate headlight lenses over time in Bahrain's UV-intense environment. AutoSpa Bahrain's multi-stage headlight restoration process uses progressive wet-sanding from coarser to finer abrasive grades, machine polishing with compound, and a final UV-resistant sealant coat that prevents re-oxidation. The result is a visually clear lens that resembles the factory OEM appearance and restores proper beam projection for safe night driving — critical for MOT inspection and road safety.",
    whyBahrain:
      "Bahrain's extreme UV environment degrades polycarbonate headlight lenses faster than in almost any other market. Most vehicles 3–5 years old in Bahrain will show noticeable yellowing and hazing, and by 7–10 years many lenses are severely fogged. Beyond aesthetics, oxidised headlights reduce beam output by up to 75%, significantly impairing night visibility — a genuine road safety concern. Headlight replacement from a Bahrain dealership typically costs BHD 200–800 per assembly. Restoration at a fraction of this cost, sealed with UV-resistant lacquer, can extend the clarity and service life of existing lenses by 3–5 years.",
    process: [
      { step: 'Assessment & Taping', detail: 'Headlights are assessed for oxidation depth. Surrounding paintwork is masked with precision tape to protect the finish during wet-sanding.' },
      { step: 'Progressive Wet-Sanding', detail: 'Multi-grade wet-sanding removes the oxidised surface layer from the polycarbonate lens, starting with a coarser grade to remove deep yellowing and progressing through finer grades to restore a smooth, haze-free surface.' },
      { step: 'Machine Polish', detail: 'A light cutting compound applied with a DA polisher removes any remaining sanding marks and restores optical clarity to the lens surface.' },
      { step: 'UV Sealant Application', detail: 'A dedicated UV-resistant headlight sealant or clear lacquer is applied to the restored lens surface to prevent immediate re-oxidation and protect the clarity against Bahrain\'s UV for 2–3 years.' },
    ],
    benefits: [
      'Restores optical clarity — removes yellowing, hazing, and oxidation',
      'Improves night visibility and beam projection significantly',
      'Fraction of the cost of replacement headlight assemblies',
      'UV sealant extends clarity for 2–3 years post-restoration',
      'MOT compliance — clear lenses required for roadworthiness',
      'Completed same day — typically within 2–3 hours',
    ],
    pricing: [
      { vehicle: 'Standard Headlights (pair)', range: 'BHD 25–45', note: 'Mild to moderate oxidation' },
      { vehicle: 'Severe Oxidation (pair)', range: 'BHD 45–75', note: 'Deep yellowing requiring extended wet-sanding stages' },
      { vehicle: 'Single Headlight', range: 'BHD 15–35', note: 'One lens only — price varies with severity' },
    ],
    duration: '2–3 hours for a pair',
    faqs: [
      {
        q: 'How long does headlight restoration last in Bahrain?',
        a: 'With a quality UV sealant or lacquer applied after polishing, restored headlights remain clear for 2–3 years under Bahrain\'s UV conditions. Without a sealant, re-oxidation begins within weeks. If you have previously had a restoration done elsewhere that has already re-oxidised, this is the cause — we always apply UV sealant as the final step.',
      },
      {
        q: 'Are my headlights suitable for restoration, or do they need replacing?',
        a: 'The majority of yellowed and hazed headlights are restorable. The exceptions are lenses with significant internal moisture damage or cracking, or lenses that have been previously sanded so many times that the polycarbonate layer is too thin for further abrasion. We assess every headlight before starting and will tell you honestly if replacement is the better option.',
      },
      {
        q: 'Will headlight restoration also remove internal cloudiness?',
        a: 'External restoration removes the oxidation layer from the outside of the lens. If the cloudiness is inside the headlight assembly (caused by moisture ingress or internal fogging), the lens must be opened and dried internally, which is a separate procedure. We can assess which type of fogging you have before quoting.',
      },
    ],
    relatedSlugs: ['paint-correction-bahrain', 'full-showroom-detail-bahrain', 'professional-car-wash-bahrain'],
  },

  {
    slug: 'vinyl-wrapping-bahrain',
    name: 'Auto Vinyl Wrapping',
    tagline: 'Colour Change & Protective Wrap',
    heroImage: '/matte-black-ppf-paint-protection-autospa-maqaba.webp',
    metaTitle: 'Vinyl Wrapping Bahrain | Car Wrap Colour Change — AutoSpa Bahrain Budaiya',
    metaDescription:
      'Professional vinyl wrapping in Bahrain. Full colour change, partial wraps, and roof wraps from BHD 200. Gloss, matte, satin & carbon fibre finishes. AutoSpa Bahrain, Budaiya. WhatsApp to book.',
    intro:
      "AutoSpa Bahrain offers professional automotive vinyl wrapping for full colour change, partial wraps, bonnet and roof wraps, and decorative applications. Using premium cast vinyl films from leading manufacturers, we achieve clean, seamless finishes on complex curves, recessed panels, and bodywork with compound curves that reveal the quality difference between professional and amateur installations. Vinyl wrapping protects the original factory paintwork underneath, is fully reversible, and provides a dramatically different appearance without the cost and permanence of a respray. A well-installed wrap under Bahrain's conditions can last 4–7 years.",
    whyBahrain:
      "In Bahrain's ultra-competitive luxury vehicle market, personalisation and distinction matter — and vinyl wrapping provides both without permanently altering the vehicle. A matte black or satin wrap on a white Land Cruiser, a carbon fibre bonnet wrap on a sports car, or a full colour change from silver to Midnight Blue are all reversible transformations that preserve the factory paint underneath and protect it during the wrap's lifespan. Resale value is maintained because the original paint, sealed under the vinyl, is protected from UV and minor abrasion throughout the wrap's service life.",
    process: [
      { step: 'Consultation & Film Selection', detail: 'We discuss the target finish — full colour change, partial wrap, or accent wrap — and select the appropriate vinyl film (gloss, matte, satin, chrome delete, carbon fibre texture) from our current stock.' },
      { step: 'Surface Preparation', detail: 'All panels to be wrapped are decontaminated, stripped of wax or coating layers, and cleaned with isopropyl alcohol. Seams and edges are inspected for paint condition — wrap adhesion requires a clean, dry surface.' },
      { step: 'Panel Removal (if required)', detail: 'For the cleanest finish, external mirrors, door handles, and trim pieces may be partially removed to allow the vinyl to wrap fully under edges rather than being cut at the visible edge.' },
      { step: 'Film Application & Heat Forming', detail: 'Panels are wrapped using heat guns to conform the film to compound curves and body lines. Seams are located in inconspicuous areas. Each panel is squeegeed to remove air pockets and ensure full adhesion.' },
      { step: 'Post-Heat & Inspection', detail: 'All wrapped edges receive a final post-heat treatment to prevent lifting. The complete vehicle is inspected under controlled lighting for any lifting, bubbling, or misaligned seams before handover.' },
    ],
    benefits: [
      'Full colour change without respraying — preserves factory paint for resale',
      'Reversible — original paint is protected under the vinyl',
      'Wide range of finishes — gloss, matte, satin, chrome-delete, carbon texture',
      '4–7 year lifespan under Bahrain\'s conditions with quality cast vinyl',
      'Protects paint from UV fading, minor stone chips, and light abrasion',
      'Partial wraps — bonnet, roof, pillars, mirrors — for accent customisation',
    ],
    pricing: [
      { vehicle: 'Saloon / Sedan (Full Wrap)', range: 'BHD 450–800', note: 'Standard gloss or satin vinyl, full colour change' },
      { vehicle: 'SUV / 4WD (Full Wrap)', range: 'BHD 600–1,100', note: 'Premium cast vinyl, full exterior including roof' },
      { vehicle: 'Bonnet or Roof Wrap', range: 'BHD 80–180', note: 'Single panel, matte, carbon, or contrast colour' },
      { vehicle: 'Chrome Delete (trim/pillars)', range: 'BHD 120–300', note: 'Satin black or matte vinyl over chrome trim' },
    ],
    duration: '2–5 days depending on scope',
    faqs: [
      {
        q: 'How long does a vinyl wrap last in Bahrain\'s heat?',
        a: 'A quality cast vinyl film installed by a professional typically lasts 4–7 years in Bahrain under normal conditions — vehicles garaged overnight and washed correctly. Calendered (economy-grade) vinyl used by budget installers degrades faster and begins to shrink, lift, and discolour within 1–2 years. We use cast film, which is designed for the thermal expansion and contraction of Bahrain\'s temperature cycles.',
      },
      {
        q: 'Will wrapping my car affect its resale value?',
        a: 'A professionally installed and properly maintained vinyl wrap should have no negative effect on resale value — in many cases it positively affects it by protecting the original factory paint underneath from UV fading and minor abrasion. When you sell or remove the wrap, the original colour is revealed in better condition than it would have been without the wrap. Buyers who want a specific colour can have the wrap removed; buyers who want the wrapped finish are often willing to pay a premium.',
      },
      {
        q: 'Can I wrap a car that already has paint defects or chips?',
        a: 'Minor imperfections — light chips, small scratches — will be visible under vinyl wrap because the film conforms to the surface beneath it. Significant damage (rust, peeling clear coat, deep scratches) will be more visible. For the cleanest result, we recommend addressing significant paint defects before wrapping. We can assess your vehicle and advise on whether preparation work is needed before quoting.',
      },
    ],
    relatedSlugs: ['paint-protection-film-bahrain', 'ceramic-coating-bahrain', 'paint-correction-bahrain'],
    badge: 'New',
  },
]
