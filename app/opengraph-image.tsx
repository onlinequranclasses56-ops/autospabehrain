import { ImageResponse } from 'next/og'
import { BUSINESS } from '@/lib/constants'

export const runtime = 'edge'
export const alt = 'AutoSpa Bahrain — Ceramic Coating, PPF & Luxury Detailing in Budaiya'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0C0E',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Radial gold glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(212,175,55,0.22) 0%, transparent 70%)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '28px',
            padding: '8px 22px',
            border: '1px solid rgba(212,175,55,0.4)',
            borderRadius: '999px',
            background: 'rgba(212,175,55,0.08)',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#D4AF37',
            }}
          />
          <span
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: '#D4AF37',
              textTransform: 'uppercase',
            }}
          >
            Authorized Zymöl Detailer · Premium PPF Center
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '62px',
            fontWeight: 700,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.1,
            maxWidth: '900px',
            marginBottom: '20px',
          }}
        >
          Bahrain&apos;s Premier{' '}
          <span style={{ color: '#D4AF37' }}>Automotive Spa</span>
        </div>

        <div
          style={{
            fontSize: '22px',
            color: '#A1A1AA',
            textAlign: 'center',
            maxWidth: '720px',
            lineHeight: 1.5,
            marginBottom: '40px',
          }}
        >
          Ceramic Coating · PPF · Zymöl Detailing
          <br />
          Budaiya, Kingdom of Bahrain
        </div>

        {/* Footer bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '18px 48px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(19,21,24,0.9)',
          }}
        >
          <span style={{ fontSize: '16px', color: '#71717A' }}>
            {BUSINESS.address.formatted}
          </span>
          <span style={{ fontSize: '16px', fontWeight: 700, color: '#D4AF37' }}>
            {BUSINESS.phone.primaryDisplay}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
