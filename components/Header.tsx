'use client'

import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { WHATSAPP } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Estimate', href: '#estimator' },
  { label: 'FAQ', href: '#faq' },
] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    // Set initial state in case page loads mid-scroll
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/8 bg-background/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <a
          href="/"
          aria-label="AutoSpa Bahrain — return to home"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Page sections" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-zinc-400 transition-colors duration-150 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp CTA */}
        <a
          href={WHATSAPP.general()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a service on WhatsApp"
          className="hidden min-h-[40px] items-center gap-2 rounded-xl bg-accent-gold px-4 py-2 text-sm font-bold text-black transition-all duration-150 hover:bg-accent-gold-light md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Book Now
        </a>
      </div>
    </header>
  )
}
