'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Copy, Trash2, Check, LogOut, RefreshCw, MessageCircle } from 'lucide-react'
import type { Booking } from '@/lib/supabase'
import { BUSINESS } from '@/lib/constants'

const STATUS_STYLES: Record<string, string> = {
  new:         'bg-blue-500/15 text-blue-400 border-blue-500/20',
  confirmed:   'bg-amber-500/15 text-amber-400 border-amber-500/20',
  in_progress: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
  completed:   'bg-green-500/15 text-green-400 border-green-500/20',
  cancelled:   'bg-red-500/15 text-red-400 border-red-500/20',
}

const STATUS_OPTIONS = ['new', 'confirmed', 'in_progress', 'completed', 'cancelled'] as const

function formatBookingText(b: Booking) {
  return [
    `Service: ${b.service_name}`,
    `Vehicle: ${[b.vehicle_year, b.vehicle_make, b.vehicle_model, b.vehicle_color].filter(Boolean).join(' ')}`,
    `Date: ${b.preferred_date}  |  Time: ${b.preferred_time}`,
    `Name: ${b.customer_name}`,
    `WhatsApp: ${b.customer_whatsapp}`,
    b.customer_notes ? `Notes: ${b.customer_notes}` : '',
    `Submitted: ${new Date(b.created_at).toLocaleString('en-BH', { timeZone: 'Asia/Bahrain' })}`,
    `Status: ${b.status}`,
  ].filter(Boolean).join('\n')
}

function BookingCard({ booking, onDeleted }: { booking: Booking; onDeleted: (id: string) => void }) {
  const [copied, setCopied] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [status, setStatus] = useState(booking.status)
  const [isPending, startTransition] = useTransition()

  const copy = async () => {
    await navigator.clipboard.writeText(formatBookingText({ ...booking, status }))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const deleteBooking = () => {
    startTransition(async () => {
      await fetch(`/api/admin/bookings/${booking.id}`, { method: 'DELETE' })
      onDeleted(booking.id)
    })
  }

  const updateStatus = (newStatus: string) => {
    setStatus(newStatus as Booking['status'])
    startTransition(async () => {
      await fetch(`/api/admin/bookings/${booking.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
    })
  }

  const waUrl = `https://wa.me/${booking.customer_whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${booking.customer_name.split(' ')[0]}! Your ${booking.service_name} booking for ${booking.preferred_date} is confirmed. See you at AutoSpa Bahrain, Budaiya!`)}`

  return (
    <div className={`rounded-xl border bg-white/3 p-4 transition-opacity ${isPending ? 'opacity-50' : ''}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        {/* Left: main info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-semibold text-white text-sm">{booking.customer_name}</span>
            <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${STATUS_STYLES[status] ?? STATUS_STYLES.new}`}>
              {status.replace('_', ' ')}
            </span>
            <span className="text-xs text-zinc-600">
              {new Date(booking.created_at).toLocaleDateString('en-BH', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Bahrain' })}
            </span>
          </div>

          <p className="text-xs text-accent-gold font-medium">{booking.service_name}</p>
          <p className="text-xs text-zinc-300 mt-0.5">
            {[booking.vehicle_year, booking.vehicle_make, booking.vehicle_model, booking.vehicle_color].filter(Boolean).join(' ')}
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            <span className="text-zinc-500">Date:</span> {booking.preferred_date} &nbsp;·&nbsp;
            <span className="text-zinc-500">Time:</span> {booking.preferred_time}
          </p>
          <a
            href={`tel:${booking.customer_whatsapp}`}
            className="text-xs text-zinc-400 hover:text-white mt-0.5 inline-block"
          >
            {booking.customer_whatsapp}
          </a>
          {booking.customer_notes && (
            <p className="mt-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs text-zinc-400 italic">
              &ldquo;{booking.customer_notes}&rdquo;
            </p>
          )}
        </div>

        {/* Right: actions */}
        <div className="flex flex-col gap-2 shrink-0">
          {/* Status dropdown */}
          <select
            value={status}
            onChange={(e) => updateStatus(e.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-zinc-300 outline-none focus:border-accent-gold/50"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s} className="bg-zinc-900">
                {s.replace('_', ' ')}
              </option>
            ))}
          </select>

          <div className="flex gap-2">
            {/* WhatsApp quick reply */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Reply on WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-green-400 transition hover:bg-green-500/10 hover:border-green-500/20"
            >
              <MessageCircle className="h-3.5 w-3.5" />
            </a>

            {/* Copy */}
            <button
              onClick={copy}
              title="Copy booking details"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition hover:bg-white/10 hover:text-white"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
            </button>

            {/* Delete */}
            {confirmDelete ? (
              <button
                onClick={deleteBooking}
                title="Confirm delete"
                className="flex h-8 items-center gap-1 rounded-lg border border-red-500/40 bg-red-500/10 px-2 text-xs font-bold text-red-400 transition hover:bg-red-500/20"
              >
                Sure?
              </button>
            ) : (
              <button
                onClick={() => { setConfirmDelete(true); setTimeout(() => setConfirmDelete(false), 3000) }}
                title="Delete booking"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AdminBookingsTable({ initialBookings }: { initialBookings: Booking[] }) {
  const [bookings, setBookings] = useState(initialBookings)
  const [filter, setFilter] = useState<string>('all')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const onDeleted = (id: string) => setBookings((b) => b.filter((x) => x.id !== id))

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const refresh = () => startTransition(() => { router.refresh() })

  const filtered = filter === 'all' ? bookings : bookings.filter((b) => b.status === filter)
  const counts = {
    all: bookings.length,
    new: bookings.filter((b) => b.status === 'new').length,
    confirmed: bookings.filter((b) => b.status === 'confirmed').length,
    completed: bookings.filter((b) => b.status === 'completed').length,
  }

  return (
    <div>
      {/* Header bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-white">Bookings Dashboard</h1>
          <p className="text-xs text-zinc-500">{bookings.length} total enquiries</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={refresh}
            className={`flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-400 transition hover:text-white ${isPending ? 'opacity-50' : ''}`}
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isPending ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-400 transition hover:text-red-400"
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </button>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="mb-4 flex flex-wrap gap-2">
        {(['all', 'new', 'confirmed', 'completed'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              filter === f
                ? 'border-accent-gold bg-accent-gold/10 text-accent-gold'
                : 'border-white/10 text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)} ({counts[f] ?? 0})
          </button>
        ))}
      </div>

      {/* Booking cards */}
      {filtered.length === 0 ? (
        <div className="flex h-32 items-center justify-center rounded-xl border border-white/8 text-sm text-zinc-600">
          No bookings {filter !== 'all' ? `with status "${filter}"` : 'yet'}.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((b) => (
            <BookingCard key={b.id} booking={b} onDeleted={onDeleted} />
          ))}
        </div>
      )}
    </div>
  )
}
