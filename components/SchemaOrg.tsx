import { BUSINESS, SERVICE_AREAS, FAQ_ITEMS } from '@/lib/constants'

export default function SchemaOrg() {
  const automotiveBusiness = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: BUSINESS.phone.primary,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
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
            name: 'Premium Wash & Machine Polish',
            description:
              'Hand wash, clay bar decontamination, and machine polish to restore paintwork clarity and gloss.',
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
