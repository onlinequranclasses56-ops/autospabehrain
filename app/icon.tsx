import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'

export const runtime = 'nodejs'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const jpegBuf = await sharp(
    readFileSync(join(process.cwd(), 'public', 'logo.webp'))
  )
    .resize(32, 32, { fit: 'cover', kernel: 'lanczos3', position: 'centre' })
    .jpeg({ quality: 90 })
    .toBuffer()

  const src = `data:image/jpeg;base64,${jpegBuf.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={32} height={32} style={{ objectFit: 'cover' }} />
      </div>
    ),
    { ...size },
  )
}
