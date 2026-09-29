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

const META_TITLE = 'Car Detailing Bahrain | Ceramic Coating, PPF & Auto Detailing — AutoSpa'
const META_DESCRIPTION =
  'Best car detailing in Bahrain. 9H ceramic coating from BHD 150, PPF, window tinting & full showroom detail at AutoSpa Bahrain, Budaiya. Free collection from Manama, Riffa & Seef. Call +973 1759 5971.'

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  applicationName: BUSINESS.name,
  keywords: [
    'car detailing Bahrain',
    'ceramic coating Bahrain',
    'PPF Bahrain',
    'paint protection film Bahrain',
    'window tinting Bahrain',
    'car tinting Bahrain',
    'nano ceramic Bahrain',
    'car polishing Bahrain',
    'interior car detailing Bahrain',
    'auto detailing Bahrain',
    'car wash Bahrain',
    'paint correction Bahrain',
    'car detailing near me Bahrain',
    'Zymöl detailer Bahrain',
    'auto spa Bahrain',
    'car detailing Budaiya',
    'car detailing Manama',
    'car detailing Riffa',
    'car detailing Seef',
    'autospabahrain',
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
