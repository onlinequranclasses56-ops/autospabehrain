import Image from 'next/image'
import { Shield, Sparkles, Star, Sofa, Droplets, Crown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  name: string
  tagline: string
  description: string
  badge?: string
}

const SERVICES: Service[] = [
  {
    icon: Shield,
    name: 'Paint Protection Film',
    tagline: 'PPF — Full or Partial',
    description:
      "A near-invisible urethane film that physically guards your paint against stone chips, road debris, and Bahrain's harsh UV. Self-healing surface returns to clarity with heat exposure.",
    badge: 'Most popular',
  },
  {
    icon: Sparkles,
    name: '9H Ceramic Coating',
    tagline: 'Permanent Hydrophobic Finish',
    description:
      'A professionally-applied SiO₂ coating rated 9H on the pencil hardness scale. Repels water, sand, bird lime, and UV — keeping your car showroom-clean for years between washes.',
  },
  {
    icon: Star,
    name: 'Zymöl Luxury Detailing',
    tagline: 'Authorised Zymöl Centre',
    description:
      'Certified application of Zymöl natural carnauba wax using hand-laid techniques developed for concours and collector cars. The highest level of cosmetic care available in Bahrain.',
    badge: 'Exclusive',
  },
  {
    icon: Sofa,
    name: 'Interior Steam & Leather Care',
    tagline: 'Deep Clean & Conditioning',
    description:
      'High-temperature steam sanitisation eliminates bacteria and odours without harsh chemicals. Paired with specialist leather conditioning to nourish, protect, and restore cabin surfaces.',
  },
  {
    icon: Crown,
    name: 'Full Showroom Detail',
    tagline: 'Exterior + Interior Package',
    description:
      'Our flagship multi-stage service: decontamination wash, paint correction, exterior protection, and a full interior deep clean. Your car leaves in the condition it was delivered from the factory.',
  },
  {
    icon: Droplets,
    name: 'Premium Wash & Polish',
    tagline: 'Machine Polish & Hand Finish',
    description:
      "A thorough two-bucket hand wash followed by clay bar decontamination and a single-stage machine polish. Removes surface swirls and restores gloss — the ideal maintenance treatment between full details.",
  },
]

export default function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-background px-4 py-20 sm:py-28"
    >
      {/* Background image — matte black PPF, very dark overlay */}
      <Image
        src="/matte-black-ppf-paint-protection-autospa-maqaba.webp"
        alt=""
        fill
        sizes="100vw"
        quality={70}
        className="object-cover object-center"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-background/88" />
      {/* Section divider glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-gold">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="font-display mb-4 text-3xl font-bold text-white sm:text-4xl"
          >
            Every Service We Offer
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            From a weekly maintenance wash to a full concours-grade restoration —
            every job receives the same uncompromising attention to detail.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <div className="group relative flex flex-col rounded-2xl border border-white/8 bg-surface p-6 transition-all duration-200 hover:border-accent-gold/30 hover:bg-surface-elevated">
      {service.badge && (
        <span className="absolute right-4 top-4 rounded-full bg-accent-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent-gold">
          {service.badge}
        </span>
      )}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10 ring-1 ring-accent-gold/20 transition-all duration-200 group-hover:bg-accent-gold/18 group-hover:ring-accent-gold/40">
        <Icon className="h-6 w-6 text-accent-gold" aria-hidden />
      </div>
      <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-accent-gold/70">
        {service.tagline}
      </p>
      <h3 className="mb-2 text-lg font-bold text-white">{service.name}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{service.description}</p>
    </div>
  )
}
