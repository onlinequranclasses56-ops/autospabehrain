-- Allow anonymous users to INSERT bookings.
-- SELECT is still blocked (no SELECT policy) so visitors cannot read other bookings.
-- Service-role key continues to bypass RLS for the admin dashboard.
CREATE POLICY IF NOT EXISTS "public_insert_bookings"
  ON public.bookings
  FOR INSERT
  WITH CHECK (true);
