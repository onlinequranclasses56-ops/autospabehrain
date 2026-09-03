'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { WHATSAPP } from '@/lib/constants'

const NAV_LINKS = [
  {
    label: 'Services',
    href: '#services',
    title: 'Ceramic Coating, PPF & Car Detailing Bahrain',
  },
  {
    label: 'Our Work',
    href: '#portfolio-heading',
    title: 'Car Detailing Portfolio — AutoSpa Bahrain Budaiya',
  },
  {
    label: 'Pricing',
    href: '#estimator',
    title: 'Car Detailing & Ceramic Coating Prices Bahrain',
  },
  {
    label: 'FAQ',
    href: '#faq',
    title: 'Car Detailing FAQ — Ceramic Coating & PPF Bahrain',
  },
  {
    label: 'Book Now',
    href: '/book',
    title: 'Book Car Detailing or Ceramic Coating in Bahrain',
  },
] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'border-b border-white/8 bg-background/95 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* Logo */}
          <a
            href="/"
            aria-label="AutoSpa Bahrain — Ceramic Coating & PPF Bahrain, return to home"
            className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={closeMenu}
          >
            <Logo />
          </a>

          {/* Desktop nav */}
          <nav aria-label="Site sections" className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map(({ label, href, title }) => (
              <a
                key={href}
                href={href}
                title={title}
                className="text-sm font-medium text-zinc-400 transition-colors duration-150 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP.general()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book car detailing or ceramic coating on WhatsApp"
            title="Book Ceramic Coating, PPF or Car Detailing in Bahrain via WhatsApp"
            className="hidden min-h-[40px] items-center gap-2 rounded-xl bg-accent-gold px-4 py-2 text-sm font-bold text-black transition-all duration-150 hover:bg-accent-gold-light md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Get a Quote
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:text-white md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 flex flex-col bg-background/98 backdrop-blur-xl pt-16 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav
            aria-label="Mobile site sections"
            className="flex flex-col px-6 pt-8 gap-1"
          >
            {NAV_LINKS.map(({ label, href, title }) => (
              <a
                key={href}
                href={href}
                title={title}
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-4 text-lg font-semibold text-zinc-200 transition-colors hover:bg-white/5 hover:text-white border-b border-white/6 last:border-0"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" aria-hidden />
                {label}
              </a>
            ))}
          </nav>

          <div className="px-6 pt-8">
            <a
              href={WHATSAPP.general()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-accent-gold px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-accent-gold/20"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Book via WhatsApp
            </a>
          </div>

          <p className="mt-6 px-10 text-center text-xs text-zinc-600">
            Ceramic Coating · PPF · Zymöl Detailing · Budaiya, Bahrain
          </p>
        </div>
      )}
    </>
  )
}
