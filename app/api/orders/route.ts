import { NextResponse } from "next/server"
import { readJson, writeJson } from "../../lib/storage"

import { randomUUID } from "crypto"

type Order = {
  id: string
  customer: string
  product: string
  total: number
  status: "pending" | "paid" | "shipped" | "delivered" | "canceled"
  createdAt: string
}

type Store = { orders: Order[] }

const DEFAULT_STORE: Store = {
  orders: [
    { id: "o_" + randomUUID(), customer: "Alex R.", product: "Geek Bar Pulse X", total: 60, status: "paid", createdAt: new Date().toISOString() },
    { id: "o_" + randomUUID(), customer: "Maya C.", product: "Lost Mary MT35000", total: 50, status: "shipped", createdAt: new Date().toISOString() },
    { id: "o_" + randomUUID(), customer: "Chris B.", product: "Off-Stamp X Cube", total: 30, status: "pending", createdAt: new Date().toISOString() },
  ],
}

export async function GET() {
  const store = await readJson<Store>("orders.json", DEFAULT_STORE)
  return NextResponse.json(store)
}

export async function POST(req: Request) {
  const payload = await req.json()
  const store = await readJson<Store>("orders.json", DEFAULT_STORE)
  const order: Order = {
    id: "o_" + randomUUID(),
    customer: payload.customer || "Unknown",
    product: payload.product || "Unknown",
    total: Number(payload.total) || 0,
    status: (payload.status || "pending"),
    createdAt: new Date().toISOString(),
  }
  store.orders.unshift(order)
  await writeJson("orders.json", store)
  return NextResponse.json(order)
}

export async function PATCH(req: Request) {
  const { id, status } = await req.json()
  const store = await readJson<Store>("orders.json", DEFAULT_STORE)
  const idx = store.orders.findIndex(o => o.id == id)
  if (idx === -1) return NextResponse.json({ ok: false, error: "Order not found" }, { status: 404 })
  store.orders[idx].status = status
  await writeJson("orders.json", store)
  return NextResponse.json({ ok: true, order: store.orders[idx] })
}
