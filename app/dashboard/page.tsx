"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DashboardPage() {
  // Example state data
  const [sales, setSales] = useState(1250)
  const [orders, setOrders] = useState(87)
  const [revenue, setRevenue] = useState(4250)
  const [profit, setProfit] = useState(1600)

  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    sales,
    orders,
    revenue,
    profit,
  })

  const handleSave = () => {
    setSales(formData.sales)
    setOrders(formData.orders)
    setRevenue(formData.revenue)
    setProfit(formData.profit)
    setEditing(false)
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Traplanta <span className="text-pink-500">Dashboard</span>
      </h1>

      {/* Stat cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <Card className="bg-neutral-900 border border-pink-500/30 p-6 text-center rounded-2xl shadow-lg hover:shadow-pink-500/30 transition">
          <h2 className="text-lg font-semibold text-pink-400 mb-2">Total Sales</h2>
          <p className="text-3xl font-bold">{sales}</p>
        </Card>

        <Card className="bg-neutral-900 border border-pink-500/30 p-6 text-center rounded-2xl shadow-lg hover:shadow-pink-500/30 transition">
          <h2 className="text-lg font-semibold text-pink-400 mb-2">Orders</h2>
          <p className="text-3xl font-bold">{orders}</p>
        </Card>

        <Card className="bg-neutral-900 border border-pink-500/30 p-6 text-center rounded-2xl shadow-lg hover:shadow-pink-500/30 transition">
          <h2 className="text-lg font-semibold text-pink-400 mb-2">Revenue</h2>
          <p className="text-3xl font-bold">${revenue}</p>
        </Card>

        <Card className="bg-neutral-900 border border-pink-500/30 p-6 text-center rounded-2xl shadow-lg hover:shadow-pink-500/30 transition">
          <h2 className="text-lg font-semibold text-pink-400 mb-2">Profit</h2>
          <p className="text-3xl font-bold">${profit}</p>
        </Card>
      </div>

      {/* Edit Mode */}
      {editing ? (
        <div className="max-w-lg mx-auto space-y-4 bg-neutral-900 p-6 rounded-2xl border border-pink-500/30 shadow-lg">
          <Input
            type="number"
            className="bg-black border-pink-500/40 text-white"
            placeholder="Sales"
            value={formData.sales}
            onChange={(e) => setFormData({ ...formData, sales: Number(e.target.value) })}
          />
          <Input
            type="number"
            className="bg-black border-pink-500/40 text-white"
            placeholder="Orders"
            value={formData.orders}
            onChange={(e) => setFormData({ ...formData, orders: Number(e.target.value) })}
          />
          <Input
            type="number"
            className="bg-black border-pink-500/40 text-white"
            placeholder="Revenue"
            value={formData.revenue}
            onChange={(e) => setFormData({ ...formData, revenue: Number(e.target.value) })}
          />
          <Input
            type="number"
            className="bg-black border-pink-500/40 text-white"
            placeholder="Profit"
            value={formData.profit}
            onChange={(e) => setFormData({ ...formData, profit: Number(e.target.value) })}
          />

          <div className="flex gap-4">
            <Button
              className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-semibold"
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              className="flex-1 bg-neutral-800 border border-pink-500/40 text-white hover:bg-neutral-700"
              onClick={() => setEditing(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Button
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4"
            onClick={() => setEditing(true)}
          >
            Edit Numbers
          </Button>
        </div>
      )}
    </div>
  )
}
