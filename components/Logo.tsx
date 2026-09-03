import Image from 'next/image'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="AutoSpa Bahrain"
      className={`flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/logo.webp"
        alt="AutoSpa Bahrain"
        width={44}
        height={44}
        className="rounded-full ring-1 ring-accent-gold/30"
        priority
      />
      <div className="flex flex-col gap-[3px] leading-none">
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
