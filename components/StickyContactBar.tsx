'use client'

import { Phone, MessageCircle, Navigation } from 'lucide-react'
import { BUSINESS, WHATSAPP } from '@/lib/constants'

export default function StickyContactBar() {
  return (
    <div
      role="navigation"
      aria-label="Quick contact"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/85 backdrop-blur-lg safe-bottom lg:hidden"
    >
      <div className="mx-auto flex max-w-lg">
        <a
          href={`tel:${BUSINESS.phone.primary}`}
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-zinc-300 transition-colors duration-150 hover:text-white focus-visible:bg-white/5"
          aria-label={`Call AutoSpa Bahrain on ${BUSINESS.phone.primaryDisplay}`}
        >
          <Phone className="h-5 w-5" aria-hidden />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
        </a>

        {/* WhatsApp — central, most prominent */}
        <a
          href={WHATSAPP.general()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-1 flex-col items-center justify-center gap-1 py-3 text-accent-gold transition-colors duration-150 hover:text-accent-gold-light"
          aria-label="Chat on WhatsApp to book a service"
        >
          {/* Pulsing online indicator */}
          <span
            aria-hidden
            className="absolute right-[calc(50%-10px)] top-3 h-2 w-2 translate-x-4 rounded-full bg-green-400 ring-2 ring-black animate-pulse-slow"
          />
          <MessageCircle className="h-5 w-5" aria-hidden />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        <a
          href={BUSINESS.mapDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-zinc-300 transition-colors duration-150 hover:text-white focus-visible:bg-white/5"
          aria-label="Get directions to AutoSpa Bahrain in Budaiya"
        >
          <Navigation className="h-5 w-5" aria-hidden />
          <span className="text-[10px] font-semibold uppercase tracking-wider">
            Directions
          </span>
        </a>
      </div>
    </div>
  )
}
