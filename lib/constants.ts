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
    {
      days: ['Friday'] as const,
      open: '14:00',
      close: '20:00',
      dayOfWeek: ['Fr'] as const,
    },
  ],
  openingHoursDisplay: 'Sat–Thu: 9 AM – 8 PM  |  Fri: 2 PM – 8 PM',
  url: 'https://autospabahrainwll.com',
  mapDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Building+18+Road+54+Budaiya+505+Bahrain',
  mapEmbed:
    'https://maps.google.com/maps?q=AutoSpa+Bahrain+Budaiya+Bahrain&output=embed&z=16',
  zymolAuthorized: true,
  sameAs: [] as string[],
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
] as const
