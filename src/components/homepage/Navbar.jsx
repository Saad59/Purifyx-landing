"use client"

import { useEffect, useState } from "react"
import Header from "./header"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="relative">
      <Header />
      <div
        className={cn("fixed w-full z-50 transtion-all duration-100 shadow-sm", scrolled ? "bg-white  top-0" : "top-16 sm:top-8", mobileMenuOpen && "bg-white")}
      >
        <div className="mx-auto max-w-[1300px] px-4 md:px-6 xl:px-8 2xl:px-0">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/Logo.svg"
                alt="PurifyX Logo"
                width={120}
                height={36}
                className="w-[120px]"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-between w-full">
              <div className="flex items-center gap-8 mx-auto">
                <Link href="/" className="text-text-color font-semibold text-[16px] leading-[150%] hover:text-gray-900">
                  Link One
                </Link>
                <Link href="/" className="text-text-color font-semibold text-[16px] leading-[150%] hover:text-gray-900">
                  Link Two
                </Link>
                <Link href="/" className="text-text-color font-semibold text-[16px] leading-[150%] hover:text-gray-900">
                  Link Three
                </Link>
                <div className="flex items-center gap-1 cursor-pointer group">
                  <Link href="/" className="group-hover:text-gray-900 transition-colors text-text-color font-semibold text-[16px] leading-[150%]">
                    Link Four
                  </Link>
                  <ChevronDown className="h-4 w-4 group-hover:text-gray-900 transition-colors text-text-color font-semibold text-[16px] leading-[150%]" />
                </div>
              </div>

              {/* Desktop CTA Buttons */}
              <div className="flex items-center gap-4">
                <Button className="hidden sm:inline-flex text-text-color py-2 px-5 border border-text-color rounded-sm text-[16px] leading-[150%]">
                  Request Demo
                </Button>
                <a href="https://app.purifyx.ai/signup" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary-600 hover:bg-primary-600/90 rounded-sm text-[16px] leading-[150%] py-2 px-5 text-white">Sign Up</Button>
                </a>
              </div>
            </div>

            {/* Mobile CTA Buttons and Menu Toggle */}
            <div className="flex items-center gap-4 lg:hidden">
              <a href="https://app.purifyx.ai/signup" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary-600 hover:bg-primary-600/90 rounded-sm text-[16px] leading-[150%] py-2 px-5 text-white">Sign Up</Button>
              </a>
              <button className="flex items-center justify-center" onClick={toggleMobileMenu} aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6 text-text-color" /> : <Menu className="h-6 w-6 text-gray-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-4 border-t">
            <div className="flex flex-col space-y-4 px-4 sm:px-6 lg:px-8 xl:px-[200px]">
              <Link
                href="/"
                className="text-text-color font-semibold text-[16px] leading-[150%] hover:text-gray-900 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Link One
              </Link>
              <Link
                href="/"
                className="text-text-color font-semibold text-[16px] leading-[150%] hover:text-gray-900 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Link Two
              </Link>
              <Link
                href="/"
                className="text-text-color font-semibold text-[16px] leading-[150%] hover:text-gray-900 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Link Three
              </Link>
              <Link
                href="/"
                className="text-text-color font-semibold text-[16px] leading-[150%] hover:text-gray-900 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Link Four
              </Link>
              <Button variant="outline" className="w-full">
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
