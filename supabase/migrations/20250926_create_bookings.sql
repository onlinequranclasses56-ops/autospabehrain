-- ============================================================
--  AutoSpa Bahrain W.L.L. — Bookings table
--  Run this once in: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- 1. Create table
CREATE TABLE IF NOT EXISTS public.bookings (
  id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at        TIMESTAMPTZ NOT NULL    DEFAULT now(),
  service_slug      TEXT        NOT NULL,
  service_name      TEXT        NOT NULL,
  vehicle_make      TEXT        NOT NULL,
  vehicle_model     TEXT        NOT NULL,
  vehicle_year      TEXT,
  vehicle_color     TEXT,
  preferred_date    TEXT        NOT NULL,
  preferred_time    TEXT        NOT NULL DEFAULT 'Flexible',
  customer_name     TEXT        NOT NULL,
  customer_whatsapp TEXT        NOT NULL,
  customer_notes    TEXT,
  status            TEXT        NOT NULL DEFAULT 'new'
    CHECK (status IN ('new','confirmed','in_progress','completed','cancelled'))
);

-- 2. Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- 3. Service-role key bypasses RLS automatically.
--    No anon INSERT policy — all writes go through the server action
--    which uses the service role key (safe, server-only).

-- 4. Indexes for the admin dashboard
CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON public.bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS bookings_status_idx     ON public.bookings (status);

-- 5. Verify
SELECT 'bookings table ready ✓' AS result;
