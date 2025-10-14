import type React from "react"
import type { Metadata } from "next"
import { Poppins, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CartProvider } from "@/hooks/use-cart"
import { Footer } from "@/components/footer"
import { PasswordGate } from "@/components/password-gate"
import Script from "next/script"   // ✅ import Script
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Traplanta - Premium Vape Products | Yart.Shop",
  description:
    "Discover premium vape products and dispos at Traplanta. Fast shipping and authentic quality from Yart.Shop.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${poppins.variable} ${openSans.variable} antialiased`}>
        <PasswordGate>
          <CartProvider>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            <Footer />
          </CartProvider>
        </PasswordGate>
        <Analytics />
      </body>
    </html>
  )
}
