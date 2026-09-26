'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Check, MessageCircle, Loader2, AlertCircle } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

const SERVICES = [
  { slug: 'ceramic-coating-bahrain',        label: '9H Ceramic Coating',           from: 'BHD 150' },
  { slug: 'paint-protection-film-bahrain',  label: 'Paint Protection Film (PPF)',   from: 'BHD 250' },
  { slug: 'window-tinting-bahrain',         label: 'Window Tinting',               from: 'BHD 60'  },
  { slug: 'full-showroom-detail-bahrain',   label: 'Full Showroom Detail',          from: 'BHD 120' },
  { slug: 'zymol-luxury-detailing-bahrain', label: 'Zymöl Luxury Detailing',        from: 'BHD 85'  },
  { slug: 'interior-detailing-bahrain',     label: 'Interior Steam & Leather Care', from: 'BHD 35'  },
  { slug: 'paint-correction-bahrain',       label: 'Paint Correction',              from: 'BHD 80'  },
  { slug: 'vinyl-wrapping-bahrain',         label: 'Vinyl Wrapping',               from: 'BHD 450' },
  { slug: 'headlight-restoration-bahrain',  label: 'Headlight Restoration',        from: 'BHD 25'  },
  { slug: 'professional-car-wash-bahrain',  label: 'Professional Car Wash',        from: 'BHD 15'  },
] as const

type ServiceSlug = (typeof SERVICES)[number]['slug']

interface Fields {
  serviceSlug: ServiceSlug | ''
  vehicleMake: string
  vehicleModel: string
  preferredDate: string
  customerName: string
  customerWhatsapp: string
  customerNotes: string
}

const EMPTY: Fields = {
  serviceSlug: '',
  vehicleMake: '',
  vehicleModel: '',
  preferredDate: '',
  customerName: '',
  customerWhatsapp: '',
  customerNotes: '',
}

function todayString() {
  return new Date().toISOString().split('T')[0]
}

function buildWhatsAppMsg(f: Fields, serviceName: string) {
  return (
    `Hi AutoSpa Bahrain! I just submitted a booking request.\n\n` +
    `*Service:* ${serviceName}\n` +
    `*Vehicle:* ${f.vehicleMake} ${f.vehicleModel}\n` +
    `*Date:* ${f.preferredDate}\n` +
    `*Name:* ${f.customerName}\n` +
    `*My WhatsApp:* ${f.customerWhatsapp}\n` +
    (f.customerNotes ? `*Notes:* ${f.customerNotes}\n` : '') +
    `\nPlease confirm my booking. Thank you!`
  )
}

export default function BookingForm({ defaultSlug = '' }: { defaultSlug?: string }) {
  const [f, setF]          = useState<Fields>({ ...EMPTY, serviceSlug: defaultSlug as ServiceSlug | '' })
  const [submitted, setSub] = useState(false)
  const [waUrl, setWaUrl]  = useState('')
  const [loading, setLoad] = useState(false)
  const [error, setError]  = useState('')

  const set = (k: keyof Fields, v: string) => setF((prev) => ({ ...prev, [k]: v }))

  const isValid =
    !!f.serviceSlug &&
    f.vehicleMake.trim().length > 0 &&
    f.vehicleModel.trim().length > 0 &&
    !!f.preferredDate &&
    f.customerName.trim().length > 0 &&
    f.customerWhatsapp.trim().length > 6

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid || loading) return

    const service = SERVICES.find((s) => s.slug === f.serviceSlug)!
    const msg     = buildWhatsAppMsg(f, service.label)
    const wa      = `${BUSINESS.whatsapp.baseUrl}?text=${encodeURIComponent(msg)}`
    setWaUrl(wa)
    setError('')
    setLoad(true)

    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )

      const { error: dbErr } = await supabase.from('bookings').insert({
        service_slug:      f.serviceSlug,
        service_name:      service.label,
        vehicle_make:      f.vehicleMake.trim(),
        vehicle_model:     f.vehicleModel.trim(),
        preferred_date:    f.preferredDate,
        preferred_time:    'Flexible',
        customer_name:     f.customerName.trim(),
        customer_whatsapp: f.customerWhatsapp.trim(),
        customer_notes:    f.customerNotes.trim() || undefined,
      })

      if (dbErr) {
        console.error('[AutoSpa] booking insert:', dbErr.message)
        setError(dbErr.message)
      }
    } catch (err) {
      const msg2 = err instanceof Error ? err.message : 'Network error'
      console.error('[AutoSpa] booking error:', msg2)
      setError(msg2)
    } finally {
      setLoad(false)
      setSub(true)
    }
  }

  /* ── Success screen ────────────────────────────────────────────── */
  if (submitted) {
    const service = SERVICES.find((s) => s.slug === f.serviceSlug)!
    return (
      <div className="flex flex-col items-center gap-5 py-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-gold">
          <Check className="h-8 w-8 text-black" strokeWidth={3} />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-white">Booking Received!</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Thanks, {f.customerName.split(' ')[0]}. Your{' '}
            <span className="text-white">{service.label}</span> request is logged.
            Tap below to send us the details on WhatsApp — we confirm within 1 hour.
          </p>
        </div>
        {error && (
          <div className="w-full rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-left">
            <div className="mb-1 flex items-center gap-2 font-semibold text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              Booking not saved to system
            </div>
            <p className="text-xs text-red-300/80">
              {error}. Your WhatsApp message below still works — please send it so we can confirm manually.
            </p>
          </div>
        )}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 rounded-xl bg-accent-gold px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-accent-gold/20 transition hover:bg-accent-gold-light"
        >
          <MessageCircle className="h-4 w-4" />
          Confirm on WhatsApp
        </a>
        <p className="text-xs text-zinc-600">
          WhatsApp: {BUSINESS.phone.whatsappDisplay} · {BUSINESS.openingHoursDisplay}
        </p>
      </div>
    )
  }

  /* ── Form ──────────────────────────────────────────────────────── */
  const labelCls = 'mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400'
  const inputCls = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-accent-gold/60 focus:ring-1 focus:ring-accent-gold/30'

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelCls}>Service *</label>
        <select
          id="service"
          required
          value={f.serviceSlug}
          onChange={(e) => set('serviceSlug', e.target.value)}
          className={`${inputCls} cursor-pointer`}
        >
          <option value="" disabled>Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.label} — from {s.from}
            </option>
          ))}
        </select>
      </div>

      {/* Vehicle */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="vmake" className={labelCls}>Vehicle Make *</label>
          <input
            id="vmake"
            required
            placeholder="e.g. Toyota"
            value={f.vehicleMake}
            onChange={(e) => set('vehicleMake', e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="vmodel" className={labelCls}>Vehicle Model *</label>
          <input
            id="vmodel"
            required
            placeholder="e.g. Land Cruiser 300"
            value={f.vehicleModel}
            onChange={(e) => set('vehicleModel', e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      {/* Date */}
      <div>
        <label htmlFor="date" className={labelCls}>Preferred Date *</label>
        <input
          id="date"
          type="date"
          required
          min={todayString()}
          value={f.preferredDate}
          onChange={(e) => set('preferredDate', e.target.value)}
          className={inputCls}
        />
      </div>

      {/* Contact */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Your Name *</label>
          <input
            id="name"
            required
            placeholder="Full name"
            value={f.customerName}
            onChange={(e) => set('customerName', e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="wa" className={labelCls}>WhatsApp Number *</label>
          <input
            id="wa"
            type="tel"
            required
            placeholder="+973 3XXX XXXX"
            value={f.customerWhatsapp}
            onChange={(e) => set('customerWhatsapp', e.target.value)}
            className={inputCls}
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className={labelCls}>Additional Notes <span className="normal-case text-zinc-600">(optional)</span></label>
        <textarea
          id="notes"
          rows={2}
          placeholder="Any specific concerns, paint condition, area for collection…"
          value={f.customerNotes}
          onChange={(e) => set('customerNotes', e.target.value)}
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isValid || loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-gold py-3.5 text-sm font-bold text-black shadow-lg shadow-accent-gold/15 transition hover:bg-accent-gold-light disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
        ) : (
          <><MessageCircle className="h-4 w-4" /> Confirm Booking via WhatsApp</>
        )}
      </button>

      <p className="text-center text-xs text-zinc-600">
        No payment now — we confirm within 1 hour via WhatsApp ·{' '}
        {BUSINESS.openingHoursDisplay}
      </p>
    </form>
  )
}
