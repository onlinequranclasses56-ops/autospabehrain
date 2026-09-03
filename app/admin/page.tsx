import { createClient } from '@supabase/supabase-js'
import type { Metadata } from 'next'
import Logo from '@/components/Logo'
import AdminBookingsTable from '@/components/AdminBookingsTable'
import type { Booking } from '@/lib/supabase'

export const metadata: Metadata = { title: 'Admin — AutoSpa Bahrain' }
export const dynamic = 'force-dynamic'

async function getBookings(): Promise<Booking[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Admin fetch error:', error)
    return []
  }
  return data as Booking[]
}

export default async function AdminPage() {
  const bookings = await getBookings()

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-3xl">
        {/* Top logo */}
        <div className="mb-8 flex items-center justify-between">
          <Logo />
          <span className="rounded-full border border-accent-gold/20 bg-accent-gold/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-gold">
            Admin
          </span>
        </div>

        <AdminBookingsTable initialBookings={bookings} />
      </div>
    </div>
  )
}
