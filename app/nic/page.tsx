import { Navigation } from "@/components/navigation"
import { FloatingCart } from "@/components/floating-cart"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProductsByCategory } from "@/lib/products"
import Link from "next/link"
import { ArrowLeft, Info, Filter } from "lucide-react"

export default function NicPage() {
  const nicProducts = getProductsByCategory("nicotine")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCart />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-heading font-bold mb-4">Nicotine Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Premium nicotine e-liquids for all your vaping needs. From salt nic to freebase, find your perfect strength
            and flavor.
          </p>
        </div>

        {/* Info Banner */}
        <Card className="p-6 mb-8 border-primary/20 bg-primary/5">
          <div className="flex items-start space-x-3">
            <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-primary mb-2">Age Verification Required</h3>
              <p className="text-sm text-muted-foreground">
                Must be 21+ to purchase nicotine products. All products are lab-tested for quality and purity. Please
                vape responsibly.
              </p>
            </div>
          </div>
        </Card>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="outline" className="bg-background">
            <Filter className="w-4 h-4 mr-2" />
            All Nicotine
          </Button>
          <Button variant="outline" className="bg-background">
            Salt Nic
          </Button>
          <Button variant="outline" className="bg-background">
            Freebase
          </Button>
          <Button variant="outline" className="bg-background">
            In Stock
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {nicProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Educational Section */}
        <Card className="p-8 bg-muted/30">
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">Understanding Nicotine Types</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Salt Nicotine</h3>
              <p className="text-muted-foreground mb-4">
                Smoother throat hit at higher concentrations. Perfect for pod systems and mouth-to-lung vaping. Faster
                nicotine absorption.
              </p>
              <Badge variant="outline">Best for: Pod Systems</Badge>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Freebase Nicotine</h3>
              <p className="text-muted-foreground mb-4">
                Traditional nicotine form with stronger throat hit. Ideal for sub-ohm tanks and direct-lung vaping.
                Better flavor production.
              </p>
              <Badge variant="outline">Best for: Sub-Ohm Tanks</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
