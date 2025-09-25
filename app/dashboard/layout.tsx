"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const nav = [
    { href: "/dashboard", label: "Overview" },
    { href: "/dashboard/orders", label: "Orders" },
    { href: "/dashboard/analytics", label: "Analytics" },
    { href: "/dashboard/settings", label: "Settings" },
  ]

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/dashboard/login")
  }

  return (
    <div className="min-h-screen flex bg-black text-white">
      <aside className="w-64 bg-neutral-900 border-r border-pink-500/30 p-6 sticky top-0 h-screen">
        <div className="text-pink-500 font-bold text-xl mb-8">Traplanta Admin</div>
        <nav className="space-y-2">
          {nav.map(item => (
            <Link key={item.href} className={`block px-3 py-2 rounded-lg hover:bg-neutral-800 ${pathname === item.href ? "bg-neutral-800 text-pink-400" : ""}`} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8">
          <Button className="w-full bg-neutral-800 border border-pink-500/40" onClick={logout}>
            Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
