import type { NextConfig } from 'next'

const securityHeaders = [
  // Prevent browsers from sniffing MIME types
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Clickjacking protection — our page cannot be iframed by third parties
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Legacy XSS filter (belt-and-braces for older browsers)
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  // Enable DNS prefetching for linked resources
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // HSTS — force HTTPS for 2 years (Vercel terminates TLS, still good practice)
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Limit referrer data sent to third parties
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Lock down browser features we don't use
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    return [
      {
        // Apply security headers to every route
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        // SVG favicon: short max-age + long stale-while-revalidate
        source: '/favicon.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        // Webmanifest: allow browsers to cache it for a day
        source: '/manifest.webmanifest',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
          { key: 'Content-Type', value: 'application/manifest+json' },
        ],
      },
    ]
  },
}

export default nextConfig
