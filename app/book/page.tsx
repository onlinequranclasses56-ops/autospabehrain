import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { BUSINESS } from '@/lib/constants'
import { ShieldCheck, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: `Book Car Detailing Bahrain | AutoSpa Bahrain, Budaiya`,
  description: `Book ceramic coating, PPF, or luxury car detailing in Bahrain online. Choose your service, vehicle, and preferred date — we confirm via WhatsApp within 1 hour.`,
  alternates: { canonical: `${BUSINESS.url}/book` },
  openGraph: {
    title: 'Book Car Detailing in Bahrain — AutoSpa Bahrain',
    description: 'Reserve your ceramic coating, PPF or luxury car detailing appointment online. Serving Budaiya, Saar, Seef & all of Bahrain.',
    url: `${BUSINESS.url}/book`,
  },
}

const TRUST_POINTS = [
  { icon: ShieldCheck, text: 'No payment required to book — pay on collection' },
  { icon: Clock,       text: 'Confirmation via WhatsApp within 1 hour' },
  { icon: MapPin,      text: 'Workshop at Budaiya · pick-up available across Bahrain' },
]

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        {/* Page header */}
        <section className="mx-auto max-w-2xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-gold">
            Online Booking
          </p>
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Book Your Appointment
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Select your service, tell us about your vehicle, and choose a preferred date.
            We will confirm within one hour via WhatsApp.
          </p>

          {/* Trust strip */}
          <ul className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
            {TRUST_POINTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-xs text-zinc-500">
                <Icon className="h-3.5 w-3.5 shrink-0 text-accent-gold" />
                {text}
              </li>
            ))}
          </ul>
        </section>

        {/* Form card */}
        <section className="mx-auto mt-10 max-w-2xl px-4">
          <div className="rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
            <BookingForm />
          </div>
        </section>

        {/* Hours note */}
        <p className="mt-6 text-center text-xs text-zinc-600">
          Business hours: {BUSINESS.openingHoursDisplay}
        </p>
      </main>
      <Footer />
    </>
  )
}
