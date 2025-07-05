"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Search, Download, Star } from "lucide-react"

export function GoogleSearchIntegration() {
  const googleSearchResults = [
    {
      platform: "Adobe Stock",
      title: "Dairy Meat Images – Browse 178861 Stock Photos",
      description: "Search from thousands of royalty-free Dairy Meat stock images and video for your next project.",
      url: "https://stock.adobe.com/search?k=dairy+meat",
      imageCount: "178,861+",
      quality: "Professional",
      pricing: "From $10",
    },
    {
      platform: "Getty Images",
      title: "2474 Meat And Dairy Products Stock Photos & High-Res Pictures",
      description: "Explore Authentic Meat And Dairy Products Stock Photos & Images For Your Project Or Campaign.",
      url: "https://gettyimages.com/search/2/image?phrase=meat+dairy+products",
      imageCount: "2,474+",
      quality: "Premium",
      pricing: "From $50",
    },
    {
      platform: "Shutterstock",
      title: "Vegetables Fruits Dairy Meat royalty-free images",
      description: "Find Vegetables Fruits Dairy Meat stock images in HD and millions of royalty-free photos.",
      url: "https://shutterstock.com/search/vegetables-fruits-dairy-meat",
      imageCount: "Millions",
      quality: "Professional",
      pricing: "From $10",
    },
    {
      platform: "iStock",
      title: "Fresh Meat And Vegetables Pictures, Images and Stock Photos",
      description: "Browse 1,316,400+ fresh meat and vegetables stock photos and images available.",
      url: "https://istockphoto.com/search/2/image?phrase=fresh+meat+vegetables",
      imageCount: "1,316,400+",
      quality: "Professional",
      pricing: "From $12",
    },
  ]

  const hdSearchTerms = [
    "fresh groceries HD 4K",
    "meat cuts professional photography",
    "dairy products studio lighting",
    "vegetables fruits high resolution",
    "supermarket fresh food HD",
    "butcher shop meat display",
    "farm fresh produce photography",
    "organic food ingredients HD",
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Google Search Results Integration</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Direct access to the stock photo platforms found in your Google search for HD grocery images
        </p>
      </div>

      {/* Original Google Search */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center">
            <Search className="h-6 w-6 mr-2" />
            Your Original Google Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
            <div>
              <h4 className="font-semibold">Search Query:</h4>
              <p className="text-sm text-gray-600 mt-1">"images of groceries, meat, dairy and fresh produce HD"</p>
            </div>
            <Button
              onClick={() =>
                window.open(
                  "https://www.google.com/search?q=images+of+groceries%2C+meat%2C+dairy+and+fresh+produce+HD&udm=2",
                  "_blank",
                )
              }
              className="bg-blue-600 hover:bg-blue-700"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Results
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Top Results from Google Search */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-green-800">Top Results from Your Search</h2>
        <div className="grid gap-6">
          {googleSearchResults.map((result, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg text-green-800">{result.platform}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{result.title}</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-green-100 text-green-800 mb-2">{result.imageCount} Images</Badge>
                    <p className="text-sm font-medium">{result.pricing}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{result.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">{result.quality}</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm">HD Quality</span>
                    </div>
                  </div>
                  <Button onClick={() => window.open(result.url, "_blank")} className="bg-green-600 hover:bg-green-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Browse {result.platform}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced HD Search Terms */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">Enhanced HD Search Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {hdSearchTerms.map((term, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <span className="font-medium">"{term}"</span>
                <Button
                  size="sm"
                  onClick={() => {
                    // Open search in multiple platforms
                    const platforms = [
                      `https://stock.adobe.com/search?k=${encodeURIComponent(term)}`,
                      `https://shutterstock.com/search/${encodeURIComponent(term)}`,
                      `https://istockphoto.com/search/2/image?phrase=${encodeURIComponent(term)}`,
                    ]
                    platforms.forEach((url, i) => {
                      setTimeout(() => window.open(url, "_blank"), i * 500)
                    })
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Search All
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <Download className="h-6 w-6 mr-2" />
            Step-by-Step Implementation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3">1. Select Platform</h4>
              <ul className="text-sm space-y-1">
                <li>• Adobe Stock: Best variety</li>
                <li>• Getty Images: Premium quality</li>
                <li>• Shutterstock: Good value</li>
                <li>• iStock: Large selection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">2. Search & Download</h4>
              <ul className="text-sm space-y-1">
                <li>• Use HD search terms above</li>
                <li>• Select 1920x1080+ resolution</li>
                <li>• Check commercial license</li>
                <li>• Download highest quality</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">3. Optimize & Implement</h4>
              <ul className="text-sm space-y-1">
                <li>• Compress for web (TinyPNG)</li>
                <li>• Organize in folders</li>
                <li>• Update image paths in code</li>
                <li>• Test on all devices</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
