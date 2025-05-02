import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 z-0"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Transforming Academic Payments with Blockchain
            </h1>

            <p className="text-xl text-gray-600 max-w-lg">
              Orith streamlines campus financial operations with secure, transparent, and efficient blockchain
              technology built on Stellar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#051ddd] hover:bg-blue-700">
                <Link href="#waitlist">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-800">UL</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-800">FU</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-800">UI</span>
                </div>
              </div>
              <span>Trusted by leading universities across Africa</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-lg">
              {/* App UI mockup */}
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4 bg-[#051ddd]/5 p-4">
                <div className="absolute top-0 left-0 right-0 h-12 bg-[#051ddd] rounded-t-lg flex items-center px-4">
                  <div className="h-3 w-3 rounded-full bg-white opacity-50 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-white opacity-50 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-white opacity-50"></div>
                  <div className="ml-auto text-white text-xs font-medium">Orith Wallet</div>
                </div>
                <div className="mt-12 bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium">Wallet Balance</span>
                    <span className="text-[#051ddd] font-bold">250.00 USDC</span>
                  </div>
                  <div className="mb-6 bg-gray-100 h-20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-bold text-2xl">QR Code</div>
                      <div className="text-xs text-gray-500">Scan to pay</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg flex justify-between items-center">
                      <div>
                        <div className="text-sm font-medium">Tuition Fee</div>
                        <div className="text-xs text-gray-500">Due: 01/15/2023</div>
                      </div>
                      <div className="text-[#051ddd] font-bold">150.00 USDC</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg flex justify-between items-center">
                      <div>
                        <div className="text-sm font-medium">Library Fee</div>
                        <div className="text-xs text-gray-500">Paid: 01/05/2023</div>
                      </div>
                      <div className="text-green-600 font-bold">25.00 USDC</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Tuition Payment</h3>
                    <p className="text-sm text-gray-500">Fall Semester 2023</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Paid</div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-[#051ddd] h-full rounded-full" style={{ width: "100%" }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Amount</span>
                  <span className="font-medium">$2,500 USDC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
