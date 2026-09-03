import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )
}

async function isAuthed() {
  const store = await cookies()
  return store.get('admin_session')?.value === process.env.ADMIN_SESSION_TOKEN
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthed())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const { error } = await adminClient().from('bookings').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthed())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const body = await req.json()
  const { error } = await adminClient().from('bookings').update({ status: body.status }).eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
