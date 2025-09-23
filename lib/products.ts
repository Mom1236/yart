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
  // Off-Stamp
  {
    id: "off-stamp-x-cube-crystal-35k",
    name: "Off-Stamp X Cube Crystal 35K",
    description:
      "Premium disposable vape with 35,000 puffs and crystal-clear flavor delivery.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 55, label: "2 for $55" },
    ],
    flavors: ["Raspberry Watermelon", "Blue Razz Grape Ice", "Peach Berry", "Scary Berry"],
    status: "preorder",
    image: "/off-stamp-crystal.jpg",
    category: "disposable",
  },

  // Lost Mary MT35000 Turbo
  {
    id: "lost-mary-mt35000",
    name: "Lost Mary MT35000 Turbo",
    description: "High-capacity disposable with 35,000 hits and bold flavors.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 50, label: "2 for $50" },
    ],
    flavors: [
      "Blue Razz Ice",
      "Orange Passion Mango",
      "Pink Lemonade+",
      "Strawberry+",
      "Scary Berry+",
      "Tigers Blood+",
      "Strawmelon Peach",
    ],
    status: "preorder",
    image: "/lost-mary-35000.jpg",
    category: "nicotine",
  },

  // Fifty Bar (BLK Series)
  {
    id: "fifty-bar-blk",
    name: "Fifty Bar (BLK Series)",
    description: "Disposable vape BLK series with bold dessert and tobacco flavors.",
    basePrice: 25,
    pricing: [
      { quantity: 1, price: 25, label: "1 for $25" },
      { quantity: 2, price: 45, label: "2 for $45" },
    ],
    flavors: [
      "Blueberry Cereal Donut Milk",
      "Butterbean",
      "Cinnamon Funnel Cake",
      "Gold Tobacco",
      "Milky Loops",
      "Raspberry Jam",
      "Strawberry Cereal Donut Milk",
    ],
    status: "preorder",
    image: "/fifty-bar-blk.jpg",
    category: "nicotine",
  },

  // Geek Bar Pulse X 15k
  {
    id: "geek-bar-pulse-x-15k",
    name: "Geek Bar Pulse X (15k Hits) RARE",
    description: "Rare edition 15k puff disposable with multiple exclusive flavors.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 55, label: "2 for $55" },
    ],
    flavors: [
      "Blue Razz Ice",
      "Fcuking FAB",
      "Miami Mint",
      "Watermelon Ice",
      "Sour Strawberry (Sour Edition)",
      "Sour Watermelon Drop (Sour Edition)",
      "Orange Mint Savers",
      "Blow Pop",
      "Meta Moon",
      "Frozen Pina Colada (Frozen Edition)",
    ],
    status: "preorder",
    image: "/geek-bar-pulse-x-15k.jpg",
    category: "nicotine",
  },

  // THC / Dispo - Boutiq V5
  {
    id: "boutiq-v5",
    name: "Boutiq V5",
    description: "Premium THC disposable pod with multiple exotic blends.",
    basePrice: 35,
    pricing: [
      { quantity: 1, price: 35, label: "1 for $35" },
      { quantity: 2, price: 60, label: "2 for $60" },
      { quantity: 10, price: 225, label: "10 for $225" },
    ],
    flavors: [
      "Artic Frost / Rocket Pop / Tropic Haze",
      "Blue Matcha / Acai Berry / Sour Slush",
      "Cherry Lime / Crunch Berry / Orange Mochi",
      "Grape Soda / Glowberry / Cherry Pie",
      "Italian Ice / Lemon Cherry / Z-Runtz",
      "Lime Haze / Slimeade / Starfruit",
      "Maui Wowie / Gelato41 / Mango Melon",
      "Pink-Z / Dragonfruit / Tropicana",
      "Purple Papaya / Blue Berriez / Rz-11",
      "Sour Tangie / NYC Sour / Passion Fruit",
    ],
    status: "preorder",
    image: "/boutiq-v5.jpg",
    category: "thc",
  },

  // Cali Clear 2G
  {
    id: "cali-clear-2g",
    name: "Cali Clear 2G Live Diamond Disposable",
    description: "2G THC disposable with vibrant party-pack flavors.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 55, label: "2 for $55" },
      { quantity: 5, price: 120, label: "5 for $120" },
      { quantity: 10, price: 210, label: "10 for $210" },
    ],
    flavors: [
      "Cherry Watermelon",
      "Fruity Pebbles",
      "London Pound Cake",
      "Blueberry Banana Bread",
      "Mango Mochi",
      "Georgia Peach",
      "King Louis XIII",
      "Tusi",
      "Rocket Pop",
      "Piña Colada",
      "Forbidden Fruit",
      "Space X Berries",
      "Rainbow Beltz",
      "Watermelon Lime Runtz",
      "Lemon Watermelon Pink",
      "Ice Cream Cake",
      "Watermelon Mojito",
      "Wedding Cake",
      "Gelato",
      "Forbidden Punch",
    ],
    status: "preorder",
    image: "/cali-clear.jpg",
    category: "thc",
  },

  // Big Chief Duos
  {
    id: "big-chief-duos",
    name: "Big Chief Duos 2G Liquid Diamonds",
    description: "New dual-flavor THC disposable with liquid diamonds.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 50, label: "2 for $50" },
      { quantity: 5, price: 115, label: "5 for $115" },
      { quantity: 10, price: 210, label: "10 for $210" },
    ],
    flavors: [
      "Guava Pop x Blackberry Jam",
      "Rainbow Belts x Zoap",
      "Bold Runtz x Do-Si-Dos",
      "Lemonhead Z x Georgia Pie",
      "Frozen Cherries x Raspberry Parfait",
      "Hella Jelly x Juice Man",
      "Berry Pie x Blue Gushers",
      "Tractor Fuel x White Fire",
      "Purple Dream x Night Cap",
      "Mango Tango x Cherry Fritter",
    ],
    status: "preorder",
    image: "/big-chief-duos.jpg",
    category: "thc",
  },

  // Ace Ultra Premium
  {
    id: "ace-ultra",
    name: "Ace Ultra Premium 2G Disposable",
    description: "Ultra premium THC disposable with luxury flavor blends.",
    basePrice: 35,
    pricing: [
      { quantity: 1, price: 35, label: "1 for $35" },
      { quantity: 2, price: 55, label: "2 for $55" },
      { quantity: 5, price: 110, label: "5 for $110" },
      { quantity: 10, price: 180, label: "10 for $180" },
    ],
    flavors: [
      "Raspberry Kiss – Sativa",
      "Berry Burst – Hybrid",
      "Cherry Vanilla Sky – Indica",
      "Lychee Sorbet – Hybrid",
      "Strawberry Dream – Sativa",
      "Apple Cooler – Hybrid",
      "Citrus Sunset – Hybrid",
      "Rose Serenade – Indica",
      "Kiwi Berry Mist – Indica",
      "Mango Frost – Hybrid",
    ],
    status: "preorder",
    image: "/ace-ultra.jpg",
    category: "thc",
  },

  // Muha Meds
  {
    id: "muha-meds-2g",
    name: "Muha Meds 2G Disposable",
    description: "Popular 2G THC disposables with classic flavors.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 45, label: "2 for $45" },
      { quantity: 5, price: 100, label: "5 for $100" },
      { quantity: 10, price: 180, label: "10 for $180" },
    ],
    flavors: [
      "Blue Dream",
      "Grand Daddy Purp",
      "Green Apple Elixr",
      "Berry Gelato",
      "Watermelon OG",
      "Super Sour Diesel",
      "Strawberry Cough",
      "Pineapple Express",
    ],
    status: "sold-out",
    image: "/muha-meds.jpg",
    category: "thc",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
