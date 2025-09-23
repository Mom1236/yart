"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart, type CartItem as CartItemType } from "@/hooks/use-cart"
import { Minus, Plus, Trash2 } from "lucide-react"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(item.id)
    } else {
      updateQuantity(item.id, newQuantity)
    }
  }

  const getStatusBadge = () => {
    switch (item.status) {
      case "in-stock":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">In Stock</Badge>
      case "preorder":
        return <Badge className="bg-primary/20 text-primary border-primary/30">Preorder</Badge>
      case "sold-out":
        return <Badge variant="destructive">Sold Out</Badge>
      default:
        return null
    }
  }

  return (
    <Card className="overflow-hidden animate-fade-in">
      <CardContent className="p-6">
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-heading font-semibold text-lg text-balance">{item.name}</h3>
                <p className="text-muted-foreground text-sm">Flavor: {item.flavor}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {getStatusBadge()}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                  className="text-muted-foreground hover:text-destructive p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quantity and Price */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(item.quantity - 1)}
                    className="h-8 w-8 p-0 hover:bg-muted"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(item.quantity + 1)}
                    className="h-8 w-8 p-0 hover:bg-muted"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</div>
                <div className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
