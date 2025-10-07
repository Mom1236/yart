// app/menu/page.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

// If you already have this type in "@/lib/products", delete the inline type below and import yours.
type ProductStatus = "in-stock" | "preorder" | "sold-out"
type Product = {
  id: string
  name: string
  description: string
  image: string
  basePrice: number
  status: ProductStatus
  flavors: string[]
  pricing: { label: string; quantity: number; price: number }[]
}

// -------------------------------
// Sample data (replace as needed)
// -------------------------------
const products: Product[] = [
  {
    id: "geekbar-pulsex",
    name: "Geek Bar Pulse X",
    description: "Loud flavor, bold vapor, recharges fast.",
    image: "/products/geekbar.jpg",
    basePrice: 30,
    status: "in-stock",
    flavors: ["Blue Razz Ice", "Watermelon Ice", "Strawberry Kiwi"],
    pricing: [
      { label: "Single", quantity: 1, price: 30 },
      { label: "3-Pack", quantity: 3, price: 85 },
      { label: "5-Pack", quantity: 5, price: 138 },
    ],
  },
  {
    id: "lost-mary-mo5000",
    name: "Lost Mary MO5000",
    description: "Silky draw with balanced sweetness.",
    image: "/products/lostmary.jpg",
    basePrice: 28,
    status: "preorder",
    flavors: ["Peach Mango Watermelon", "Pineapple Lemonade", "Grape Jelly"],
    pricing: [
      { label: "Single", quantity: 1, price: 28 },
      { label: "3-Pack", quantity: 3, price: 79 },
    ],
  },
  {
    id: "boutiq-v5",
    name: "Boutiq V5 Disposable",
    description: "Sleek V5 hardware with rich full-spectrum flavor.",
    image: "/products/boutiq.jpg",
    basePrice: 40,
    status: "sold-out",
    flavors: ["OG Kush", "Lemon Haze", "Rainbow Sherb"],
    pricing: [{ label: "Single", quantity: 1, price: 40 }],
  },
]

// -------------------------------
// ProductCard (responsive/compact)
// -------------------------------
function ProductCard({ product }: { product: Product }) {
  const [selectedFlavor, setSelectedFlavor] = useState<string>("")
  const [selectedPricing, setSelectedPricing] = useState(product.pricing[0])
  const { addItem } = useCart()

  const handleAddToCart = () => {
    if (!selectedFlavor) {
      alert("Please select a flavor")
      return
    }

    // Add items according to selected bundle quantity
    for (let i = 0; i < selectedPricing.quantity; i++) {
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
        return (
          <Badge className="bg-green-600 text-white border border-green-700 rounded-full px-3 py-1 text-xs font-medium shadow-sm">
            In Stock
          </Badge>
        )
      case "preorder":
        return (
          <Badge className="bg-primary text-white border border-primary/80 rounded-full px-3 py-1 text-xs font-medium shadow-sm">
            Preorder
          </Badge>
        )
      case "sold-out":
        return (
          <Badge className="bg-red-600 text-white border border-red-700 rounded-full px-3 py-1 text-xs font-medium shadow-sm">
            Sold Out
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card className="group w-full max-w-xs sm:max-w-sm mx-auto overflow-hidden hover:shadow-xl transition-all duration-300 bg-card border-border">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={400}
          // Viewport-tied height for mobile, bumps at breakpoints
          className="w-full h-[45vw] max-h-60 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 45vw, (max-width: 768px) 280px, 300px"
        />
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">{getStatusBadge()}</div>
      </div>

      <CardContent className="p-4 sm:p-6">
        <div className="mb-3 sm:mb-4">
          <h3 className="font-heading font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-balance">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm text-pretty line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Flavor Selection */}
        <div className="mb-3 sm:mb-4">
          <label className="text-xs sm:text-sm font-medium mb-2 block">Choose Flavor</label>
          <Select value={selectedFlavor} onValueChange={setSelectedFlavor}>
            <SelectTrigger className="w-full h-9 sm:h-10 text-xs sm:text-sm">
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
        <div className="mb-5 sm:mb-6">
          <label className="text-xs sm:text-sm font-medium mb-2 block">Pricing</label>
          <div className="grid grid-cols-1 gap-2">
            {product.pricing.map((pricing) => {
              const selected = selectedPricing.quantity === pricing.quantity
              const savings = pricing.quantity > 1 ? pricing.quantity * product.basePrice - pricing.price : 0
              return (
                <button
                  key={pricing.quantity}
                  onClick={() => setSelectedPricing(pricing)}
                  className={[
                    "p-2.5 sm:p-3 rounded-lg border text-left transition-colors",
                    selected ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm sm:text-base">{pricing.label}</span>
                    {savings > 0 && (
                      <Badge variant="secondary" className="text-[10px] sm:text-xs">
                        Save ${savings}
                      </Badge>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Add to Cart */}
        <Button
          onClick={handleAddToCart}
          disabled={product.status === "sold-out" || !selectedFlavor}
          className="w-full h-10 sm:h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.status === "sold-out" ? "Sold Out" : `Add to Cart - $${selectedPricing.price}`}
        </Button>
      </CardContent>
    </Card>
  )
}

// -------------------------------------
// Page (renders the responsive products)
// -------------------------------------
export default function MenuPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">Menu</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Preorder verified drops. Trusted distro.
          </p>
        </div>
        <Button asChild variant="outline" className="hidden sm:inline-flex">
          <Link href="/cart">View Cart</Link>
        </Button>
      </section>

      {/* Grid of cards */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  )
}
