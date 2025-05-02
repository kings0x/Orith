import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <Card className="border-2 border-blue-100 shadow-sm">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-blue-200 mb-4" />
        <p className="text-gray-600 italic">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="w-8 h-1 bg-[#051ddd] mb-4"></div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </CardFooter>
    </Card>
  )
}
