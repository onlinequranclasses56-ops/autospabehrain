import Image from 'next/image'
import Logo from './Logo'
import { BUSINESS, WHATSAPP } from '@/lib/constants'
import { MessageCircle, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react'

// ── Topical map: every service as a crawlable pillar page link ────────────────
const SERVICE_LINKS = [
  { label: 'Paint Protection Film (PPF) Bahrain', href: '/services/paint-protection-film-bahrain' },
  { label: '9H Ceramic Coating Bahrain', href: '/services/ceramic-coating-bahrain' },
  { label: 'Zymöl Luxury Car Detailing', href: '/services/zymol-luxury-detailing-bahrain' },
  { label: 'Interior Steam Clean & Leather Care', href: '/services/interior-detailing-bahrain' },
  { label: 'Full Showroom Detail Bahrain', href: '/services/full-showroom-detail-bahrain' },
  { label: 'Paint Correction Bahrain', href: '/services/paint-correction-bahrain' },
] as const

// ── Geo-targeting: every service area as a crawlable location page link ───────
const AREA_LINKS = [
  { label: 'Car Detailing Budaiya', href: '/locations/car-detailing-budaiya' },
  { label: 'Car Detailing Saar', href: '/locations/car-detailing-saar' },
  { label: 'Car Detailing Seef', href: '/locations/car-detailing-seef' },
  { label: 'Car Detailing Riffa', href: '/locations/car-detailing-riffa' },
  { label: 'Car Detailing Manama', href: '/locations/car-detailing-manama' },
  { label: 'Car Detailing Hamala', href: '/locations/car-detailing-hamala' },
] as const

// ── Site architecture: key sections for crawl depth + UX ─────────────────────
const QUICK_LINKS = [
  { label: 'Our Services', href: '#services', title: 'Ceramic Coating, PPF & Car Detailing Bahrain' },
  { label: 'Work Portfolio', href: '#portfolio-heading', title: 'Car Detailing Portfolio — AutoSpa Bahrain' },
  { label: 'Get a Price Estimate', href: '#estimator', title: 'Car Detailing Prices Bahrain' },
  { label: 'Common Questions', href: '#faq', title: 'Car Detailing FAQ Bahrain' },
  { label: 'Find Our Workshop', href: '#map', title: 'AutoSpa Bahrain — Budaiya Workshop Location' },
] as const

export default function Footer() {
  return (
    <footer
      aria-label="AutoSpa Bahrain site footer"
      className="relative overflow-hidden border-t border-white/8 bg-surface"
    >
      {/* Background car image */}
      <Image
        src="/autospa-bahrain-luxury-car-valeting-bentley-continental-maqaba-budaiya.webp"
        alt=""
        fill
        sizes="100vw"
        quality={65}
        className="object-cover object-center"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-surface/93" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">

        {/* ── Main grid ──────────────────────────────────────────────────────── */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand + trust signals */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="/"
              aria-label="AutoSpa Bahrain — Ceramic Coating & PPF Bahrain"
              className="mb-4 inline-block"
            >
              <Logo />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {BUSINESS.description}
            </p>

            {/* Trust badges */}
            <ul className="mt-5 space-y-2" aria-label="Certifications">
              <li className="flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-accent-gold" aria-hidden />
                <span>Authorized Zymöl Detailer — Bahrain</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-accent-gold" aria-hidden />
                <span>Premium PPF &amp; Ceramic Coating Centre</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-accent-gold" aria-hidden />
                <span>Est. 2010 — {new Date().getFullYear() - 2010}+ Years in Bahrain</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-accent-gold" aria-hidden />
                <span>Registered in Bahrain · W.L.L. (CR No. Bahrain)</span>
              </li>
            </ul>
          </div>

          {/* Col 2 — Services (topical map pillar links) */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
              Our Services
            </h2>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    title={`${label} — AutoSpa Bahrain`}
                    className="group flex items-start gap-2 text-sm text-zinc-500 transition-colors duration-150 hover:text-accent-gold"
                  >
                    <span
                      aria-hidden
                      className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent-gold/40 transition-colors group-hover:bg-accent-gold"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Service Areas (geo-targeting cluster links) */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
              Areas We Serve
            </h2>
            <ul className="space-y-2.5">
              {AREA_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    title={`${label} — AutoSpa Bahrain`}
                    className="group flex items-start gap-2 text-sm text-zinc-500 transition-colors duration-150 hover:text-accent-gold"
                  >
                    <span
                      aria-hidden
                      className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent-gold/40 transition-colors group-hover:bg-accent-gold"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact NAP + Hours */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
              Contact Us
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${BUSINESS.phone.primary}`}
                  aria-label={`Call AutoSpa Bahrain on ${BUSINESS.phone.primaryDisplay}`}
                  className="flex items-center gap-2.5 text-zinc-300 transition-colors hover:text-accent-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-gold/70" aria-hidden />
                  {BUSINESS.phone.primaryDisplay}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP.general()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with AutoSpa Bahrain on WhatsApp"
                  className="flex items-center gap-2.5 text-zinc-300 transition-colors hover:text-accent-gold"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-accent-gold/70" aria-hidden />
                  WhatsApp {BUSINESS.phone.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold/70" aria-hidden />
                <address className="not-italic text-sm leading-snug">
                  {BUSINESS.address.formatted}
                </address>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold/70" aria-hidden />
                <span className="text-sm leading-snug">{BUSINESS.openingHoursDisplay}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Sub-footer: quick links + legal ───────────────────────────────── */}
        <div className="border-t border-white/6 py-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">

            {/* Quick navigation links — topical map breadcrumb for Googlebot */}
            <nav aria-label="Quick site links" className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 sm:justify-start">
              {QUICK_LINKS.map(({ label, href, title }) => (
                <a
                  key={href}
                  href={href}
                  title={title}
                  className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
                >
                  {label}
                </a>
              ))}
            </nav>

            <p className="text-xs text-zinc-700 shrink-0">
              &copy; {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
