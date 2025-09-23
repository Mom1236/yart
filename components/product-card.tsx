"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/lib/products"
import { ShoppingCart, Star } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedFlavor, setSelectedFlavor] = useState<string>("")
  const [selectedPricing, setSelectedPricing] = useState(product.pricing[0])
  const { addItem } = useCart()

  const handleAddToCart = () => {
    if (!selectedFlavor) {
      alert("Please select a flavor")
      return
    }

    addItem({
      id: `${product.id}-${selectedFlavor}`,
      name: product.name,
      flavor: selectedFlavor,
      price: selectedPricing.price / selectedPricing.quantity,
      image: product.image,
      status: product.status,
    })

    // Add multiple items if bulk pricing is selected
    for (let i = 1; i < selectedPricing.quantity; i++) {
      addItem({
        id: `${product.id}-${selectedFlavor}`,
        name: product.name,
        flavor: selectedFlavor,
        price: selectedPricing.price / selectedPricing.quantity,
        image: product.image,
        status: product.status,
      })
    }
  }

  const getStatusBadge = () => {
    switch (product.status) {
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
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in bg-card border-border">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">{getStatusBadge()}</div>
        
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="font-heading font-semibold text-lg mb-2 text-balance">{product.name}</h3>
          <p className="text-muted-foreground text-sm text-pretty">{product.description}</p>
        </div>

        {/* Flavor Selection */}
        <div className="mb-4">
          <label className="text-sm font-medium mb-2 block">Choose Flavor</label>
          <Select value={selectedFlavor} onValueChange={setSelectedFlavor}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a flavor" />
            </SelectTrigger>
            <SelectContent>
              {product.flavors.map((flavor) => (
                <SelectItem key={flavor} value={flavor}>
                  {flavor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Pricing Options */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Pricing</label>
          <div className="grid grid-cols-1 gap-2">
            {product.pricing.map((pricing) => (
              <button
                key={pricing.quantity}
                onClick={() => setSelectedPricing(pricing)}
                className={`p-3 rounded-lg border text-left transition-colors ${
                  selectedPricing.quantity === pricing.quantity
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{pricing.label}</span>
                  {pricing.quantity > 1 && (
                    <Badge variant="secondary" className="text-xs">
                      Save ${pricing.quantity * product.basePrice - pricing.price}
                    </Badge>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={product.status === "sold-out" || !selectedFlavor}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.status === "sold-out" ? "Sold Out" : `Add to Cart - $${selectedPricing.price}`}
        </Button>
      </CardContent>
    </Card>
  )
}
