"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Download, Search, Copy, CheckCircle, ImageIcon } from "lucide-react"

export function FreeStockImageFinder() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("farmers")
  const [copiedUrl, setCopiedUrl] = useState("")

  const freeStockSites = [
    {
      name: "Unsplash",
      url: "https://unsplash.com",
      searchUrl: "https://unsplash.com/s/photos/",
      description: "High-quality photos, free for commercial use",
      license: "Unsplash License",
      attribution: "Photographer credit recommended",
      quality: "Excellent",
      selection: "Large",
      color: "blue",
    },
    {
      name: "Pexels",
      url: "https://pexels.com",
      searchUrl: "https://pexels.com/search/",
      description: "Free for commercial use, no attribution required",
      license: "Pexels License",
      attribution: "Not required",
      quality: "Excellent",
      selection: "Large",
      color: "green",
    },
    {
      name: "Pixabay",
      url: "https://pixabay.com",
      searchUrl: "https://pixabay.com/images/search/",
      description: "Large collection, free commercial use",
      license: "Pixabay License",
      attribution: "Not required",
      quality: "Good",
      selection: "Very Large",
      color: "orange",
    },
    {
      name: "Burst by Shopify",
      url: "https://burst.shopify.com",
      searchUrl: "https://burst.shopify.com/search?q=",
      description: "Free stock photos for commercial use",
      license: "CC0",
      attribution: "Not required",
      quality: "Good",
      selection: "Medium",
      color: "purple",
    },
    {
      name: "StockVault",
      url: "https://stockvault.net",
      searchUrl: "https://stockvault.net/search/",
      description: "Free graphics and photos",
      license: "Various",
      attribution: "Check individual images",
      quality: "Mixed",
      selection: "Large",
      color: "red",
    },
    {
      name: "Freepik",
      url: "https://freepik.com",
      searchUrl: "https://freepik.com/search?query=",
      description: "Free with attribution, premium available",
      license: "Freepik License",
      attribution: "Required for free use",
      quality: "Excellent",
      selection: "Very Large",
      color: "teal",
    },
  ]

  const searchCategories = {
    farmers: {
      title: "African Farmers & Agricultural Workers",
      terms: [
        "African farmer woman vegetables",
        "South African agriculture",
        "African man farming",
        "rural farming Africa",
        "traditional African farming",
        "African agricultural worker",
        "subsistence farming Africa",
        "African woman harvesting",
        "rural African community",
        "African cooperative farming",
      ],
    },
    vegetables: {
      title: "Fresh Vegetables & Produce",
      terms: [
        "fresh vegetables market",
        "African vegetables",
        "organic vegetables",
        "farm fresh produce",
        "vegetable harvest",
        "green leafy vegetables",
        "tomatoes fresh",
        "carrots organic",
        "spinach leaves",
        "cabbage fresh",
      ],
    },
    meat: {
      title: "Fresh Meat & Butchers",
      terms: [
        "fresh meat cuts",
        "butcher shop",
        "beef steak",
        "chicken breast",
        "lamb chops",
        "meat market",
        "African butcher",
        "fresh poultry",
        "meat display",
        "traditional butchery",
      ],
    },
    fruits: {
      title: "Fresh Fruits",
      terms: [
        "fresh fruits",
        "African fruits",
        "seasonal fruits",
        "fruit market",
        "apples fresh",
        "bananas ripe",
        "oranges citrus",
        "grapes fresh",
        "fruit harvest",
        "tropical fruits",
      ],
    },
    dairy: {
      title: "Dairy Products",
      terms: [
        "fresh milk",
        "farm eggs",
        "dairy products",
        "cheese varieties",
        "yogurt fresh",
        "milk bottles",
        "farm fresh eggs",
        "dairy farm",
        "milk production",
        "cheese making",
      ],
    },
    community: {
      title: "Community & Stockvel",
      terms: [
        "African community meeting",
        "rural community",
        "community gathering",
        "African people meeting",
        "village meeting",
        "community development",
        "African group discussion",
        "rural cooperation",
        "community support",
        "African teamwork",
      ],
    },
  }

  const generateSearchUrl = (site: any, term: string) => {
    return `${site.searchUrl}${encodeURIComponent(term)}`
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedUrl(url)
    setTimeout(() => setCopiedUrl(""), 2000)
  }

  const openMultipleSearches = (term: string) => {
    freeStockSites.slice(0, 3).forEach((site, index) => {
      setTimeout(() => {
        window.open(generateSearchUrl(site, term), "_blank")
      }, index * 500) // Stagger the opening to avoid popup blockers
    })
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Free Stock Image Finder</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find and source free stock images for Thuba Tlala from the best free photography platforms
        </p>
      </div>

      {/* Quick Search */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <Search className="h-6 w-6 mr-2" />
            Quick Multi-Site Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Enter search term (e.g., African farmer vegetables)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={() => searchTerm && openMultipleSearches(searchTerm)}
              className="bg-green-600 hover:bg-green-700"
              disabled={!searchTerm}
            >
              Search All Sites
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            This will open search results in the top 3 free stock photo sites simultaneously
          </p>
        </CardContent>
      </Card>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="farmers">Farmers</TabsTrigger>
          <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
          <TabsTrigger value="meat">Meat</TabsTrigger>
          <TabsTrigger value="fruits">Fruits</TabsTrigger>
          <TabsTrigger value="dairy">Dairy</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        {Object.entries(searchCategories).map(([category, data]) => (
          <TabsContent key={category} value={category}>
            <Card>
              <CardHeader>
                <CardTitle>{data.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {data.terms.map((term, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <span className="text-sm font-medium">"{term}"</span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(term)}
                          className="h-8 w-8 p-0"
                        >
                          {copiedUrl === term ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => openMultipleSearches(term)}
                          className="bg-green-600 hover:bg-green-700 h-8 px-3"
                        >
                          Search
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Free Stock Photo Sites */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-green-800">Free Stock Photo Platforms</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeStockSites.map((site, index) => (
            <Card key={index} className={`border-${site.color}-200 hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{site.name}</CardTitle>
                  <Badge className={`bg-${site.color}-100 text-${site.color}-800`}>Free</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{site.description}</p>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="font-medium">License:</span>
                    <span>{site.license}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Attribution:</span>
                    <span>{site.attribution}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Quality:</span>
                    <span>{site.quality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Selection:</span>
                    <span>{site.selection}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => window.open(site.url, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit {site.name}
                  </Button>

                  {searchCategories[selectedCategory as keyof typeof searchCategories].terms
                    .slice(0, 1)
                    .map((term, termIndex) => (
                      <Button
                        key={termIndex}
                        size="sm"
                        className={`w-full bg-${site.color}-600 hover:bg-${site.color}-700 text-white`}
                        onClick={() => window.open(generateSearchUrl(site, term), "_blank")}
                      >
                        <Search className="h-4 w-4 mr-2" />
                        Search: "{term.slice(0, 15)}..."
                      </Button>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Download Instructions */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center">
            <Download className="h-6 w-6 mr-2" />
            Download Instructions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Step-by-Step Process:</h4>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Click search buttons above to find relevant images</li>
                <li>Browse results and select high-quality images</li>
                <li>Check license requirements for each image</li>
                <li>Download images in highest available resolution</li>
                <li>Save to organized folders by category</li>
                <li>Keep track of attribution requirements</li>
                <li>Optimize images for web use (resize, compress)</li>
                <li>Upload to your project's image directory</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Image Requirements:</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Resolution:</strong> Minimum 1200x800px
                </li>
                <li>
                  <strong>Format:</strong> JPG or PNG preferred
                </li>
                <li>
                  <strong>Aspect Ratio:</strong> 3:2 or 4:3 for products
                </li>
                <li>
                  <strong>File Size:</strong> Under 2MB before optimization
                </li>
                <li>
                  <strong>Quality:</strong> Sharp, well-lit, professional
                </li>
                <li>
                  <strong>Content:</strong> Authentic, culturally appropriate
                </li>
                <li>
                  <strong>People:</strong> Natural poses, diverse representation
                </li>
                <li>
                  <strong>Products:</strong> Fresh, appealing appearance
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommended Folder Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <ImageIcon className="h-6 w-6 mr-2" />
            Recommended Folder Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <div className="space-y-1">
              <div>📁 public/images/</div>
              <div className="ml-4">📁 farmers/</div>
              <div className="ml-8">🖼️ african-woman-farmer-01.jpg</div>
              <div className="ml-8">🖼️ african-man-harvesting-02.jpg</div>
              <div className="ml-8">🖼️ farming-community-03.jpg</div>
              <div className="ml-4">📁 products/</div>
              <div className="ml-8">📁 vegetables/</div>
              <div className="ml-12">🖼️ fresh-spinach-01.jpg</div>
              <div className="ml-12">🖼️ ripe-tomatoes-02.jpg</div>
              <div className="ml-8">📁 meat/</div>
              <div className="ml-12">🖼️ beef-cuts-01.jpg</div>
              <div className="ml-12">🖼️ chicken-fresh-02.jpg</div>
              <div className="ml-8">📁 fruits/</div>
              <div className="ml-8">📁 dairy/</div>
              <div className="ml-4">📁 community/</div>
              <div className="ml-8">🖼️ stockvel-meeting-01.jpg</div>
              <div className="ml-8">🖼️ community-gathering-02.jpg</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attribution Tracker */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-yellow-800">Attribution Tracker Template</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white p-4 rounded border">
            <h4 className="font-semibold mb-2">Copy this template to track your image sources:</h4>
            <div className="bg-gray-100 p-3 rounded text-sm font-mono">
              <div>Image: filename.jpg</div>
              <div>Source: Unsplash/Pexels/etc.</div>
              <div>Photographer: [Name]</div>
              <div>URL: [Original URL]</div>
              <div>License: [License Type]</div>
              <div>Attribution Required: Yes/No</div>
              <div>Downloaded: [Date]</div>
              <div>Used In: [Page/Section]</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
