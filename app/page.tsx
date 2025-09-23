import { Navigation } from "@/components/navigation"
import { FloatingCart } from "@/components/floating-cart"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { FAQAccordion } from "@/components/faq-accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Star, Shield, Truck, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCart />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Premium Vape Experience
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-balance mb-6">
              Your Next
              <span className="text-primary block">Permanent Plug</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          Shop premium brand-name disposables and rare nic options with lightning-fast delivery. At Yart.Shop, quality and satisfaction always come first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4"
              >
                <Link href="/menu">
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold text-lg px-8 py-4 bg-transparent">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Traplanta?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing the best vaping experience with premium products, Add Nic options, THC
              selections, and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-zoom-in">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Authentic Products</h3>
              <p className="text-muted-foreground">
                100% genuine products from trusted manufacturers with quality guarantee.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-zoom-in">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground">
                Lightning-fast delivery to get your products to you as quickly as possible.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-zoom-in">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Carefully curated selection of the finest vape products and flavors.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-zoom-in">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock customer support to help with any questions or concerns.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Traplanta for their premium vaping needs.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products, shipping, and policies.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Experience Premium Vaping?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our exclusive collection of premium vape products and discover your new favorite flavors.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4"
          >
            <Link href="/menu">
              View Our Menu <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
