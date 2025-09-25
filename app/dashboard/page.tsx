"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Stats = { sales: number; orders: number; revenue: number; profit: number }

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState<Stats>({ sales: 0, orders: 0, revenue: 0, profit: 0 })

  async function load() {
    const res = await fetch("/api/dashboard", { cache: "no-store" })
    const data = await res.json()
    setStats(data)
    setForm(data)
  }

  useEffect(() => { load() }, [])

  async function save() {
    const res = await fetch("/api/dashboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    setStats(data)
    setEditing(false)
  }

  if (!stats) return <div className="text-white">Loading...</div>

  return (
    <div className="py-4">
      <h1 className="text-3xl font-bold mb-8">Overview <span className="text-pink-500">Stats</span></h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {([
          ["Total Sales", stats.sales],
          ["Orders", stats.orders],
          ["Revenue", `$${stats.revenue}`],
          ["Profit", `$${stats.profit}`],
        ] as const).map(([label, value]) => (
          <Card key={label} className="bg-neutral-900 border border-pink-500/30 p-6 text-center rounded-2xl shadow-lg">
            <h2 className="text-lg font-semibold text-pink-400 mb-2">{label}</h2>
            <p className="text-3xl font-bold">{value}</p>
          </Card>
        ))}
      </div>

      {editing ? (
        <div className="max-w-lg mx-auto space-y-4 bg-neutral-900 p-6 rounded-2xl border border-pink-500/30">
          {(["sales","orders","revenue","profit"] as const).map((k) => (
            <Input key={k} type="number" className="bg-black border-pink-500/40 text-white"
              value={form[k]} onChange={(e) => setForm({ ...form, [k]: Number(e.target.value) })}/>
          ))}
          <div className="flex gap-4">
            <Button className="flex-1 bg-pink-600 hover:bg-pink-700" onClick={save}>Save</Button>
            <Button className="flex-1 bg-neutral-800 border border-pink-500/40" onClick={() => setEditing(false)}>Cancel</Button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Button className="bg-pink-600 hover:bg-pink-700" onClick={() => setEditing(true)}>Edit Numbers</Button>
        </div>
      )}
    </div>
  )
}
