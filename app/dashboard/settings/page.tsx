"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
  const [hint, setHint] = useState("")
  const [exportData, setExportData] = useState("")
  const [importData, setImportData] = useState("")

  useEffect(() => {
    setHint(typeof window !== "undefined" ? (localStorage.getItem("adminHint") || "") : "")
  }, [])

  function saveHint() {
    localStorage.setItem("adminHint", hint)
    alert("Saved")
  }

  async function handleExport() {
    const [statsRes, ordersRes] = await Promise.all([
      fetch("/api/dashboard"),
      fetch("/api/orders"),
    ])
    const stats = await statsRes.json()
    const orders = await ordersRes.json()
    const payload = { stats, orders }
    setExportData(JSON.stringify(payload, null, 2))
  }

  async function handleImport() {
    try {
      const obj = JSON.parse(importData)
      if (obj.stats) {
        await fetch("/api/dashboard", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj.stats),
        })
      }
      if (obj.orders && obj.orders.orders) {
        // naive restore: rewrite each
        for (const o of obj.orders.orders) {
          await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customer: o.customer, product: o.product, total: o.total, status: o.status }),
          })
        }
      }
      alert("Imported")
    } catch (e) {
      alert("Bad JSON")
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Card className="bg-neutral-900 border border-pink-500/30 p-6 rounded-2xl">
        <h2 className="text-pink-400 font-semibold mb-2">Admin Password Hint (client-side)</h2>
        <div className="flex gap-3">
          <Input className="bg-black border-pink-500/40 text-white" placeholder="(Optional) password hint" value={hint} onChange={(e)=>setHint(e.target.value)}/>
          <Button className="bg-pink-600 hover:bg-pink-700" onClick={saveHint}>Save</Button>
        </div>
        <p className="text-sm text-neutral-400 mt-2">*Hint is stored in localStorage only for your device.</p>
      </Card>

      <Card className="bg-neutral-900 border border-pink-500/30 p-6 rounded-2xl">
        <h2 className="text-pink-400 font-semibold mb-2">Export Data</h2>
        <Button className="bg-pink-600 hover:bg-pink-700 mb-3" onClick={handleExport}>Export current stats & orders</Button>
        <textarea className="w-full h-40 bg-black border border-pink-500/40 rounded-md p-3" value={exportData} readOnly />
      </Card>

      <Card className="bg-neutral-900 border border-pink-500/30 p-6 rounded-2xl">
        <h2 className="text-pink-400 font-semibold mb-2">Import Data (JSON)</h2>
        <textarea className="w-full h-40 bg-black border border-pink-500/40 rounded-md p-3" value={importData} onChange={(e)=>setImportData(e.target.value)} />
        <div className="mt-3">
          <Button className="bg-pink-600 hover:bg-pink-700" onClick={handleImport}>Import</Button>
        </div>
      </Card>
    </div>
  )
}
