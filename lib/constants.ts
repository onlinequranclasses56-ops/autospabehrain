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
  {
    question: 'How often should I detail my car in Bahrain?',
    answer:
      'In Bahrain\'s climate, a full detail — including paint correction and ceramic coating — is recommended once every 12–24 months depending on how the vehicle is stored and driven. Ceramic-coated vehicles should have a maintenance detail (decontamination wash, coating top-up inspection) every 6–12 months. For daily drivers exposed to sand, highway debris, and intense sun, an annual full detail preserves the paint and extends ceramic coating life significantly. Hand washing every 1–2 weeks is the essential ongoing maintenance between details.',
  },
  {
    question: 'How do I maintain a ceramic coating?',
    answer:
      'To maintain a ceramic coating properly: (1) hand wash with a pH-neutral shampoo — never an automatic car wash with rotating brushes; (2) use a clean microfibre wash mitt and the two-bucket method to avoid dragging grit across the coating; (3) avoid washing in direct sunlight or on hot panels; (4) apply a ceramic coating booster or spray topper every 3–6 months to refresh hydrophobic performance; (5) never apply wax or sealant on top of a ceramic coating — it clogs the coating\'s surface chemistry. AutoSpa Bahrain offers ceramic coating maintenance washes for vehicles we have coated.',
  },
  {
    question: 'How soon after ceramic coating can I wash my car?',
    answer:
      'After a professional 9H ceramic coating application, wait a minimum of 7 days before the first wash — and avoid rain, dew, or direct water contact during this curing period. The coating bonds chemically to the clear coat during this window; water contact before full cure causes water marks that become permanent. AutoSpa Bahrain advises keeping the vehicle garaged or under cover for the first week post-application. After 7 days, hand wash only — no automatic car washes for the lifetime of the coating.',
  },
  {
    question: 'What is the difference between ceramic coating and wax?',
    answer:
      'Ceramic coating is a liquid polymer that bonds permanently to the clear coat, creating a rigid glass-like protective layer with 9H hardness. It lasts 2–4 years and provides UV resistance, chemical resistance, and a hydrophobic surface. Car wax is a natural or synthetic coating that sits on top of the paint without bonding — it wears off in 1–3 months and offers minimal UV or chemical protection. In Bahrain\'s extreme UV and heat, wax degrades within weeks in summer. Ceramic coating is the only long-term paint protection option suited to Bahrain\'s climate.',
  },
  {
    question: 'Can ceramic coating be removed?',
    answer:
      'Yes, but it requires machine polishing with a cutting compound — the same process used for paint correction. Ceramic coating cannot be removed by washing or chemical strippers alone because it bonds chemically to the clear coat. At AutoSpa Bahrain, if a ceramic coating has degraded, failed, or needs to be replaced, we machine polish the surface to remove the old coating before applying a fresh layer. This is one reason why professional application matters: improperly applied coatings that develop high spots or smears are difficult and costly to correct later.',
  },
  {
    question: 'What is graphene coating and is it better than ceramic coating?',
    answer:
      'Graphene coating is an evolution of ceramic (SiO₂) coating that incorporates graphene oxide particles — a carbon-based material that conducts heat and adds flexibility to the coating layer. Graphene coatings typically offer better water spot resistance (fewer mineral deposits), lower surface temperature under sunlight, and improved durability compared to standard ceramic. In Bahrain\'s context — intense UV, hard water, and extreme heat — graphene\'s superior heat dissipation and water spot resistance make it a meaningful upgrade for vehicles stored outdoors. WhatsApp AutoSpa Bahrain on +973 1759 5971 to discuss graphene coating availability and pricing.',
  },
  {
    question: 'What is self-healing PPF?',
    answer:
      'Self-healing paint protection film (PPF) contains a top coat layer made from elastomeric polymer that recovers from light scratches, swirl marks, and minor abrasion when exposed to heat — either sunlight or warm water. A scratch that would remain visible on standard PPF will disappear within minutes on self-healing film once the panel warms up. All PPF installed at AutoSpa Bahrain uses self-healing film with a high-clarity optically transparent finish, ensuring the paint colour and gloss beneath are not altered.',
  },
  {
    question: 'How long does PPF last in Bahrain?',
    answer:
      'High-quality paint protection film (PPF) lasts 7–10 years under normal conditions. In Bahrain\'s climate — sustained UV above BHD 6 UVI daily, ambient temperatures above 40°C in summer, and salt-laden coastal humidity — premium PPF may show yellowing or edge lifting at 6–8 years if not maintained correctly. AutoSpa Bahrain installs PPF with UV-stabilised top coats specifically rated for high-temperature, high-UV markets. Correct installation with sealed edges and no contamination during fitting is the primary factor in longevity.',
  },
  {
    question: 'What is the difference between PPF and vinyl wrap?',
    answer:
      'PPF (paint protection film) is a thick, optically clear urethane film designed to protect the original paint from stone chips, scratches, and UV damage while remaining invisible. Vinyl wrap is a thinner, pigmented or textured film applied to change the colour or finish of the vehicle — gloss, matte, satin, carbon fibre. PPF protects; vinyl wraps transform appearance. PPF cannot change colour; vinyl wrap offers no meaningful stone chip protection. Some clients combine both: PPF on high-impact zones (bonnet, bumper), then a colour vinyl wrap over the full car.',
  },
  {
    question: 'What is matte PPF?',
    answer:
      'Matte PPF is a paint protection film with a low-gloss, satin or flat finish that converts a gloss paint surface to a matte appearance while providing full stone chip and UV protection. It is the most popular way to achieve a matte look without a respray, and it is fully reversible — the film can be removed without damaging the original gloss paint underneath. AutoSpa Bahrain installs matte PPF for clients wanting a matte black, matte grey, or satin finish on factory gloss paint. It also self-heals from light scratches in heat.',
  },
  {
    question: 'What is the legal window tint percentage in Bahrain?',
    answer:
      'In Bahrain, the General Directorate of Traffic requires a minimum Visible Light Transmission (VLT) of 30% for front side windows and 30% for the windscreen (excluding the factory-applied UV band at the top). Rear side windows and the rear windscreen have no legal minimum VLT in Bahrain, allowing darker tints on those panels. AutoSpa Bahrain installs all window tint films in strict compliance with Bahrain legal VLT limits, ensuring no risk of a traffic violation. We advise on the darkest compliant option for each window position.',
  },
  {
    question: 'How long does window tinting last?',
    answer:
      'Professional-grade window tinting installed at AutoSpa Bahrain lasts 5–10 years under Bahrain\'s conditions. Ceramic window tint film lasts longest — the carbon and ceramic layers resist UV-induced fading, bubbling, and purple discolouration. Budget dyed films degrade faster in Bahrain\'s intense UV, typically showing fading or bubbling within 2–3 years. Signs that tinting needs replacing include visible bubbling, colour shift to purple, or reduced heat rejection performance. AutoSpa Bahrain installs ceramic and carbon tint films backed by a manufacturer warranty.',
  },
  {
    question: 'What is the difference between ceramic, carbon, and dyed window tint?',
    answer:
      'Dyed window tint uses layers of dye to absorb sunlight — the cheapest option but least effective at rejecting heat and prone to fading and purpling within 2–3 years under Bahrain\'s UV. Carbon tint uses carbon particles that block infrared heat more effectively, do not fade, and do not interfere with mobile signals or GPS. Ceramic tint uses non-metallic ceramic particles to reject up to 50% of infrared heat, block 99% of UV, and maintain signal clarity — the highest performance option. AutoSpa Bahrain installs ceramic and carbon films for Bahrain\'s climate conditions.',
  },
  {
    question: 'What causes swirl marks on car paint?',
    answer:
      'Swirl marks are fine, circular scratches in the clear coat caused by abrasive contact during washing or polishing. The most common causes are: (1) washing with a dirty mitt or sponge that drags grit across the paint; (2) automatic car wash brushes picking up particles from other vehicles; (3) single-bucket washing without separating rinse and wash water; (4) drying with a household towel or chamois that traps particles; (5) wiping dust off a dry car. In Bahrain, fine windblown sand makes swirl marks a particularly fast-developing problem. Paint correction at AutoSpa Bahrain removes swirl marks permanently.',
  },
  {
    question: 'How do I remove water spots from my car?',
    answer:
      'Water spots in Bahrain are caused by hard water mineral deposits (calcium and magnesium) bonding to the paint as water evaporates in the heat. Light water spots can be removed with a dedicated water spot remover or diluted white vinegar on a microfibre cloth. Etched water spots — where mineral deposits have chemically bonded into the clear coat — require machine polishing with a cutting compound to remove. AutoSpa Bahrain regularly treats Bahrain vehicles with severe water spot etching using multi-stage paint correction. A ceramic coating applied afterwards provides a hydrophobic surface that prevents future water spot bonding.',
  },
  {
    question: 'How do I know if my car needs paint correction?',
    answer:
      'Your car needs paint correction if you see any of the following: (1) swirl marks visible in direct sunlight or under artificial light — circular scratches that dull the gloss; (2) water spots or mineral etch marks that do not wash off; (3) oxidation — a chalky, milky, or dull appearance on the clear coat; (4) random deep scratches from car park incidents; (5) faded or uneven paint colour on panels exposed to sun. In Bahrain, most vehicles over two years old have visible swirl marks from automatic car washes and sand abrasion. Send us photos on WhatsApp +973 1759 5971 for a free assessment.',
  },
  {
    question: 'What is a clay bar treatment and why is it used?',
    answer:
      'A clay bar is a detailing tool made from synthetic polymer that removes bonded surface contamination that washing alone cannot remove — industrial fallout, iron particles from brake dust, overspray, and embedded road tar. The clay bar is lubricated across the paint surface and physically pulls contaminants from the pores of the clear coat, leaving the paint completely smooth to the touch. Clay bar decontamination is a mandatory preparation step before paint correction, ceramic coating, or PPF installation at AutoSpa Bahrain — contamination left under a coating causes premature adhesion failure.',
  },
  {
    question: 'What is a decontamination wash?',
    answer:
      'A decontamination wash removes chemical and physical contamination that standard shampoo cannot dissolve. At AutoSpa Bahrain it involves three stages: (1) iron fallout remover — a pH-reactive chemical that dissolves iron particles embedded in the clear coat (it turns purple on contact with iron); (2) tar and adhesive remover — dissolves road tar, bitumen spots, and adhesive residue; (3) clay bar — physically removes any remaining bonded contamination. This process is essential before paint correction, ceramic coating, or PPF installation and is included as standard in all AutoSpa Bahrain full detail bookings.',
  },
  {
    question: 'How much does car detailing cost in Bahrain?',
    answer:
      'Car detailing prices in Bahrain at AutoSpa Bahrain: interior steam clean and leather care from BHD 55; full exterior hand wash and machine polish from BHD 80 (saloon) / BHD 100 (SUV); full showroom detail (exterior correction + interior deep clean) from BHD 150; 9H ceramic coating from BHD 150 (including paint correction prep); full-car PPF installation from BHD 400 depending on vehicle and film grade; window tinting from BHD 60 (saloon). Free vehicle collection from across Bahrain is included on all bookings. WhatsApp +973 1759 5971 for a precise quote for your vehicle.',
  },
  {
    question: 'What is the best way to protect a new car in Bahrain?',
    answer:
      'The best protection for a new car in Bahrain is paint protection film (PPF) on high-impact zones — bonnet, front bumper, wing mirrors, and door edges — combined with a 9H ceramic coating over the full vehicle. This combination protects against stone chips, road debris, UV degradation, sand abrasion, and chemical fallout simultaneously. Ideally, this should be done within the first month of ownership before any washing or sun exposure causes clear coat damage. AutoSpa Bahrain offers a new car protection package: decontamination, PPF on front panels, and full-car ceramic coating. WhatsApp us on +973 1759 5971 for a tailored quote.',
  },
  {
    question: 'How long does vinyl wrap last in Bahrain?',
    answer:
      'Premium cast vinyl wrap lasts 4–7 years under normal conditions. In Bahrain, sustained UV at 6–7 UVI daily and ambient temperatures above 45°C in summer reduce the expected lifespan to 3–5 years for standard vinyl, and up to 5–7 years for UV-stabilised premium cast films. Matte and satin finishes fade faster than gloss. Correct installation with sealed edges, no air pockets, and minimal panel heat above 80°C during application is critical for longevity. AutoSpa Bahrain uses only premium cast vinyl films rated for high-UV, high-heat markets.',
  },
  {
    question: 'Can vinyl wrapping damage car paint?',
    answer:
      'Vinyl wrapping does not damage factory paint when installed and removed correctly. The pressure-sensitive adhesive used on quality cast films is designed to release cleanly from original paintwork for up to 7 years. Damage occurs when: (1) the wrap is left on beyond its rated lifespan and the adhesive degrades; (2) low-quality calendar vinyl film is used — the adhesive is more aggressive; (3) the wrap is removed by pulling at sharp angles rather than at 45°. AutoSpa Bahrain uses premium cast films specifically engineered for safe removal. We do not recommend wrapping over resprayed panels that have not fully cured.',
  },
  {
    question: 'Can headlights be restored at AutoSpa Bahrain?',
    answer:
      'Yes — AutoSpa Bahrain offers professional headlight restoration for yellowed, hazy, or oxidised headlight lenses. In Bahrain, polycarbonate headlight lenses typically begin to yellow and cloud within 2–4 years due to UV radiation and heat breaking down the factory UV-protective lacquer. Our restoration process involves wet sanding through progressive grits, machine polishing to optical clarity, and applying a UV-resistant protective coating to prevent rapid re-oxidation. Restored headlights improve both appearance and night-time visibility. WhatsApp us on +973 1759 5971 for pricing.',
  },
  {
    question: 'How often should I wash my car in Bahrain?',
    answer:
      'In Bahrain, washing every 7–14 days is recommended for most vehicles. Bahrain\'s environment deposits sand, construction dust, brake iron particles, and salt-laden humidity on paintwork continuously — leaving contamination on the paint too long allows it to bond chemically into the clear coat and cause etching. For ceramic-coated vehicles, weekly washing with a pH-neutral shampoo maintains the hydrophobic layer at peak performance. Avoid washing in direct midday sun: early morning (before 9 AM) or evening (after 6 PM in summer) prevents water spotting from rapid evaporation.',
  },
] as const
