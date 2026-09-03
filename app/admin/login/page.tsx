'use client'

import { useState } from 'react'
import { Lock } from 'lucide-react'
import Logo from '@/components/Logo'

export default function AdminLoginPage() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      window.location.href = '/admin'
    } else {
      setError('Wrong password. Try again.')
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <div className="rounded-2xl border border-white/8 bg-surface p-8">
          <div className="mb-6 flex flex-col items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gold/10">
              <Lock className="h-5 w-5 text-accent-gold" />
            </div>
            <h1 className="font-display text-lg font-bold text-white">Admin Access</h1>
            <p className="text-xs text-zinc-500">AutoSpa Bahrain — Bookings Dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              name="password"
              placeholder="Enter admin password"
              autoFocus
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-accent-gold/60 focus:ring-1 focus:ring-accent-gold/30"
            />

            {error && <p className="text-xs text-red-400">{error}</p>}

            <button
              type="submit"
              className="rounded-xl bg-accent-gold py-3 text-sm font-bold text-black transition hover:bg-accent-gold-light"
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
