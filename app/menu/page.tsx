"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { FloatingCart } from "@/components/floating-cart"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { products } from "@/lib/products"
import { Filter, Search } from "lucide-react"

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return products
    return products.filter((product) => product.category === activeFilter)
  }, [activeFilter])

  const filterOptions = [
    { key: "all", label: "All Products", icon: Filter },
    { key: "nicotine", label: "Nicotine" },
    { key: "thc", label: "THC" },
    { key: "edibles", label: "Edibles" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCart />

      {/* Header Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Complete Product Menu</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Browse our full collection of vapes, nicotine products, and THC items - all in one place.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filterOptions.map((option) => {
              const Icon = option.icon
              return (
                <Button
                  key={option.key}
                  variant={activeFilter === option.key ? "default" : "outline"}
                  className={activeFilter === option.key ? "bg-primary text-primary-foreground" : "bg-background"}
                  onClick={() => setActiveFilter(option.key)}
                >
                  {Icon && <Icon className="w-4 h-4 mr-2" />}
                  {option.label}
                </Button>
              )
            })}
            <Button variant="outline" className="bg-background" onClick={() => setActiveFilter("in-stock")}>
              In Stock
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <div className="max-w-md mx-auto">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">No Products Found</h3>
                <p className="text-muted-foreground">
                  {activeFilter === "all"
                    ? "We are currently updating our inventory. Check back soon for new products!"
                    : `No ${activeFilter} products available at the moment. Try a different category.`}
                </p>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">35K+</div>
              <div className="text-muted-foreground">Puffs Per Device</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Authentic Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
