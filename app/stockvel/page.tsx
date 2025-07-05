import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WhatsAppChatButton } from "@/components/whatsapp-chat-button"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Truck, Heart, Star, ShoppingCart, MessageCircle, Phone, Mail } from "lucide-react"
import { imageConfig, getProductImage, getFruitImage } from "@/lib/image-sources"

export default function StockvelPage() {
  const packages = [
    {
      id: "starter",
      name: "Starter Package",
      price: "R650",
      originalPrice: "R800",
      savings: "R150",
      description: "Perfect for small families or couples starting their fresh food journey",
      features: [
        "3kg Mixed Fresh Vegetables",
        "2kg Premium Meat Selection",
        "1kg Seasonal Fruits",
        "Basic Dairy Bundle (Milk, Eggs)",
        "Standard Weekly Delivery",
        "Community Support Group Access",
      ],
      popular: false,
      image: getFruitImage("mixed"),
      idealFor: "2-3 people",
      deliveryDay: "Saturdays",
    },
    {
      id: "family",
      name: "Family Package",
      price: "R1,200",
      originalPrice: "R1,500",
      savings: "R300",
      description: "Our most popular choice for families who want fresh, quality groceries",
      features: [
        "5kg Mixed Fresh Vegetables",
        "3kg Premium Meat Selection",
        "2kg Seasonal Fruits",
        "Complete Dairy & Bread Bundle",
        "Priority Weekly Delivery",
        "Family Nutrition Guide",
        "24/7 WhatsApp Support",
      ],
      popular: true,
      image: getProductImage("mixedProducts"),
      idealFor: "4-6 people",
      deliveryDay: "Fridays",
    },
    {
      id: "community",
      name: "Community Package",
      price: "R2,800",
      originalPrice: "R3,500",
      savings: "R700",
      description: "Perfect for extended families or small communities sharing together",
      features: [
        "25kg Mixed Fresh Vegetables",
        "15kg Premium Meat Selection",
        "10kg Seasonal Fruits",
        "Bulk Dairy & Staples Package",
        "Priority Express Delivery",
        "Dedicated Account Manager",
        "Custom Order Flexibility",
        "Community Leader Training",
      ],
      popular: false,
      image: getProductImage("bulkProducts"),
      idealFor: "10-15 people",
      deliveryDay: "Thursdays",
    },
    {
      id: "premium",
      name: "Premium Package",
      price: "R4,500",
      originalPrice: "R5,800",
      savings: "R1,300",
      description: "Ultimate package for large communities and organizations",
      features: [
        "50kg Mixed Fresh Vegetables",
        "30kg Premium Meat & Poultry",
        "20kg Seasonal Fruits",
        "Complete Grocery Essentials",
        "Same-Day Delivery Available",
        "Personal Shopping Assistant",
        "Bulk Discount Negotiations",
        "Monthly Menu Planning",
        "Quality Guarantee Insurance",
      ],
      popular: false,
      image: imageConfig.grocery.modernAisle,
      idealFor: "20+ people",
      deliveryDay: "Wednesdays",
    },
  ]

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community Strength",
      description: "Join forces with neighbors to unlock wholesale pricing and build lasting relationships.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Quality Guaranteed",
      description: "Every item is hand-selected for freshness. 100% satisfaction or money back.",
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Reliable Delivery",
      description: "Fresh produce delivered weekly to your community pickup point on schedule.",
    },
  ]

  const testimonials = [
    {
      name: "Nomsa Mthembu",
      location: "Soweto, Johannesburg",
      package: "Family Package",
      rating: 5,
      comment:
        "Our family saves R300 every week! The vegetables are so fresh, and the meat quality is excellent. MBUMBA would be proud of how we're eating now!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Nkomo",
      location: "Alexandra, Johannesburg",
      package: "Community Package",
      rating: 5,
      comment:
        "Our Stockvel of 12 families loves this service. We get wholesale prices and support local farmers. It's a win-win!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Grace Dlamini",
      location: "Tembisa, Ekurhuleni",
      package: "Premium Package",
      rating: 5,
      comment:
        "Managing food for our community center is now so easy. Thuba Tlala delivers quality and saves us money every month.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Thuba Tlala Logo" width={50} height={50} />
              <div>
                <h1 className="text-xl font-bold text-green-800">THUBA TLALA</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600">
                About Us
              </Link>
              <Link href="/stockvel" className="text-green-600 font-medium">
                Stockvel
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-green-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Stockvel Packages for MBUMBA</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Choose the perfect package for your family or community. Save money, eat better, and support local farmers
            through our innovative Stockvel model.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-orange-500 text-white px-6 py-3 text-lg">Save up to 40%</Badge>
            <Badge className="bg-white text-green-700 px-6 py-3 text-lg">Fresh Weekly Delivery</Badge>
            <Badge className="bg-green-500 text-white px-6 py-3 text-lg">Local Farmers</Badge>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Why Choose Our Stockvel Model?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the power of community buying and transform how your family accesses fresh, quality food.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Choose Your Perfect Package</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All packages include fresh, locally-sourced produce with guaranteed quality and weekly delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative hover:shadow-xl transition-all ${
                  pkg.popular ? "ring-2 ring-orange-500 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-orange-500 text-white px-4 py-2 text-sm font-medium">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={`${pkg.name} - Fresh groceries and produce`}
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto mb-4 object-cover h-48 w-full"
                  />
                  <CardTitle className="text-2xl text-green-800">{pkg.name}</CardTitle>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-green-600">{pkg.price}</span>
                      <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800 mb-2">Save {pkg.savings}</Badge>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>👥 {pkg.idealFor}</span>
                      <span>📅 {pkg.deliveryDay}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Link href="/subscription">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Select This Package
                      </Button>
                    </Link>
                    <a
                      href={`https://wa.me/27639844453?text=Hello! I'm interested in the ${pkg.name} (${pkg.price}). Can you tell me more about this package?`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Ask About This Package
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">How Our Stockvel Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to start saving money and eating better with your community.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Choose Package</h3>
              <p className="text-gray-600 text-sm">Select the perfect package for your family or community size.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Join or Create</h3>
              <p className="text-gray-600 text-sm">Join an existing Stockvel or start a new one in your area.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Weekly Orders</h3>
              <p className="text-gray-600 text-sm">We source fresh produce from local farmers every week.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Fresh Delivery</h3>
              <p className="text-gray-600 text-sm">Receive your fresh groceries at your community pickup point.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">What Our Community Says</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from families and communities who are saving money and eating better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-green-800">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600">{testimonial.location}</p>
                      <Badge className="bg-orange-100 text-orange-800 text-xs mt-1">{testimonial.package}</Badge>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving, MBUMBA?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of South African families who are eating better and spending less. Start your Stockvel
            journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27639844453?text=Hello! I'm ready to join a Stockvel and start saving on fresh groceries. Can you help me get started?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start on WhatsApp
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us: 063 984 4453
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-green-200 max-w-2xl mx-auto">
              Our team is here to help you find the perfect package for your family or community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-8 w-8 text-orange-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-green-200 mb-4">Speak directly with our team</p>
              <a href="tel:0639844453" className="text-orange-300 hover:text-orange-200 font-medium">
                063 984 4453
              </a>
            </div>

            <div>
              <MessageCircle className="h-8 w-8 text-orange-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-green-200 mb-4">Quick and easy messaging</p>
              <a
                href="https://wa.me/27639844453"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-orange-200 font-medium"
              >
                Chat Now
              </a>
            </div>

            <div>
              <Mail className="h-8 w-8 text-orange-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-green-200 mb-4">Send us a detailed message</p>
              <a href="mailto:info@thubatlala.com" className="text-orange-300 hover:text-orange-200 font-medium">
                info@thubatlala.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="Thuba Tlala Logo" width={40} height={40} />
                <span className="text-xl font-bold">THUBA TLALA</span>
              </div>
              <p className="text-gray-400">
                Connecting South African communities with fresh, affordable produce through collective buying power.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
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
              <ul className="space-y-2 text-gray-400">
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
              <ul className="space-y-2 text-gray-400">
                <li>📞 063 984 4453</li>
                <li>📧 info@thubatlala.com</li>
                <li>📍 Sandton, Johannesburg</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
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
