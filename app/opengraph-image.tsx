import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'
import { BUSINESS } from '@/lib/constants'

export const runtime = 'nodejs'
export const alt = 'AutoSpa Bahrain — Ceramic Coating, PPF & Luxury Detailing in Budaiya, Bahrain'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Satori (next/og renderer) requires JPEG for embedded images — convert from WebP
  const jpegBuffer = await sharp(
    readFileSync(
      join(process.cwd(), 'public', 'genesis-gv70-ceramic-coating-autospa-bahrain-budaiya.webp')
    )
  )
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 85 })
    .toBuffer()

  const heroImg = `data:image/jpeg;base64,${jpegBuffer.toString('base64')}`

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
          position: 'relative',
          fontFamily: 'Georgia, serif',
          overflow: 'hidden',
        }}
      >
        {/* Background car photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImg}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Dark gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(11,12,14,0.55) 0%, rgba(11,12,14,0.75) 50%, rgba(11,12,14,0.92) 100%)',
          }}
        />

        {/* Gold top line accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(to right, transparent, #D4AF37, transparent)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 60px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
              padding: '8px 22px',
              border: '1px solid rgba(212,175,55,0.5)',
              borderRadius: '999px',
              background: 'rgba(212,175,55,0.1)',
            }}
          >
            <div
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#D4AF37',
              }}
            />
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: '#D4AF37',
                textTransform: 'uppercase',
              }}
            >
              Authorized Zymöl Detailer · Premium PPF Center
            </span>
          </div>

          {/* Headline — Satori requires display:flex on every multi-child element */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'baseline',
              gap: '0 12px',
              fontSize: '60px',
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: '900px',
              marginBottom: '16px',
              textShadow: '0 2px 20px rgba(0,0,0,0.8)',
            }}
          >
            <span style={{ color: '#FFFFFF' }}>{"Bahrain's Premier"}</span>
            <span style={{ color: '#D4AF37' }}>Automotive Spa</span>
          </div>

          <div
            style={{
              fontSize: '21px',
              color: 'rgba(255,255,255,0.85)',
              textAlign: 'center',
              maxWidth: '700px',
              lineHeight: 1.5,
              textShadow: '0 1px 8px rgba(0,0,0,0.9)',
            }}
          >
            Ceramic Coating · PPF · Zymöl Detailing · Budaiya, Bahrain
          </div>
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
            padding: '16px 48px',
            background: 'rgba(11,12,14,0.88)',
            borderTop: '1px solid rgba(212,175,55,0.25)',
          }}
        >
          <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)' }}>
            {BUSINESS.address.formatted}
          </span>
          <span style={{ fontSize: '16px', fontWeight: 700, color: '#D4AF37' }}>
            {BUSINESS.phone.primaryDisplay}
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
