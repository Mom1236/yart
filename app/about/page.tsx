import { Navigation } from "@/components/navigation"
import { FloatingCart } from "@/components/floating-cart"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Award, Users, Truck, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCart />

      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">About VapeHub</Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
            Your Trusted Partner in Premium Vaping
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            We are dedicated to providing the highest quality vape products with exceptional customer service and
            lightning-fast delivery. Your satisfaction is our top priority.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a passion for quality and innovation, VapeHub has been serving the vaping community with
                  premium products and exceptional service. We understand that every customer has unique preferences,
                  which is why we carefully curate our selection to offer only the finest products.
                </p>
                <p>
                  Our team consists of vaping enthusiasts who are committed to staying ahead of industry trends and
                  bringing you the latest innovations in vaping technology. From disposable devices to premium
                  e-liquids, we ensure every product meets our strict quality standards.
                </p>
                <p>
                  We believe in building lasting relationships with our customers through transparency, reliability, and
                  outstanding customer support. Your vaping journey is important to us, and we are here to support you
                  every step of the way.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-muted/50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-2">Premium Quality</h3>
                  <p className="text-muted-foreground">Guaranteed authentic products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Authenticity</h3>
              <p className="text-muted-foreground text-sm">
                We guarantee 100% authentic products from trusted manufacturers with full quality assurance.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Customer First</h3>
              <p className="text-muted-foreground text-sm">
                Your satisfaction is our priority. We provide exceptional support and service at every step.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Lightning-fast processing and shipping to get your products to you as quickly as possible.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                We continuously strive for excellence in product quality, service, and customer experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust VapeHub for their premium vaping needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4"
          >
            <Link href="/menu">
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
