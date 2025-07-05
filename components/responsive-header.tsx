"use client"

import Image from "next/image"
import Link from "next/link"
import { MobileNavigation } from "./mobile-navigation"

interface ResponsiveHeaderProps {
  currentPage?: string
}

export function ResponsiveHeader({ currentPage = "home" }: ResponsiveHeaderProps) {
  const navigationItems = [
    { name: "Home", href: "/", active: currentPage === "home" },
    { name: "About Us", href: "/about", active: currentPage === "about" },
    { name: "Stockvel", href: "/stockvel", active: currentPage === "stockvel" },
    { name: "Contact", href: "/contact", active: currentPage === "contact" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Thuba Tlala Logo" width={50} height={50} />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-green-800">THUBA TLALA</h1>
              <p className="text-sm text-gray-600 hidden lg:block">Fresh • Local • Affordable</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md transition-colors ${
                  item.active
                    ? "text-green-600 font-medium bg-green-50"
                    : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <MobileNavigation currentPage={currentPage} />
        </div>
      </div>
    </header>
  )
}
