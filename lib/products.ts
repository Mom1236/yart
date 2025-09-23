export interface Product {
  id: string
  name: string
  description: string
  basePrice: number
  pricing: {
    quantity: number
    price: number
    label: string
  }[]
  flavors: string[]
  status: "in-stock" | "preorder" | "sold-out"
  image: string
  category: string
}

export const products: Product[] = [
  {
    id: "off-stamp-x-cube-crystal-35k",
    name: "Off-Stamp X Cube Crystal 35K",
    description:
      "Premium disposable vape with 35,000 puffs and crystal-clear flavor delivery. Experience unmatched satisfaction with every draw.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 50, label: "2 for $50" },
    ],
    flavors: ["Raspberry Watermelon", "Blue Razz Grape Ice", "Peach Berry", "Scary Berry"],
    status: "preorder",
    image: "/sleek-modern-vape-device-crystal-design.jpg",
    category: "disposable",
  },
  // Nicotine Products
  {
    id: "salt-nic-30ml-50mg",
    name: "Premium Salt Nicotine 30ml - 50mg",
    description:
      "High-quality salt nicotine e-liquid for pod systems and low-wattage devices. Smooth throat hit with intense satisfaction.",
    basePrice: 25,
    pricing: [
      { quantity: 1, price: 25, label: "1 for $25" },
      { quantity: 3, price: 65, label: "3 for $65" },
    ],
    flavors: ["Mango Ice", "Strawberry Kiwi", "Blue Razz", "Mint"],
    status: "in-stock",
    image: "/placeholder-tcr3o.png",
    category: "nicotine",
  },
  {
    id: "freebase-nic-60ml-6mg",
    name: "Freebase Nicotine E-Liquid 60ml - 6mg",
    description:
      "Classic freebase nicotine for sub-ohm tanks and high-wattage devices. Rich flavor production with smooth vapor.",
    basePrice: 20,
    pricing: [
      { quantity: 1, price: 20, label: "1 for $20" },
      { quantity: 3, price: 50, label: "3 for $50" },
    ],
    flavors: ["Vanilla Custard", "Tropical Punch", "Grape", "Menthol"],
    status: "in-stock",
    image: "/freebase-nicotine-e-liquid-bottle.jpg",
    category: "nicotine",
  },
  // THC Products
  {
    id: "live-resin-cart-1g",
    name: "Live Resin Cartridge 1g",
    description: "Premium live resin THC cartridge with full-spectrum cannabinoids. Lab-tested for purity and potency.",
    basePrice: 45,
    pricing: [
      { quantity: 1, price: 45, label: "1 for $45" },
      { quantity: 2, price: 80, label: "2 for $80" },
    ],
    flavors: ["OG Kush", "Blue Dream", "Gelato", "Wedding Cake"],
    status: "in-stock",
    image: "/live-resin-cartridge.jpg",
    category: "thc",
  },
  {
    id: "delta-8-disposable",
    name: "Delta-8 Disposable Vape",
    description: "Smooth Delta-8 THC disposable with 2g capacity. Mild psychoactive effects with relaxing properties.",
    basePrice: 35,
    pricing: [
      { quantity: 1, price: 35, label: "1 for $35" },
      { quantity: 2, price: 60, label: "2 for $60" },
    ],
    flavors: ["Pineapple Express", "Granddaddy Purple", "Sour Diesel", "Zkittlez"],
    status: "preorder",
    image: "/delta-8-vape.png",
    category: "thc",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
