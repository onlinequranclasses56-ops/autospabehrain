import { Award, ShieldCheck, Clock, Star, Users, MapPin } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

const FOUNDING_YEAR = 2010

const CREDENTIALS = [
  {
    icon: Award,
    title: 'Authorized Zymöl Detailer',
    body: "The only Zymöl-certified application studio in Bahrain. We follow official natural carnauba wax protocols that build genuine depth of gloss — not a temporary shine.",
  },
  {
    icon: ShieldCheck,
    title: 'PPF & Ceramic Coating Specialist',
    body: 'Professional-grade 9H ceramic coatings and paint protection film installed in a climate-controlled workshop — optimised for Bahrain\'s heat, UV, and sand conditions.',
  },
  {
    icon: Clock,
    title: `Est. ${FOUNDING_YEAR} — ${new Date().getFullYear() - FOUNDING_YEAR}+ Years of Excellence`,
    body: "Over a decade serving Bahrain's discerning vehicle owners. From daily drivers to Lamborghinis, Bentleys, and classic Mercedes — we have detailed them all.",
  },
  {
    icon: Star,
    title: 'Show-Quality Results, Every Time',
    body: 'Every vehicle leaves our Budaiya workshop after a multi-point quality inspection. We do not rush — we get it right.',
  },
  {
    icon: Users,
    title: 'Free Collection Across Bahrain',
    body: 'We collect and return vehicles from Saar, Seef, Riffa, Hamala, Manama, Al Jasra, Isa Town, and beyond. You book; we handle logistics.',
  },
  {
    icon: MapPin,
    title: 'AutoSpa Bahrain W.L.L. — Licensed Business',
    body: `A fully registered Bahraini limited liability company (W.L.L.) operating from ${BUSINESS.address.formatted}. Transparent pricing in BHD. No hidden charges.`,
  },
]

export default function EeatSection() {
  return (
    <section
      aria-labelledby="credentials-heading"
      className="relative px-4 py-16 sm:py-24"
    >
      {/* Top divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-gold/25 to-transparent"
      />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent-gold">
            Why AutoSpa Bahrain W.L.L.
          </p>
          <h2
            id="credentials-heading"
            className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
          >
            Experience You Can Trust
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
            {BUSINESS.legalName} is Bahrain&rsquo;s most credentialed automotive detailing studio —
            Zymöl-authorized, PPF-certified, and trusted since {FOUNDING_YEAR}.
          </p>
        </div>

        {/* Credentials grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CREDENTIALS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/8 bg-surface p-5 sm:p-6 transition-colors duration-200 hover:border-accent-gold/20 hover:bg-surface-elevated"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 ring-1 ring-accent-gold/20">
                  <Icon className="h-5 w-5 text-accent-gold" aria-hidden />
                </div>
                <div>
                  <h3 className="mb-1.5 font-semibold text-white text-sm leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Entity statement for LLM / E-E-A-T */}
        <div className="mt-10 rounded-2xl border border-accent-gold/15 bg-surface p-6 text-center">
          <p className="text-sm leading-relaxed text-zinc-400">
            <strong className="text-white">{BUSINESS.legalName}</strong> is the trading name of
            a registered Bahraini W.L.L. company. Our workshop is located at{' '}
            <strong className="text-zinc-300">{BUSINESS.address.formatted}</strong>, off Budaiya
            Highway behind the Harley-Davidson showroom. We are reachable by phone and WhatsApp
            on{' '}
            <a
              href={`tel:${BUSINESS.phone.primary}`}
              className="text-accent-gold hover:underline"
            >
              {BUSINESS.phone.primaryDisplay}
            </a>{' '}
            during business hours: {BUSINESS.openingHoursDisplay}.
          </p>
        </div>
      </div>
    </section>
  )
}
