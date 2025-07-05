"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, Check, X, FileImage, Copy } from "lucide-react"

export function ImageUploadHelper() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [currentCategory, setCurrentCategory] = useState("farmers")

  const requiredImages = {
    farmers: [
      "african-woman-farmer-vegetables.jpg",
      "african-man-harvesting-crops.jpg",
      "african-youth-agriculture.jpg",
      "african-cooperative-meeting.jpg",
      "african-farmers-working-fields.jpg",
      "african-farmer-fresh-produce.jpg",
      "african-butcher-fresh-meat.jpg",
    ],
    products: [
      "fresh-spinach-leaves.jpg",
      "ripe-red-tomatoes.jpg",
      "fresh-orange-carrots.jpg",
      "green-cabbage-head.jpg",
      "premium-beef-steak.jpg",
      "fresh-chicken-breast.jpg",
      "lamb-chops-cuts.jpg",
      "pork-ribs-fresh.jpg",
      "red-green-apples.jpg",
      "ripe-yellow-bananas.jpg",
      "fresh-oranges-citrus.jpg",
      "purple-green-grapes.jpg",
      "fresh-milk-bottles.jpg",
      "farm-fresh-eggs.jpg",
      "local-cheese-varieties.jpg",
      "fresh-yogurt-containers.jpg",
    ],
  }

  const generateImageCode = (category: string, filename: string) => {
    const imageName = filename.replace(/\.(jpg|jpeg|png|webp)$/i, "").replace(/-/g, "")
    return `${imageName}: "/images/${category}/${filename}",`
  }

  const copyAllCode = (category: string) => {
    const code = requiredImages[category as keyof typeof requiredImages]
      .map((filename) => generateImageCode(category, filename))
      .join("\n  ")

    navigator.clipboard.writeText(code)
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Image Upload Helper</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track your image upload progress and generate the required code updates
        </p>
      </div>

      {/* Category Selection */}
      <div className="flex justify-center space-x-4">
        <Button
          variant={currentCategory === "farmers" ? "default" : "outline"}
          onClick={() => setCurrentCategory("farmers")}
          className={currentCategory === "farmers" ? "bg-green-600" : ""}
        >
          Farmers ({requiredImages.farmers.length})
        </Button>
        <Button
          variant={currentCategory === "products" ? "default" : "outline"}
          onClick={() => setCurrentCategory("products")}
          className={currentCategory === "products" ? "bg-green-600" : ""}
        >
          Products ({requiredImages.products.length})
        </Button>
      </div>

      {/* Upload Progress */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="capitalize">{currentCategory} Images</CardTitle>
            <Badge className="bg-green-100 text-green-800">
              {uploadedImages.filter((img) => img.startsWith(currentCategory)).length} /{" "}
              {requiredImages[currentCategory as keyof typeof requiredImages].length} Uploaded
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {requiredImages[currentCategory as keyof typeof requiredImages].map((filename, index) => {
              const isUploaded = uploadedImages.includes(`${currentCategory}/${filename}`)
              return (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileImage className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="font-mono text-sm">{filename}</span>
                      <p className="text-xs text-gray-500">
                        /images/{currentCategory}/{filename}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isUploaded ? (
                      <Badge className="bg-green-100 text-green-800">
                        <Check className="h-3 w-3 mr-1" />
                        Uploaded
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        <X className="h-3 w-3 mr-1" />
                        Missing
                      </Badge>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const imageId = `${currentCategory}/${filename}`
                        if (isUploaded) {
                          setUploadedImages((prev) => prev.filter((id) => id !== imageId))
                        } else {
                          setUploadedImages((prev) => [...prev, imageId])
                        }
                      }}
                    >
                      {isUploaded ? "Mark Missing" : "Mark Uploaded"}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Code Generator */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Generated Code for lib/image-sources.ts</CardTitle>
            <Button size="sm" onClick={() => copyAllCode(currentCategory)} className="bg-blue-600 hover:bg-blue-700">
              <Copy className="h-4 w-4 mr-2" />
              Copy Code
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              {`${currentCategory}: {
  ${requiredImages[currentCategory as keyof typeof requiredImages]
    .map((filename) => generateImageCode(currentCategory, filename))
    .join("\n  ")}
},`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Upload Instructions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 text-sm list-decimal list-inside">
              <li>Download HD images from stock photo sites</li>
              <li>Rename files to match the required names exactly</li>
              <li>Create folder structure: public/images/{currentCategory}/</li>
              <li>Upload images to the correct folders</li>
              <li>Mark images as uploaded using the buttons above</li>
              <li>Copy and paste the generated code into lib/image-sources.ts</li>
              <li>Test the website to ensure images load correctly</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-800">File Naming Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold">✅ Correct Format:</h4>
                <p className="font-mono bg-green-50 p-2 rounded">african-woman-farmer-vegetables.jpg</p>
              </div>
              <div>
                <h4 className="font-semibold">❌ Incorrect Format:</h4>
                <p className="font-mono bg-red-50 p-2 rounded">African Woman Farmer Vegetables.JPG</p>
              </div>
              <div>
                <h4 className="font-semibold">Rules:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Use lowercase letters only</li>
                  <li>Use hyphens (-) instead of spaces</li>
                  <li>Use .jpg, .png, or .webp extensions</li>
                  <li>Match the exact filename shown above</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-center space-x-4">
        <Button onClick={() => window.open("/hd-stock-search", "_blank")} className="bg-green-600 hover:bg-green-700">
          Find HD Images
        </Button>
        <Button onClick={() => window.open("/image-optimization", "_blank")} variant="outline">
          Optimize Images
        </Button>
        <Button onClick={() => window.open("https://tinypng.com", "_blank")} variant="outline">
          Compress Images
        </Button>
      </div>
    </div>
  )
}
