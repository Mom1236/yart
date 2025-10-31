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
    flavors: ["Blue Razz Grape Ice (PREORDER)", "Raspberry Watermelon (1 LEFT)", "Peach Berry (1 LEFT)", "Scary Berry (1 LEFT)"],
    status: "in-stock",
    image: "/off.jpg",
    category: "nicotine",
  },

  // Lost Mary MT35000 Turbo
  {
    id: "lost-mary-mt35000",
    name: "Lost Mary MT35000 Turbo",
    description: "High-capacity disposable with 35,000 hits and strong flavors.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 50, label: "2 for $50" },
    ],
    flavors: [
      "Miami Mint (PREORDER)",
      "Orange Passion Mango (PREORDER)",
     "Pink Lemonade+ (PREORDER)",
      "Blue Razz Ice (PREORDER)",
            "Black Mint+",
        "Scary Berry+",
        "Berry Burst",
      "White Gami+",
      "Tigers Blood+ (3 LEFT)",
    ],
    status: "in-stock",
    image: "/lost.jpg",
    category: "nicotine",
  },
 // Geek Bar Pulse X 25k
{
  id: "geek-bar-pulse-x-25k",
  name: "Geek Bar Pulse X (25k Hits) RARE",
  description: "High-capacity 25,000 puff disposable with rare and in-demand flavors.",
  basePrice: 35,
  pricing: [
    { quantity: 1, price: 35, label: "1 for $35" },
    { quantity: 2, price: 60, label: "2 for $60" },
  ],
  flavors: [
     "Grape Slush (PREORDER)",
      "Miami Mint (PREORDER)",
      "Strawberry B-Pop (PREORDER)",
      "Pink & Blue (PREORDER)",
      "Orange Slush (PREORDER)",
      "Blue Rancher (PREORDER)",
    "Sour Straws (PREORDER)",
    "Blackberry B-Pop (PREORDER)",
    "Strawberry Kiwi Ice",
    "White Peach Raspberry (PREORDER)",
    "Strawberry Jam (Jam Edition)",
    "Blackberry Blueberry"
  ],
  status: "in-stock",
  image: "/geekx.jpg",
  category: "nicotine",
},

  // Geek Bar Pulse X 15k
  {
    id: "geek-bar-pulse-15k",
    name: "Geek Bar Pulse (15k Hits) RARE",
    description: "15k puff GeekBar Pulse disposable with multiple exclusive flavors.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 55, label: "2 for $55" },
    ],
    flavors: [
        "Grape Blow Pop (PREORDER)",
        "Miami Mint (PREORDER)",
        "Frozen White Grape (PREORDER)",
        "Frozen Strawberry (PREORDER)",
      "Sour Blue Dust (PREORDER)",
      "Blue Razz Ice (PREORDER)",
            "Orange Mint Savers (PREORDER)",
      "Sour Strawberry (Sour Edition)",
      "Blow Pop",
      "Meta Moon",
      "Frozen Pina Colada (Frozen Edition)",
    ],
    status: "in-stock",
    image: "/geek.jpg",
    category: "nicotine",
  },

  // THC / Dispo - Boutiq V5
  {
    id: "boutiq-v5",
    name: "Boutiq Switch V5",
    description: "Premium THC disposable pod with multiple exotic blends.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 55, label: "2 for $55" },
      { quantity: 10, price: 200, label: "10 for $200" },
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
    image: "/v5.png",
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
      { quantity: 2, price: 50, label: "2 for $50" },
      { quantity: 5, price: 110, label: "5 for $110" },
      { quantity: 10, price: 180, label: "10 for $180" },
    ],
    flavors: [
      "Cherry Limade (OUT OF STOCK)",
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
    status: "in-stock",
    image: "/calis.jpg",
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
    status: "in-stock",
    image: "/bigc.jpg",
    category: "thc",
  },

  // Ace Ultra Premium
  {
    id: "ace-ultra",
    name: "Ace Ultra Premium 2G Disposable",
    description: "Ultra premium THC disposable with luxury flavor blends.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 50, label: "2 for $50" },
      { quantity: 5, price: 110, label: "5 for $110" },
      { quantity: 10, price: 180, label: "10 for $180" },
    ],
    flavors: [
      "Raspberry Kiss – Sativa (OUT OF STOCK)",
      "Berry Burst – Hybrid (OUT OF STOCK)",
      "Cherry Vanilla Sky – Indica (OUT OF STOCK)",
      "Lychee Sorbet – Hybrid (OUT OF STOCK)",
      "Strawberry Dream – Sativa (OUT OF STOCK)",
      "Apple Cooler – Hybrid (OUT OF STOCK)",
      "Citrus Sunset – Hybrid (OUT OF STOCK)",
      "Rose Serenade – Indica (OUT OF STOCK)",
      "Kiwi Berry Mist – Indica (OUT OF STOCK)",
      "Mango Frost – Hybrid (OUT OF STOCK)",
    ],
    status: "sold-out",
    image: "/ace.jpg",
    category: "thc",
  },
// Muha Meds
  {
    id: "new-muha-switch",
    name: "GEN 3 Muha Meds (NEW)",
    description: "New Muha Meds Featuring a New Mini Screen",
    basePrice: 35,
    pricing: [
      { quantity: 1, price: 35, label: "1 for $35" },
      { quantity: 2, price: 60, label: "2 for $60" },
      { quantity: 5, price: 125, label: "5 for $125" },
      { quantity: 10, price: 210, label: "10 for $210" },
    ],
    flavors: [
      "Horchata (I)",
      "Galactic Diesel (I)",
      "Blue Slushie (H)",
      "Sweet Dreams OG (I)",
      "Frozen Pomegranate (S) ",
      "Bubblegum Burst (S)",
      "Habibi (S)",
      "Pineapple Paradise (H)",
     "Watermelon Moonshine (H)",
    
    ],
    status: "in-stock",
    image: "/newha.jpg",
    category: "thc",
  },

  // Muha Meds
  {
    id: "luigi-2g",
    name: "Luigi (Live Resin Liquid Diamonds) 2G + 0.5G Pre-Roll",
    description: "Resin Diamonds 2 Gram Disposable Vape with a premium Cannabis flower Pre-Roll.",
    basePrice: 40,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $35" },
      { quantity: 2, price: 45, label: "2 for $60" },
      { quantity: 5, price: 100, label: "5 for $135" },
      { quantity: 10, price: 180, label: "10 for $220" },
    ],
    flavors: [
      "PRE-ORDERS",
    ],
    status: "pre-order",
    image: "/luigi.jpg",
    category: "thc",
  },

  {
    id: "madlab-2g",
    name: "MadLabs Disposable 2G ",
    description: "Mad Labs Disposable 2G delivers classic flavors with smooth, potent hits and long-lasting effects in a sleek, premium vape device.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 30, label: "1 for $30" },
      { quantity: 2, price: 45, label: "2 for $50" },
      { quantity: 5, price: 100, label: "5 for $110" },
      { quantity: 10, price: 180, label: "10 for $180" },
    ],
    flavors: [
      "PRE-ORDERS",
    ],
    status: "pre-order",
    image: "/madlabs.jpg",
    category: "thc",
  },

  // Devour Sour Edibles
  {
    id: "devour-3k",
    name: "Devour Sour Belts",
    description: "Very potent sour strips classic flavors and 3,000MG THC.",
    basePrice: 30,
    pricing: [
      { quantity: 1, price: 35, label: "1 for $35" },
      { quantity: 2, price: 60, label: "2 for $60" },
      { quantity: 5, price: 125, label: "5 for $125" },
      { quantity: 10, price: 220, label: "10 for $220" },
    ],
    flavors: [
      "Blueberry",
      "Green Apple",
      "Mango",
      "Pineapple",
      "Pink Lemonade",
      "Rainbow",
      "Strawberry",
      "Watermelon",
    ],
    status: "preorder",
    image: "devour.png",
    category: "edibles",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
