import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { password } = await req.json()
  const adminPassword = process.env.ADMIN_PASSWORD
  const ok = adminPassword && password === adminPassword

  const res = NextResponse.json({ ok })
  if (ok) {
    res.cookies.set("admin", "1", {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
  }
  return res
}
