/**
 * Test Supabase connection and bookings table.
 * Run: node scripts/test-db.mjs
 */
import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))

// Load .env.local manually (no dotenv dependency needed)
function loadEnv() {
  try {
    const raw = readFileSync(resolve(__dir, '../.env.local'), 'utf8')
    for (const line of raw.split('\n')) {
      const [k, ...rest] = line.split('=')
      if (k && rest.length) process.env[k.trim()] = rest.join('=').trim()
    }
  } catch {
    // env vars may already be set (CI / Vercel)
  }
}

loadEnv()

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !key) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

console.log(`\n🔍  Testing connection to: ${url}\n`)

const supabase = createClient(url, key)

// 1. Check table exists
const { data: tables, error: tErr } = await supabase
  .from('bookings')
  .select('id')
  .limit(1)

if (tErr) {
  console.error('❌  bookings table error:', tErr.message)
  console.error('\n    → Run supabase/migrations/20250926_create_bookings.sql in the Supabase SQL Editor.\n')
  process.exit(1)
}

console.log('✓  bookings table exists and is accessible')

// 2. Insert a test row
const { data: inserted, error: iErr } = await supabase
  .from('bookings')
  .insert({
    service_slug:      'ceramic-coating-bahrain',
    service_name:      'TEST BOOKING — DELETE ME',
    vehicle_make:      'Test',
    vehicle_model:     'Car',
    preferred_date:    '2099-01-01',
    preferred_time:    'Flexible',
    customer_name:     'DB Test',
    customer_whatsapp: '+97300000000',
  })
  .select('id')
  .single()

if (iErr) {
  console.error('❌  INSERT failed:', iErr.message)
  process.exit(1)
}

console.log(`✓  INSERT succeeded — test row id: ${inserted.id}`)

// 3. Clean up test row
await supabase.from('bookings').delete().eq('id', inserted.id)
console.log('✓  Test row deleted')

console.log('\n✅  Supabase is connected and bookings table is working.\n')
