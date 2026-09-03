import type { Metadata, Viewport } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import './globals.css'
import SchemaOrg from '@/components/SchemaOrg'
import { BUSINESS } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
})

const META_TITLE = 'AutoSpa Bahrain | Ceramic Coating, PPF & Luxury Detailing in Budaiya'
const META_DESCRIPTION =
  "Bahrain's premier automotive spa in Budaiya. Authorized Zymöl detailer & PPF specialist serving Saar, Seef, Riffa, Hamala & across Bahrain. Call +973 1759 5971 to book."

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    'ceramic coating Bahrain',
    'PPF Budaiya',
    'paint protection film Bahrain',
    'car detailing Bahrain',
    'Zymöl detailer Bahrain',
    'auto detailing Seef',
    'ceramic coating Saar',
    'car polish Riffa',
    'detailing Hamala',
    'PPF Saar Bahrain',
    'car spa Budaiya',
    'automotive detailing Manama',
  ],
  authors: [{ name: BUSINESS.legalName }],
  openGraph: {
    title: 'AutoSpa Bahrain | Premium Automotive Detailing',
    description: META_DESCRIPTION,
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    locale: 'en_BH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoSpa Bahrain | Premium Automotive Detailing',
    description: META_DESCRIPTION,
  },
  alternates: {
    canonical: BUSINESS.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  /*
    Priority: NEXT_PUBLIC_SITE_URL env var (set in Vercel dashboard for the custom domain)
    → VERCEL_URL (auto-injected by Vercel on every deploy, covers preview URLs)
    → BUSINESS.url (local dev / CI fallback)
  */
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : BUSINESS.url)
  ),
  /*
    Icon cascade (browser picks best match):
    1. SVG — modern Chrome, Firefox, Edge, Safari 14+ (adaptive dark/light via CSS media query)
    2. 32 × 32 PNG — from app/icon.tsx, auto-linked by Next.js (older browsers)
    3. Apple touch icon — from app/apple-icon.tsx, auto-linked by Next.js
  */
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/icon', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-icon', type: 'image/png', sizes: '180x180' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0C0E',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} scroll-smooth`}
    >
      <head>
        <SchemaOrg />
      </head>
      <body className="bg-background text-white antialiased">
        {children}
      </body>
    </html>
  )
}
