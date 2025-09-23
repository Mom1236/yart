"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { ArrowLeft, ShoppingBag, MessageCircle, Copy, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items, total } = useCart()
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    // Redirect to cart if no items
    if (items.length === 0) {
      router.push("/cart")
    }
  }, [items.length, router])

  const copyTelegramHandle = async () => {
    try {
      await navigator.clipboard.writeText("@validicity")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  if (items.length === 0) {
    return null // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/cart">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">How to Order</h1>
          <p className="text-muted-foreground">Follow these simple steps to complete your order</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.flavor}`}
                    className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">Flavor: {item.flavor}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="border-t border-border pt-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Order via Telegram</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Complete your order by sending a screenshot of your cart to our Telegram
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Take a Screenshot</h4>
                    <p className="text-sm text-muted-foreground">
                      Screenshot this page or your cart showing all items and the total
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Contact Us on Telegram</h4>
                    <p className="text-sm text-muted-foreground mb-2">Send the screenshot to our Telegram account:</p>
                    <div className="flex items-center gap-2 bg-muted p-3 rounded-lg">
                      <span className="font-mono text-primary font-semibold">@validicity</span>
                      <Button size="sm" variant="ghost" onClick={copyTelegramHandle} className="h-6 px-2">
                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete Payment</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll send you payment instructions and process your order once payment is received
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6"
              >
                <a href="https://t.me/validicity" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact @validicity on Telegram
                </a>
              </Button>

              {/* Security Features */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Secure manual processing</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Direct customer support</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Fast order processing</span>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-xs text-muted-foreground">
                  By proceeding, you agree to our{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
