"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { ShoppingCart } from "lucide-react"

export function FloatingCart() {
  const { items, total } = useCart()
  const [isVisible, setIsVisible] = useState(false)

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    setIsVisible(itemCount > 0)
  }, [itemCount])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        asChild
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 rounded-full"
      >
        <Link href="/cart" className="flex items-center gap-3">
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-primary-foreground text-primary text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {itemCount}
            </span>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm">Cart</div>
            <div className="text-xs opacity-90">${total.toFixed(2)}</div>
          </div>
        </Link>
      </Button>
    </div>
  )
}
