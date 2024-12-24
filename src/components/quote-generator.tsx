"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
]

export function QuoteGenerator() {
  const [quote, setQuote] = useState<(typeof quotes)[0] | null>(null)
  const [loading, setLoading] = useState(false)

  const generateQuote = () => {
    setLoading(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length)
      setQuote(quotes[randomIndex])
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    generateQuote()
  }, [])

  return (
    <Card className="w-full max-w-md">
      <CardContent className="pt-6">
        {quote ? (
          <div className="text-center">
            <p className="text-lg mb-2">"{quote.text}"</p>
            <p className="text-sm text-muted-foreground">- {quote.author}</p>
          </div>
        ) : (
          <p className="text-center">Generate a quote for motivation!</p>
        )}
        <div className="mt-4 flex justify-center">
          <Button onClick={generateQuote} disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            New Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
