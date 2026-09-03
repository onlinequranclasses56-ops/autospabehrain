import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { password } = await req.json()

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin_session', process.env.ADMIN_SESSION_TOKEN!, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 12, // 12 hours
    path: '/',
  })
  return res
}
