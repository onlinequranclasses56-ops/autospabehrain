import type { MetadataRoute } from 'next'
import { BUSINESS } from '@/lib/constants'

/*
  Web App Manifest served at /manifest.webmanifest by Next.js.
  Supersedes public/site.webmanifest which had empty name + wrong colors.

  Icon strategy:
  - SVG ("sizes: any") satisfies Chrome 92+ PWA install criteria and scales
    to any resolution without quality loss.
  - Apple icon (180 × 180 PNG) provides the fallback for older Android WebViews.
*/
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.name,
    short_name: 'AutoSpa BH',
    description: BUSINESS.description,
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#0B0C0E',
    theme_color: '#D4AF37',
    categories: ['automotive', 'business'],
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
