"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Amazing quality and super fast shipping! The Off-Stamp X Cube Crystal 35K is exactly what I was looking for. The Raspberry Watermelon flavor is incredible.",
    location: "New York, NY",
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    text: "Traplanta has the best customer service I've ever experienced. They helped me choose the perfect product and it arrived the next day. Highly recommend!",
    location: "Houston, TX",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    text: "The Blue Razz Grape Ice flavor is absolutely perfect. Great value with the 2 for $50 deal. Will definitely be ordering again soon!",
    location: "Fulshear, TX",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    text: "Authentic products, competitive prices, and lightning-fast delivery. VapeHub has become my go-to for all vaping needs. The quality is unmatched.",
    location: "Chicago, IL",
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-muted-foreground mb-6 text-pretty">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <div>
              <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
              <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button variant="outline" size="sm" onClick={prevTestimonial} className="w-10 h-10 p-0 bg-transparent">
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <Button variant="outline" size="sm" onClick={nextTestimonial} className="w-10 h-10 p-0 bg-transparent">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
