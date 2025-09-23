"use client"

import { Navigation } from "@/components/navigation"
import { FloatingCart } from "@/components/floating-cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Copy } from "lucide-react"

export default function ContactPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCart />

      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">Get in Touch</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Ready to place an order or have questions? Contact us directly through Telegram or phone.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Telegram Contact */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Telegram</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Message us on Telegram for quick responses and order assistance</p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-2xl font-mono font-bold text-primary mb-2">@validicity</p>
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard("@validicity")} className="mr-2">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Handle
                  </Button>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href="https://t.me/validicity" target="_blank" rel="noopener noreferrer">
                      Open Telegram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Phone Contact */}
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Phone</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Call or text us directly for immediate assistance</p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-2xl font-mono font-bold text-primary mb-2">2105705016</p>
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard("2105705016")} className="mr-2">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Number
                  </Button>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href="tel:2105705016">Call Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Preferred Contact Method</h3>
              <p className="text-muted-foreground mb-6">
                For the fastest response and to place orders, we recommend contacting us via Telegram. Screenshot your
                cart and send it to us for quick processing!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm">
                  📱 Quick Response
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  🛒 Easy Ordering
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  💬 Direct Communication
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
