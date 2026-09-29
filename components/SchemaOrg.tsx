import { BUSINESS, SERVICE_AREAS, FAQ_ITEMS } from '@/lib/constants'

const PORTFOLIO_IMAGES = [
  {
    '@type': 'ImageObject' as const,
    url: 'https://autospabahrainwll.com/autospa-bahrain-car-detailing-lexus-es-maqaba-budaiya.webp',
    name: 'Lexus ES full car detailing at AutoSpa Bahrain, Maqaba Budaiya',
    description: 'Professional car detailing service performed on a Lexus ES at AutoSpa Bahrain workshop in Maqaba, Budaiya, Bahrain.',
  },
  {
    '@type': 'ImageObject' as const,
    url: 'https://autospabahrainwll.com/autospa-bahrain-ceramic-coating-lexus-lx-maqaba-budaiya.webp',
    name: 'Lexus LX ceramic coating at AutoSpa Bahrain, Budaiya',
    description: '9H ceramic coating application on a Lexus LX at AutoSpa Bahrain, Budaiya, Bahrain.',
  },
  {
    '@type': 'ImageObject' as const,
    url: 'https://autospabahrainwll.com/autospa-bahrain-luxury-car-valeting-bentley-continental-maqaba-budaiya.webp',
    name: 'Bentley Continental luxury valeting at AutoSpa Bahrain, Maqaba',
    description: 'Luxury car valeting and detailing on a Bentley Continental GT at AutoSpa Bahrain, Maqaba, Budaiya.',
  },
  {
    '@type': 'ImageObject' as const,
    url: 'https://autospabahrainwll.com/autospa-bahrain-paint-protection-film-ppf-land-cruiser-defender-maqaba.webp',
    name: 'Paint protection film PPF on Land Cruiser and Defender at AutoSpa Bahrain',
    description: 'Paint protection film (PPF) installation on Toyota Land Cruiser and Land Rover Defender at AutoSpa Bahrain, Maqaba.',
  },
  {
    '@type': 'ImageObject' as const,
    url: 'https://autospabahrainwll.com/classic-mercedes-luxury-car-polishing-autospa-bahrain.webp',
    name: 'Classic Mercedes machine polish at AutoSpa Bahrain, Budaiya',
    description: 'Classic Mercedes machine polish and paint correction service at AutoSpa Bahrain, Budaiya, Bahrain.',
  },
  {
    '@type': 'ImageObject' as const,
    url: 'https://autospabahrainwll.com/genesis-gv70-ceramic-coating-autospa-bahrain-budaiya.webp',
    name: 'Genesis GV70 ceramic coating at AutoSpa Bahrain, Budaiya',
    description: 'Ceramic coating treatment on a Genesis GV70 at AutoSpa Bahrain, Budaiya, Bahrain.',
  },
  {
    '@type': 'ImageObject' as const,
    url: 'https://autospabahrainwll.com/matte-black-ppf-paint-protection-autospa-maqaba.webp',
    name: 'Matte black paint protection film at AutoSpa Bahrain, Maqaba',
    description: 'Matte black paint protection film (PPF) installation at AutoSpa Bahrain, Maqaba, Budaiya.',
  },
  {
    '@type': 'ImageObject' as const,
    url: 'https://autospabahrainwll.com/sports-coupe-paint-correction-interior-detailing-budaiya.webp',
    name: 'Sports coupe paint correction and interior detailing at AutoSpa Bahrain, Budaiya',
    description: 'Paint correction and interior detailing service on a sports coupe at AutoSpa Bahrain, Budaiya, Bahrain.',
  },
]

export default function SchemaOrg() {
  const automotiveBusiness = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: BUSINESS.phone.primary,
    image: PORTFOLIO_IMAGES,
    logo: `${BUSINESS.url}/favicon.svg`,
    foundingDate: '2010',
    priceRange: 'BHD 30–500',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
    currenciesAccepted: 'BHD',
    knowsAbout: [
      'Car Detailing Bahrain',
      'Ceramic Coating',
      'Nano Ceramic Coating',
      'Paint Protection Film (PPF)',
      'Window Tinting',
      'Car Window Tinting',
      'Zymöl Luxury Detailing',
      'Paint Correction',
      'Interior Car Detailing',
      'Car Valeting',
      'Automotive Detailing',
      'Machine Polish',
      'Car Polishing',
      'Vinyl Wrapping',
      'Headlight Restoration',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      postalCode: BUSINESS.address.postalCode,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: BUSINESS.openingHours.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.dayOfWeek.map((d) => `https://schema.org/${d}`),
      opens: slot.open,
      closes: slot.close,
    })),
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Automotive Detailing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Paint Protection Film (PPF)',
            description:
              'Full or partial paint protection film installation to shield paintwork from stone chips, road debris, and UV degradation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '9H Ceramic Coating',
            description:
              'Professional-grade 9H hardness ceramic coating providing long-term UV protection, hydrophobic properties, and deep gloss enhancement.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Zymöl Luxury Exterior Detailing',
            description:
              'Authorised Zymöl detailing using certified natural carnauba wax protocols for show-quality gloss and paint preservation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Interior Steam Clean & Leather Care',
            description:
              'Deep interior steam sanitisation combined with specialist leather conditioning and protection treatments.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Window Tinting',
            description:
              'Professional car window tinting with ceramic, carbon, and dyed films. UV and heat rejection. Legal VLT compliance for Bahrain.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Paint Correction & Machine Polish',
            description:
              'Single and multi-stage paint correction removing swirl marks, water spots, and oxidation. Prepares paintwork for ceramic coating or PPF.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Professional Car Wash',
            description:
              'Two-bucket hand wash with pH-neutral shampoo, foam cannon pre-soak, and microfibre drying. Safe for ceramic-coated and detailed vehicles.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vinyl Wrapping',
            description:
              'Full colour change, partial, bonnet, and roof wraps using premium cast vinyl films. Gloss, matte, satin, and carbon texture finishes.',
          },
        },
      ],
    },
    ...(BUSINESS.sameAs.length > 0 && { sameAs: BUSINESS.sameAs }),
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(automotiveBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
