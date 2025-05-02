import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-[#051ddd]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Ready to Transform Campus Payments?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl">
            Join the growing number of institutions and students using Orith to streamline financial operations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-[#051ddd] hover:bg-blue-50">
              <Link href="#waitlist">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-blue-800">
              <Link href="#waitlist">Join Waitlist</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
