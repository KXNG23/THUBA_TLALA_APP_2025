"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, CreditCard, Smartphone, Building2, Shield, Mail, Phone } from "lucide-react"

export default function SubscriptionPage() {
  const [selectedPackage, setSelectedPackage] = useState("2")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const packages = {
    "1": {
      name: "Essential Family Pack",
      price: "R450",
      features: ["2kg Mixed Vegetables", "1kg Fresh Meat", "1kg Seasonal Fruits"],
    },
    "2": {
      name: "Premium Family Pack",
      price: "R750",
      features: ["4kg Mixed Vegetables", "2kg Premium Meat", "2kg Seasonal Fruits"],
    },
    "3": {
      name: "Community Bulk Pack",
      price: "R1200",
      features: ["8kg Mixed Vegetables", "4kg Premium Meat", "3kg Seasonal Fruits"],
    },
    "4": {
      name: "Enterprise Pack",
      price: "R2500",
      features: ["20kg Mixed Vegetables", "10kg Premium Meat", "8kg Seasonal Fruits"],
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to confirmation page
      window.location.href = "/confirmation"
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/stockvel" className="flex items-center space-x-2 text-green-600 hover:text-green-700">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Packages</span>
            </Link>
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Thuba Tlala Logo" width={40} height={40} />
              <span className="text-xl font-bold text-green-800">THUBA TLALA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-800 mb-4">Complete Your Subscription</h1>
            <p className="text-gray-600">Join our Stockvel community and start receiving fresh, local produce</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Subscription Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Package Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </span>
                      <span>Select Package</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage}>
                      {Object.entries(packages).map(([id, pkg]) => (
                        <div key={id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value={id} id={`package-${id}`} />
                          <Label htmlFor={`package-${id}`} className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-green-800">{pkg.name}</h4>
                                <p className="text-sm text-gray-600 mt-1">{pkg.features.slice(0, 2).join(", ")}...</p>
                              </div>
                              <span className="text-lg font-bold text-orange-600">{pkg.price}/month</span>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </span>
                      <span>Personal Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="idNumber">ID Number *</Label>
                      <Input id="idNumber" required />
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </span>
                      <span>Delivery Address</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input id="address" required />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input id="city" required />
                      </div>
                      <div>
                        <Label htmlFor="province">Province *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select province" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gauteng">Gauteng</SelectItem>
                            <SelectItem value="western-cape">Western Cape</SelectItem>
                            <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                            <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                            <SelectItem value="free-state">Free State</SelectItem>
                            <SelectItem value="limpopo">Limpopo</SelectItem>
                            <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                            <SelectItem value="north-west">North West</SelectItem>
                            <SelectItem value="northern-cape">Northern Cape</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code *</Label>
                        <Input id="postalCode" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="deliveryNotes">Delivery Instructions (Optional)</Label>
                      <Textarea id="deliveryNotes" placeholder="Any special delivery instructions..." />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </span>
                      <span>Payment Method</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <CreditCard className="h-5 w-5 text-green-600" />
                              <div>
                                <h4 className="font-semibold">Credit/Debit Card</h4>
                                <p className="text-sm text-gray-600">Secure payment via Visa, Mastercard</p>
                              </div>
                            </div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="eft" id="eft" />
                          <Label htmlFor="eft" className="flex-1 cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <Building2 className="h-5 w-5 text-green-600" />
                              <div>
                                <h4 className="font-semibold">EFT/Bank Transfer</h4>
                                <p className="text-sm text-gray-600">Direct bank transfer</p>
                              </div>
                            </div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value="mobile" id="mobile" />
                          <Label htmlFor="mobile" className="flex-1 cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <Smartphone className="h-5 w-5 text-green-600" />
                              <div>
                                <h4 className="font-semibold">Mobile Wallet</h4>
                                <p className="text-sm text-gray-600">PayFast, YOCO, SnapScan</p>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2">
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input id="expiryDate" placeholder="MM/YY" required />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input id="cvv" placeholder="123" required />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="cardName">Name on Card *</Label>
                          <Input id="cardName" required />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Terms and Conditions */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                          I agree to the{" "}
                          <Link href="#" className="text-green-600 hover:underline">
                            Terms and Conditions
                          </Link>{" "}
                          and
                          <Link href="#" className="text-green-600 hover:underline ml-1">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="marketing" />
                        <Label htmlFor="marketing" className="text-sm leading-relaxed">
                          I would like to receive updates about new products and special offers
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Complete Subscription"}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">
                      {packages[selectedPackage as keyof typeof packages].name}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {packages[selectedPackage as keyof typeof packages].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between">
                      <span>Monthly Subscription</span>
                      <span>{packages[selectedPackage as keyof typeof packages].price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span className="text-orange-600">
                        {packages[selectedPackage as keyof typeof packages].price}/month
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-blue-800 text-sm">Secure Payment</h5>
                        <p className="text-xs text-blue-600 mt-1">
                          Your payment information is encrypted and secure. You'll receive email confirmation and
                          invoices automatically.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span>Email confirmation sent</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>SMS delivery updates</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Shield className="h-4 w-4" />
                      <span>Automatic invoicing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src="/logo.png" alt="Thuba Tlala Logo" width={40} height={40} />
            <span className="text-xl font-bold">THUBA TLALA</span>
          </div>
          <p className="text-green-200">Fresh from Farm to Table - Serving Communities, Government & Traders</p>
        </div>
      </footer>
    </div>
  )
}
