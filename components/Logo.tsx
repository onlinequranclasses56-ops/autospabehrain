/*
  Brand lockup: geometric "A" mark (matches favicon.svg) + Cinzel wordmark.
  The mark uses bare gold strokes with no card background — designed for dark surfaces.
  Pass className to adjust spacing from the outside.
*/
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="AutoSpa Bahrain">
      {/*
        Geometric "A" lettermark — identical proportions to favicon.svg.
        viewBox 0 0 26 28:  apex (13,1)  bottom-left (1,27)  bottom-right (25,27)
        Crossbar at ~60% down the legs: x ≈ 5.5 → 20.5, y ≈ 17.5
      */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 26 28"
        fill="none"
        aria-hidden
        focusable="false"
      >
        <path
          d="M13 1 L1 27 M13 1 L25 27 M5.5 17.5 H20.5"
          stroke="#D4AF37"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark — Cinzel serif for luxury character */}
      <div className="flex flex-col leading-none gap-[3px]">
        <span className="font-display text-[13px] font-bold tracking-[0.22em] text-white">
          AUTOSPA
        </span>
        <span className="font-display text-[9px] font-normal tracking-[0.32em] text-accent-gold">
          BAHRAIN
        </span>
      </div>
    </div>
  )
}
