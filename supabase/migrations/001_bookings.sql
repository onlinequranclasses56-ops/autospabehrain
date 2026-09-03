-- AutoSpa Bahrain — bookings table
-- Run this in the Supabase SQL Editor: https://supabase.com/dashboard/project/ecazvkmoxbahigjafvhu/sql

create table if not exists bookings (
  id              uuid        default gen_random_uuid() primary key,
  created_at      timestamptz default now() not null,
  service_slug    text        not null,
  service_name    text        not null,
  vehicle_make    text        not null,
  vehicle_model   text        not null,
  vehicle_year    text,
  vehicle_color   text,
  preferred_date  date        not null,
  preferred_time  text        not null,
  customer_name   text        not null,
  customer_whatsapp text      not null,
  customer_notes  text,
  status          text        default 'new'
                              check (status in ('new','confirmed','in_progress','completed','cancelled'))
);

-- Enable Row Level Security
alter table bookings enable row level security;

-- Anyone can INSERT (public booking form — no login required)
create policy "public_insert" on bookings
  for insert to anon
  with check (true);

-- Only authenticated users (admin) can SELECT / UPDATE
create policy "admin_select" on bookings
  for select to authenticated
  using (true);

create policy "admin_update" on bookings
  for update to authenticated
  using (true);
