"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { CartItem } from "@/components/cart-item"
import { EmptyCart } from "@/components/empty-cart"
import { CheckoutButton } from "@/components/checkout-button"
import { ArrowRight, ShoppingBag, Truck, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { items, total } = useCart()

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {itemCount > 0 ? `${itemCount} item${itemCount !== 1 ? "s" : ""} in your cart` : "Your cart is empty"}
          </p>
        </div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <CartItem key={`${item.id}-${item.flavor}`} item={item} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal ({itemCount} items)</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span className="text-green-400">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="border-t border-border pt-2">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <CheckoutButton className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6">
                    Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
                  </CheckoutButton>

                  <div className="text-center">
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/menu">Continue Shopping</Link>
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Truck className="w-4 h-4 text-primary" />
                      <span>Free shipping on all orders</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Secure checkout guaranteed</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Fast processing & delivery</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
