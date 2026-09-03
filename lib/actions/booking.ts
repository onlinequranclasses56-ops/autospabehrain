'use server'

import { createClient } from '@supabase/supabase-js'
import type { BookingInsert } from '@/lib/supabase'

// Service role client — server only, bypasses RLS safely
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
)

export interface BookingResult {
  success: boolean
  bookingId?: string
  error?: string
}

export async function submitBooking(data: BookingInsert): Promise<BookingResult> {
  const { data: row, error } = await supabase
    .from('bookings')
    .insert(data)
    .select('id')
    .single()

  if (error) {
    console.error('Booking insert error:', error)
    return { success: false, error: error.message }
  }

  return { success: true, bookingId: row.id }
}
