"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface CheckoutButtonProps {
  className?: string
  children?: React.ReactNode
}

export function CheckoutButton({ className, children }: CheckoutButtonProps) {
  const { items } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    if (items.length === 0) return
    router.push("/checkout")
  }

  return (
    <Button onClick={handleCheckout} disabled={items.length === 0} className={className}>
      {children || (
        <>
          <MessageCircle className="w-4 h-4 mr-2" />
          Proceed to Order
        </>
      )}
    </Button>
  )
}
