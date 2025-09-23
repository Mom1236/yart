// Sellpass integration utilities
export interface SellpassItem {
  name: string
  price: number
  quantity: number
  description?: string
}

export interface SellpassCheckoutData {
  items: SellpassItem[]
  total: number
  currency: string
  customerEmail?: string
  successUrl?: string
  cancelUrl?: string
}

export function createSellpassCheckoutUrl(data: SellpassCheckoutData, storeId: string): string {
  // Replace with your actual Sellpass store ID
  const baseUrl = `https://sellpass.io/checkout/${storeId}`

  // Create URL parameters for the checkout
  const params = new URLSearchParams({
    total: data.total.toString(),
    currency: data.currency,
    items: JSON.stringify(data.items),
  })

  if (data.customerEmail) {
    params.append("email", data.customerEmail)
  }

  if (data.successUrl) {
    params.append("success_url", data.successUrl)
  }

  if (data.cancelUrl) {
    params.append("cancel_url", data.cancelUrl)
  }

  return `${baseUrl}?${params.toString()}`
}

export function formatSellpassItem(name: string, flavor: string, price: number, quantity: number): SellpassItem {
  return {
    name: `${name} - ${flavor}`,
    price: price,
    quantity: quantity,
    description: `Premium vape product - ${flavor} flavor`,
  }
}
