"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Smartphone, Monitor, FileImage, Scissors, Palette, ExternalLink } from "lucide-react"

export function ImageOptimizationGuide() {
  const optimizationTools = [
    {
      name: "TinyPNG",
      url: "https://tinypng.com",
      description: "Compress PNG and JPG images",
      type: "Compression",
      free: true,
    },
    {
      name: "Squoosh",
      url: "https://squoosh.app",
      description: "Google's image optimization tool",
      type: "Compression & Format",
      free: true,
    },
    {
      name: "BIRME",
      url: "https://birme.net",
      description: "Bulk Image Resize Made Easy",
      type: "Batch Resize",
      free: true,
    },
    {
      name: "Canva",
      url: "https://canva.com",
      description: "Design and resize images",
      type: "Design & Resize",
      free: "Freemium",
    },
  ]

  const imageSizes = {
    hero: {
      desktop: "1920x1080px",
      mobile: "800x600px",
      description: "Large banner images",
    },
    product: {
      desktop: "600x400px",
      mobile: "400x300px",
      description: "Product showcase images",
    },
    thumbnail: {
      desktop: "300x200px",
      mobile: "200x150px",
      description: "Small preview images",
    },
    profile: {
      desktop: "400x400px",
      mobile: "200x200px",
      description: "People and farmer photos",
    },
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Image Optimization Guide</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Optimize your downloaded images for web performance and mobile compatibility
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="text-center border-green-200">
          <CardContent className="p-4">
            <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-800">70%</div>
            <div className="text-sm text-gray-600">Faster Loading</div>
          </CardContent>
        </Card>
        <Card className="text-center border-blue-200">
          <CardContent className="p-4">
            <Smartphone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-800">50%</div>
            <div className="text-sm text-gray-600">Less Mobile Data</div>
          </CardContent>
        </Card>
        <Card className="text-center border-orange-200">
          <CardContent className="p-4">
            <FileImage className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-800">80%</div>
            <div className="text-sm text-gray-600">Smaller File Size</div>
          </CardContent>
        </Card>
        <Card className="text-center border-purple-200">
          <CardContent className="p-4">
            <Monitor className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-800">100%</div>
            <div className="text-sm text-gray-600">Better SEO</div>
          </CardContent>
        </Card>
      </div>

      {/* Optimization Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <Scissors className="h-6 w-6 mr-2" />
            Free Optimization Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {optimizationTools.map((tool, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div>
                  <h4 className="font-semibold">{tool.name}</h4>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline">{tool.type}</Badge>
                    <Badge
                      className={tool.free === true ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}
                    >
                      {tool.free === true ? "Free" : tool.free}
                    </Badge>
                  </div>
                </div>
                <Button size="sm" variant="outline" onClick={() => window.open(tool.url, "_blank")}>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Image Size Guidelines */}
      <Tabs defaultValue="sizes">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sizes">Recommended Sizes</TabsTrigger>
          <TabsTrigger value="formats">File Formats</TabsTrigger>
          <TabsTrigger value="workflow">Optimization Workflow</TabsTrigger>
        </TabsList>

        <TabsContent value="sizes">
          <Card>
            <CardHeader>
              <CardTitle>Image Size Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(imageSizes).map(([type, sizes]) => (
                  <div key={type} className="p-4 border rounded-lg">
                    <h4 className="font-semibold capitalize mb-2">{type} Images</h4>
                    <p className="text-sm text-gray-600 mb-3">{sizes.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Desktop:</span>
                        <Badge variant="outline">{sizes.desktop}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Mobile:</span>
                        <Badge variant="outline">{sizes.mobile}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="formats">
          <Card>
            <CardHeader>
              <CardTitle>File Format Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">WebP (Recommended)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 25-35% smaller than JPG</li>
                    <li>• Supports transparency</li>
                    <li>• Modern browser support</li>
                    <li>• Best for web use</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">JPG (Fallback)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Universal browser support</li>
                    <li>• Good for photos</li>
                    <li>• Adjustable quality</li>
                    <li>• Smaller than PNG</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">PNG (When Needed)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Supports transparency</li>
                    <li>• Lossless compression</li>
                    <li>• Good for logos/graphics</li>
                    <li>• Larger file sizes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workflow">
          <Card>
            <CardHeader>
              <CardTitle>Step-by-Step Optimization Workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Download Original Images</h4>
                    <p className="text-sm text-gray-600">Get highest resolution available from stock photo sites</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Resize for Web</h4>
                    <p className="text-sm text-gray-600">Use BIRME or Canva to resize to recommended dimensions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Compress Files</h4>
                    <p className="text-sm text-gray-600">Use TinyPNG or Squoosh to reduce file size by 60-80%</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Convert to WebP</h4>
                    <p className="text-sm text-gray-600">Use Squoosh to create WebP versions for modern browsers</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold">Organize & Upload</h4>
                    <p className="text-sm text-gray-600">Place in appropriate folders and update image paths in code</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Performance Tips */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center">
            <Palette className="h-6 w-6 mr-2" />
            Performance Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Do's:</h4>
              <ul className="space-y-2 text-sm">
                <li>✅ Use WebP format when possible</li>
                <li>✅ Compress images to under 100KB</li>
                <li>✅ Use appropriate dimensions</li>
                <li>✅ Add descriptive alt text</li>
                <li>✅ Use lazy loading</li>
                <li>✅ Provide multiple sizes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Don'ts:</h4>
              <ul className="space-y-2 text-sm">
                <li>❌ Upload images larger than 2MB</li>
                <li>❌ Use PNG for photos</li>
                <li>❌ Forget to optimize for mobile</li>
                <li>❌ Use images without proper licenses</li>
                <li>❌ Skip alt text for accessibility</li>
                <li>❌ Use too many large images on one page</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
