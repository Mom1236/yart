import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"

export function EmptyCart() {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-12 text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingCart className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="font-heading font-semibold text-xl mb-2">Your cart is empty</h3>
        <p className="text-muted-foreground mb-6 text-pretty">
          Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
          <Link href="/menu">
            Start Shopping <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
