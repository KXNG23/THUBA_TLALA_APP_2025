import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Check, Mail, Phone, Truck, Heart } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Thuba Tlala Logo" width={50} height={50} />
              <span className="text-2xl font-bold text-green-800">THUBA TLALA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Success Message */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to Our Stockvel Community!</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your subscription has been successfully processed. You're now part of a community that supports local
              farmers while enjoying fresh, affordable produce.
            </p>
          </div>

          {/* Subscription Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">Subscription Confirmation</CardTitle>
              <CardDescription>Order #TT-2024-001234</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-green-800 mb-4">Package Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span className="font-medium">Premium Family Pack</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Cost:</span>
                      <span className="font-medium text-orange-600">R750</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next Billing:</span>
                      <span className="font-medium">January 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-green-800 mb-4">Delivery Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Frequency:</span>
                      <span className="font-medium">Bi-weekly</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next Delivery:</span>
                      <span className="font-medium">January 8, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee:</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time Window:</span>
                      <span className="font-medium">8AM - 6PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-green-800">Check Your Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  We've sent a confirmation email with your subscription details and invoice to your registered email
                  address.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">SMS Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  You'll receive SMS notifications about delivery schedules, package updates, and important
                  announcements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-green-800">First Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Your first delivery is scheduled for January 8, 2025. We'll contact you 24 hours before to confirm the
                  time.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Package Contents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-green-800">Your Premium Family Pack Includes</CardTitle>
              <CardDescription>Fresh, locally-sourced produce delivered bi-weekly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Fresh Produce</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">4kg Mixed Seasonal Vegetables</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">2kg Premium Meat Selection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">2kg Seasonal Fresh Fruits</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">1kg Dairy Products & Eggs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Additional Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Priority Customer Support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Recipe Cards & Cooking Tips</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Flexible Delivery Scheduling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Community Member Benefits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Message */}
          <Card className="bg-gradient-to-r from-green-50 to-orange-50 border-green-200">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You for Supporting Local Agriculture</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                By joining our Stockvel, you're not just getting fresh produce – you're supporting local farmers,
                strengthening communities, and promoting sustainable agriculture practices. Together, we're making a
                difference!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/home">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Go to Dashboard
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    Contact Support
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-4">Important Information</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
              <div>
                <h4 className="font-medium mb-2">Delivery Guidelines:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Please ensure someone is available during delivery window</li>
                  <li>• We'll call 30 minutes before arrival</li>
                  <li>• Delivery includes insulated packaging for freshness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Subscription Management:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• You can modify your subscription anytime</li>
                  <li>• Pause deliveries when traveling</li>
                  <li>• Cancel with 7 days notice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src="/logo.png" alt="Thuba Tlala Logo" width={40} height={40} />
            <span className="text-xl font-bold">THUBA TLALA</span>
          </div>
          <p className="text-green-200">Fresh from Farm to Table - Serving Communities, Government & Traders</p>
          <div className="mt-4 space-x-4">
            <Link href="/contact" className="text-green-200 hover:text-white text-sm">
              Contact Support
            </Link>
            <Link href="#" className="text-green-200 hover:text-white text-sm">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-green-200 hover:text-white text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
