"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Add event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Orith Logo" width={120} height={40} className="h-10 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">
            How It Works
          </Link>
          <Link href="#for-students" className="text-sm font-medium hover:text-blue-600 transition-colors">
            For Students
          </Link>
          <Link href="#for-institutions" className="text-sm font-medium hover:text-blue-600 transition-colors">
            For Institutions
          </Link>
          <Link href="#waitlist" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Join Waitlist
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="bg-[#051ddd] hover:bg-blue-700 hidden md:flex">
            <Link href="#waitlist">Get Started</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#features" className="text-lg font-medium hover:text-blue-600 transition-colors">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-lg font-medium hover:text-blue-600 transition-colors">
                  How It Works
                </Link>
                <Link href="#for-students" className="text-lg font-medium hover:text-blue-600 transition-colors">
                  For Students
                </Link>
                <Link href="#for-institutions" className="text-lg font-medium hover:text-blue-600 transition-colors">
                  For Institutions
                </Link>
                <Link href="#waitlist" className="text-lg font-medium hover:text-blue-600 transition-colors">
                  Join Waitlist
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button asChild className="bg-[#051ddd] hover:bg-blue-700">
                    <Link href="#waitlist">Get Started</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
