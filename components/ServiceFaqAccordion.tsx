'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { ServiceFaq } from '@/lib/services-data'

interface Props {
  faqs: ServiceFaq[]
}

export default function ServiceFaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-white/8">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors duration-150 hover:text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="font-semibold text-white leading-snug">{faq.q}</span>
              <ChevronDown
                aria-hidden
                className={`h-5 w-5 flex-shrink-0 text-accent-gold transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="pb-5 text-sm leading-relaxed text-zinc-400">
                {faq.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
