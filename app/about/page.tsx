import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResponsiveHeader } from "@/components/responsive-header"
import { WhatsAppChatButton } from "@/components/whatsapp-chat-button"
import Image from "next/image"
import Link from "next/link"
import { Users, Heart, Leaf, TrendingUp, Award, MapPin } from "lucide-react"
import { imageConfig, getProductImage } from "@/lib/image-sources"

export default function AboutPage() {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community First",
      description: "We believe in the power of community and collective buying to create positive change.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Quality & Care",
      description: "Every product is carefully selected and sourced from trusted local suppliers.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Sustainability",
      description: "Supporting local farmers and reducing food miles for a healthier planet.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Economic Growth",
      description: "Empowering local communities through fair trade and economic opportunities.",
    },
  ]

  const stats = [
    { number: "500+", label: "Active Stockvels" },
    { number: "2,000+", label: "Happy Families" },
    { number: "50+", label: "Local Suppliers" },
    { number: "30%", label: "Average Savings" },
  ]

  const team = [
    {
      name: "Nomsa Mthembu",
      role: "Community Coordinator",
      image: imageConfig.community.groceryTeam,
      description: "Connecting families with fresh, affordable produce",
    },
    {
      name: "Thabo Nkomo",
      role: "Supply Chain Manager",
      image: imageConfig.community.modernWorker,
      description: "Ensuring quality and timely delivery",
    },
    {
      name: "Lerato Dlamini",
      role: "Farmer Relations",
      image: imageConfig.community.produceVendors,
      description: "Building partnerships with local farmers",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Responsive Header */}
      <ResponsiveHeader currentPage="about" />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Empowering Communities Through Fresh Food
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-8">
                Thuba Tlala connects South African communities with local farmers and suppliers, making fresh, quality
                produce accessible and affordable through our innovative Stockvel model.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-orange-500 text-white px-4 py-2 text-sm md:text-lg">Community Driven</Badge>
                <Badge className="bg-white text-green-700 px-4 py-2 text-sm md:text-lg">Locally Sourced</Badge>
                <Badge className="bg-green-500 text-white px-4 py-2 text-sm md:text-lg">Affordable</Badge>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/logo.png"
                alt="Thuba Tlala - Empowering Communities Through Fresh Food"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl object-contain bg-white p-6 md:p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              To revolutionize how South African communities access fresh, quality food by connecting them directly with
              local farmers and suppliers through collective buying power.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-6">What We Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Quality Assurance</h4>
                    <p className="text-gray-600">Every product meets our strict quality standards</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Local Sourcing</h4>
                    <p className="text-gray-600">Supporting South African farmers and suppliers</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Community Building</h4>
                    <p className="text-gray-600">Strengthening bonds through shared purchasing</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src={getProductImage("mixedProducts") || "/placeholder.svg"}
                alt="Diverse selection of fresh produce, meats, and grocery items"
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment to the communities we serve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              See how we're making a difference in South African communities
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-300 mb-2">{stat.number}</div>
                <div className="text-green-100 text-sm md:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals working to connect communities with fresh, quality food
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover w-24 h-24 md:w-32 md:h-32"
                  />
                  <CardTitle className="text-green-800 text-lg md:text-xl">{member.name}</CardTitle>
                  <p className="text-orange-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm md:text-base">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Start saving money and supporting local farmers today. Join a Stockvel or create your own!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stockvel">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-6 md:px-8 py-3 w-full sm:w-auto"
              >
                Explore Stockvel Packages
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-6 md:px-8 py-3 bg-transparent w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="Thuba Tlala Logo" width={40} height={40} />
                <span className="text-lg md:text-xl font-bold">THUBA TLALA</span>
              </div>
              <p className="text-green-200 text-sm md:text-base">
                Connecting communities with fresh, local produce through our innovative Stockvel model.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-200 text-sm md:text-base">
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
              <ul className="space-y-2 text-green-200 text-sm md:text-base">
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
              <ul className="space-y-2 text-green-200 text-sm md:text-base">
                <li>📞 063 984 4453</li>
                <li>📧 info@thubatlala.com</li>
                <li>📍 Sandton, Johannesburg</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-green-200 text-sm md:text-base">
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
