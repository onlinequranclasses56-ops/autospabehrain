import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'
import { MessageCircle, CheckCircle2, Clock, ArrowRight, Phone, CalendarCheck } from 'lucide-react'
import Link from 'next/link'

import { SERVICES_DATA } from '@/lib/services-data'
import { BUSINESS, WHATSAPP } from '@/lib/constants'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyContactBar from '@/components/StickyContactBar'
import ServiceFaqAccordion from '@/components/ServiceFaqAccordion'

/* ─── Static Params ─────────────────────────────────────────────── */

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }))
}

/* ─── Metadata ──────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES_DATA.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${BUSINESS.url}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${BUSINESS.url}/services/${service.slug}`,
      siteName: BUSINESS.name,
      locale: 'en_BH',
      type: 'website',
    },
  }
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICES_DATA.find((s) => s.slug === slug)
  if (!service) notFound()

  const relatedServices = SERVICES_DATA.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  )

  /* ── JSON-LD schemas ── */
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.intro,
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
    areaServed: {
      '@type': 'Country',
      name: BUSINESS.address.countryName,
    },
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
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BUSINESS.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${BUSINESS.url}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `${BUSINESS.url}/services/${service.slug}`,
      },
    ],
  }

  const whatsappUrl = WHATSAPP.booking('my vehicle', service.name, 'Bahrain')

  return (
    <>
      {/* JSON-LD */}
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

        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="relative min-h-[72vh] flex items-end">
          <Image
            src={service.heroImage}
            alt={`${service.name} at AutoSpa Bahrain`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />

          <div className="relative z-10 w-full px-4 pb-16 pt-32">
            <div className="mx-auto max-w-6xl">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden className="text-zinc-600">/</li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li aria-hidden className="text-zinc-600">/</li>
                  <li className="text-zinc-300" aria-current="page">
                    {service.name}
                  </li>
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

              {/* Trust stats */}
              <div className="mb-8 flex flex-wrap gap-4">
                {[
                  'Est. 2010 — 15 Years of Excellence',
                  'Authorized Zymöl Detailer',
                  'Free Collection Across Bahrain',
                ].map((stat) => (
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

        {/* ── Gold divider ────────────────────────────────────────── */}
        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

        {/* ── Intro — What is X? ──────────────────────────────────── */}
        <section aria-labelledby="intro-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                What is {service.name}?
              </p>
              <h2
                id="intro-heading"
                className="font-display mb-4 text-2xl font-bold text-white sm:text-3xl"
              >
                Direct Answer
              </h2>
              <p className="text-base leading-relaxed text-zinc-300">{service.intro}</p>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Why Bahrain needs this ──────────────────────────────── */}
        <section aria-labelledby="why-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-accent-gold/20 bg-surface p-6 sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                Gulf Climate Context
              </p>
              <h2
                id="why-heading"
                className="font-display mb-4 text-2xl font-bold text-white sm:text-3xl"
              >
                Why Bahrain Vehicles Need This
              </h2>
              <p className="text-base leading-relaxed text-zinc-300">{service.whyBahrain}</p>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── How it Works — Process ──────────────────────────────── */}
        <section aria-labelledby="process-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                Step by Step
              </p>
              <h2
                id="process-heading"
                className="font-display text-2xl font-bold text-white sm:text-3xl"
              >
                How It Works
              </h2>
            </div>

            <ol className="space-y-4">
              {service.process.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-5 rounded-2xl border border-white/8 bg-surface p-5 sm:p-6"
                >
                  <span
                    aria-hidden
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-sm font-bold text-accent-gold ring-1 ring-accent-gold/25"
                  >
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

        {/* ── Benefits ────────────────────────────────────────────── */}
        <section aria-labelledby="benefits-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                Why Choose This Service
              </p>
              <h2
                id="benefits-heading"
                className="font-display text-2xl font-bold text-white sm:text-3xl"
              >
                Key Benefits
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-2xl border border-white/8 bg-surface p-5"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-gold"
                    aria-hidden
                  />
                  <p className="text-sm leading-relaxed text-zinc-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Pricing Table ────────────────────────────────────────── */}
        <section aria-labelledby="pricing-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                Transparent Pricing
              </p>
              <h2
                id="pricing-heading"
                className="font-display text-2xl font-bold text-white sm:text-3xl"
              >
                Pricing Guide (BHD)
              </h2>
              <p className="mt-3 text-sm text-zinc-500">
                All prices in Bahraini Dinar. Final quote confirmed after vehicle inspection.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/8 bg-surface-elevated">
                      <th
                        scope="col"
                        className="px-5 py-4 text-left font-semibold uppercase tracking-wide text-zinc-400 text-xs"
                      >
                        Vehicle Type
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-4 text-left font-semibold uppercase tracking-wide text-accent-gold text-xs"
                      >
                        Price Range
                      </th>
                      <th
                        scope="col"
                        className="hidden px-5 py-4 text-left font-semibold uppercase tracking-wide text-zinc-500 text-xs sm:table-cell"
                      >
                        Examples
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/6 bg-surface">
                    {service.pricing.map((row, i) => (
                      <tr
                        key={i}
                        className="transition-colors duration-100 hover:bg-surface-elevated"
                      >
                        <td className="px-5 py-4 font-medium text-white">{row.vehicle}</td>
                        <td className="px-5 py-4 font-bold text-accent-gold">{row.range}</td>
                        {row.note && (
                          <td className="hidden px-5 py-4 text-zinc-500 sm:table-cell">
                            {row.note}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
              <Clock className="h-3.5 w-3.5 flex-shrink-0" aria-hidden />
              <span>
                <strong className="text-zinc-400">Duration:</strong> {service.duration}
              </span>
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── FAQ Accordion ────────────────────────────────────────── */}
        <section aria-labelledby="faq-heading" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                Questions &amp; Answers
              </p>
              <h2
                id="faq-heading"
                className="font-display text-2xl font-bold text-white sm:text-3xl"
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div className="rounded-2xl border border-white/8 bg-surface px-5 sm:px-7">
              <ServiceFaqAccordion faqs={service.faqs} />
            </div>
          </div>
        </section>

        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

        {/* ── Related Services ─────────────────────────────────────── */}
        {relatedServices.length > 0 && (
          <section aria-labelledby="related-heading" className="px-4 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                  Also Consider
                </p>
                <h2
                  id="related-heading"
                  className="font-display text-2xl font-bold text-white sm:text-3xl"
                >
                  Related Services
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-white/8 bg-surface p-5 transition-all duration-200 hover:border-accent-gold/30 hover:bg-surface-elevated"
                  >
                    <div>
                      {related.badge && (
                        <span className="mb-3 inline-block rounded-full bg-accent-gold/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent-gold">
                          {related.badge}
                        </span>
                      )}
                      <h3 className="mb-1 font-bold text-white group-hover:text-accent-gold transition-colors duration-150">
                        {related.name}
                      </h3>
                      <p className="text-xs text-zinc-500">{related.tagline}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent-gold">
                      Learn more{' '}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-accent-gold/25 bg-gradient-to-br from-surface to-surface-elevated p-8 text-center sm:p-12">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                Ready to Book?
              </p>
              <h2 className="font-display mb-4 text-2xl font-bold text-white sm:text-3xl">
                Book {service.name} on WhatsApp
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
              <p className="mt-5 text-xs text-zinc-600">
                {BUSINESS.openingHoursDisplay}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyContactBar />
    </>
  )
}
