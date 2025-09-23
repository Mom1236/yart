import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Home } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="text-center">
          <CardContent className="p-12">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>

            <h1 className="text-3xl font-heading font-bold mb-4">Order Submitted Successfully!</h1>
            <p className="text-muted-foreground mb-8 text-pretty">
              Thank you for your order! You will receive a confirmation email shortly with your order details and
              tracking information.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">What happens next?</h3>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• You'll receive an order confirmation email</li>
                  <li>• Your order will be processed within 24 hours</li>
                  <li>• Tracking information will be sent once shipped</li>
                  <li>• Estimated delivery: 3-5 business days</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link href="/menu">
                  Continue Shopping <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">
                  <Home className="mr-2 w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
