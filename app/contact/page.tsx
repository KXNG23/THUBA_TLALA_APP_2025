import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppChatButton } from "@/components/whatsapp-chat-button"
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Users } from "lucide-react"

export default function ContactPage() {
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
              <Link href="/stockvel" className="text-gray-600 hover:text-green-600">
                Stockvel
              </Link>
              <Link href="/contact" className="text-green-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch, MBUMBA!</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Ready to join our community or have questions about our fresh produce packages? We're here to help you start
            saving and eating better.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Phone Contact */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-4 rounded-full">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-green-800">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <p className="text-2xl font-bold text-green-600 mb-4">063 984 4453</p>
                <a href="tel:0639844453">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-green-200">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-4 rounded-full">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-green-800">WhatsApp Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Quick and easy messaging</p>
                <p className="text-2xl font-bold text-green-600 mb-4">063 984 4453</p>
                <a
                  href="https://wa.me/27639844453?text=Hello! I'm interested in learning more about Thuba Tlala's fresh produce and Stockvel packages."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-100 p-4 rounded-full">
                    <Mail className="h-8 w-8 text-orange-600" />
                  </div>
                </div>
                <CardTitle className="text-green-800">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <p className="text-lg font-bold text-orange-600 mb-4">info@thubatlala.com</p>
                <a href="mailto:info@thubatlala.com">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>General Inquiry</option>
                      <option>Join a Stockvel</option>
                      <option>Start a New Stockvel</option>
                      <option>Package Information</option>
                      <option>Delivery Questions</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-800 flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-800 flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Sandton, Johannesburg
                    <br />
                    Gauteng, South Africa
                  </p>
                  <p className="text-sm text-gray-500">
                    We deliver to communities across Johannesburg and surrounding areas.
                  </p>
                </CardContent>
              </Card>

              {/* Community Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-800 flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Join Our Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Connect with other families in your area and start saving on fresh groceries today.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• 500+ Active Stockvels</p>
                    <p>• 2,000+ Happy Families</p>
                    <p>• 50+ Local Suppliers</p>
                    <p>• 30% Average Savings</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and how to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-green-800 mb-2">How do I join a Stockvel?</h3>
                <p className="text-gray-600">
                  Contact us via WhatsApp or phone, and we'll connect you with existing Stockvels in your area or help
                  you start a new one.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-green-800 mb-2">What areas do you deliver to?</h3>
                <p className="text-gray-600">
                  We currently deliver to communities across Johannesburg, Soweto, Alexandra, Tembisa, and surrounding
                  areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-green-800 mb-2">How much can I save?</h3>
                <p className="text-gray-600">
                  Our community members typically save 30-40% on their grocery bills compared to traditional retail
                  prices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-green-800 mb-2">When do deliveries happen?</h3>
                <p className="text-gray-600">
                  Deliveries are scheduled weekly to community pickup points. Specific days depend on your area and
                  Stockvel group.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of families who are already saving money and eating better with Thuba Tlala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27639844453?text=Hello! I'd like to join a Stockvel and start saving on fresh groceries."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start on WhatsApp
              </Button>
            </a>
            <Link href="/stockvel">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 bg-transparent"
              >
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="Thuba Tlala Logo" width={40} height={40} />
                <span className="text-xl font-bold">THUBA TLALA</span>
              </div>
              <p className="text-green-200">
                Connecting communities with fresh, local produce through our innovative Stockvel model.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-200">
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
              <ul className="space-y-2 text-green-200">
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
              <ul className="space-y-2 text-green-200">
                <li>📞 063 984 4453</li>
                <li>📧 info@thubatlala.com</li>
                <li>📍 Sandton, Johannesburg</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
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
