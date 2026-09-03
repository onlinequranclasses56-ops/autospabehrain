import Image from 'next/image'

const PORTFOLIO = [
  {
    src: '/autospa-bahrain-car-detailing-lexus-es-maqaba-budaiya.webp',
    alt: 'Lexus ES full car detailing service at AutoSpa Bahrain, Maqaba Budaiya',
    caption: 'Lexus ES · Full Car Detailing',
    tag: 'Car Detailing',
  },
  {
    src: '/autospa-bahrain-ceramic-coating-lexus-lx-maqaba-budaiya.webp',
    alt: 'Lexus LX 9H ceramic coating application at AutoSpa Bahrain workshop, Budaiya',
    caption: 'Lexus LX · 9H Ceramic Coating',
    tag: 'Ceramic Coating',
  },
  {
    src: '/autospa-bahrain-luxury-car-valeting-bentley-continental-maqaba-budaiya.webp',
    alt: 'Bentley Continental luxury car valeting and detailing at AutoSpa Bahrain, Maqaba',
    caption: 'Bentley Continental · Luxury Valeting',
    tag: 'Luxury Valeting',
  },
  {
    src: '/autospa-bahrain-paint-protection-film-ppf-land-cruiser-defender-maqaba.webp',
    alt: 'Paint protection film PPF installation on Land Cruiser and Defender at AutoSpa Bahrain, Maqaba',
    caption: 'Land Cruiser & Defender · PPF',
    tag: 'Paint Protection Film',
  },
  {
    src: '/classic-mercedes-luxury-car-polishing-autospa-bahrain.webp',
    alt: 'Classic Mercedes machine polish and paint correction at AutoSpa Bahrain, Budaiya Bahrain',
    caption: 'Classic Mercedes · Machine Polish',
    tag: 'Paint Correction',
  },
  {
    src: '/genesis-gv70-ceramic-coating-autospa-bahrain-budaiya.webp',
    alt: 'Genesis GV70 ceramic coating treatment at AutoSpa Bahrain, Budaiya Bahrain',
    caption: 'Genesis GV70 · Ceramic Coating',
    tag: 'Ceramic Coating',
  },
  {
    src: '/matte-black-ppf-paint-protection-autospa-maqaba.webp',
    alt: 'Matte black paint protection film PPF installation at AutoSpa Bahrain, Maqaba',
    caption: 'Matte Black · PPF Protection',
    tag: 'Paint Protection Film',
  },
  {
    src: '/sports-coupe-paint-correction-interior-detailing-budaiya.webp',
    alt: 'Sports coupe paint correction and interior detailing at AutoSpa Bahrain, Budaiya',
    caption: 'Sports Coupe · Paint Correction & Interior',
    tag: 'Interior Detailing',
  },
] as const

export default function PortfolioGallery() {
  return (
    <section aria-labelledby="portfolio-heading" className="relative bg-background px-4 py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent"
      />
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-accent-gold">
          Our Work
        </p>
        <h2
          id="portfolio-heading"
          className="font-display mb-10 text-center text-2xl font-bold text-white sm:text-3xl"
        >
          Recent Detailing Projects in Bahrain
        </h2>

        <ul role="list" className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {PORTFOLIO.map(({ src, alt, caption, tag }, i) => (
            <li key={src}>
              <figure className="group overflow-hidden rounded-xl border border-white/8 bg-surface">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={i < 2}
                    quality={85}
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-gold backdrop-blur-sm">
                    {tag}
                  </span>
                </div>
                <figcaption className="px-3 py-2.5 text-xs text-zinc-400">{caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
