"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Order = {
  id: string
  customer: string
  product: string
  total: number
  status: "pending" | "paid" | "shipped" | "delivered" | "canceled"
  createdAt: string
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [form, setForm] = useState({ customer: "", product: "", total: 0 })

  async function load() {
    const res = await fetch("/api/orders", { cache: "no-store" })
    const data = await res.json()
    setOrders(data.orders || [])
  }
  useEffect(() => { load() }, [])

  async function addOrder() {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form }),
    })
    await load()
    setForm({ customer: "", product: "", total: 0 })
  }

  async function updateStatus(id: string, status: Order["status"]) {
    await fetch("/api/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    })
    await load()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <Card className="bg-neutral-900 border border-pink-500/30 p-6 rounded-2xl mb-6">
        <h2 className="text-pink-400 font-semibold mb-4">Create Order (demo)</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <Input className="bg-black border-pink-500/40 text-white" placeholder="Customer" value={form.customer} onChange={(e)=>setForm({...form, customer:e.target.value})}/>
          <Input className="bg-black border-pink-500/40 text-white" placeholder="Product" value={form.product} onChange={(e)=>setForm({...form, product:e.target.value})}/>
          <Input type="number" className="bg-black border-pink-500/40 text-white" placeholder="Total $" value={form.total} onChange={(e)=>setForm({...form, total:Number(e.target.value)})}/>
        </div>
        <div className="mt-3">
          <Button className="bg-pink-600 hover:bg-pink-700" onClick={addOrder}>Add Order</Button>
        </div>
      </Card>

      <div className="space-y-4">
        {orders.map(o => (
          <Card key={o.id} className="bg-neutral-900 border border-pink-500/30 p-4 rounded-2xl flex items-center justify-between">
            <div>
              <div className="font-semibold">{o.customer} — <span className="text-pink-400">{o.product}</span></div>
              <div className="text-sm text-neutral-300">${o.total} • {new Date(o.createdAt).toLocaleString()}</div>
            </div>
            <div className="flex items-center gap-2">
              {(["pending","paid","shipped","delivered","canceled"] as const).map(s => (
                <Button key={s} variant="outline" className={`border-pink-500/40 ${o.status===s?"bg-pink-600 text-white":"bg-neutral-800 text-white"}`} onClick={()=>updateStatus(o.id, s)}>
                  {s}
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
