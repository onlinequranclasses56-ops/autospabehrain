import type { NextConfig } from 'next'
import path from 'path'

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
  outputFileTracingRoot: path.join(__dirname),
  images: {
    // Serve AVIF first (best compression), fall back to WebP
    formats: ['image/avif', 'image/webp'],
    // Viewport breakpoints Next.js uses to generate srcset variants
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Sizes used for fixed-dimension images (icons, thumbnails)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 30 days on the CDN/server
    minimumCacheTTL: 2592000,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        // Portfolio images — immutable content (hashed filenames in practice),
        // cache for 1 year on CDN, browsers revalidate after 30 days
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=31536000',
          },
        ],
      },
      {
        source: '/favicon.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        // Short TTL on .ico so browsers pick up regenerated versions quickly
        source: '/favicon.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
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
