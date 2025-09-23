"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Are your products authentic?",
    answer:
      "Yes, we guarantee 100% authentic products from trusted manufacturers. All our products come with quality assurance and are sourced directly from authorized distributors.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "We offer free standard shipping on all orders, which typically takes 3-5 business days. We also provide expedited shipping options for faster delivery if needed.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on unopened products. If you're not satisfied with your purchase, you can return it for a full refund within 30 days of delivery.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes! We offer special pricing for bulk orders. For example, our Off-Stamp X Cube Crystal 35K is priced at 1 for $30 or 2 for $50, saving you money on multiple units.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's tracking page.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and other secure payment methods through our trusted payment partner Sellpass for safe and secure transactions.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within the United States. We're working on expanding our shipping options to serve international customers in the future.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@vapehub.com, phone at +1 (555) VAPE-HUB, or through our contact form. We're available Monday-Friday 9 AM-8 PM EST.",
  },
]

export function FAQAccordion() {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-2 pb-4">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
