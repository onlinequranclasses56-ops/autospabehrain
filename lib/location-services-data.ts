export interface LocationServiceData {
  slug: string
  serviceSlug: string
  locationSlug: string
  serviceName: string
  locationName: string
  heroImage: string
  metaTitle: string
  metaDescription: string
  localSpecific: string
}

const LOCATION_SERVICE_COMBOS: Omit<LocationServiceData, 'slug' | 'metaTitle' | 'metaDescription' | 'heroImage'>[] = [
  // ── Ceramic Coating ────────────────────────────────────────────────
  {
    serviceSlug: 'ceramic-coating-bahrain',
    locationSlug: 'car-detailing-budaiya',
    serviceName: '9H Ceramic Coating',
    locationName: 'Budaiya',
    localSpecific:
      "AutoSpa Bahrain is based in Budaiya — our workshop at Building 18, Road 54 is where every ceramic coating installation takes place. As a Budaiya resident, you have direct access to Bahrain's most capable ceramic coating studio with no collection logistics required. Walk in or arrange a same-week appointment. Our Budaiya workshop operates in a climate-controlled bay specifically designed for ceramic coating application, ensuring consistent cure conditions regardless of Bahrain's ambient heat and humidity.",
  },
  {
    serviceSlug: 'ceramic-coating-bahrain',
    locationSlug: 'car-detailing-saar',
    serviceName: '9H Ceramic Coating',
    locationName: 'Saar',
    localSpecific:
      'Saar is just 5 km from AutoSpa Bahrain\'s Budaiya workshop — the closest professional ceramic coating studio to Saar by a significant margin. We collect from Saar regularly for ceramic coating installations, typically on a same-week or next-week schedule. Saar\'s Budaiya Highway commute makes vehicles particularly susceptible to stone chip and fine sand contamination on the clear coat — a ceramic coating\'s hydrophobic layer reduces contamination adhesion significantly, meaning Saar vehicles stay cleaner between washes and resist the daily highway grime accumulation.',
  },
  {
    serviceSlug: 'ceramic-coating-bahrain',
    locationSlug: 'car-detailing-seef',
    serviceName: '9H Ceramic Coating',
    locationName: 'Seef',
    localSpecific:
      "Seef's concentration of premium European vehicles — BMW, Mercedes-Benz, Audi, Lexus — and their owners' high expectations makes it one of our most active collection areas for ceramic coating. We collect from Seef offices, residential towers, and the commercial district regularly, fitting the 2-day ceramic coating process around corporate schedules. Seef vehicles also benefit particularly from the hydrophobic properties of ceramic coating — the district's multi-storey car parks and proximity to construction and reclamation works deposit a specific dust-and-salt-air combination on paint that a coated surface sheds far more readily than unprotected clear coat.",
  },
  {
    serviceSlug: 'ceramic-coating-bahrain',
    locationSlug: 'car-detailing-riffa',
    serviceName: '9H Ceramic Coating',
    locationName: 'Riffa',
    localSpecific:
      "Riffa is 25 km from our Budaiya workshop, and we collect from across Riffa — East Riffa, West Riffa, Riffa Views, and Al Hajiyat — for ceramic coating installations. Riffa's proximity to Bahrain's southern desert margins means vehicles accumulate fine silica dust from prevailing southerly winds, which is particularly abrasive on unprotected clear coat. A 9H ceramic coating provides a hardened surface that reduces micro-abrasion during washing and makes removing the dust significantly easier — a practical benefit for Riffa residents who wash their vehicles frequently.",
  },
  {
    serviceSlug: 'ceramic-coating-bahrain',
    locationSlug: 'car-detailing-manama',
    serviceName: '9H Ceramic Coating',
    locationName: 'Manama',
    localSpecific:
      "Manama's urban environment — with construction dust, industrial fallout from the port, and high traffic pollution — creates one of the most aggressive paint contamination environments in Bahrain. Vehicles parked in central Manama, the Diplomatic Area, and business district towers accumulate a specific combination of brake dust, industrial particulate, and alkaline car park concrete dust that bonds to clear coat. A ceramic coating's hardened, contamination-resistant surface makes decontamination washes significantly more effective and prevents the surface etching that unprotected clear coat suffers from in this environment. We collect from Manama's offices, hotels, and residential towers regularly.",
  },
  {
    serviceSlug: 'ceramic-coating-bahrain',
    locationSlug: 'car-detailing-hamala',
    serviceName: '9H Ceramic Coating',
    locationName: 'Hamala',
    localSpecific:
      'Hamala is 8 km from our Budaiya workshop — one of our closest collection areas — and home to a significant community of European expatriates who are frequently the most knowledgeable clients we see about ceramic coating technology and application standards. Hamala clients often arrive with specific questions about coating longevity, contact angle measurements, and multi-layer application — our team is prepared for this level of technical discussion. For Hamala vehicles garaged outdoors, the Gulf coastal environment and fine sand from nearby undeveloped land make the UV protection and contamination-resistance of a 9H ceramic coating particularly relevant.',
  },

  // ── PPF ────────────────────────────────────────────────────────────
  {
    serviceSlug: 'paint-protection-film-bahrain',
    locationSlug: 'car-detailing-budaiya',
    serviceName: 'Paint Protection Film (PPF)',
    locationName: 'Budaiya',
    localSpecific:
      'AutoSpa Bahrain\'s Budaiya workshop is the PPF installation centre for the northern corridor of Bahrain. All PPF cutting is performed in our dedicated bay using digital plotter templates, ensuring a factory-fit finish without hand-cutting risk. Budaiya residents benefit from the shortest logistics — drop off and collect with no travel time. Vehicles on the Budaiya Highway accumulate stone chips on their front panels quickly from the mix of construction traffic and domestic driving conditions; front bumper and bonnet PPF is our most frequently installed option for Budaiya-based vehicles.',
  },
  {
    serviceSlug: 'paint-protection-film-bahrain',
    locationSlug: 'car-detailing-saar',
    serviceName: 'Paint Protection Film (PPF)',
    locationName: 'Saar',
    localSpecific:
      "PPF is the most booked service from Saar at AutoSpa Bahrain — a fact driven by Saar's high proportion of Land Cruiser, Range Rover, and Porsche owners who use the Budaiya Highway daily and are acutely aware of stone chip risk on new or recently painted vehicles. The 5 km collection distance means we can arrange next-day collection from Saar in most cases. Front bumper, bonnet, and mirror PPF is the typical Saar booking; full-car PPF is increasingly common on new supercar deliveries from Saar-area clients.",
  },
  {
    serviceSlug: 'paint-protection-film-bahrain',
    locationSlug: 'car-detailing-seef',
    serviceName: 'Paint Protection Film (PPF)',
    locationName: 'Seef',
    localSpecific:
      "Seef's executive car owners — particularly those with BMW M-Series, Mercedes AMG, Porsche, and Range Rover Sport — represent a significant portion of our full-front PPF bookings. The commercial district's tight multi-storey car parks are also a source of door-edge and bumper scrapes that PPF mitigates effectively on regularly parked vehicles. We collect from Seef residential and commercial addresses with typical next-day or same-week availability for PPF installation bookings.",
  },
  {
    serviceSlug: 'paint-protection-film-bahrain',
    locationSlug: 'car-detailing-riffa',
    serviceName: 'Paint Protection Film (PPF)',
    locationName: 'Riffa',
    localSpecific:
      "Riffa is at 25 km from our workshop, but the distance doesn't deter Riffa's vehicle owners from PPF — the Highway 1 and Budaiya Highway commute from Riffa is one of Bahrain's highest stone chip risk routes, and Riffa Views clients with Porsches, BMWs, and Range Rovers are particularly motivated to protect their vehicles. We collect from all Riffa areas for PPF installation, with multi-day bookings (full-car PPF takes 2–3 days) managed on a structured collection-and-return basis.",
  },
  {
    serviceSlug: 'paint-protection-film-bahrain',
    locationSlug: 'car-detailing-manama',
    serviceName: 'Paint Protection Film (PPF)',
    locationName: 'Manama',
    localSpecific:
      "Manama's Diplomatic Area, financial district, and hotel zone generate PPF demand from a specific client profile — high-value vehicles that see daily urban use in congested streets, with associated door-edge dings, minor abrasion, and panel contact that PPF prevents effectively. We collect from Manama office buildings, residential towers, and hotels. For diplomatic vehicles requiring a film that provides physical protection without altering the vehicle's official appearance, our gloss-finish PPF is completely optically clear and undetectable.",
  },
  {
    serviceSlug: 'paint-protection-film-bahrain',
    locationSlug: 'car-detailing-hamala',
    serviceName: 'Paint Protection Film (PPF)',
    locationName: 'Hamala',
    localSpecific:
      "Hamala's European expatriate community frequently comes to us for PPF on vehicles they have brought to Bahrain from Europe or purchased new in Bahrain — often BMW, Mercedes, Porsche, and Volvo models whose owners are familiar with PPF from European detailing markets. At 8 km from our workshop, Hamala is one of our most accessible collection areas. We typically see Hamala clients for front-section PPF (bumper, bonnet, fenders, mirrors) as the core protection package, with full-car PPF on new vehicle deliveries from enthusiast clients.",
  },

  // ── Window Tinting ─────────────────────────────────────────────────
  {
    serviceSlug: 'window-tinting-bahrain',
    locationSlug: 'car-detailing-budaiya',
    serviceName: 'Window Tinting',
    locationName: 'Budaiya',
    localSpecific:
      "AutoSpa Bahrain's window tinting service is available to Budaiya residents with workshop-direct access — no collection needed. We install ceramic and carbon film options at our Budaiya workshop, typically completing a full vehicle tint in 3–5 hours. Budaiya's coastal exposure and long daily commutes on the Budaiya Highway make heat rejection window film a practical comfort and cabin protection upgrade for vehicles in the area.",
  },
  {
    serviceSlug: 'window-tinting-bahrain',
    locationSlug: 'car-detailing-saar',
    serviceName: 'Window Tinting',
    locationName: 'Saar',
    localSpecific:
      "Window tinting is one of the most practical upgrades for Saar residents, where long commutes along the Budaiya Highway mean extended sun exposure through side windows. We collect from Saar for window tinting installations and can typically complete the full vehicle at our Budaiya workshop in a single day, with same-day or next-day return. We install ceramic film as standard for maximum heat rejection and signal transparency.",
  },
  {
    serviceSlug: 'window-tinting-bahrain',
    locationSlug: 'car-detailing-seef',
    serviceName: 'Window Tinting',
    locationName: 'Seef',
    localSpecific:
      "Seef's commercial district generates consistent window tinting demand from both residential vehicles and corporate fleet cars where cabin temperature management and privacy are both requirements. We collect from Seef and complete vehicle tinting at our Budaiya workshop. For Seef's premium vehicle profile, we recommend ceramic nano-film — it provides the best heat rejection, is fully signal-transparent (no interference with TPMS or GPS), and maintains the factory glass appearance.",
  },
  {
    serviceSlug: 'window-tinting-bahrain',
    locationSlug: 'car-detailing-riffa',
    serviceName: 'Window Tinting',
    locationName: 'Riffa',
    localSpecific:
      "Riffa's vehicles endure some of Bahrain's most intense solar exposure — southerly location, longer daily distances, and more time stationary in direct sun versus northern Bahrain. Window tinting is a high-ROI comfort upgrade for Riffa residents, dramatically reducing cabin temperatures when the vehicle is parked outdoors. We collect from Riffa for tinting installations, with same-day completion at our Budaiya workshop and return delivery to your Riffa address.",
  },
  {
    serviceSlug: 'window-tinting-bahrain',
    locationSlug: 'car-detailing-manama',
    serviceName: 'Window Tinting',
    locationName: 'Manama',
    localSpecific:
      "Manama's urban heat island effect, combined with vehicles spending significant time stationary in traffic or parked in open car parks, makes window tinting one of the most frequently requested services from Manama clients. The privacy benefit is also relevant in the capital's densely used commercial areas. We collect from Manama for tinting bookings and complete the installation at our Budaiya workshop on the same day.",
  },
  {
    serviceSlug: 'window-tinting-bahrain',
    locationSlug: 'car-detailing-hamala',
    serviceName: 'Window Tinting',
    locationName: 'Hamala',
    localSpecific:
      "Hamala's expatriate community frequently requests window tinting as part of a detailing package combining ceramic coating and tinting — protecting both the exterior paintwork and the interior from UV degradation in a single workshop visit. At 8 km from our Budaiya workshop, Hamala is one of the easiest collection areas for a combined tinting and detailing day.",
  },
]

function buildLocationServiceEntry(
  combo: (typeof LOCATION_SERVICE_COMBOS)[number]
): LocationServiceData {
  const locationShort = combo.locationName
  const serviceShort = combo.serviceName

  const slugMap: Record<string, string> = {
    'ceramic-coating-bahrain': 'ceramic-coating',
    'paint-protection-film-bahrain': 'paint-protection-film',
    'window-tinting-bahrain': 'window-tinting',
  }
  const locationSlugMap: Record<string, string> = {
    'car-detailing-budaiya': 'budaiya',
    'car-detailing-saar': 'saar',
    'car-detailing-seef': 'seef',
    'car-detailing-riffa': 'riffa',
    'car-detailing-manama': 'manama',
    'car-detailing-hamala': 'hamala',
  }

  const servicePrefix = slugMap[combo.serviceSlug] ?? combo.serviceSlug
  const locationSuffix = locationSlugMap[combo.locationSlug] ?? combo.locationSlug

  const heroMap: Record<string, string> = {
    'ceramic-coating-bahrain': '/genesis-gv70-ceramic-coating-autospa-bahrain-budaiya.webp',
    'paint-protection-film-bahrain': '/autospa-bahrain-paint-protection-film-ppf-land-cruiser-defender-maqaba.webp',
    'window-tinting-bahrain': '/autospa-bahrain-car-detailing-lexus-es-maqaba-budaiya.webp',
  }

  return {
    ...combo,
    slug: `${servicePrefix}-${locationSuffix}`,
    heroImage: heroMap[combo.serviceSlug] ?? '/genesis-gv70-ceramic-coating-autospa-bahrain-budaiya.webp',
    metaTitle: `${serviceShort} ${locationShort} Bahrain | AutoSpa Bahrain W.L.L.`,
    metaDescription: `Professional ${serviceShort.toLowerCase()} in ${locationShort}, Bahrain. AutoSpa Bahrain W.L.L. — free vehicle collection from ${locationShort}. Authorized detailer. Call +973 1759 5971 or WhatsApp.`,
  }
}

export const LOCATION_SERVICES_DATA: LocationServiceData[] = LOCATION_SERVICE_COMBOS.map(buildLocationServiceEntry)
