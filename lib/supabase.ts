export type BookingStatus = 'new' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'

export interface Booking {
  id: string
  created_at: string
  service_slug: string
  service_name: string
  vehicle_make: string
  vehicle_model: string
  vehicle_year?: string
  vehicle_color?: string
  preferred_date: string
  preferred_time: string
  customer_name: string
  customer_whatsapp: string
  customer_notes?: string
  status: BookingStatus
}

export type BookingInsert = Omit<Booking, 'id' | 'created_at' | 'status'>
