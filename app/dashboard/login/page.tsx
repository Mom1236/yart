"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSearchParams, useRouter } from "next/navigation"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const params = useSearchParams()
  const router = useRouter()
  const next = params.get("next") || "/dashboard"

  async function submit() {
    setError(null)
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    const data = await res.json()
    if (data.ok) router.push(next)
    else setError("Incorrect password")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-neutral-900 p-8 rounded-2xl border border-pink-500/30 shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-pink-500 mb-4">Admin Login</h1>
        <Input type="password" placeholder="Admin Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 bg-black border-pink-500/40 text-white"/>
        {error && <div className="text-red-400 mb-2">{error}</div>}
        <Button className="w-full bg-pink-600 hover:bg-pink-700" onClick={submit}>Enter Dashboard</Button>
      </div>
    </div>
  )
}
