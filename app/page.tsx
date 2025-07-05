"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResponsiveHeader } from "@/components/responsive-header"
import { WhatsAppChatButton } from "@/components/whatsapp-chat-button"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Users, Truck, Heart, Star, CheckCircle, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { imageConfig, getProductImage, getFruitImage } from "@/lib/image-sources"

export default function HomePage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const packages = [
    {
      id: "family",
      name: "Family Package",
      price: "R1,200",
      originalPrice: "R1,500",
      savings: "R300",
      description: "Perfect for families of 4-6 people",
      features: [
        "5kg Mixed Vegetables",
        "3kg Fresh Meat Selection",
        "2kg Seasonal Fruits",
        "Dairy & Bread Bundle",
        "Free Delivery",
      ],
      popular: true,
      image: getProductImage("mixedProducts"),
    },
    {
      id: "community",
      name: "Community Package",
      price: "R2,800",
      originalPrice: "R3,500",
      savings: "R700",
      description: "Ideal for 10-12 families sharing",
      features: [
        "25kg Mixed Vegetables",
        "15kg Premium Meat Selection",
        "10kg Seasonal Fruits",
        "Bulk Dairy & Staples",
        "Priority Delivery",
      ],
      popular: false,
      image: getProductImage("bulkProducts"),
    },
    {
      id: "starter",
      name: "Starter Package",
      price: "R650",
      originalPrice: "R800",
      savings: "R150",
      description: "Great for small families or couples",
      features: [
        "3kg Mixed Vegetables",
        "2kg Fresh Meat",
        "1kg Seasonal Fruits",
        "Basic Dairy Bundle",
        "Standard Delivery",
      ],
      popular: false,
      image: getFruitImage("mixed"),
    },
  ]

  const features = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community Buying Power",
      description: "Join with neighbors to unlock wholesale prices and save up to 40% on fresh groceries.",
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Fresh Direct Delivery",
      description: "Farm-fresh produce delivered directly to your community pickup point weekly.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Quality Guaranteed",
      description: "Every item is hand-selected for freshness and quality. 100% satisfaction guaranteed.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-500" />,
      title: "Local Support",
      description: "Supporting South African farmers and suppliers while strengthening local communities.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Mthembu",
      location: "Soweto, Johannesburg",
      rating: 5,
      comment:
        "Thuba Tlala has transformed how our community shops for groceries. The quality is amazing and we save so much money!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Nkomo",
      location: "Alexandra, Johannesburg",
      rating: 5,
      comment: "Fresh vegetables, great prices, and reliable delivery. Our Stockvel loves working with Thuba Tlala!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Grace Dlamini",
      location: "Tembisa, Ekurhuleni",
      rating: 5,
      comment: "The community package feeds our entire extended family. Quality meat and vegetables every week!",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Responsive Header */}
      <ResponsiveHeader currentPage="home" />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge className="bg-orange-500 text-white px-4 py-2 text-sm md:text-lg mb-4">Welcome MBUMBA! 👋</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
                Fresh Food, <span className="text-orange-300">Fair Prices</span>
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-8">
                Join South Africa's fastest-growing community buying network. Get farm-fresh produce delivered to your
                neighborhood at wholesale prices through our innovative Stockvel model.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/stockvel">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Browse Packages
                  </Button>
                </Link>
                <a
                  href="https://wa.me/27639844453?text=Hello! I'm interested in learning more about Thuba Tlala's fresh produce packages."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-transparent w-full sm:w-auto"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src={imageConfig.hero.modernGrocery || "/placeholder.svg"}
                alt="Fresh produce and quality groceries from Thuba Tlala"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-4 md:h-6 w-4 md:w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">Quality Guaranteed</p>
                    <p className="text-xs md:text-sm text-gray-600">Farm-fresh daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Why Choose Thuba Tlala?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing how South African communities access fresh, affordable groceries through the power
              of collective buying.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-4 md:p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Choose Your Package</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the perfect package for your family or community. All packages include fresh, locally-sourced
              produce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative hover:shadow-xl transition-all cursor-pointer ${
                  pkg.popular ? "ring-2 ring-orange-500 scale-105" : ""
                } ${selectedPackage === pkg.id ? "ring-2 ring-green-500" : ""}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={`${pkg.name} - Fresh groceries and produce`}
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto mb-4 object-cover h-40 md:h-48 w-full"
                  />
                  <CardTitle className="text-xl md:text-2xl text-green-800">{pkg.name}</CardTitle>
                  <p className="text-gray-600 text-sm md:text-base">{pkg.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-2xl md:text-3xl font-bold text-green-600">{pkg.price}</span>
                      <span className="text-base md:text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Save {pkg.savings}</Badge>
                  </div>

                  <ul className="space-y-2 md:space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/subscription">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Select Package</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">What Our Community Says</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied families across South Africa who are saving money and eating better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-green-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic text-sm md:text-base">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Saving, MBUMBA?</h2>
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of South African families who are eating better and spending less through our community
            buying program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stockvel">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-6 md:px-8 py-3 w-full sm:w-auto"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse All Packages
              </Button>
            </Link>
            <a
              href="https://wa.me/27639844453?text=Hello! I'd like to join a Stockvel and start saving on fresh groceries."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-6 md:px-8 py-3 bg-transparent w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-green-200 mb-8">
                Have questions about our packages or want to start a Stockvel in your community? We're here to help!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-300" />
                  <span>063 984 4453</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-300" />
                  <span>info@thubatlala.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-300" />
                  <span>Sandton, Johannesburg</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-6">Quick Contact</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
                  ></textarea>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="Thuba Tlala Logo" width={40} height={40} />
                <span className="text-lg md:text-xl font-bold">THUBA TLALA</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                Connecting South African communities with fresh, affordable produce through collective buying power.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/stockvel" className="hover:text-white">
                    Stockvel Packages
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link href="#" className="hover:text-white">
                    Fresh Meat
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Vegetables
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Fruits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Dairy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>📞 063 984 4453</li>
                <li>📧 info@thubatlala.com</li>
                <li>📍 Sandton, Johannesburg</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>
              &copy; 2024 Thuba Tlala. All rights reserved. Supporting local communities through fresh, affordable food.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat Button */}
      <WhatsAppChatButton />
    </div>
  )
}
