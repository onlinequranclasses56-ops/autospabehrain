'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import { FAQ_ITEMS, BUSINESS } from '@/lib/constants'

export default function LocationFAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const prefersReduced = useReducedMotion()

  function toggle(index: number) {
    setOpen((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative bg-background px-4 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent"
      />

      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-gold">
            Location &amp; Knowledge
          </p>
          <h2
            id="faq-heading"
            className="font-display mb-4 text-3xl font-bold text-white sm:text-4xl"
          >
            Common Questions
          </h2>
          <p className="text-zinc-400">
            Straight answers to the questions we hear most — no sales language.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3" role="list">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              role="listitem"
              className={`rounded-2xl border transition-all duration-200 ${
                open === index
                  ? 'border-accent-gold/30 bg-surface-elevated'
                  : 'border-white/8 bg-surface hover:border-white/16'
              }`}
            >
              <button
                type="button"
                aria-expanded={open === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold leading-snug text-white sm:text-base">
                  {item.question}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/12 transition-all duration-200">
                  {open === index ? (
                    <X className="h-3.5 w-3.5 text-accent-gold" aria-hidden />
                  ) : (
                    <Plus className="h-3.5 w-3.5 text-zinc-400" aria-hidden />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    key="content"
                    initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={prefersReduced ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-300">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Location card */}
        <div className="mt-12 rounded-2xl border border-accent-gold/20 bg-surface p-6 sm:p-8">
          <h3 className="font-display mb-4 text-xl font-bold text-white">
            Visit Our Workshop
          </h3>
          <dl className="space-y-3 text-sm">
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-zinc-500">Address</dt>
              <dd className="text-zinc-300">{BUSINESS.address.formatted}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-zinc-500">Landmark</dt>
              <dd className="text-zinc-300">{BUSINESS.address.landmarks}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-zinc-500">Hours</dt>
              <dd className="text-zinc-300">{BUSINESS.openingHoursDisplay}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-zinc-500">Call</dt>
              <dd>
                <a
                  href={`tel:${BUSINESS.phone.primary}`}
                  className="text-accent-cyan underline-offset-2 hover:underline"
                >
                  {BUSINESS.phone.primaryDisplay}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-zinc-500">WhatsApp</dt>
              <dd>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan underline-offset-2 hover:underline"
                >
                  {BUSINESS.phone.whatsappDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
