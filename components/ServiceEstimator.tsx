'use client'

import Image from 'next/image'
import { useState, useMemo } from 'react'
import { Car, ChevronDown, MessageCircle } from 'lucide-react'
import { WHATSAPP, SERVICE_AREAS } from '@/lib/constants'
import type { ServiceArea } from '@/lib/constants'

// ─── Typed pricing configuration ───────────────────────────────────────────
// Update this object to change any price without touching component logic.

type VehicleKey = 'sedan' | 'suv' | 'supercar'
type ServiceKey =
  | 'ppf_full'
  | 'ppf_partial'
  | 'ceramic_9h'
  | 'zymol_detail'
  | 'interior_steam'
  | 'wash_polish'

interface PriceRange {
  min: number
  max: number
}

type PricingMatrix = Record<VehicleKey, Record<ServiceKey, PriceRange>>

const PRICING: PricingMatrix = {
  sedan: {
    ppf_full: { min: 280, max: 420 },
    ppf_partial: { min: 120, max: 190 },
    ceramic_9h: { min: 150, max: 250 },
    zymol_detail: { min: 70, max: 110 },
    interior_steam: { min: 55, max: 90 },
    wash_polish: { min: 20, max: 35 },
  },
  suv: {
    ppf_full: { min: 380, max: 580 },
    ppf_partial: { min: 160, max: 270 },
    ceramic_9h: { min: 220, max: 360 },
    zymol_detail: { min: 100, max: 150 },
    interior_steam: { min: 75, max: 120 },
    wash_polish: { min: 30, max: 50 },
  },
  supercar: {
    ppf_full: { min: 580, max: 1200 },
    ppf_partial: { min: 260, max: 520 },
    ceramic_9h: { min: 380, max: 750 },
    zymol_detail: { min: 180, max: 380 },
    interior_steam: { min: 130, max: 250 },
    wash_polish: { min: 55, max: 110 },
  },
}

const VEHICLE_OPTIONS: { key: VehicleKey; label: string; sub: string }[] = [
  { key: 'sedan', label: 'Sedan / Coupe', sub: 'Standard saloons, coupes, hatches' },
  { key: 'suv', label: 'SUV / 4×4', sub: 'SUVs, trucks, large 4WDs' },
  { key: 'supercar', label: 'Supercar / Exotic', sub: 'Ferraris, Lamborghinis, Bentleys…' },
]

const SERVICE_OPTIONS: { key: ServiceKey; label: string; duration: string }[] = [
  { key: 'ppf_full', label: 'Full Paint Protection Film (PPF)', duration: '2–3 days' },
  { key: 'ppf_partial', label: 'Partial PPF (front bumper & hood)', duration: '1 day' },
  { key: 'ceramic_9h', label: '9H Ceramic Coating', duration: '2 days' },
  { key: 'zymol_detail', label: 'Zymöl Luxury Exterior Detail', duration: '1 day' },
  { key: 'interior_steam', label: 'Interior Steam & Leather Care', duration: '4–6 hours' },
  { key: 'wash_polish', label: 'Premium Wash & Machine Polish', duration: '2–3 hours' },
]

// ─── Component ────────────────────────────────────────────────────────────

export default function ServiceEstimator() {
  const [vehicle, setVehicle] = useState<VehicleKey>('sedan')
  const [service, setService] = useState<ServiceKey>('ceramic_9h')
  const [area, setArea] = useState<ServiceArea>('Budaiya')

  const price = useMemo<PriceRange>(() => PRICING[vehicle][service], [vehicle, service])

  const vehicleLabel = VEHICLE_OPTIONS.find((v) => v.key === vehicle)?.label ?? ''
  const serviceLabel = SERVICE_OPTIONS.find((s) => s.key === service)?.label ?? ''
  const duration = SERVICE_OPTIONS.find((s) => s.key === service)?.duration ?? ''

  const whatsappUrl = WHATSAPP.booking(vehicleLabel, serviceLabel, area)

  return (
    <section
      id="estimator"
      aria-labelledby="estimator-heading"
      className="relative overflow-hidden bg-surface px-4 py-20 sm:py-28"
    >
      {/* Background image — Lexus LX ceramic coating */}
      <Image
        src="/autospa-bahrain-ceramic-coating-lexus-lx-maqaba-budaiya.webp"
        alt=""
        fill
        sizes="100vw"
        quality={70}
        className="object-cover object-center"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-surface/90" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-gold">
            Instant Estimate
          </p>
          <h2
            id="estimator-heading"
            className="font-display mb-3 text-3xl font-bold text-white sm:text-4xl"
          >
            Price Your Service
          </h2>
          <p className="text-zinc-400">
            Select your vehicle and service to see an estimated price range in BHD.
            Final quote confirmed on WhatsApp.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-surface-elevated p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Vehicle selector */}
            <fieldset>
              <legend className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                <Car className="h-4 w-4" aria-hidden />
                Vehicle Type
              </legend>
              <div className="flex flex-col gap-2">
                {VEHICLE_OPTIONS.map((opt) => (
                  <label
                    key={opt.key}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-all duration-150 ${
                      vehicle === opt.key
                        ? 'border-accent-gold/50 bg-accent-gold/8 text-white'
                        : 'border-white/10 bg-surface text-zinc-300 hover:border-white/20 hover:bg-white/4'
                    }`}
                  >
                    <input
                      type="radio"
                      name="vehicle"
                      value={opt.key}
                      checked={vehicle === opt.key}
                      onChange={() => setVehicle(opt.key)}
                      className="sr-only"
                    />
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all duration-150 ${
                        vehicle === opt.key
                          ? 'border-accent-gold bg-accent-gold'
                          : 'border-zinc-600'
                      }`}
                      aria-hidden
                    >
                      {vehicle === opt.key && (
                        <span className="h-1.5 w-1.5 rounded-full bg-black" />
                      )}
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">{opt.label}</span>
                      <span className="block text-xs text-zinc-500">{opt.sub}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Service selector */}
            <fieldset>
              <legend className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                <span aria-hidden>✦</span>
                Service
              </legend>
              <div className="flex flex-col gap-2">
                {SERVICE_OPTIONS.map((opt) => (
                  <label
                    key={opt.key}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-all duration-150 ${
                      service === opt.key
                        ? 'border-accent-gold/50 bg-accent-gold/8 text-white'
                        : 'border-white/10 bg-surface text-zinc-300 hover:border-white/20 hover:bg-white/4'
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={opt.key}
                      checked={service === opt.key}
                      onChange={() => setService(opt.key)}
                      className="sr-only"
                    />
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all duration-150 ${
                        service === opt.key
                          ? 'border-accent-gold bg-accent-gold'
                          : 'border-zinc-600'
                      }`}
                      aria-hidden
                    >
                      {service === opt.key && (
                        <span className="h-1.5 w-1.5 rounded-full bg-black" />
                      )}
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold leading-snug">
                        {opt.label}
                      </span>
                      <span className="block text-xs text-zinc-500">{opt.duration}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Area selector */}
          <div className="mt-5">
            <label
              htmlFor="area-select"
              className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
            >
              Your Area (for pick-up / drop-off)
            </label>
            <div className="relative">
              <select
                id="area-select"
                value={area}
                onChange={(e) => setArea(e.target.value as ServiceArea)}
                className="w-full appearance-none rounded-xl border border-white/10 bg-surface px-4 py-3 pr-10 text-sm text-white focus:border-accent-gold/50 focus:outline-none focus:ring-2 focus:ring-accent-gold/20"
              >
                {SERVICE_AREAS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                aria-hidden
              />
            </div>
          </div>

          {/* Price output */}
          <div className="mt-6 rounded-xl border border-accent-gold/25 bg-accent-gold/6 p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent-gold/70">
              Estimated Price Range
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold text-white">
                {price.min}–{price.max}
              </span>
              <span className="text-lg font-semibold text-accent-gold">BHD</span>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              {serviceLabel} · {vehicleLabel} · Est. duration: {duration}
            </p>
            <p className="mt-2 text-xs text-zinc-500">
              Prices are indicative estimates. Final quote confirmed after inspecting
              your vehicle — send photos on WhatsApp for an accurate figure.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-accent-gold px-6 py-3.5 text-sm font-bold tracking-wide text-black shadow-lg shadow-accent-gold/20 transition-all duration-200 hover:bg-accent-gold-light hover:shadow-accent-gold/35"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Book This Package on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
