"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, DollarSign, Users, Camera, CheckCircle } from "lucide-react"

export function ImageSourcingTool() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("farmers")

  const photoSources = {
    free: [
      {
        name: "Unsplash",
        url: "https://unsplash.com",
        description: "High-quality photos, attribution required",
        searchUrl: "https://unsplash.com/s/photos/",
        pricing: "Free",
        license: "Unsplash License",
      },
      {
        name: "Pexels",
        url: "https://pexels.com",
        description: "Free for commercial use, no attribution required",
        searchUrl: "https://pexels.com/search/",
        pricing: "Free",
        license: "Pexels License",
      },
      {
        name: "Pixabay",
        url: "https://pixabay.com",
        description: "Large selection, free commercial use",
        searchUrl: "https://pixabay.com/images/search/",
        pricing: "Free",
        license: "Pixabay License",
      },
    ],
    premium: [
      {
        name: "Shutterstock",
        url: "https://shutterstock.com",
        description: "Professional quality, model releases included",
        searchUrl: "https://shutterstock.com/search/",
        pricing: "R150-800 per image",
        license: "Standard/Enhanced",
      },
      {
        name: "Getty Images",
        url: "https://gettyimages.com",
        description: "Premium authentic photography",
        searchUrl: "https://gettyimages.com/search/2/image?phrase=",
        pricing: "R800-8000+ per image",
        license: "Royalty-Free/Rights-Managed",
      },
      {
        name: "Adobe Stock",
        url: "https://stock.adobe.com",
        description: "Creative Cloud integration, AI-powered search",
        searchUrl: "https://stock.adobe.com/search?k=",
        pricing: "R150-1200 per image",
        license: "Standard/Extended",
      },
    ],
    specialized: [
      {
        name: "Africa Media Online",
        url: "https://africamediaonline.com",
        description: "Authentic African imagery, supports local photographers",
        searchUrl: "https://africamediaonline.com/search?q=",
        pricing: "Contact for pricing",
        license: "Custom licensing",
      },
      {
        name: "South African Tourism",
        url: "https://southafrica.net",
        description: "Official tourism photography",
        searchUrl: "Contact media@southafrica.net",
        pricing: "May be free for commercial use",
        license: "Contact for terms",
      },
    ],
  }

  const searchTerms = {
    farmers: [
      "South African woman farmer vegetables",
      "African man harvesting crops",
      "Rural farming community South Africa",
      "Traditional African agriculture",
      "Agricultural cooperative Africa",
      "Subsistence farming Africa",
    ],
    produce: [
      "South African farmers market",
      "African fresh vegetables",
      "Traditional African food market",
      "Farm fresh produce Africa",
      "Rural market South Africa",
      "Organic farming South Africa",
    ],
    community: [
      "African community meeting",
      "Rural community gathering South Africa",
      "Traditional African savings group",
      "Community development Africa",
      "Stockvel meeting South Africa",
      "African cooperative society",
    ],
    butchers: [
      "African butcher fresh meat",
      "Traditional meat market Africa",
      "Local butcher South Africa",
      "African meat supplier",
      "Rural butchery South Africa",
      "Traditional African meat preparation",
    ],
  }

  const generateSearchUrl = (source: any, term: string) => {
    return `${source.searchUrl}${encodeURIComponent(term)}`
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">South African Agricultural Photography Sourcing</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find authentic, licensed photos of South African farmers and agricultural workers for Thuba Tlala
        </p>
      </div>

      {/* Category Selection */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="farmers">Farmers</TabsTrigger>
          <TabsTrigger value="produce">Produce</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="butchers">Butchers</TabsTrigger>
        </TabsList>

        {Object.entries(searchTerms).map(([category, terms]) => (
          <TabsContent key={category} value={category}>
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">{category} Search Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {terms.map((term, index) => (
                    <Badge key={index} variant="outline" className="p-2 justify-start">
                      "{term}"
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Photo Sources */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <Camera className="h-6 w-6 mr-2" />
            Free Stock Photography
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {photoSources.free.map((source, index) => (
              <Card key={index} className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg">{source.name}</CardTitle>
                  <Badge className="bg-green-100 text-green-800 w-fit">{source.pricing}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{source.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium">License: {source.license}</p>
                    <div className="flex flex-col gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => window.open(source.url, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit {source.name}
                      </Button>
                      {searchTerms[selectedCategory as keyof typeof searchTerms].slice(0, 1).map((term, termIndex) => (
                        <Button
                          key={termIndex}
                          size="sm"
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => window.open(generateSearchUrl(source, term), "_blank")}
                        >
                          Search: "{term.slice(0, 20)}..."
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <DollarSign className="h-6 w-6 mr-2" />
            Premium Stock Photography
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {photoSources.premium.map((source, index) => (
              <Card key={index} className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg">{source.name}</CardTitle>
                  <Badge className="bg-orange-100 text-orange-800 w-fit">{source.pricing}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{source.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium">License: {source.license}</p>
                    <div className="flex flex-col gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => window.open(source.url, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit {source.name}
                      </Button>
                      {searchTerms[selectedCategory as keyof typeof searchTerms].slice(0, 1).map((term, termIndex) => (
                        <Button
                          key={termIndex}
                          size="sm"
                          className="w-full bg-orange-600 hover:bg-orange-700"
                          onClick={() => window.open(generateSearchUrl(source, term), "_blank")}
                        >
                          Search: "{term.slice(0, 20)}..."
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <Users className="h-6 w-6 mr-2" />
            Specialized African Photography
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {photoSources.specialized.map((source, index) => (
              <Card key={index} className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg">{source.name}</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 w-fit">{source.pricing}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{source.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium">License: {source.license}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => window.open(source.url, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit {source.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Licensing Checklist */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <CheckCircle className="h-6 w-6 mr-2" />
            Licensing Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Before Purchasing:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Commercial use rights verified
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Model releases included
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Property releases checked
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Attribution requirements noted
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Documentation to Keep:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  License agreement saved
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Receipt/invoice stored
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Image metadata recorded
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Usage rights summarized
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Planning */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-800">Budget Planning Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border rounded-lg border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Free Options</h4>
              <p className="text-2xl font-bold text-green-600 mb-2">R0</p>
              <p className="text-sm text-gray-600">Good quality, limited selection</p>
            </div>
            <div className="text-center p-4 border rounded-lg border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-2">Premium Stock</h4>
              <p className="text-2xl font-bold text-orange-600 mb-2">R150-800</p>
              <p className="text-sm text-gray-600">Professional quality, model releases</p>
            </div>
            <div className="text-center p-4 border rounded-lg border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Custom Photography</h4>
              <p className="text-2xl font-bold text-blue-600 mb-2">R15,000+</p>
              <p className="text-sm text-gray-600">Completely authentic, exclusive</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
