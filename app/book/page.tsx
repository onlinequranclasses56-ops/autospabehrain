import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { BUSINESS } from '@/lib/constants'
import { ShieldCheck, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book Car Detailing Bahrain — Free Collection | Confirm in 1 Hour | AutoSpa',
  description:
    'Book ceramic coating, PPF, window tinting or full car detailing in Bahrain online. Free vehicle collection from Manama, Riffa, Seef & Budaiya. Confirmed on WhatsApp in 1 hour. No upfront payment.',
  alternates: { canonical: `${BUSINESS.url}/book` },
  openGraph: {
    title: 'Book Car Detailing Bahrain — Free Collection | AutoSpa Bahrain',
    description:
      'Book your ceramic coating, PPF or luxury detailing online. Free collection from anywhere in Bahrain. AutoSpa Bahrain, Budaiya — WhatsApp confirmation within 1 hour.',
    url: `${BUSINESS.url}/book`,
  },
}

const TRUST = [
  { icon: ShieldCheck, text: 'No payment required to book' },
  { icon: Clock,       text: 'WhatsApp confirmation within 1 hour' },
  { icon: MapPin,      text: 'Free collection across Bahrain' },
]

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">

        <div className="mx-auto max-w-lg px-4">

          {/* Header */}
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-gold">
              Online Booking
            </p>
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Book Your Appointment
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Fill in the form below — we will confirm your booking within one hour via WhatsApp.
            </p>
          </div>

          {/* Trust strip */}
          <ul className="mb-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
            {TRUST.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-xs text-zinc-500">
                <Icon className="h-3.5 w-3.5 shrink-0 text-accent-gold" aria-hidden />
                {text}
              </li>
            ))}
          </ul>

          {/* Form card */}
          <div className="rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
            <BookingForm />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
