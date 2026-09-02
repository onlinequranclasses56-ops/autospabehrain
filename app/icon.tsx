import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

/*
  32 × 32 branded favicon PNG — fallback for browsers that don't support SVG icons.
  Next.js auto-wires this as <link rel="icon"> with correct size/type attributes.
*/
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0B0C0E',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '0.75px solid rgba(212,175,55,0.5)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            width: 20,
            height: 18,
            background:
              'radial-gradient(ellipse at center, rgba(212,175,55,0.13) 0%, transparent 75%)',
            borderRadius: '50%',
          }}
        />
        {/* Geometric "A" lettermark */}
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none">
          <path
            d="M11 1 L1 22 M11 1 L21 22 M4.8 14.4 H17.2"
            stroke="#D4AF37"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  )
}
