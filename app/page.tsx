"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

export default function SplashPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Thuba Tlala Logo" width={60} height={60} />
            <div>
              <h1 className="text-2xl font-bold text-green-800">THUBA TLALA</h1>
              <p className="text-sm text-green-600">Fresh from Farm to Table</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold text-green-800 mb-6">
                Fresh, Local, <span className="text-orange-500">Affordable</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                A low-cost automated system providing Groceries, Meat, and Frozen Food products directly from local
                farmers and manufacturers. Serving government departments, traders, stockvel groups, and communities
                across South Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Join Our Stockvel
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-green-800">Welcome Back</CardTitle>
                  <CardDescription>Sign in to access fresh, local produce</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={isLogin ? "login" : "register"} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login" onClick={() => setIsLogin(true)}>
                        Login
                      </TabsTrigger>
                      <TabsTrigger value="register" onClick={() => setIsLogin(false)}>
                        Register
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-4 mt-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <Link href="/home" className="block">
                        <Button className="w-full bg-green-600 hover:bg-green-700">Sign In</Button>
                      </Link>
                    </TabsContent>

                    <TabsContent value="register" className="space-y-4 mt-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="regEmail">Email</Label>
                        <Input id="regEmail" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+27 123 456 789" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="regPassword">Password</Label>
                        <div className="relative">
                          <Input
                            id="regPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <Link href="/home" className="block">
                        <Button className="w-full bg-green-600 hover:bg-green-700">Create Account</Button>
                      </Link>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Why Choose Thuba Tlala?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We connect you directly with local farmers and butchers, ensuring fresh, affordable, and ethically sourced
              food for your family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">Farm Fresh</h4>
              <p className="text-gray-600">Direct from local farmers, ensuring maximum freshness and quality</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">Community Driven</h4>
              <p className="text-gray-600">Supporting local economic growth through our Stockvel model</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">Affordable</h4>
              <p className="text-gray-600">Competitive prices through direct sourcing and community buying</p>
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
          <p className="text-green-200">Fresh from Farm to Table - Supporting Local Communities</p>
        </div>
      </footer>
    </div>
  )
}
