"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Search, ShoppingCart, Beef, Apple, Milk } from "lucide-react"

export function TargetedStockSearch() {
  const [selectedCategory, setSelectedCategory] = useState("groceries")

  // Based on the Google search results you provided
  const stockPhotoSources = [
    {
      name: "Adobe Stock",
      url: "https://stock.adobe.com",
      searchUrl: "https://stock.adobe.com/search?k=",
      description: "178,861+ dairy and meat stock photos",
      pricing: "From $10/image",
      quality: "Professional",
      license: "Standard/Extended",
      color: "red",
    },
    {
      name: "Getty Images",
      url: "https://gettyimages.com",
      searchUrl: "https://gettyimages.com/search/2/image?phrase=",
      description: "2,474+ meat and dairy product photos",
      pricing: "From $50/image",
      quality: "Premium",
      license: "Royalty-Free/Rights-Managed",
      color: "blue",
    },
    {
      name: "Shutterstock",
      url: "https://shutterstock.com",
      searchUrl: "https://shutterstock.com/search/",
      description: "Vegetables, fruits, dairy, meat royalty-free",
      pricing: "From $10/image",
      quality: "Professional",
      license: "Standard/Enhanced",
      color: "green",
    },
    {
      name: "iStock",
      url: "https://istockphoto.com",
      searchUrl: "https://istockphoto.com/search/2/image?phrase=",
      description: "1,316,400+ fresh meat and vegetables",
      pricing: "From $12/image",
      quality: "Professional",
      license: "Standard/Extended",
      color: "purple",
    },
  ]

  // Optimized search terms based on your Google search
  const searchCategories = {
    groceries: {
      title: "Fresh Groceries & Produce",
      icon: <ShoppingCart className="h-5 w-5" />,
      terms: [
        "fresh groceries HD",
        "grocery store produce",
        "fresh vegetables market",
        "organic produce display",
        "supermarket fresh food",
        "farm fresh groceries",
        "healthy food ingredients",
        "fresh food photography",
      ],
    },
    meat: {
      title: "Fresh Meat & Poultry",
      icon: <Beef className="h-5 w-5" />,
      terms: [
        "fresh meat cuts HD",
        "butcher shop meat",
        "raw meat photography",
        "beef steak cuts",
        "chicken breast fresh",
        "pork cuts butcher",
        "lamb meat fresh",
        "meat market display",
      ],
    },
    dairy: {
      title: "Dairy Products",
      icon: <Milk className="h-5 w-5" />,
      terms: [
        "dairy products HD",
        "fresh milk bottles",
        "cheese varieties",
        "yogurt containers",
        "farm fresh eggs",
        "dairy supermarket",
        "milk and cheese",
        "dairy farm products",
      ],
    },
    produce: {
      title: "Fresh Fruits & Vegetables",
      icon: <Apple className="h-5 w-5" />,
      terms: [
        "fresh produce HD",
        "vegetables and fruits",
        "organic vegetables",
        "fresh fruit display",
        "farmers market produce",
        "colorful vegetables",
        "seasonal fruits",
        "healthy fresh food",
      ],
    },
  }

  const generateSearchUrl = (source: any, term: string) => {
    return `${source.searchUrl}${encodeURIComponent(term)}`
  }

  const openAllSearches = (term: string) => {
    stockPhotoSources.forEach((source, index) => {
      setTimeout(() => {
        window.open(generateSearchUrl(source, term), "_blank")
      }, index * 800) // Stagger to avoid popup blockers
    })
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">HD Grocery Stock Photos</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access high-quality stock photos from the top platforms for groceries, meat, dairy, and fresh produce
        </p>
      </div>

      {/* Quick Access to Google Search Results */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center">
            <Search className="h-6 w-6 mr-2" />
            Based on Your Google Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Top Results Found:</h4>
              <ul className="text-sm space-y-1">
                <li>• Adobe Stock: 178,861+ dairy & meat photos</li>
                <li>• Getty Images: 2,474+ meat & dairy products</li>
                <li>• Shutterstock: Vegetables, fruits, dairy, meat</li>
                <li>• iStock: 1,316,400+ fresh meat & vegetables</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Search Term Used:</h4>
              <Badge className="bg-blue-100 text-blue-800 mb-3">
                "images of groceries, meat, dairy and fresh produce HD"
              </Badge>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() =>
                  window.open(
                    "https://www.google.com/search?q=images+of+groceries%2C+meat%2C+dairy+and+fresh+produce+HD&udm=2",
                    "_blank",
                  )
                }
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Google Search Results
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="groceries" className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Groceries
          </TabsTrigger>
          <TabsTrigger value="meat" className="flex items-center gap-2">
            <Beef className="h-4 w-4" />
            Meat
          </TabsTrigger>
          <TabsTrigger value="dairy" className="flex items-center gap-2">
            <Milk className="h-4 w-4" />
            Dairy
          </TabsTrigger>
          <TabsTrigger value="produce" className="flex items-center gap-2">
            <Apple className="h-4 w-4" />
            Produce
          </TabsTrigger>
        </TabsList>

        {Object.entries(searchCategories).map(([category, data]) => (
          <TabsContent key={category} value={category}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {data.icon}
                  {data.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {data.terms.map((term, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div>
                        <span className="font-medium">"{term}"</span>
                        <p className="text-xs text-gray-500 mt-1">HD quality stock photos</p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => openAllSearches(term)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Search All
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Stock Photo Platforms */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-green-800">Premium Stock Photo Platforms</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stockPhotoSources.map((source, index) => (
            <Card key={index} className={`border-${source.color}-200 hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{source.name}</CardTitle>
                  <Badge className={`bg-${source.color}-100 text-${source.color}-800`}>Premium</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{source.description}</p>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="font-medium">Pricing:</span>
                    <span>{source.pricing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Quality:</span>
                    <span>{source.quality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">License:</span>
                    <span>{source.license}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => window.open(source.url, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit {source.name}
                  </Button>

                  {searchCategories[selectedCategory as keyof typeof searchCategories].terms
                    .slice(0, 1)
                    .map((term, termIndex) => (
                      <Button
                        key={termIndex}
                        size="sm"
                        className={`w-full bg-${source.color}-600 hover:bg-${source.color}-700 text-white`}
                        onClick={() => window.open(generateSearchUrl(source, term), "_blank")}
                      >
                        <Search className="h-4 w-4 mr-2" />
                        Search: "{term.slice(0, 12)}..."
                      </Button>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Specific HD Search Recommendations */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">HD Quality Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3">For Thuba Tlala Hero Images:</h4>
              <ul className="text-sm space-y-1">
                <li>• "African farmers market HD"</li>
                <li>• "fresh produce display HD"</li>
                <li>• "farm to table concept HD"</li>
                <li>• "community farming Africa HD"</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For Product Showcases:</h4>
              <ul className="text-sm space-y-1">
                <li>• "fresh vegetables isolated HD"</li>
                <li>• "premium meat cuts HD"</li>
                <li>• "dairy products white background HD"</li>
                <li>• "seasonal fruits collection HD"</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For Community Sections:</h4>
              <ul className="text-sm space-y-1">
                <li>• "African community gathering HD"</li>
                <li>• "stockvel meeting South Africa HD"</li>
                <li>• "rural cooperation Africa HD"</li>
                <li>• "farmers cooperative HD"</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Download and Implementation Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-800">Implementation Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">1. Image Selection Process:</h4>
              <ol className="text-sm space-y-2 list-decimal list-inside">
                <li>Use search terms above to find HD images</li>
                <li>Select images with 1920x1080+ resolution</li>
                <li>Ensure commercial license is included</li>
                <li>Download highest quality available</li>
                <li>Check model releases for people photos</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-3">2. File Organization:</h4>
              <ol className="text-sm space-y-2 list-decimal list-inside">
                <li>Create folders: groceries, meat, dairy, produce</li>
                <li>Use descriptive filenames (e.g., fresh-vegetables-hd-01.jpg)</li>
                <li>Keep original and optimized versions</li>
                <li>Document source and license info</li>
                <li>Update image paths in Thuba Tlala code</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
