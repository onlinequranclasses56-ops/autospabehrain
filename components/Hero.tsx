'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, MapPin, MessageCircle, Phone, CalendarCheck } from 'lucide-react'
import { BUSINESS, WHATSAPP } from '@/lib/constants'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
}

export default function Hero() {
  const prefersReduced = useReducedMotion()

  const motionProps = prefersReduced
    ? {}
    : { variants: container, initial: 'hidden', animate: 'visible' }

  const childProps = prefersReduced ? {} : { variants: item }

  return (
    <section
      aria-label="AutoSpa Bahrain — hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-background px-4 pb-28 pt-16 text-center sm:pt-24"
    >
      {/* Background hero image */}
      <Image
        src="/classic-mercedes-luxury-car-polishing-autospa-bahrain.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={80}
        className="object-cover object-center"
      />
      {/* Dark overlay — keeps text fully legible */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-background/78" />
      {/* Gold radial glow on top */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow" />
      {/* Bottom vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(11,12,14,0.85)_0%,_transparent_65%)]"
      />

      <motion.div
        {...motionProps}
        className="relative z-10 mx-auto max-w-4xl"
      >
        {/* Authorized badge */}
        <motion.div {...childProps} className="mb-6 inline-flex items-center gap-2">
          <span
            aria-hidden
            className="h-2 w-2 animate-pulse-slow rounded-full bg-accent-gold"
          />
          <span className="rounded-full border border-accent-gold/40 bg-accent-gold/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent-gold uppercase">
            Authorized Zymöl Detailer &amp; Premium PPF Center
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...childProps}
          className="font-display mb-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Bahrain&rsquo;s Premier{' '}
          <span className="gold-text-gradient">Automotive Spa</span>
          <br />
          &amp; Paint Protection Studio
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...childProps}
          className="mx-auto mb-8 max-w-2xl text-balance text-base text-zinc-300 sm:text-lg"
        >
          Ceramic coating, PPF, and Zymöl showroom detailing — delivered to perfection
          in Budaiya and across{' '}
          <span className="text-white">
            Saar, Seef, Riffa, Hamala, and Manama
          </span>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...childProps}
          className="mb-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href="/book"
            className="inline-flex min-h-[52px] items-center gap-2.5 rounded-xl bg-accent-gold px-7 py-3.5 text-sm font-bold tracking-wide text-black shadow-lg shadow-accent-gold/20 transition-all duration-200 hover:bg-accent-gold-light hover:shadow-accent-gold/35 focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden />
            Book Now
          </Link>
          <a
            href={WHATSAPP.general()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            WhatsApp
          </a>
          <a
            href={`tel:${BUSINESS.phone.primary}`}
            className="inline-flex min-h-[52px] items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Phone className="h-5 w-5" aria-hidden />
            {BUSINESS.phone.primaryDisplay}
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          {...childProps}
          className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <TrustItem
            icon={<ShieldCheck className="h-5 w-5 text-accent-gold" aria-hidden />}
            label="Authorized Zymöl Center"
            sub="Certified application protocols"
          />
          <TrustItem
            icon={<MapPin className="h-5 w-5 text-accent-gold" aria-hidden />}
            label="Budaiya, Bahrain"
            sub={BUSINESS.address.landmarks}
          />
          <TrustItem
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                className="h-5 w-5 text-accent-gold"
                aria-hidden
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" strokeLinecap="round" />
              </svg>
            }
            label={BUSINESS.openingHoursDisplay}
            sub="Call +973 1759 5971"
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.div
            className="h-1.5 w-1 rounded-full bg-accent-gold/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function TrustItem({
  icon,
  label,
  sub,
}: {
  icon: React.ReactNode
  label: string
  sub: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-left backdrop-blur-sm">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="mt-0.5 text-xs leading-snug text-zinc-400">{sub}</p>
      </div>
    </div>
  )
}
