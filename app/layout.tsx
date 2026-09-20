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
  applicationName: BUSINESS.name,
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
    'car detailing Budaiya',
    'ceramic coating Budaiya',
    'auto spa Bahrain',
    'paint correction Bahrain',
    'interior detailing Bahrain',
    'car wrap Bahrain',
    'autospabahrain',
    'autospabahrainwll',
  ],
  authors: [{ name: BUSINESS.legalName, url: BUSINESS.url }],
  creator: BUSINESS.legalName,
  publisher: BUSINESS.legalName,
  category: 'automotive',
  openGraph: {
    title: 'AutoSpa Bahrain | Premium Automotive Detailing',
    description: META_DESCRIPTION,
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    locale: 'en_BH',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'AutoSpa Bahrain — Ceramic Coating, PPF & Luxury Detailing in Budaiya, Bahrain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoSpa Bahrain | Premium Automotive Detailing',
    description: META_DESCRIPTION,
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: BUSINESS.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'iKDkg5Vj_oMknljKxhbxDCsDynH5cLqMJKZk2bP51FE',
    other: {
      'indexnow-verification': 'a9f3c2e8b5d71650e2c4f8a3b7d9e1c4',
    },
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : BUSINESS.url)
  ),
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
