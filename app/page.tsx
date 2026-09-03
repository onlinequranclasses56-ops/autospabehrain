import Hero from '@/components/Hero'
import Header from '@/components/Header'
import ServicesGrid from '@/components/ServicesGrid'
import PortfolioGallery from '@/components/PortfolioGallery'
import ServiceEstimator from '@/components/ServiceEstimator'
import LocationFAQ from '@/components/LocationFAQ'
import Footer from '@/components/Footer'
import StickyContactBar from '@/components/StickyContactBar'
import { BUSINESS } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <PortfolioGallery />
        <ServiceEstimator />
        <LocationFAQ />
        <MapSection />
      </main>
      <Footer />
      <StickyContactBar />
    </>
  )
}

function MapSection() {
  return (
    <section
      id="map"
      aria-labelledby="map-heading"
      className="relative bg-surface px-4 py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent"
      />
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-accent-gold">
          Find Us
        </p>
        <h2
          id="map-heading"
          className="font-display mb-6 text-center text-2xl font-bold text-white"
        >
          AutoSpa Bahrain — Budaiya Workshop
        </h2>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="AutoSpa Bahrain workshop location — Building 18, Road 54, Block 505, Budaiya"
            src={BUSINESS.mapEmbed}
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)' }}
          />
        </div>
        <p className="mt-3 text-center text-xs text-zinc-500">
          {BUSINESS.address.landmarks}
        </p>
      </div>
    </section>
  )
}
