"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FolderOpen, Code, CheckCircle, AlertCircle, FileImage, Download, Settings, Eye } from "lucide-react"

export function ImageImplementationGuide() {
  const [currentStep, setCurrentStep] = useState(1)

  const missingImages = [
    {
      category: "Farmers",
      files: [
        "african-woman-farmer-vegetables.jpg",
        "african-man-harvesting-crops.jpg",
        "african-youth-agriculture.jpg",
        "african-cooperative-meeting.jpg",
        "african-farmers-working-fields.jpg",
        "african-farmer-fresh-produce.jpg",
        "african-butcher-fresh-meat.jpg",
      ],
      folder: "public/images/farmers/",
      usage: "About page, hero sections, community stories",
    },
    {
      category: "Vegetables",
      files: [
        "fresh-spinach-leaves.jpg",
        "ripe-red-tomatoes.jpg",
        "fresh-orange-carrots.jpg",
        "green-cabbage-head.jpg",
        "mixed-vegetable-box.jpg",
        "vegetable-assortment-display.jpg",
      ],
      folder: "public/images/products/",
      usage: "Product showcase, home page, stockvel packages",
    },
    {
      category: "Meat",
      files: [
        "premium-beef-steak.jpg",
        "fresh-chicken-breast.jpg",
        "lamb-chops-cuts.jpg",
        "pork-ribs-fresh.jpg",
        "fresh-beef-cuts-display.jpg",
        "free-range-chicken.jpg",
        "premium-meat-selection.jpg",
      ],
      folder: "public/images/products/",
      usage: "Product cards, featured items, meat category",
    },
    {
      category: "Fruits",
      files: [
        "red-green-apples.jpg",
        "ripe-yellow-bananas.jpg",
        "fresh-oranges-citrus.jpg",
        "purple-green-grapes.jpg",
        "seasonal-fruit-mix.jpg",
        "fresh-fruit-display.jpg",
      ],
      folder: "public/images/products/",
      usage: "Fruit section, seasonal promotions, health content",
    },
    {
      category: "Dairy",
      files: [
        "fresh-milk-bottles.jpg",
        "farm-fresh-eggs.jpg",
        "local-cheese-varieties.jpg",
        "fresh-yogurt-containers.jpg",
        "dairy-products-display.jpg",
      ],
      folder: "public/images/products/",
      usage: "Dairy section, nutrition content, farm partnerships",
    },
  ]

  const implementationSteps = [
    {
      step: 1,
      title: "Create Folder Structure",
      description: "Set up the proper directory structure for your images",
      icon: <FolderOpen className="h-5 w-5" />,
      code: `mkdir -p public/images/{farmers,products,hero,community}
mkdir -p public/images/products/{vegetables,meat,fruits,dairy}`,
    },
    {
      step: 2,
      title: "Download & Organize Images",
      description: "Download HD images from stock photo sites and organize them",
      icon: <Download className="h-5 w-5" />,
      code: `# Download from Adobe Stock, Shutterstock, etc.
# Rename files to match the required names
# Place in appropriate folders`,
    },
    {
      step: 3,
      title: "Optimize Images",
      description: "Compress and optimize images for web performance",
      icon: <Settings className="h-5 w-5" />,
      code: `# Use TinyPNG.com or Squoosh.app
# Target file sizes:
# - Hero images: < 500KB
# - Product images: < 200KB  
# - Thumbnails: < 100KB`,
    },
    {
      step: 4,
      title: "Update Image Paths",
      description: "Replace placeholder URLs with actual image paths",
      icon: <Code className="h-5 w-5" />,
      code: `// In lib/image-sources.ts
export const imageConfig = {
  farmers: {
    womanWithVegetables: "/images/farmers/african-woman-farmer-vegetables.jpg",
    // ... other images
  }
}`,
    },
    {
      step: 5,
      title: "Test Implementation",
      description: "Verify all images load correctly across the site",
      icon: <Eye className="h-5 w-5" />,
      code: `npm run dev
# Check all pages:
# - Home page product showcase
# - About page farmer photos  
# - Stockvel page category images`,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Add Missing Images to Thuba Tlala</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Step-by-step guide to implement real images in your Thuba Tlala grocery app
        </p>
      </div>

      {/* Progress Steps */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">Implementation Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            {implementationSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.step ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {currentStep > step.step ? <CheckCircle className="h-5 w-5" /> : step.step}
                </div>
                {index < implementationSteps.length - 1 && (
                  <div className={`w-16 h-1 mx-2 ${currentStep > step.step ? "bg-green-600" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              onClick={() => setCurrentStep(Math.min(currentStep + 1, 5))}
              className="bg-green-600 hover:bg-green-700 mr-2"
              disabled={currentStep === 5}
            >
              Next Step
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(currentStep - 1, 1))}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Current Step Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {implementationSteps[currentStep - 1].icon}
            Step {currentStep}: {implementationSteps[currentStep - 1].title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{implementationSteps[currentStep - 1].description}</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">{implementationSteps[currentStep - 1].code}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Missing Images Checklist */}
      <Tabs defaultValue="farmers">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="farmers">Farmers</TabsTrigger>
          <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
          <TabsTrigger value="meat">Meat</TabsTrigger>
          <TabsTrigger value="fruits">Fruits</TabsTrigger>
          <TabsTrigger value="dairy">Dairy</TabsTrigger>
        </TabsList>

        {missingImages.map((category) => (
          <TabsContent key={category.category.toLowerCase()} value={category.category.toLowerCase()}>
            <Card>
              <CardHeader>
                <CardTitle>{category.category} Images</CardTitle>
                <p className="text-sm text-gray-600">
                  <strong>Folder:</strong> {category.folder} | <strong>Used in:</strong> {category.usage}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileImage className="h-5 w-5 text-gray-400" />
                        <span className="font-mono text-sm">{file}</span>
                      </div>
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        Missing
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Images
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Get HD images from the stock photo platforms we identified</p>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open("/hd-stock-search", "_blank")}
            >
              Open HD Stock Search
            </Button>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Step-by-step guide for adding images to your project</p>
            <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => setCurrentStep(1)}>
              Start Implementation
            </Button>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="text-orange-800 flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Optimize Images
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Compress and optimize your downloaded images</p>
            <Button
              className="w-full bg-orange-600 hover:bg-orange-700"
              onClick={() => window.open("/image-optimization", "_blank")}
            >
              Optimization Guide
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* File Structure Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-800">Required File Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <div className="space-y-1">
              <div>📁 public/</div>
              <div className="ml-4">📁 images/</div>
              <div className="ml-8">📁 farmers/</div>
              <div className="ml-12">🖼️ african-woman-farmer-vegetables.jpg</div>
              <div className="ml-12">🖼️ african-man-harvesting-crops.jpg</div>
              <div className="ml-12">🖼️ african-youth-agriculture.jpg</div>
              <div className="ml-12">🖼️ african-cooperative-meeting.jpg</div>
              <div className="ml-12">🖼️ african-farmers-working-fields.jpg</div>
              <div className="ml-12">🖼️ african-farmer-fresh-produce.jpg</div>
              <div className="ml-12">🖼️ african-butcher-fresh-meat.jpg</div>
              <div className="ml-8">📁 products/</div>
              <div className="ml-12">🖼️ fresh-spinach-leaves.jpg</div>
              <div className="ml-12">🖼️ ripe-red-tomatoes.jpg</div>
              <div className="ml-12">🖼️ premium-beef-steak.jpg</div>
              <div className="ml-12">🖼️ fresh-chicken-breast.jpg</div>
              <div className="ml-12">🖼️ red-green-apples.jpg</div>
              <div className="ml-12">🖼️ fresh-milk-bottles.jpg</div>
              <div className="ml-12">🖼️ farm-fresh-eggs.jpg</div>
              <div className="ml-12">... (and more product images)</div>
              <div className="ml-8">📁 hero/</div>
              <div className="ml-12">🖼️ fresh-produce-display.jpg</div>
              <div className="ml-12">🖼️ farm-to-table-concept.jpg</div>
              <div className="ml-12">🖼️ stockvel-community-gathering.jpg</div>
              <div className="ml-8">📁 community/</div>
              <div className="ml-12">🖼️ african-stockvel-meeting.jpg</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Update Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-800">Code Updates Required</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="image-config">
            <TabsList>
              <TabsTrigger value="image-config">Image Config</TabsTrigger>
              <TabsTrigger value="component-usage">Component Usage</TabsTrigger>
              <TabsTrigger value="next-config">Next.js Config</TabsTrigger>
            </TabsList>

            <TabsContent value="image-config">
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">{`// lib/image-sources.ts
export const imageConfig = {
  farmers: {
    womanWithVegetables: "/images/farmers/african-woman-farmer-vegetables.jpg",
    manHarvesting: "/images/farmers/african-man-harvesting-crops.jpg",
    youthInAgriculture: "/images/farmers/african-youth-agriculture.jpg",
    cooperativeMeeting: "/images/farmers/african-cooperative-meeting.jpg",
    farmersInField: "/images/farmers/african-farmers-working-fields.jpg",
    farmerWithProduce: "/images/farmers/african-farmer-fresh-produce.jpg",
    butcherWithMeat: "/images/farmers/african-butcher-fresh-meat.jpg",
  },
  vegetables: {
    spinach: "/images/products/fresh-spinach-leaves.jpg",
    tomatoes: "/images/products/ripe-red-tomatoes.jpg",
    carrots: "/images/products/fresh-orange-carrots.jpg",
    cabbage: "/images/products/green-cabbage-head.jpg",
    mixedVegetables: "/images/products/mixed-vegetable-box.jpg",
    vegetableAssortment: "/images/products/vegetable-assortment-display.jpg",
  },
  // ... continue for meat, fruits, dairy
}`}</pre>
              </div>
            </TabsContent>

            <TabsContent value="component-usage">
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">{`// In your React components
import { imageConfig } from "@/lib/image-sources"

// Replace placeholder with real image
<Image
  src={imageConfig.vegetables.spinach || "/placeholder.svg"}
  alt="Fresh spinach leaves from local farms"
  width={300}
  height={200}
  className="rounded-lg"
/>`}</pre>
              </div>
            </TabsContent>

            <TabsContent value="next-config">
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">{`// next.config.js (if using external images)
module.exports = {
  images: {
    domains: ['your-cdn-domain.com'], // if using CDN
    formats: ['image/webp', 'image/avif'],
  },
}`}</pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-yellow-800 flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Common Issues & Solutions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-yellow-800">Images not loading?</h4>
              <p className="text-sm text-gray-600">
                • Check file paths are correct (case-sensitive) • Ensure images are in the public/ folder • Verify file
                extensions match (.jpg, .png, .webp)
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-800">Slow loading times?</h4>
              <p className="text-sm text-gray-600">
                • Compress images using TinyPNG or Squoosh • Use WebP format when possible • Implement lazy loading
                (already included in Next.js Image)
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-800">Images look pixelated?</h4>
              <p className="text-sm text-gray-600">
                • Download higher resolution versions (1920x1080+) • Use appropriate sizes for different screen sizes •
                Check image quality settings during compression
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
