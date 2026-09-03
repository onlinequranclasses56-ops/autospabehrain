'use client'

import { useState, useTransition } from 'react'
import { ChevronRight, ChevronLeft, Check, Car, Calendar, User, MessageCircle, Clock, Loader2 } from 'lucide-react'
import { submitBooking } from '@/lib/actions/booking'
import { BUSINESS } from '@/lib/constants'

// ── Service catalogue (must match services-data slugs) ──────────────────────
const SERVICES = [
  { slug: 'ceramic-coating-bahrain',          label: '9H Ceramic Coating',            from: 'BHD 150', duration: '1–2 days',  badge: 'Most Popular' },
  { slug: 'paint-protection-film-bahrain',    label: 'Paint Protection Film (PPF)',    from: 'BHD 250', duration: '2–3 days',  badge: '' },
  { slug: 'zymol-luxury-detailing-bahrain',   label: 'Zymöl Luxury Detailing',         from: 'BHD 85',  duration: '4–6 hrs',   badge: 'Premium' },
  { slug: 'interior-detailing-bahrain',       label: 'Interior Steam & Leather Care',  from: 'BHD 35',  duration: '2–3 hrs',   badge: '' },
  { slug: 'full-showroom-detail-bahrain',     label: 'Full Showroom Detail',           from: 'BHD 120', duration: '6–8 hrs',   badge: '' },
  { slug: 'paint-correction-bahrain',         label: 'Paint Correction',               from: 'BHD 80',  duration: '4–8 hrs',   badge: '' },
] as const

const TIME_SLOTS = [
  'Morning  (9 am – 12 pm)',
  'Afternoon  (12 pm – 5 pm)',
  'Evening  (5 pm – 8 pm)',
  'Flexible — any time',
] as const

type ServiceSlug = (typeof SERVICES)[number]['slug']

interface FormData {
  serviceSlug: ServiceSlug | ''
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  vehicleColor: string
  preferredDate: string
  preferredTime: string
  customerName: string
  customerWhatsapp: string
  customerNotes: string
}

const EMPTY: FormData = {
  serviceSlug: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleYear: '',
  vehicleColor: '',
  preferredDate: '',
  preferredTime: '',
  customerName: '',
  customerWhatsapp: '',
  customerNotes: '',
}

const STEPS = ['Service', 'Vehicle', 'Schedule', 'Contact'] as const
type Step = 0 | 1 | 2 | 3

// ── Helpers ─────────────────────────────────────────────────────────────────
function todayString() {
  return new Date().toISOString().split('T')[0]
}

function buildWhatsAppUrl(data: FormData, serviceName: string) {
  const msg =
    `Hi AutoSpa Bahrain! I just submitted a booking request online.\n\n` +
    `*Service:* ${serviceName}\n` +
    `*Vehicle:* ${data.vehicleYear} ${data.vehicleMake} ${data.vehicleModel}${data.vehicleColor ? ' (' + data.vehicleColor + ')' : ''}\n` +
    `*Preferred date:* ${data.preferredDate}\n` +
    `*Time:* ${data.preferredTime}\n` +
    `*Name:* ${data.customerName}\n` +
    (data.customerNotes ? `*Notes:* ${data.customerNotes}\n` : '') +
    `\nPlease confirm my booking. Thank you!`
  return `${BUSINESS.whatsapp.baseUrl}?text=${encodeURIComponent(msg)}`
}

// ── Sub-components ───────────────────────────────────────────────────────────
function StepIndicator({ current }: { current: Step }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-0">
      {STEPS.map((label, i) => {
        const done = i < current
        const active = i === current
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-300 ${
                  done
                    ? 'border-accent-gold bg-accent-gold text-black'
                    : active
                    ? 'border-accent-gold bg-transparent text-accent-gold'
                    : 'border-white/20 bg-transparent text-zinc-600'
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span className={`text-[10px] font-medium ${active ? 'text-accent-gold' : done ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`mb-4 h-px w-10 sm:w-16 transition-colors duration-300 ${i < current ? 'bg-accent-gold' : 'bg-white/10'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400">{children}</label>
}

function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-accent-gold/60 focus:ring-1 focus:ring-accent-gold/30"
    />
  )
}

function Textarea({ ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={3}
      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-accent-gold/60 focus:ring-1 focus:ring-accent-gold/30"
    />
  )
}

// ── Steps ────────────────────────────────────────────────────────────────────
function Step1Service({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {SERVICES.map((s) => (
        <button
          key={s.slug}
          type="button"
          onClick={() => set('serviceSlug', s.slug)}
          className={`relative flex flex-col gap-1 rounded-xl border p-4 text-left transition-all duration-150 ${
            data.serviceSlug === s.slug
              ? 'border-accent-gold bg-accent-gold/8 ring-1 ring-accent-gold/30'
              : 'border-white/10 bg-white/3 hover:border-white/20 hover:bg-white/5'
          }`}
        >
          {s.badge && (
            <span className="absolute right-3 top-3 rounded-full bg-accent-gold px-2 py-0.5 text-[10px] font-bold text-black">
              {s.badge}
            </span>
          )}
          <span className="pr-16 text-sm font-semibold text-white">{s.label}</span>
          <span className="text-xs text-accent-gold">From {s.from}</span>
          <span className="flex items-center gap-1 text-xs text-zinc-500">
            <Clock className="h-3 w-3" /> {s.duration}
          </span>
          {data.serviceSlug === s.slug && (
            <Check className="absolute bottom-3 right-3 h-4 w-4 text-accent-gold" />
          )}
        </button>
      ))}
    </div>
  )
}

function Step2Vehicle({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <FieldLabel>Make *</FieldLabel>
        <Input placeholder="e.g. Toyota" value={data.vehicleMake} onChange={(e) => set('vehicleMake', e.target.value)} required />
      </div>
      <div>
        <FieldLabel>Model *</FieldLabel>
        <Input placeholder="e.g. Land Cruiser" value={data.vehicleModel} onChange={(e) => set('vehicleModel', e.target.value)} required />
      </div>
      <div>
        <FieldLabel>Year</FieldLabel>
        <Input placeholder="e.g. 2023" value={data.vehicleYear} onChange={(e) => set('vehicleYear', e.target.value)} maxLength={4} />
      </div>
      <div>
        <FieldLabel>Colour</FieldLabel>
        <Input placeholder="e.g. Pearl White" value={data.vehicleColor} onChange={(e) => set('vehicleColor', e.target.value)} />
      </div>
    </div>
  )
}

function Step3Schedule({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <FieldLabel>Preferred Date *</FieldLabel>
        <Input type="date" min={todayString()} value={data.preferredDate} onChange={(e) => set('preferredDate', e.target.value)} required />
      </div>
      <div>
        <FieldLabel>Preferred Time *</FieldLabel>
        <div className="grid gap-2 sm:grid-cols-2">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => set('preferredTime', slot)}
              className={`rounded-xl border px-4 py-3 text-left text-sm transition-all duration-150 ${
                data.preferredTime === slot
                  ? 'border-accent-gold bg-accent-gold/8 text-white ring-1 ring-accent-gold/30'
                  : 'border-white/10 bg-white/3 text-zinc-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
      <p className="text-xs text-zinc-600">
        We will confirm your exact appointment time via WhatsApp within 1 hour of receiving your booking.
      </p>
    </div>
  )
}

function Step4Contact({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <FieldLabel>Your Name *</FieldLabel>
        <Input placeholder="Full name" value={data.customerName} onChange={(e) => set('customerName', e.target.value)} required />
      </div>
      <div>
        <FieldLabel>WhatsApp Number *</FieldLabel>
        <Input
          placeholder="+973 3XXX XXXX"
          type="tel"
          value={data.customerWhatsapp}
          onChange={(e) => set('customerWhatsapp', e.target.value)}
          required
        />
      </div>
      <div>
        <FieldLabel>Additional Notes</FieldLabel>
        <Textarea
          placeholder="Anything we should know? (e.g. paint condition, specific concerns, how you heard about us)"
          value={data.customerNotes}
          onChange={(e) => set('customerNotes', e.target.value)}
        />
      </div>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
export default function BookingForm({ defaultSlug = '' }: { defaultSlug?: string }) {
  const [step, setStep] = useState<Step>(0)
  const [data, setData] = useState<FormData>({ ...EMPTY, serviceSlug: defaultSlug as ServiceSlug | '' })
  const [submitted, setSubmitted] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState('')
  const [isPending, startTransition] = useTransition()
  const [serverError, setServerError] = useState('')

  const set = (key: keyof FormData, value: string) => setData((d) => ({ ...d, [key]: value }))

  const canProceed = () => {
    if (step === 0) return !!data.serviceSlug
    if (step === 1) return !!(data.vehicleMake && data.vehicleModel)
    if (step === 2) return !!(data.preferredDate && data.preferredTime)
    if (step === 3) return !!(data.customerName && data.customerWhatsapp)
    return false
  }

  const handleSubmit = () => {
    const service = SERVICES.find((s) => s.slug === data.serviceSlug)!
    const url = buildWhatsAppUrl(data, service.label)
    setWhatsappUrl(url)

    startTransition(async () => {
      const result = await submitBooking({
        service_slug: data.serviceSlug as string,
        service_name: service.label,
        vehicle_make: data.vehicleMake,
        vehicle_model: data.vehicleModel,
        vehicle_year: data.vehicleYear || undefined,
        vehicle_color: data.vehicleColor || undefined,
        preferred_date: data.preferredDate,
        preferred_time: data.preferredTime,
        customer_name: data.customerName,
        customer_whatsapp: data.customerWhatsapp,
        customer_notes: data.customerNotes || undefined,
      })

      if (result.success) {
        setSubmitted(true)
      } else {
        // Still show success to user — booking confirmed via WhatsApp regardless
        setServerError(result.error ?? '')
        setSubmitted(true)
      }
    })
  }

  // ── Success state ──────────────────────────────────────────────────────────
  if (submitted) {
    const service = SERVICES.find((s) => s.slug === data.serviceSlug)!
    return (
      <div className="flex flex-col items-center gap-6 py-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-gold">
          <Check className="h-8 w-8 text-black" strokeWidth={3} />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-white">Booking Received!</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Thanks, {data.customerName.split(' ')[0]}. We have your {service.label} request for{' '}
            <span className="text-white">{data.vehicleYear} {data.vehicleMake} {data.vehicleModel}</span>{' '}
            on <span className="text-white">{data.preferredDate}</span>.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 rounded-xl bg-accent-gold px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-accent-gold/20 transition hover:bg-accent-gold-light"
        >
          <MessageCircle className="h-4 w-4" />
          Confirm on WhatsApp
        </a>
        <p className="text-xs text-zinc-600">
          Tap the button to send your booking details on WhatsApp — we will confirm within 1 hour during business hours.
        </p>
      </div>
    )
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <div>
      <StepIndicator current={step} />

      <div className="min-h-[280px]">
        {step === 0 && <Step1Service data={data} set={set} />}
        {step === 1 && <Step2Vehicle data={data} set={set} />}
        {step === 2 && <Step3Schedule data={data} set={set} />}
        {step === 3 && <Step4Contact data={data} set={set} />}
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => (s - 1) as Step)}
            className="flex items-center gap-1.5 rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-400 transition hover:border-white/20 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <button
            type="button"
            disabled={!canProceed()}
            onClick={() => setStep((s) => (s + 1) as Step)}
            className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-3 text-sm font-bold text-black transition hover:bg-accent-gold-light disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            disabled={!canProceed() || isPending}
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-3 text-sm font-bold text-black transition hover:bg-accent-gold-light disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isPending ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
            ) : (
              <><Check className="h-4 w-4" /> Confirm Booking</>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
