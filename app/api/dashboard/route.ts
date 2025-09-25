import { NextResponse } from "next/server"
import { readJson, writeJson } from "../../lib/storage"


type Stats = {
  sales: number
  orders: number
  revenue: number
  profit: number
}

const DEFAULT_STATS: Stats = {
  sales: 1250,
  orders: 87,
  revenue: 4250,
  profit: 1600,
}

export async function GET() {
  const data = await readJson<Stats>("dashboard.json", DEFAULT_STATS)
  return NextResponse.json(data)
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<Stats>
  const current = await readJson<Stats>("dashboard.json", DEFAULT_STATS)
  const updated = { ...current, ...body }
  await writeJson("dashboard.json", updated)
  return NextResponse.json(updated)
}
