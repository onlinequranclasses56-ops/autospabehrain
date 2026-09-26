'use server'

import { createClient } from '@supabase/supabase-js'
import type { BookingInsert } from '@/lib/supabase'

export interface BookingResult {
  success: boolean
  bookingId?: string
  error?: string
}

export async function submitBooking(data: BookingInsert): Promise<BookingResult> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    console.error('Booking: missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env var')
    return { success: false, error: 'Server configuration error — env vars missing' }
  }

  const supabase = createClient(url, key)

  const payload: BookingInsert = {
    ...data,
    preferred_time: data.preferred_time || 'Flexible',
  }

  const { data: row, error } = await supabase
    .from('bookings')
    .insert(payload)
    .select('id')
    .single()

  if (error) {
    console.error('[AutoSpa] Booking insert error:', JSON.stringify(error, null, 2))
    return { success: false, error: error.message }
  }

  return { success: true, bookingId: row?.id }
}
