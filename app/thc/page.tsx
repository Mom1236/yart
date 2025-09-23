import { Navigation } from "@/components/navigation"
import { FloatingCart } from "@/components/floating-cart"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Leaf, Shield, Clock } from "lucide-react"

export default function THCPage() {
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
          <h1 className="text-4xl font-heading font-bold mb-4">THC Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore our premium THC selection featuring high-quality products for experienced users. All products are
            lab-tested and comply with local regulations.
          </p>
        </div>

        {/* Legal Notice */}
        <Card className="p-6 mb-8 border-amber-500/20 bg-amber-500/5">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-500 mb-2">Legal Notice</h3>
              <p className="text-sm text-muted-foreground">
                THC products are only available in states where legally permitted. Must be 21+ with valid ID. Please
                check your local laws before purchasing. Not for use by minors, pregnant or nursing women.
              </p>
            </div>
          </div>
        </Card>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              name: "THC Vape Cartridges",
              description: "Premium distillate cartridges with natural terpenes",
              potency: "70-90% THC",
              price: "From $45",
              available: true,
              image: "/thc-vape-cartridge.jpg",
            },
            {
              name: "Live Resin Carts",
              description: "Full-spectrum live resin for enhanced flavor",
              potency: "80-95% THC",
              price: "From $65",
              available: true,
              image: "/live-resin-cartridge.jpg",
            },
            {
              name: "Delta-8 Products",
              description: "Mild psychoactive effects with smooth experience",
              potency: "60-80% Delta-8",
              price: "From $35",
              available: true,
              image: "/delta-8-vape.png",
            },
            {
              name: "THC Disposables",
              description: "Ready-to-use disposable vape pens",
              potency: "75-85% THC",
              price: "From $25",
              available: true,
              image: "/thc-disposable-vape.jpg",
            },
            {
              name: "Rosin Cartridges",
              description: "Solventless extraction for pure flavor",
              potency: "70-85% THC",
              price: "From $55",
              available: false,
              image: "/rosin-cartridge.jpg",
            },
            {
              name: "Custom Blends",
              description: "Personalized THC/CBD ratios available",
              potency: "Custom",
              price: "Contact Us",
              available: true,
              image: "/custom-thc-blend.jpg",
            },
          ].map((product) => (
            <Card
              key={product.name}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/30"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {!product.available && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                    <Leaf className="w-3 h-3 mr-1" />
                    {product.potency}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <Button
                    disabled={!product.available}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {product.available ? "View Products" : "Notify Me"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Lab Tested</h3>
            <p className="text-sm text-muted-foreground">
              All products undergo rigorous third-party testing for purity and potency.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Premium Quality</h3>
            <p className="text-sm text-muted-foreground">
              Sourced from licensed cultivators using organic growing practices.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Fast & Discreet</h3>
            <p className="text-sm text-muted-foreground">Quick processing with discreet packaging for your privacy.</p>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-muted/30">
          <h2 className="text-2xl font-heading font-bold mb-4">Questions About THC Products?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our knowledgeable team can help you understand dosing, effects, and find the right products for your needs.
            We're here to ensure a safe and enjoyable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/menu">Browse All Products</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
