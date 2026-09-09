import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  MessageCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
  MapPin,
  Car,
  Phone,
  CalendarCheck,
} from 'lucide-react'

import { SERVICES_DATA } from '@/lib/services-data'
import { LOCATIONS_DATA } from '@/lib/locations-data'
import { BUSINESS, WHATSAPP } from '@/lib/constants'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyContactBar from '@/components/StickyContactBar'
import ServiceFaqAccordion from '@/components/ServiceFaqAccordion'

/* ─── Static params: all service + location slugs ───────────────── */

export function generateStaticParams() {
  return [
    ...SERVICES_DATA.map((s) => ({ slug: s.slug })),
    ...LOCATIONS_DATA.map((l) => ({ slug: l.slug })),
  ]
}

/* ─── Metadata ──────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const service = SERVICES_DATA.find((s) => s.slug === slug)
  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      alternates: { canonical: `${BUSINESS.url}/${service.slug}` },
      openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        url: `${BUSINESS.url}/${service.slug}`,
        siteName: BUSINESS.name,
        locale: 'en_BH',
        type: 'website',
      },
    }
  }

  const location = LOCATIONS_DATA.find((l) => l.slug === slug)
  if (location) {
    return {
      title: location.metaTitle,
      description: location.metaDescription,
      alternates: { canonical: `${BUSINESS.url}/${location.slug}` },
      openGraph: {
        title: location.metaTitle,
        description: location.metaDescription,
        url: `${BUSINESS.url}/${location.slug}`,
        siteName: BUSINESS.name,
        locale: 'en_BH',
        type: 'website',
      },
    }
  }

  return {}
}

/* ─── Page dispatcher ───────────────────────────────────────────── */

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const service = SERVICES_DATA.find((s) => s.slug === slug)
  if (service) {
    const relatedServices = SERVICES_DATA.filter((s) =>
      service.relatedSlugs.includes(s.slug)
    )
    return <ServicePageContent service={service} relatedServices={relatedServices} />
  }

  const location = LOCATIONS_DATA.find((l) => l.slug === slug)
  if (location) {
    const popularServices = SERVICES_DATA.filter((s) =>
      location.servicesPopular.includes(s.slug)
    )
    return <LocationPageContent location={location} popularServices={popularServices} />
  }

  notFound()
}

/* ════════════════════════════════════════════════════════════════════
   SERVICE PAGE
═══════════════════════════════════════════════════════════════════ */

function ServicePageContent({
  service,
  relatedServices,
}: {
  service: (typeof SERVICES_DATA)[number]
  relatedServices: (typeof SERVICES_DATA)[number][]
}) {
  const whatsappUrl = WHATSAPP.booking('my vehicle', service.name, 'Bahrain')

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.intro,
    url: `${BUSINESS.url}/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.locality,
        addressRegion: BUSINESS.address.region,
        postalCode: BUSINESS.address.postalCode,
        addressCountry: BUSINESS.address.country,
      },
      telephone: BUSINESS.phone.primary,
      url: BUSINESS.url,
    },
    areaServed: { '@type': 'Country', name: BUSINESS.address.countryName },
    offers: service.pricing.map((p) => ({
      '@type': 'Offer',
      name: `${service.name} — ${p.vehicle}`,
      price: p.range,
      priceCurrency: 'BHD',
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: service.name,
        item: `${BUSINESS.url}/${service.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="bg-background text-white pb-24">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative min-h-[72vh] flex items-end">
          <Image
            src={service.heroImage}
            alt={`${service.name} at AutoSpa Bahrain`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />

          <div className="relative z-10 w-full px-4 pb-16 pt-32">
            <div className="mx-auto max-w-6xl">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  </li>
                  <li aria-hidden className="text-zinc-600">/</li>
                  <li className="text-zinc-300" aria-current="page">{service.name}</li>
                </ol>
              </nav>

              {service.badge && (
                <span className="mb-4 inline-block rounded-full bg-accent-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-gold">
                  {service.badge}
                </span>
              )}

              <h1 className="font-display mb-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {service.name}{' '}
                <span className="text-accent-gold">Bahrain</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg text-zinc-300">{service.tagline}</p>

              <div className="mb-8 flex flex-wrap gap-4">
                {['Est. 2010 — 15 Years of Excellence', 'Authorized Zymöl Detailer', 'Free Collection Across Bahrain'].map((stat) => (
                  <span
                    key={stat}
                    className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" aria-hidden />
                    {stat}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-3 text-sm font-bold text-black transition-all duration-150 hover:bg-accent-gold-light active:scale-95"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Book Now
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-150 hover:border-white/40 hover:bg-white/12 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS.phone.primary}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-150 hover:border-white/40 hover:bg-white/12 active:scale-95"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {BUSINESS.phone.primaryDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

        {/* ── What is X? ─────────────────────────────────────────── */}
        <section aria-labelledby="intro-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                What is {service.name}?
              </p>
              <h2 id="intro-heading" className="font-display mb-4 text-2xl font-bold text-white sm:text-3xl">
                Direct Answer
              </h2>
              <p className="text-base leading-relaxed text-zinc-300">{service.intro}</p>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Why Bahrain needs this ─────────────────────────────── */}
        <section aria-labelledby="why-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-accent-gold/20 bg-surface p-6 sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                Gulf Climate Context
              </p>
              <h2 id="why-heading" className="font-display mb-4 text-2xl font-bold text-white sm:text-3xl">
                Why Bahrain Vehicles Need This
              </h2>
              <p className="text-base leading-relaxed text-zinc-300">{service.whyBahrain}</p>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Process ───────────────────────────────────────────── */}
        <section aria-labelledby="process-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">Step by Step</p>
              <h2 id="process-heading" className="font-display text-2xl font-bold text-white sm:text-3xl">How It Works</h2>
            </div>
            <ol className="space-y-4">
              {service.process.map((item, index) => (
                <li key={index} className="flex gap-5 rounded-2xl border border-white/8 bg-surface p-5 sm:p-6">
                  <span aria-hidden className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-sm font-bold text-accent-gold ring-1 ring-accent-gold/25">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="mb-1.5 font-semibold text-white">{item.step}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Benefits ──────────────────────────────────────────── */}
        <section aria-labelledby="benefits-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">Why Choose This Service</p>
              <h2 id="benefits-heading" className="font-display text-2xl font-bold text-white sm:text-3xl">Key Benefits</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-3 rounded-2xl border border-white/8 bg-surface p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-gold" aria-hidden />
                  <p className="text-sm leading-relaxed text-zinc-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Pricing ───────────────────────────────────────────── */}
        <section aria-labelledby="pricing-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">Transparent Pricing</p>
              <h2 id="pricing-heading" className="font-display text-2xl font-bold text-white sm:text-3xl">Pricing Guide (BHD)</h2>
              <p className="mt-3 text-sm text-zinc-500">All prices in Bahraini Dinar. Final quote confirmed after vehicle inspection.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/8 bg-surface-elevated">
                      <th scope="col" className="px-5 py-4 text-left font-semibold uppercase tracking-wide text-zinc-400 text-xs">Vehicle Type</th>
                      <th scope="col" className="px-5 py-4 text-left font-semibold uppercase tracking-wide text-accent-gold text-xs">Price Range</th>
                      <th scope="col" className="hidden px-5 py-4 text-left font-semibold uppercase tracking-wide text-zinc-500 text-xs sm:table-cell">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/6 bg-surface">
                    {service.pricing.map((row, i) => (
                      <tr key={i} className="transition-colors duration-100 hover:bg-surface-elevated">
                        <td className="px-5 py-4 font-medium text-white">{row.vehicle}</td>
                        <td className="px-5 py-4 font-bold text-accent-gold">{row.range}</td>
                        {row.note && (
                          <td className="hidden px-5 py-4 text-zinc-500 sm:table-cell">{row.note}</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
              <Clock className="h-3.5 w-3.5 flex-shrink-0" aria-hidden />
              <span><strong className="text-zinc-400">Duration:</strong> {service.duration}</span>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section aria-labelledby="faq-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">Questions &amp; Answers</p>
              <h2 id="faq-heading" className="font-display text-2xl font-bold text-white sm:text-3xl">Frequently Asked Questions</h2>
            </div>
            <div className="rounded-2xl border border-white/8 bg-surface px-5 sm:px-7">
              <ServiceFaqAccordion faqs={service.faqs} />
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Related Services ──────────────────────────────────── */}
        {relatedServices.length > 0 && (
          <section aria-labelledby="related-heading" className="px-4 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">Also Consider</p>
                <h2 id="related-heading" className="font-display text-2xl font-bold text-white sm:text-3xl">Related Services</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/${related.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-white/8 bg-surface p-5 transition-all duration-200 hover:border-accent-gold/30 hover:bg-surface-elevated"
                  >
                    <div>
                      {related.badge && (
                        <span className="mb-3 inline-block rounded-full bg-accent-gold/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent-gold">
                          {related.badge}
                        </span>
                      )}
                      <h3 className="mb-1 font-bold text-white group-hover:text-accent-gold transition-colors duration-150">{related.name}</h3>
                      <p className="text-xs text-zinc-500">{related.tagline}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent-gold">
                      Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ────────────────────────────────────────── */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-accent-gold/25 bg-gradient-to-br from-surface to-surface-elevated p-8 text-center sm:p-12">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">Ready to Book?</p>
              <h2 className="font-display mb-4 text-2xl font-bold text-white sm:text-3xl">
                Book {service.name} — AutoSpa Bahrain W.L.L.
              </h2>
              <p className="mx-auto mb-8 max-w-md text-zinc-400">
                Send us your vehicle details and we will confirm availability, provide an exact quote, and arrange collection from anywhere in Bahrain.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:flex-wrap">
                <Link
                  href="/book"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-gold px-8 py-3.5 font-bold text-black transition-all duration-150 hover:bg-accent-gold-light active:scale-95 sm:w-auto"
                >
                  <CalendarCheck className="h-5 w-5" aria-hidden />
                  Book Now
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:border-white/30 hover:bg-white/5 sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS.phone.primary}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:border-white/30 hover:bg-white/5 sm:w-auto"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  Call {BUSINESS.phone.primaryDisplay}
                </a>
              </div>
              <p className="mt-5 text-xs text-zinc-600">{BUSINESS.openingHoursDisplay}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyContactBar />
    </>
  )
}

/* ════════════════════════════════════════════════════════════════════
   LOCATION PAGE
═══════════════════════════════════════════════════════════════════ */

function LocationPageContent({
  location,
  popularServices,
}: {
  location: (typeof LOCATIONS_DATA)[number]
  popularServices: (typeof SERVICES_DATA)[number][]
}) {
  const whatsappUrl = WHATSAPP.booking('my vehicle', 'car detailing', location.area)

  const heroImage =
    location.slug === 'car-detailing-budaiya' || location.slug === 'car-detailing-saar'
      ? '/genesis-gv70-ceramic-coating-autospa-bahrain-budaiya.webp'
      : location.slug === 'car-detailing-hamala' || location.slug === 'car-detailing-seef'
      ? '/autospa-bahrain-luxury-car-valeting-bentley-continental-maqaba-budaiya.webp'
      : '/classic-mercedes-luxury-car-polishing-autospa-bahrain.webp'

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: BUSINESS.phone.primary,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday'],
        opens: '14:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: location.area },
      { '@type': 'City', name: 'Budaiya' },
      { '@type': 'Country', name: BUSINESS.address.countryName },
    ],
    hasMap: BUSINESS.mapDirections,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Car Detailing ${location.area}`,
        item: `${BUSINESS.url}/${location.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="bg-background text-white pb-24">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative min-h-[65vh] flex items-end">
          <Image
            src={heroImage}
            alt={`Car detailing service in ${location.area}, Bahrain — AutoSpa Bahrain`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/45 to-black/20" />

          <div className="relative z-10 w-full px-4 pb-16 pt-32">
            <div className="mx-auto max-w-6xl">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  </li>
                  <li aria-hidden className="text-zinc-600">/</li>
                  <li className="text-zinc-300" aria-current="page">{location.area}</li>
                </ol>
              </nav>

              <h1 className="font-display mb-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Car Detailing{' '}
                <span className="text-accent-gold">{location.area}</span>
                <span className="text-zinc-300">, Bahrain</span>
              </h1>

              <p className="mb-8 max-w-xl text-lg text-zinc-300">
                Ceramic coating, PPF, Zymöl luxury detailing &amp; interior steam clean — professional automotive care by AutoSpa Bahrain W.L.L.
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur-sm">
                  <MapPin className="h-3 w-3 text-accent-gold" aria-hidden />
                  {location.distanceFromShop}
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur-sm">
                  <Clock className="h-3 w-3 text-accent-gold" aria-hidden />
                  Sat–Thu 9 AM – 8 PM | Fri 2 PM – 8 PM
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur-sm">
                  <Car className="h-3 w-3 text-accent-gold" aria-hidden />
                  Collection Available
                </span>
              </div>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-3 text-sm font-bold text-black transition-all duration-150 hover:bg-accent-gold-light active:scale-95"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Book Now
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-150 hover:border-white/40 hover:bg-white/12 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS.phone.primary}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-150 hover:border-white/40 hover:bg-white/12 active:scale-95"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {BUSINESS.phone.primaryDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

        {/* ── Intro ─────────────────────────────────────────────── */}
        <section aria-labelledby="intro-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                Serving {location.area}
              </p>
              <h2 id="intro-heading" className="font-display mb-4 text-2xl font-bold text-white sm:text-3xl">
                AutoSpa Bahrain W.L.L. &amp; {location.area}
              </h2>
              <p className="text-base leading-relaxed text-zinc-300">{location.intro}</p>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Directions ────────────────────────────────────────── */}
        <section aria-labelledby="directions-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="rounded-2xl border border-accent-gold/20 bg-surface p-6 sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">Driving Directions</p>
                <h2 id="directions-heading" className="font-display mb-4 text-xl font-bold text-white sm:text-2xl">
                  From {location.area} to Our Workshop
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-zinc-300">{location.directions}</p>
                <a
                  href={BUSINESS.mapDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-accent-gold/40 px-4 py-2.5 text-sm font-semibold text-accent-gold transition-all duration-150 hover:bg-accent-gold/10"
                >
                  <MapPin className="h-4 w-4" aria-hidden />
                  Open in Google Maps
                </a>
              </div>

              <div className="rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">Workshop Address</p>
                <h3 className="font-display mb-4 text-xl font-bold text-white">AutoSpa Bahrain W.L.L. — Budaiya</h3>
                <address className="not-italic space-y-2 text-sm text-zinc-300">
                  <p>{BUSINESS.address.formatted}</p>
                  <p className="text-zinc-500">{BUSINESS.address.landmarks}</p>
                </address>
                <div className="mt-5 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Hours</p>
                  <p className="text-sm text-zinc-300">{BUSINESS.openingHoursDisplay}</p>
                </div>
                <div className="mt-5 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Contact</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={`tel:${BUSINESS.phone.primary}`} className="text-sm text-zinc-300 hover:text-accent-gold transition-colors">
                      {BUSINESS.phone.primaryDisplay}
                    </a>
                    <span className="text-zinc-700">|</span>
                    <a
                      href={WHATSAPP.general()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-300 hover:text-accent-gold transition-colors"
                    >
                      WhatsApp: {BUSINESS.phone.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Popular Services ──────────────────────────────────── */}
        <section aria-labelledby="services-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">Popular in {location.area}</p>
              <h2 id="services-heading" className="font-display text-2xl font-bold text-white sm:text-3xl">
                Services for {location.area} Residents
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {popularServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-white/8 bg-surface p-5 transition-all duration-200 hover:border-accent-gold/30 hover:bg-surface-elevated"
                >
                  <div>
                    {service.badge && (
                      <span className="mb-3 inline-block rounded-full bg-accent-gold/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent-gold">
                        {service.badge}
                      </span>
                    )}
                    <h3 className="mb-1 font-bold text-white group-hover:text-accent-gold transition-colors duration-150">{service.name}</h3>
                    <p className="mb-3 text-xs text-zinc-500">{service.tagline}</p>
                    <p className="text-sm leading-relaxed text-zinc-400 line-clamp-3">{service.intro}</p>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-accent-gold">
                      {service.pricing[0]?.range} — {service.pricing[service.pricing.length - 1]?.range}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-accent-gold">
                      View service <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Local Context ─────────────────────────────────────── */}
        <section aria-labelledby="local-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">About the Area</p>
              <h2 id="local-heading" className="font-display mb-4 text-xl font-bold text-white sm:text-2xl">
                Cars &amp; Community in {location.area}
              </h2>
              <p className="text-base leading-relaxed text-zinc-300">{location.localContext}</p>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Collection & Delivery ─────────────────────────────── */}
        <section aria-labelledby="collection-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-accent-gold/20 bg-gradient-to-br from-surface to-surface-elevated p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">Convenience</p>
                  <h2 id="collection-heading" className="font-display mb-3 text-xl font-bold text-white sm:text-2xl">
                    Collection &amp; Delivery — {location.area}
                  </h2>
                  <p className="max-w-lg text-sm leading-relaxed text-zinc-300">
                    We collect your vehicle from your {location.area} address and return it on completion — no need to travel to our Budaiya workshop. For ceramic coating, PPF, and full showroom details (multi-day services), we collect on day one and return on the final day. Simply WhatsApp us with your address, vehicle, and preferred date.
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-accent-gold px-5 py-3 text-sm font-bold text-black transition-all duration-150 hover:bg-accent-gold-light active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Arrange Collection
                </a>
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section aria-labelledby="faq-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">{location.area} Questions</p>
              <h2 id="faq-heading" className="font-display text-2xl font-bold text-white sm:text-3xl">
                Frequently Asked by {location.area} Clients
              </h2>
            </div>
            <div className="rounded-2xl border border-white/8 bg-surface px-5 sm:px-7">
              <ServiceFaqAccordion faqs={location.faqs} />
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────── */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-accent-gold/25 bg-gradient-to-br from-surface to-surface-elevated p-8 text-center sm:p-12">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                Ready to Book from {location.area}?
              </p>
              <h2 className="font-display mb-4 text-2xl font-bold text-white sm:text-3xl">
                Premium Car Detailing — {location.area}, Bahrain
              </h2>
              <p className="mx-auto mb-8 max-w-md text-zinc-400">
                Send us your vehicle details and {location.area} address. We will confirm a collection time, provide an exact quote, and handle everything from there.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:flex-wrap">
                <Link
                  href="/book"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-gold px-8 py-3.5 font-bold text-black transition-all duration-150 hover:bg-accent-gold-light active:scale-95 sm:w-auto"
                >
                  <CalendarCheck className="h-5 w-5" aria-hidden />
                  Book Now
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:border-white/30 hover:bg-white/5 sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS.phone.primary}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:border-white/30 hover:bg-white/5 sm:w-auto"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  Call {BUSINESS.phone.primaryDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyContactBar />
    </>
  )
}
