export const BUSINESS = {
  name: 'AutoSpa Bahrain W.L.L.',
  legalName: 'AutoSpa Bahrain W.L.L.',
  description:
    "Bahrain's premier automotive detailing studio specialising in ceramic coating, paint protection film (PPF), and Zymöl luxury detailing, serving Budaiya, Saar, Seef, Riffa, Hamala, and all of Bahrain.",
  address: {
    street: 'Building 18, Road 54, Budaiya 505',
    locality: 'Budaiya',
    region: 'Northern Governorate',
    country: 'BH',
    countryName: 'Bahrain',
    postalCode: '505',
    formatted: 'Building 18, Road 54, Budaiya 505, Bahrain',
    landmarks:
      'Off Budaiya Highway, near Saar Roundabout & Janusan Roundabout, behind the Harley-Davidson showroom',
  },
  phone: {
    primary: '+97317595971',
    primaryDisplay: '+973 1759 5971',
    secondary: '+97333606113',
    secondaryDisplay: '+973 3360 6113',
    whatsapp: '+97317595971',
    whatsappDisplay: '+973 1759 5971',
  },
  whatsapp: {
    number: '97317595971',
    baseUrl: 'https://wa.me/97317595971',
  },
  geo: {
    lat: 26.1943,
    lng: 50.4328,
  },
  openingHours: [
    {
      days: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'] as const,
      open: '09:00',
      close: '20:00',
      dayOfWeek: ['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th'] as const,
    },
  ],
  openingHoursDisplay: 'Mon–Thu & Sat–Sun: 9 AM – 8 PM  |  Friday: Closed',
  url: 'https://autospabahrainwll.com',
  mapDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Building+18+Road+54+Budaiya+505+Bahrain',
  mapEmbed:
    'https://maps.google.com/maps?q=AutoSpa+Bahrain+Budaiya+Bahrain&output=embed&z=16',
  zymolAuthorized: true,
  sameAs: [
    'https://www.facebook.com/autospabahrain/',
    'https://www.instagram.com/autospabahrain/',
    'https://www.linkedin.com/company/autospa-bahrain-w-l-l-',
  ],
} as const

export const SERVICE_AREAS = [
  'Budaiya',
  'Saar',
  'Seef',
  "A'ali",
  'Riffa',
  'Sanad',
  'Hamala',
  'Manama',
  'Sanabis',
  'Al Jasra',
  'Isa Town',
  'Muharraq',
  'Manama Center',
] as const

export type ServiceArea = (typeof SERVICE_AREAS)[number]

export const WHATSAPP = {
  general: () =>
    `${BUSINESS.whatsapp.baseUrl}?text=${encodeURIComponent(
      "Hello AutoSpa Bahrain! I'd like to enquire about your services and book an appointment."
    )}`,
  booking: (vehicle: string, service: string, area: string) =>
    `${BUSINESS.whatsapp.baseUrl}?text=${encodeURIComponent(
      `Hello AutoSpa Bahrain! I'd like to book a *${service}* for my *${vehicle}*. My area is *${area}*. Please confirm availability and send a quote. Thank you!`
    )}`,
  directions: () =>
    `${BUSINESS.whatsapp.baseUrl}?text=${encodeURIComponent(
      'Hello AutoSpa Bahrain! I need directions to your Budaiya workshop.'
    )}`,
}

export const FAQ_ITEMS = [
  {
    question: 'Where exactly is AutoSpa Bahrain located in Budaiya?',
    answer:
      'AutoSpa Bahrain is at Building 18, Road 54, Budaiya 505, Bahrain — off Budaiya Highway, near the Saar Roundabout and Janusan Roundabout, directly behind the Harley-Davidson showroom. From Saar Roundabout, head west on Budaiya Highway, pass the Harley-Davidson dealership on your right, and turn into the service road immediately after it. We are the first workshop complex on that road.',
  },
  {
    question: 'Do you offer vehicle pick-up and drop-off across Bahrain?',
    answer:
      "Yes. We regularly collect and return vehicles for clients in Saar, Seef, Hamala, Riffa, A'ali, and Al Jasra. For locations further afield — Isa Town, Muharraq, Sanad, or Manama Center — we can arrange pick-up with advance booking. WhatsApp us on +973 1759 5971 to confirm availability for your area.",
  },
  {
    question:
      "Ceramic coating vs. PPF — which is better suited to Bahrain's climate?",
    answer:
      "Both protect, but for different threats. Bahrain's intense UV and heat break down unprotected clear coat over months. A 9H ceramic coating forms a hydrophobic, UV-resistant layer that keeps paint glossy and makes washing effortless — ideal for daily drivers wanting long-term shine and sand protection. Paint Protection Film (PPF) adds a physical barrier against stone chips, road debris, and minor abrasion — essential for supercars, new vehicles, and front-end panels that take the most road punishment. For maximum protection in Bahrain's conditions, many clients combine both: PPF on high-impact zones and ceramic coating over the full car.",
  },
  {
    question: 'What does Zymöl luxury detailing involve, and is it worth it?',
    answer:
      "Zymöl is a US-based heritage brand whose products use natural carnauba wax, botanical oils, and plant-derived polymers — no silicones or petrochemicals. As an Authorized Zymöl Detailer, we follow certified application protocols that build genuine depth of gloss rather than a temporary cosmetic shine. A Zymöl exterior detail typically involves a thorough decontamination wash, paint correction, and a hand-laid wax finish. For concours-condition or collectible vehicles where the goal is show-quality shine and paint preservation rather than a quick wash, Zymöl detailing is the highest level of care available in Bahrain.",
  },
  {
    question: 'How long does a full ceramic coating or PPF installation take?',
    answer:
      'A professional 9H ceramic coating takes one to two days: one day for paint correction and prep, a second day for the coating itself plus a cure period. A full-car PPF installation typically requires two to three days depending on vehicle size and panel complexity. Partial PPF — front bumper and hood only — can often be completed the same day or next day. We will give you a confirmed timeline when you send us photos of your vehicle on WhatsApp.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash in Bahraini Dinar (BHD), debit and credit cards (Visa/Mastercard), and bank transfer. Payment is due on collection of the vehicle. A deposit may be required for bookings involving imported PPF film or specialist materials.',
  },
  {
    question: 'Is nano ceramic coating available in Bahrain and how long does it last?',
    answer:
      'Yes — AutoSpa Bahrain installs professional 9H nano ceramic coating, which is the same product commonly searched as "nano ceramic coating in Bahrain." Nano ceramic and ceramic coating are the same technology: SiO₂ nanoparticles that bond chemically to your car\'s clear coat. Our professional-grade nano ceramic coating lasts a minimum of 2 years under Bahrain\'s extreme UV and heat conditions, with many clients achieving 3–4 years through correct maintenance. Consumer spray-on "nano ceramic" products available in shops do not achieve the same bond strength or durability. Call or WhatsApp us on +973 1759 5971 for a quote.',
  },
  {
    question: 'Where can I get professional car window tinting near me in Bahrain?',
    answer:
      'AutoSpa Bahrain provides professional car window tinting from our Budaiya workshop, and we offer free vehicle collection from Manama, Riffa, Seef, Saar, Hamala, and all areas of Bahrain. We install ceramic, carbon, and dyed window tint films — all within Bahrain legal VLT limits. Car tinting starts from BHD 60 for a saloon. WhatsApp us on +973 1759 5971 to arrange collection and confirm pricing for your vehicle.',
  },
  {
    question: 'How much does car polishing cost near me in Bahrain?',
    answer:
      'Professional paint correction and machine polishing at AutoSpa Bahrain starts from BHD 80 for a sedan (single-stage correction) and BHD 120 for an SUV. Multi-stage correction for severe swirl marks or oxidation starts from BHD 150. We offer free collection from across Bahrain, so you do not need to drive to our Budaiya workshop. Car polishing removes swirl marks, water spots, and paint defects that accumulate rapidly in Bahrain\'s conditions. WhatsApp +973 1759 5971 to book.',
  },
  {
    question: 'What is the difference between a car wash and car detailing?',
    answer:
      'A car wash removes surface dirt in 5–30 minutes using automated equipment or a basic hand wash. Car detailing is a multi-step, hands-on process covering decontamination, paint correction, protective coating, and interior restoration. At AutoSpa Bahrain, a full detail starts with a foam cannon pre-soak, progresses through clay bar decontamination and machine polishing, and finishes with ceramic coating or Zymöl wax — a process that typically takes 1–3 days. Detailing restores and protects the vehicle; a car wash only cleans it.',
  },
  {
    question: 'What does a car spa do?',
    answer:
      'A car spa like AutoSpa Bahrain provides comprehensive automotive care far beyond a standard wash. Services include paint correction, 9H ceramic coating, paint protection film (PPF), window tinting, Zymöl luxury wax application, interior steam cleaning, and leather conditioning. The focus is on restoring the vehicle to showroom condition and protecting every surface against UV, heat, sand abrasion, and road contamination — all significant threats in Bahrain\'s climate.',
  },
  {
    question: 'What does auto spa mean?',
    answer:
      'Auto spa is a term for a specialist automotive care studio that combines the thoroughness of a detailing workshop with the premium, attentive service associated with a spa. It goes beyond a car wash to offer treatments such as paint correction, ceramic coating, paint protection film, interior steam clean, leather care, and window tinting. AutoSpa Bahrain is Bahrain\'s dedicated auto spa — every vehicle receives a full assessment and a personalised treatment plan before any work begins.',
  },
  {
    question: 'What is the difference between a car spa and a car wash?',
    answer:
      'A car spa is a specialist studio offering paint correction, ceramic coating, PPF, interior deep clean, and durable protective treatments. A car wash removes surface dirt using jets, rollers, or a hand wash — taking 5–30 minutes with no lasting protective benefit. A car spa treats the vehicle as a precision object: surfaces are decontaminated, corrected, and sealed rather than simply rinsed. AutoSpa Bahrain offers standalone hand washes as well as full multi-day detailing and coating programmes.',
  },
  {
    question: 'Is valeting the same as detailing?',
    answer:
      'Valeting and detailing overlap but are not identical. A valet is a thorough clean — exterior wash, interior hoover, shampoo, and a basic polish or wax. Detailing is more precise: it includes multi-stage paint correction with machine polishers, ceramic coating or PPF installation, and specialist chemical decontamination. At AutoSpa Bahrain, a full valet covers wash, polish, and interior clean, while a full detail adds machine paint correction and a durable long-term protective coating.',
  },
  {
    question: 'What is usually included in car detailing?',
    answer:
      'A full car detail at AutoSpa Bahrain includes: exterior decontamination wash with foam cannon and iron fallout remover; clay bar treatment; machine polish or multi-stage paint correction; protective coating (ceramic coating, PPF, or natural wax); interior vacuum; steam clean of all surfaces; leather or fabric conditioning; glass polishing; and tyre and trim dressing. Additional services — engine bay clean, headlight restoration, window tinting — can be added on. Individual services are available separately.',
  },
  {
    question: 'What are the stages of car detailing?',
    answer:
      'Professional car detailing follows five stages: (1) Wash — foam pre-soak, two-bucket hand wash, wheel clean, and rinse; (2) Decontaminate — iron fallout remover, tar remover, clay bar to strip bonded contamination; (3) Correct — machine polishing to remove swirl marks, scratches, and oxidation; (4) Protect — apply ceramic coating, PPF, or carnauba wax; (5) Interior — vacuum, steam clean, leather care, and trim restoration. AutoSpa Bahrain follows this exact sequence on every full detail booking.',
  },
  {
    question: 'How long should a full detail take?',
    answer:
      'A proper full car detail takes 1–3 days. Day 1: decontamination wash, clay bar, and interior deep clean. Day 2: machine paint correction. Day 3 (where ceramic coating is included): coating application and cure time. A basic wash-and-wax can be completed in a single day. At AutoSpa Bahrain we confirm the exact timeline when you send photos of your vehicle via WhatsApp — heavily swirled or oxidised paintwork sometimes requires an additional correction stage.',
  },
  {
    question: 'Does detailing remove scratches?',
    answer:
      'Paint correction — a core stage of car detailing — removes light to moderate scratches, swirl marks, water spots, and oxidation using machine polishers and cutting compounds. Single-stage correction removes around 60–70% of surface defects; multi-stage correction removes up to 95%. Deep scratches that break through the clear coat to the primer or bare metal cannot be corrected by polishing and require localised respray. At AutoSpa Bahrain, scratch depth is assessed under high-intensity detailing lights before work begins. Send us photos on WhatsApp +973 1759 5971 for a free assessment.',
  },
  {
    question: 'Can auto spas fix scratches?',
    answer:
      'Yes — AutoSpa Bahrain removes light to medium scratches, swirl marks, and paint defects through professional paint correction using machine polishers with cutting, polishing, and finishing compounds under high-intensity lighting. Surface-level scratches within the clear coat are fully removable. Deeper scratches that reach the base coat or primer appear white or grey; these require respray rather than polishing. WhatsApp us photos of your scratches on +973 1759 5971 and we will confirm what paint correction can achieve before you book.',
  },
  {
    question: 'Are car washes good or bad for your car?',
    answer:
      'Automated tunnel car washes with rotating brushes cause fine swirl marks and microscopic scratches in clear coat over time. Touchless jet washes are safer but use highly alkaline chemicals that strip wax and ceramic coatings. A hand wash using the two-bucket method with pH-neutral shampoo — as performed at AutoSpa Bahrain — is the safest regular wash method. For ceramic-coated or PPF-protected vehicles, the correct wash technique is critical to maintaining the protective layer\'s performance.',
  },
  {
    question: 'What are the disadvantages of automatic car washes?',
    answer:
      'Automatic car washes have five main drawbacks: (1) rotating brushes introduce swirl marks and fine scratches in clear coat; (2) shared brushes and rollers transfer grit and contamination from other vehicles; (3) high-alkaline chemicals strip wax, sealants, and ceramic coatings; (4) high-pressure water can lift door seals and force moisture into bodywork gaps; (5) wheel arches, door jambs, and underbody are cleaned inadequately. For any vehicle with ceramic coating, PPF, or quality paintwork, a professional hand wash is always preferable.',
  },
  {
    question: 'Why does my car get scratches after a car wash?',
    answer:
      'Post-wash scratches (swirl marks) come from: (1) dirty wash mitts dragged across the paint without rinsing; (2) single-bucket washing that recirculates grit-contaminated water back onto the panel; (3) automatic brush rollers that pick up abrasive particles from the previous vehicle; (4) drying with a standard household towel that traps particles against the clear coat. At AutoSpa Bahrain we use a foam cannon pre-rinse, fresh two-bucket wash technique, and clean microfibre drying towels on every wash to prevent contact scratching.',
  },
  {
    question: 'Is it worth paying for car detailing?',
    answer:
      'Yes — especially in Bahrain. UV radiation at Bahrain\'s latitude visibly degrades unprotected clear coat within 12–18 months. Sand and dust cause micro-abrasion during daily driving and washing. A professional detail with 9H ceramic coating from BHD 150 protects the paint for 2–4 years, preserves resale value, and eliminates hours of maintenance. The cost per year is typically lower than repeated polish-and-wax treatments, and the result is significantly more durable.',
  },
  {
    question: 'What is car deep cleaning?',
    answer:
      'Car deep cleaning — also called a full detail — covers every surface beyond a standard wash: engine bay, door jambs, boot, fabric extraction or leather shampoo, dashboard and vent cleaning, odour elimination, full exterior decontamination, and paint correction. At AutoSpa Bahrain, interior deep clean with steam sanitisation starts from BHD 55. A combined interior and exterior deep clean package starts from BHD 120, and it forms the essential preparation stage before ceramic coating or PPF installation.',
  },
  {
    question: 'What is mobile detailing?',
    answer:
      'Mobile detailing means a detailer brings all equipment to your home, office, or car park rather than your vehicle coming to a fixed workshop. AutoSpa Bahrain operates from our Budaiya workshop where we have professional lighting rigs, clean water supply, industrial steam equipment, and coating-grade temperature control that cannot be replicated outdoors. Instead of mobile detailing, we offer free vehicle collection and return across all of Bahrain — delivering workshop-quality results without you needing to leave home.',
  },
  {
    question: 'What are the benefits of using an auto spa?',
    answer:
      'Using an auto spa like AutoSpa Bahrain delivers five key benefits: (1) paint correction removes existing swirl marks, scratches, and oxidation; (2) ceramic coating or PPF provides long-term UV, heat, and abrasion protection — critical in Bahrain\'s climate; (3) interior deep clean eliminates bacteria, allergens, and odours; (4) leather conditioning prevents cracking from extreme heat; (5) protected vehicles are significantly easier to maintain and hold resale value better than unprotected paintwork.',
  },
  {
    question: 'Is it better to spa or wash a car?',
    answer:
      'Both serve different purposes. A regular hand wash every 1–2 weeks keeps the paint clean and preserves any protective coating already applied. A full spa treatment — paint correction, ceramic coating, and interior deep clean — is the right choice when the paint shows swirl marks, oxidation, or heavy contamination, or when preparing a new vehicle for long-term protection. At AutoSpa Bahrain, the ideal approach is a one-time coating at our workshop followed by periodic maintenance washes to preserve it.',
  },
  {
    question: 'Is car detailing good for cars?',
    answer:
      'Yes — professional detailing is one of the most effective ways to preserve a vehicle in Bahrain\'s conditions. UV radiation, heat above 50°C, wind-blown sand, and coastal humidity cause rapid paint degradation. Detailing removes existing contamination and defects, then seals the surface with ceramic coating or PPF — dramatically slowing deterioration. Interior detailing preserves leather and plastics that would otherwise crack in the heat. Regular detailing also maintains resale value far better than neglected paintwork.',
  },
  {
    question: 'What is a full car clean called?',
    answer:
      'A full car clean is called a full detail, complete valet, or full showroom detail. In professional automotive care it covers exterior decontamination, paint correction, protective coating or wax, interior deep clean, and leather or fabric treatment. At AutoSpa Bahrain it is our Full Showroom Detail service — bringing every surface of the vehicle to the highest standard inside and out, with optional 9H ceramic coating or Zymöl luxury wax as the finishing protection layer.',
  },
  {
    question: 'Why is car cleaning called detailing?',
    answer:
      'The term "detailing" originated in the US automotive show-car industry during the 1960s and 70s, where preparation required meticulous attention to every detail — door jambs, engine bays, panel edges, tyre sidewalls, stitching — far beyond a standard wash. The goal was to recreate a factory showroom finish through correction and protection, not simply cleaning. Today "car detailing" specifically describes multi-stage paint correction, protective coating application, and comprehensive interior restoration.',
  },
  {
    question: 'Are you supposed to tip at a car spa?',
    answer:
      'Tipping is not expected or customary at AutoSpa Bahrain. Our pricing reflects the full cost of labour, specialist materials, and time. The most genuinely appreciated form of recognition is a Google review or a referral to a friend or colleague — both make a real difference to a specialist studio like ours. That said, gratuity is always gratefully received if you wish to acknowledge exceptional workmanship.',
  },
  {
    question: 'How much should a full valet cost in Bahrain?',
    answer:
      'In Bahrain, a full exterior and interior valet typically ranges from BHD 40–80 for a saloon and BHD 60–100 for an SUV depending on condition and level of service. At AutoSpa Bahrain, a full valet (wash, machine polish, interior clean) starts from BHD 80 for a saloon and BHD 100 for an SUV. A full showroom detail including paint correction and ceramic coating starts from BHD 250. Exact pricing depends on vehicle size, paint condition, and whether a protective coating is included — WhatsApp us on +973 1759 5971 for a quote.',
  },
  {
    question: 'What cars should not go through a car wash?',
    answer:
      'Avoid automatic car washes if your vehicle has: (1) a fresh respray within the last 30–60 days (new paint needs time to fully cure); (2) a ceramic coating or PPF installed (roller brushes and harsh chemicals damage both); (3) cracked or peeling clear coat; (4) aftermarket spoilers, side skirts, or body kits with unsecured clips; (5) a matte, satin, or colour-shift wrap (brushes introduce gloss patches and abrasion). AutoSpa Bahrain always performs hand washes on coated and detailed vehicles.',
  },
  {
    question: 'Is it bad to go through a car wash every day?',
    answer:
      'Daily automatic car washes accelerate clear coat wear through cumulative brush abrasion and repeated exposure to alkaline wash chemicals. Even daily hand washing in direct Bahrain sun causes water spotting if shampoo dries before rinsing. For uncoated vehicles, washing every 1–2 weeks is sufficient. Ceramic-coated vehicles benefit from weekly hand washing to maintain the hydrophobic layer. If the vehicle needs daily cleaning, a quick rinse and microfibre wipe — without full shampoo — is the safest regular approach.',
  },
  {
    question: 'What is the best time to wash a car in Bahrain?',
    answer:
      'Early morning before 9 AM or early evening after 6 PM (7 PM in summer) is the best time to wash a car in Bahrain. Washing in direct midday sun causes shampoo and rinse water to evaporate before removal, leaving water spots and alkaline streaks on the paint. In Bahrain\'s summer months (May–September), panel surface temperatures can exceed 60°C by mid-morning — too hot for safe wax or coating application. AutoSpa Bahrain washes are always performed inside our shaded workshop, eliminating temperature and UV risk entirely.',
  },
  {
    question: 'Is car detailing better than a car wash?',
    answer:
      'Car detailing and a car wash serve different purposes rather than competing. A car wash cleans the surface in minutes and is ideal for regular maintenance. Detailing corrects paint defects, applies durable protection, and restores interior materials — it is a less frequent, deeper investment. The most effective approach for Bahrain\'s climate is regular hand washing (weekly or fortnightly) combined with a professional detail once or twice a year, or before applying ceramic coating or PPF. AutoSpa Bahrain offers both services.',
  },
  {
    question: 'What is a full auto detail?',
    answer:
      'A full auto detail is the most comprehensive level of vehicle care available. At AutoSpa Bahrain it covers: exterior foam wash, iron fallout and tar removal, clay bar decontamination, machine paint correction (single or multi-stage), ceramic coating or Zymöl wax application, interior vacuum, steam sanitisation, leather or fabric conditioning, glass polishing, engine bay clean, and tyre and trim dressing. The vehicle leaves in better condition than a standard wash can achieve, with paint protected and interior surfaces restored.',
  },
  {
    question: 'Can I detail my car myself?',
    answer:
      'Basic detailing — washing, clay bar, and applying a spray wax — is achievable at home with the right products. However, professional results for paint correction and ceramic coating require dual-action or rotary machine polishers, high-intensity lighting to identify defects, temperature-controlled conditions for coating application, and specialist chemicals not available in retail shops. Attempting ceramic coating at home without proper preparation usually results in high spots, streaks, and premature coating failure. For anything beyond a maintenance wash, a professional studio like AutoSpa Bahrain is recommended.',
  },
  {
    question: 'Is detailing a car easy?',
    answer:
      'Surface-level detailing — a thorough hand wash, interior vacuum, and spray wax — can be done at home with care. Paint correction and ceramic coating are significantly more technical: machine polishers require training to avoid burning through the clear coat, defects are only visible under high-intensity inspection lights, and ceramic coatings must be applied in controlled temperature and humidity conditions. A professional auto spa like AutoSpa Bahrain has the equipment, trained technicians, and workshop conditions to deliver correct, lasting results.',
  },
] as const
