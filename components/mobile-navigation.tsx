"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { Menu, Home, Users, Package, Phone, MessageCircle } from "lucide-react"

interface MobileNavigationProps {
  currentPage?: string
}

export function MobileNavigation({ currentPage = "home" }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    {
      name: "Home",
      href: "/",
      icon: <Home className="h-5 w-5" />,
      active: currentPage === "home",
    },
    {
      name: "About Us",
      href: "/about",
      icon: <Users className="h-5 w-5" />,
      active: currentPage === "about",
    },
    {
      name: "Stockvel Packages",
      href: "/stockvel",
      icon: <Package className="h-5 w-5" />,
      active: currentPage === "stockvel",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Phone className="h-5 w-5" />,
      active: currentPage === "contact",
    },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="p-2">
            <Menu className="h-6 w-6 text-green-800" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 bg-white">
          <SheetHeader className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image src="/logo.png" alt="Thuba Tlala Logo" width={40} height={40} />
                <div>
                  <SheetTitle className="text-lg font-bold text-green-800">THUBA TLALA</SheetTitle>
                  <p className="text-sm text-gray-600">Fresh • Local • Affordable</p>
                </div>
              </div>
            </div>
          </SheetHeader>

          <div className="py-6">
            {/* Welcome Message */}
            <div className="mb-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm font-medium text-green-800">Welcome, MBUMBA! 👋</p>
              <p className="text-xs text-green-600">Discover fresh produce from local farmers</p>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    item.active
                      ? "bg-green-100 text-green-800 font-medium"
                      : "text-gray-700 hover:bg-gray-100 hover:text-green-700"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="mt-8 space-y-3">
              <div className="px-4">
                <p className="text-sm font-medium text-gray-800 mb-3">Quick Actions</p>
              </div>

              <a
                href="https://wa.me/27639844453?text=Hello! I'm interested in learning more about Thuba Tlala's fresh produce and Stockvel packages."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center space-x-3 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/stockvel"
                onClick={handleLinkClick}
                className="flex items-center space-x-3 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Package className="h-5 w-5" />
                <span>Browse Packages</span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 px-4 py-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium text-gray-800 mb-2">Contact Info</p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>📞 063 984 4453</p>
                <p>📧 info@thubatlala.com</p>
                <p>📍 Sandton, Johannesburg</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
