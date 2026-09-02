import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

/*
  180 × 180 Apple touch icon.
  Next.js auto-wires this as <link rel="apple-touch-icon">.
  iOS crops to a rounded square automatically — no need to pre-round here.
*/
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0B0C0E',
          borderRadius: 36,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1.5px solid rgba(212,175,55,0.45)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            width: 120,
            height: 110,
            background:
              'radial-gradient(ellipse at center, rgba(212,175,55,0.14) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Geometric "A" — scaled for 180 × 180 canvas */}
        <svg width="100" height="110" viewBox="0 0 100 110" fill="none">
          <path
            d="M50 6 L4 102 M50 6 L96 102 M22 66 H78"
            stroke="#D4AF37"
            strokeWidth="8.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Decorative gold rule below the mark */}
        <div
          style={{
            marginTop: 10,
            width: 56,
            height: 1.5,
            background:
              'linear-gradient(90deg, transparent 0%, #D4AF37 40%, #D4AF37 60%, transparent 100%)',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
