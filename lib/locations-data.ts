export interface LocationFaq {
  q: string
  a: string
}

export interface LocationData {
  slug: string
  name: string
  area: string
  metaTitle: string
  metaDescription: string
  intro: string
  distanceFromShop: string
  directions: string
  localContext: string
  servicesPopular: string[]
  faqs: LocationFaq[]
}

export const LOCATIONS_DATA: LocationData[] = [
  {
    slug: 'car-detailing-budaiya',
    name: 'Car Detailing Budaiya',
    area: 'Budaiya',
    metaTitle: 'Car Detailing Budaiya Bahrain | AutoSpa Bahrain Workshop',
    metaDescription:
      'AutoSpa Bahrain is based in Budaiya — walk-ins welcome, no travel fee. Ceramic coating, PPF, Zymöl detailing & full interior steam clean. Building 18, Road 54, Budaiya 505.',
    intro:
      'AutoSpa Bahrain is located directly in Budaiya — Building 18, Road 54, Budaiya 505, off the Budaiya Highway behind the Harley-Davidson showroom. If you live or work in Budaiya, bringing your car to us is the most straightforward option with no waiting for collection logistics. Walk-in enquiries are welcome during business hours (Sat–Thu 9 AM – 8 PM, Fri 2 PM – 8 PM), and same-day bookings are available for smaller services including wash and polish, interior steam cleaning, and Zymöl detail.',
    distanceFromShop: 'Our workshop is in Budaiya — no travel required',
    directions:
      'From anywhere in Budaiya, head to the Budaiya Highway (Road 3504). Travel west towards Janabiya. Pass the Harley-Davidson dealership on the right side. Immediately after the Harley-Davidson showroom, turn right into the service road. AutoSpa Bahrain is the first workshop complex on that road — Building 18, Budaiya 505. Parking is available in front of the workshop entrance.',
    localContext:
      'Budaiya is a mature residential and light-commercial suburb in the Northern Governorate of Bahrain, stretching along the northern coast west of Janabiya and east of Barbar. The area is characterised by mid- to high-end villas, a significant number of Bahraini families and long-established expat households, and a strong car culture. Range Rovers, Land Cruiser 300 Series, Toyota Prados, BMW X5s, and Lexus LX600s are extremely common on Budaiya roads. Many residents on the north side of Budaiya Highway commute to Seef or Manama via the highway daily, meaning their vehicles accumulate significant stone chip and road contamination exposure. Being a coastal suburb, salt air from the Gulf also accelerates paint and metal deterioration, making ceramic coating and regular detailing particularly relevant for Budaiya residents.',
    servicesPopular: [
      'ceramic-coating-bahrain',
      'paint-protection-film-bahrain',
      'interior-detailing-bahrain',
      'zymol-luxury-detailing-bahrain',
    ],
    faqs: [
      {
        q: 'Can I walk in to AutoSpa Bahrain in Budaiya without an appointment?',
        a: 'Yes. Walk-ins are welcome at our Budaiya workshop during business hours (Saturday–Thursday 9 AM–8 PM, Friday 2 PM–8 PM). For shorter services — interior steam clean, wash and polish, or a quick assessment — we can often accommodate you the same day. For ceramic coating, PPF, or a full showroom detail, we recommend booking at least 2–3 days ahead via WhatsApp on +973 3360 6113 to guarantee workshop bay availability.',
      },
      {
        q: 'Where exactly is AutoSpa Bahrain in Budaiya?',
        a: 'We are at Building 18, Road 54, Budaiya 505, Budaiya — off the Budaiya Highway, directly behind the Harley-Davidson showroom near the Saar Roundabout. From the Saar Roundabout, head west on Budaiya Highway, pass the Harley-Davidson dealership on your right, and turn right immediately after into the service road. We are the first workshop on that road. You can also WhatsApp us for a live location pin.',
      },
      {
        q: 'Do Budaiya residents get any advantage as local customers?',
        a: 'As our neighbours, Budaiya residents benefit from the simplest logistics — you can drop the car on your way out and collect it on your way home. We are happy to arrange same-day turnaround on services that can be completed in under 5 hours (interior steam, wash and polish, Zymöl exterior wax). We also maintain a courtesy waiting area at the workshop for clients who prefer to stay while minor services are completed.',
      },
    ],
  },

  {
    slug: 'car-detailing-saar',
    name: 'Car Detailing Saar',
    area: 'Saar',
    metaTitle: 'Car Detailing Saar Bahrain | Ceramic Coating & PPF Near Saar Roundabout',
    metaDescription:
      'AutoSpa Bahrain is just 5 km from Saar. Premium ceramic coating, PPF & car detailing for Saar residents. Free vehicle collection. Call +973 1759 5971 or WhatsApp to book.',
    intro:
      'Saar is one of AutoSpa Bahrain\'s most active client areas — our Budaiya workshop is just 5 km from the Saar Roundabout via the Budaiya Highway, making us the nearest professional detailing studio for Saar residents by a significant margin. We collect vehicles from Saar regularly for ceramic coating, PPF installation, and full showroom details, returning them on completion. Many Saar families bring their Land Cruisers, Range Rovers, and Prados to us multiple times per year for ongoing maintenance detailing.',
    distanceFromShop: '5 km from Saar Roundabout via Budaiya Highway',
    directions:
      'From Saar Roundabout, take the Budaiya Highway heading west (towards Barbar and Budaiya). Drive approximately 4 km along the highway. Look for the Harley-Davidson showroom on the right side of the road. Immediately after the Harley-Davidson dealership, turn right into the service road. AutoSpa Bahrain is the first workshop complex on that road — Building 18, Budaiya 505. The drive from the Saar Roundabout takes approximately 6–8 minutes in normal traffic.',
    localContext:
      'Saar is one of Bahrain\'s most prosperous residential communities, home to a mix of Bahraini families and a large international expatriate community working in Manama\'s financial and business sectors. The vehicle profile in Saar reflects this: Toyota Land Cruiser 200 and 300 Series are ubiquitous, alongside BMW X5 and X7s, Range Rover Sports and Vogue, Lexus LX and GX models, and a notable number of sports cars including Porsche 911, Cayman, and Cayenne. The Budaiya Highway that Saar residents use daily is a significant stone chip generator — heavy trucks and construction vehicles from Barbar and Janabiya shed aggregate onto the road surface regularly, and Saar-based luxury SUV owners frequently arrive at our workshop with chips on their front bumpers and bonnets that they want addressed with PPF.',
    servicesPopular: [
      'paint-protection-film-bahrain',
      'ceramic-coating-bahrain',
      'full-showroom-detail-bahrain',
      'paint-correction-bahrain',
    ],
    faqs: [
      {
        q: 'Do you collect cars from Saar for detailing?',
        a: 'Yes, Saar is one of our most frequent collection areas. Given the 5 km distance, we can typically arrange same-day or next-morning collection. WhatsApp us on +973 3360 6113 with your Saar address, vehicle details, and preferred date, and we will confirm a collection time. For ceramic coating, PPF, or full showroom details (which take 2–3 days), we collect on day one and return the vehicle on completion.',
      },
      {
        q: 'Which service is most popular with Saar residents?',
        a: 'PPF (Paint Protection Film) on the front bumper, bonnet, and mirrors is our most booked service from Saar clients — the Budaiya Highway generates significant stone chip hazard for vehicles commuting daily, and Saar\'s high proportion of Land Cruiser, Range Rover, and Porsche owners are acutely aware of the chip risk on new or freshly painted vehicles. Ceramic coating is a close second, typically booked alongside PPF or independently for daily drivers.',
      },
      {
        q: 'Is there a premium or additional charge for collecting from Saar?',
        a: 'No additional charge applies for Saar collection — it is part of our standard service offering for the area. For locations further afield (Riffa, Isa Town, Muharraq), a nominal logistics fee may apply; please ask when enquiring. We will always quote the total price inclusive of collection and delivery before confirming any booking.',
      },
    ],
  },

  {
    slug: 'car-detailing-seef',
    name: 'Car Detailing Seef',
    area: 'Seef',
    metaTitle: 'Car Detailing Seef Bahrain | Ceramic Coating & PPF, AutoSpa Budaiya',
    metaDescription:
      'Premium car detailing for Seef, Bahrain. AutoSpa Bahrain collects from Seef — ceramic coating, PPF, machine polish. 15 km, free collection. BMWs, Mercedes & more served.',
    intro:
      'AutoSpa Bahrain provides full vehicle collection and return for Seef clients, 15 km from our Budaiya workshop. Seef is home to many of Bahrain\'s corporate professionals and business owners who drive premium European marques, and our service is tailored to their expectations — precise scheduling, transparent pricing, and a result that meets the standards of a vehicle purchased from Bahrain\'s Seef-district dealerships. We collect from Seef\'s residential towers, commercial buildings, and the Seef Mall area.',
    distanceFromShop: '15 km from Seef district via Budaiya Highway',
    directions:
      'From Seef, take the Sheikh Khalifa bin Salman Highway (Highway 1) heading north-west. At the Janabiya interchange, exit onto the Budaiya Highway (Road 3504) heading west. Continue approximately 8 km along the Budaiya Highway. Look for the Harley-Davidson showroom on the right side. Immediately after the dealership, turn right into the service road. AutoSpa Bahrain is the first workshop on that road. The drive from Seef typically takes 20–25 minutes.',
    localContext:
      'Seef is Bahrain\'s primary commercial and retail district, anchored by Seef Mall, City Centre Bahrain, and a high concentration of corporate offices, hotel towers, and luxury residential apartments. The vehicle landscape in Seef leans heavily towards executive European cars: BMW 5 Series and 7 Series, Mercedes-Benz E-Class, S-Class and GLE, Audi A6, A8, and Q7, alongside premium Japanese models including Lexus ES and LS. Many Seef-based residents park in multi-storey car parks where concrete dust, tight clearances, and trolley scratches contribute to paint deterioration. The commercial district\'s proximity to reclamation works and the Seef coastline also means vehicles accumulate a specific salt-air and construction-dust combination that makes paint decontamination and ceramic coating particularly effective.',
    servicesPopular: [
      'ceramic-coating-bahrain',
      'paint-correction-bahrain',
      'zymol-luxury-detailing-bahrain',
      'interior-detailing-bahrain',
    ],
    faqs: [
      {
        q: 'How does vehicle collection from Seef work?',
        a: 'We agree a specific time to collect your car from your Seef address (home, office building, or car park). Our driver brings your car to our Budaiya workshop on the Budaiya Highway where all work is performed. We keep you updated via WhatsApp during the process and arrange a convenient return delivery to your Seef address on completion. For a ceramic coating (2 days) or full showroom detail (2–3 days), we typically collect on day one and return after completion.',
      },
      {
        q: 'Do you detail BMWs and Mercedes-Benz vehicles from Seef regularly?',
        a: 'Yes — BMW and Mercedes-Benz are among our most frequent clients from Seef. Both marques have specific paint characteristics we are very familiar with: BMW\'s softer clear coat systems benefit from precise DA polisher technique during paint correction, and Mercedes\'s harder paint systems respond well to multi-stage machine polishing. We have worked on everything from BMW 3 Series to M5 Competitions and from Mercedes C-Class to S-Class W223 models from Seef clients.',
      },
      {
        q: 'Can you detail my car at my Seef office during working hours?',
        a: 'For mobile services (exterior wash, spray wax top-up), we can discuss on-site arrangements. However, paint correction, ceramic coating, and PPF installation require our climate-controlled, dust-free workshop environment in Budaiya for professional results — these cannot be performed outdoors or in an open car park. We recommend collection-and-return, which most Seef clients find convenient as it fits naturally around a working day.',
      },
    ],
  },

  {
    slug: 'car-detailing-riffa',
    name: 'Car Detailing Riffa',
    area: 'Riffa',
    metaTitle: 'Car Detailing Riffa Bahrain | Ceramic Coating & PPF, Free Collection',
    metaDescription:
      'AutoSpa Bahrain collects from Riffa for ceramic coating, PPF & full detailing. 25 km, free collection service for all Riffa areas. Trusted by Land Cruiser & BMW owners in Riffa.',
    intro:
      'AutoSpa Bahrain regularly collects vehicles from across Riffa — East Riffa, West Riffa, Riffa Views, and Al Hajiyat — for professional detailing services at our Budaiya workshop. At 25 km from central Riffa, we operate a structured collection-and-return service so that Riffa clients experience the same seamless service as those closer to Budaiya. Many of our most loyal clients are Riffa residents who have been bringing their vehicles to us for 5–10 years, drawn initially by our Zymöl authorization and returning for ceramic coating and PPF as their vehicles have changed.',
    distanceFromShop: '25 km from central Riffa via Shaikh Khalifa bin Salman Highway',
    directions:
      'From Riffa, take the Shaikh Khalifa bin Salman Highway (Highway 1) heading north towards Manama. Continue past the Al Jawhara junction and the Diplomatic Area exit. At the Janabiya interchange, exit onto the Budaiya Highway (Road 3504) heading west. Drive approximately 8 km along the Budaiya Highway. The Harley-Davidson showroom will appear on the right side. Turn right immediately after into the service road. AutoSpa Bahrain is the first workshop on that road. The drive from East Riffa takes approximately 30–35 minutes in normal traffic.',
    localContext:
      'Riffa is Bahrain\'s largest urban centre outside Manama, encompassing a wide range of residential neighbourhoods from Riffa Views\' exclusive gated villas to the traditional southern districts. The vehicle profile in Riffa is diverse: Toyota Land Cruiser 200 and 300 Series, Chevrolet Suburban and Tahoe, GMC Yukon, and Nissan Patrol are extremely common in the traditional residential areas, while Riffa Views hosts a high concentration of luxury European vehicles — BMW, Mercedes, Porsche, Range Rover. Riffa\'s southerly location means vehicles experience more dust exposure from the southern desert margins of Bahrain, and the additional daily mileage on the highway accumulates more stone chip damage on front panels than is typical for northern Bahrain residents.',
    servicesPopular: [
      'full-showroom-detail-bahrain',
      'paint-protection-film-bahrain',
      'ceramic-coating-bahrain',
      'paint-correction-bahrain',
    ],
    faqs: [
      {
        q: 'Do you charge extra for collecting from Riffa?',
        a: 'We aim to keep collection charges competitive for Riffa given the 25 km distance. In most cases, we absorb the collection cost into the service price, particularly for ceramic coating, PPF, and full showroom detail bookings where the service value justifies it. For smaller services, a nominal collection fee may apply. We will confirm the total price — fully inclusive — before you commit to a booking. WhatsApp us on +973 3360 6113 with your location and service requirement.',
      },
      {
        q: 'How long will my car be at the workshop if I am based in Riffa?',
        a: 'Service duration depends on the work booked: interior steam clean can be completed in a single day (collected morning, returned evening). Paint correction as a standalone takes 1–1.5 days. Ceramic coating requires 2 days. Full PPF installation requires 2–3 days. Full showroom detail takes 2–3 days. We provide a firm collection and return timeline when you book, so you can plan accordingly.',
      },
      {
        q: 'Are there any car detailing studios in Riffa that match AutoSpa Bahrain\'s level?',
        a: "Bahrain's professional detailing industry is concentrated in the northern corridor — Budaiya, Saar, Seef, and Manama. Riffa has general car wash and basic polish services, but for certified ceramic coating, professional PPF installation with templating software, and Authorized Zymöl detailing, AutoSpa Bahrain in Budaiya is the nearest facility offering this level of service. Our collection service is specifically designed to make access straightforward for southern Bahrain residents.",
      },
    ],
  },

  {
    slug: 'car-detailing-manama',
    name: 'Car Detailing Manama',
    area: 'Manama',
    metaTitle: 'Car Detailing Manama Bahrain | Ceramic Coating & PPF, AutoSpa Budaiya',
    metaDescription:
      'AutoSpa Bahrain serves Manama with full vehicle collection for ceramic coating, PPF & luxury detailing. 18 km from the capital. Trusted by Manama business district car owners.',
    intro:
      'AutoSpa Bahrain provides full collection-and-return vehicle detailing for clients across Manama — from the Diplomatic Area and Manama Center to Juffair, Adliya, and the capital\'s business district. At 18 km from central Manama via the Budaiya Highway, we serve Manama\'s high concentration of corporate professionals, embassy staff, and business owners who demand premium results and flexible scheduling to fit around demanding working hours.',
    distanceFromShop: '18 km from central Manama via Budaiya Highway',
    directions:
      'From central Manama, take the King Faisal Highway heading west. Connect to the Shaikh Khalifa bin Salman Highway (Highway 1) heading north. At the Janabiya interchange, exit onto the Budaiya Highway (Road 3504) heading west. Continue approximately 8 km along the Budaiya Highway. Pass the Harley-Davidson showroom on the right. Turn right immediately after into the service road. AutoSpa Bahrain is the first workshop on that road — Building 18, Budaiya 505, Budaiya. The drive from Manama Center takes approximately 25–30 minutes.',
    localContext:
      'Manama is the capital of Bahrain and its commercial and diplomatic hub. The vehicle population is correspondingly diverse and weighted towards premium models — the Diplomatic Area hosts embassy fleets and diplomat-owned European luxury cars; the business district is populated with BMWs, Mercedes-Benz, Audi, and Lexus models; and residential areas like Juffair, with its large military and expat community, feature American marques (Chevrolet, GMC, Ford) alongside mainstream Japanese models. Manama\'s proximity to the port and industrial areas means vehicles accumulate industrial fallout and brake dust more rapidly than residential areas, making regular paint decontamination and ceramic coating particularly effective for maintaining appearance.',
    servicesPopular: [
      'ceramic-coating-bahrain',
      'interior-detailing-bahrain',
      'paint-correction-bahrain',
      'full-showroom-detail-bahrain',
    ],
    faqs: [
      {
        q: 'Can you collect my car from my Manama office building or hotel?',
        a: 'Yes. We collect from office buildings, hotels, residential towers, and private residences across Manama. Provide us with the building address and any parking access instructions when you WhatsApp to book, and we will arrange everything. For secure or gated buildings, we can coordinate with your building security in advance.',
      },
      {
        q: 'I am a business owner with a company fleet in Manama — do you offer fleet detailing?',
        a: 'Yes. We work with business clients across Bahrain, including Manama-based companies with small to medium vehicle fleets. Fleet arrangements typically involve a scheduled collection-and-return rotation — we take one or two vehicles at a time, complete the work, return them, then collect the next batch. WhatsApp or call us on +973 1759 5971 to discuss a fleet schedule and volume pricing.',
      },
      {
        q: 'What is the most popular service booked by Manama clients?',
        a: 'Ceramic coating is the most frequently booked service from Manama, driven by the high proportion of premium vehicles in the capital whose owners want long-term paint protection without the maintenance overhead of regular waxing. Interior steam cleaning is a close second — Manama traffic conditions mean vehicles spend significant time idling in traffic, and cabins accumulate dust and odours quickly in stop-start urban driving.',
      },
    ],
  },

  {
    slug: 'car-detailing-hamala',
    name: 'Car Detailing Hamala',
    area: 'Hamala',
    metaTitle: 'Car Detailing Hamala Bahrain | Ceramic Coating & PPF Near Hamala',
    metaDescription:
      'AutoSpa Bahrain is just 8 km from Hamala. Ceramic coating, PPF & Zymöl detailing for European car owners in Hamala. Free collection. Book on WhatsApp +973 3360 6113.',
    intro:
      'Hamala is one of AutoSpa Bahrain\'s closest client communities outside Budaiya itself — just 8 km from our workshop via the Janabiya road. The village and its surrounding residential areas are home to a substantial expatriate community, many from Europe, who frequently bring their vehicles to us for services they recognise from back home: ceramic coating, PPF, and concours-grade Zymöl detailing. For Hamala residents, collection is straightforward and return is usually the same day or the following morning for most services.',
    distanceFromShop: '8 km from Hamala via Janabiya Road and Budaiya Highway',
    directions:
      'From Hamala village, head east on the Hamala Road towards the Janabiya junction. At the Janabiya roundabout, take the Budaiya Highway heading west. Drive approximately 4 km along the Budaiya Highway. The Harley-Davidson showroom will appear on the right. Turn right immediately after into the service road. AutoSpa Bahrain is the first workshop on that road. The drive from Hamala takes approximately 10–12 minutes in normal traffic.',
    localContext:
      'Hamala is a quiet residential village in the Northern Governorate, widely regarded as one of the most pleasant areas to live in Bahrain among the international community. It attracts European expatriates working in Bahrain\'s financial, oil, and government sectors, many of whom have brought their preferences for European car brands with them: BMW 3 Series, 5 Series, and X3, Mercedes-Benz C-Class and GLC, Volkswagen Golf R and Touareg, Volvo XC60 and XC90, Porsche Cayenne and Macan. These are vehicles whose owners understand detailing quality and often arrive with clear expectations about paint correction technique, ceramic coating longevity, and PPF installation standards — expectations we are well equipped to meet.',
    servicesPopular: [
      'ceramic-coating-bahrain',
      'zymol-luxury-detailing-bahrain',
      'paint-correction-bahrain',
      'paint-protection-film-bahrain',
    ],
    faqs: [
      {
        q: 'Is AutoSpa Bahrain the nearest professional detailing studio to Hamala?',
        a: 'Yes. At 8 km and roughly 10 minutes by car, AutoSpa Bahrain in Budaiya is the closest professional detailing studio to Hamala that offers ceramic coating, PPF, and Authorized Zymöl detailing. There are general car washes in nearby areas, but no comparable specialist facility closer to Hamala.',
      },
      {
        q: 'Do many Europeans in Hamala use AutoSpa Bahrain, and are you familiar with European car brands?',
        a: 'European expatriates from Hamala make up a significant portion of our regular clientele. We are very familiar with the paint systems on BMW, Mercedes-Benz, Volkswagen Group (Audi, Porsche, VW), Volvo, and Jaguar Land Rover vehicles. Each marque has specific paint hardness characteristics and manufacturer recommendations for detailing chemicals — our team accounts for these differences in product selection and polishing technique.',
      },
      {
        q: 'Can I drop my car to AutoSpa Bahrain from Hamala in the morning and collect it by evening?',
        a: 'For single-day services (interior steam clean, Zymöl exterior detail, paint correction single-stage, wash and polish), yes — drop-off in the morning and collection by early evening is our standard arrangement. For multi-day services (ceramic coating takes 2 days, full PPF 2–3 days, full showroom detail 2–3 days), the car will stay at our Budaiya workshop for the duration, and we can arrange collection or you can drop and pick up at your convenience within our business hours.',
      },
    ],
  },
]
