import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Logo from '@/components/Logo'
import ServicesGrid from '@/components/ServicesGrid'
import ServiceEstimator from '@/components/ServiceEstimator'
import LocationFAQ from '@/components/LocationFAQ'
import StickyContactBar from '@/components/StickyContactBar'
import { BUSINESS } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
      <Hero />
      <ServicesGrid />
      <ServiceEstimator />
      <LocationFAQ />
      <MapSection />

      {/* Desktop footer NAP */}
      <footer className="border-t border-white/8 bg-surface px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Logo className="mb-3" />
              <p className="text-sm leading-relaxed text-zinc-400">
                {BUSINESS.description}
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Contact
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>
                  <a
                    href={`tel:${BUSINESS.phone.primary}`}
                    className="hover:text-accent-cyan transition-colors"
                  >
                    {BUSINESS.phone.primaryDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${BUSINESS.whatsapp.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-cyan transition-colors"
                  >
                    WhatsApp: {BUSINESS.phone.whatsappDisplay}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Location &amp; Hours
              </p>
              <address className="not-italic text-sm text-zinc-300">
                {BUSINESS.address.formatted}
              </address>
              <p className="mt-2 text-sm text-zinc-400">{BUSINESS.openingHoursDisplay}</p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/6 pt-6 text-xs text-zinc-600">
            <p>
              &copy; {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <StickyContactBar />
    </main>
    </>
  )
}

function MapSection() {
  return (
    <section
      aria-label="Workshop location map"
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
        <h2 className="font-display mb-6 text-center text-2xl font-bold text-white">
          Budaiya, Kingdom of Bahrain
        </h2>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="AutoSpa Bahrain workshop location"
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
