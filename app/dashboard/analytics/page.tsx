"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts"

type Point = { label: string; value: number }

export default function AnalyticsPage() {
  const [dailySales, setDailySales] = useState<Point[]>([])
  const [productMix, setProductMix] = useState<Point[]>([])

  useEffect(() => {
    // Mock demo data
    setDailySales([
      { label: "Mon", value: 120 },
      { label: "Tue", value: 180 },
      { label: "Wed", value: 140 },
      { label: "Thu", value: 210 },
      { label: "Fri", value: 260 },
      { label: "Sat", value: 320 },
      { label: "Sun", value: 190 },
    ])
    setProductMix([
      { label: "Geek Bar", value: 45 },
      { label: "Lost Mary", value: 30 },
      { label: "Off-Stamp", value: 25 },
    ])
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-neutral-900 border border-pink-500/30 p-6 rounded-2xl">
          <h2 className="text-pink-400 font-semibold mb-4">Daily Sales</h2>
          <LineChart width={520} height={260} data={dailySales}>
            <CartesianGrid stroke="#333" />
            <XAxis dataKey="label" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#ec4899" strokeWidth={3} />
          </LineChart>
        </Card>

        <Card className="bg-neutral-900 border border-pink-500/30 p-6 rounded-2xl">
          <h2 className="text-pink-400 font-semibold mb-4">Product Mix</h2>
          <BarChart width={520} height={260} data={productMix}>
            <CartesianGrid stroke="#333" />
            <XAxis dataKey="label" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Bar dataKey="value" fill="#ec4899" />
          </BarChart>
        </Card>
      </div>
    </div>
  )
}
