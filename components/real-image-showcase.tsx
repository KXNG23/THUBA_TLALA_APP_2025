import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  imageConfig,
  getVegetableImage,
  getMeatImage,
  getDairyImage,
  getAppleImage,
  getOrangeImage,
  getMixedFruitImage,
  getStyledFruitImage,
} from "@/lib/image-sources"

export function RealImageShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Community Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Meet Our Community</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Image
                src={imageConfig.community.groceryTeam || "/placeholder.svg"}
                alt="Thuba Tlala community grocery team"
                width={300}
                height={200}
                className="rounded-lg shadow-lg mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-green-800">Community Leaders</h3>
              <p className="text-sm text-gray-600">Working together to bring fresh produce to families</p>
            </div>
            <div className="text-center">
              <Image
                src={imageConfig.community.modernWorker || "/placeholder.svg"}
                alt="Modern South African grocery professional"
                width={300}
                height={200}
                className="rounded-lg shadow-lg mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-green-800">Technology & Tradition</h3>
              <p className="text-sm text-gray-600">Using modern tools to serve our communities better</p>
            </div>
            <div className="text-center">
              <Image
                src={imageConfig.community.produceVendors || "/placeholder.svg"}
                alt="South African produce vendor team"
                width={300}
                height={200}
                className="rounded-lg shadow-lg mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-green-800">Local Partnerships</h3>
              <p className="text-sm text-gray-600">Building strong relationships with local suppliers</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Our Fresh Produce Selection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the variety of fresh, locally-sourced products available through our Stockvel packages
          </p>
        </div>

        {/* Fresh Vegetables */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-green-100 text-green-800 text-lg px-6 py-2">Fresh Vegetables</Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-shadow border-green-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getVegetableImage() || "/placeholder.svg"}
                    alt="Fresh spinach and leafy greens from local farms"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Fresh Spinach</h4>
                <p className="text-xs text-gray-600 mt-1">Locally grown, nutrient-rich</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-green-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getVegetableImage() || "/placeholder.svg"}
                    alt="Ripe red tomatoes from African farms"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Ripe Tomatoes</h4>
                <p className="text-xs text-gray-600 mt-1">Vine-ripened, full flavor</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-green-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getVegetableImage() || "/placeholder.svg"}
                    alt="Fresh broccoli and green vegetables"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Fresh Broccoli</h4>
                <p className="text-xs text-gray-600 mt-1">Crisp, vitamin-packed</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-green-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getVegetableImage() || "/placeholder.svg"}
                    alt="Mixed fresh vegetables display"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Mixed Vegetables</h4>
                <p className="text-xs text-gray-600 mt-1">Seasonal variety pack</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Premium Meat */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-6 py-2">Premium Meat</Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-shadow border-orange-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getMeatImage() || "/placeholder.svg"}
                    alt="Premium beef steak cuts from local butchers"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Beef Steak</h4>
                <p className="text-xs text-gray-600 mt-1">Premium cuts, locally sourced</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-orange-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getMeatImage() || "/placeholder.svg"}
                    alt="Fresh pork cuts from local suppliers"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Pork Cuts</h4>
                <p className="text-xs text-gray-600 mt-1">Fresh, well-marbled</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-orange-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={imageConfig.catalog.platedCombinations || "/placeholder.svg"}
                    alt="Grilled meat with herbs and garnish"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Grilled Specialties</h4>
                <p className="text-xs text-gray-600 mt-1">Ready-to-serve options</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-orange-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getMeatImage() || "/placeholder.svg"}
                    alt="Fresh meat selection from local butchers"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Mixed Cuts</h4>
                <p className="text-xs text-gray-600 mt-1">Variety pack selection</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Fresh Fruits - Now using dedicated fruit images */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-6 py-2">Fresh Fruits</Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-shadow border-yellow-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getAppleImage() || "/placeholder.svg"}
                    alt="Fresh red and green apples from local orchards"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Fresh Apples</h4>
                <p className="text-xs text-gray-600 mt-1">Crisp, sweet varieties</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-yellow-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getOrangeImage() || "/placeholder.svg"}
                    alt="Fresh citrus fruits from South African farms"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Citrus Fruits</h4>
                <p className="text-xs text-gray-600 mt-1">Vitamin C rich, juicy</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-yellow-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getStyledFruitImage() || "/placeholder.svg"}
                    alt="Beautifully arranged fresh fruits with styling"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Premium Selection</h4>
                <p className="text-xs text-gray-600 mt-1">Hand-picked quality fruits</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-yellow-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getMixedFruitImage() || "/placeholder.svg"}
                    alt="Seasonal fruit selection from local farms"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Seasonal Mix</h4>
                <p className="text-xs text-gray-600 mt-1">Best variety of the season</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dairy Products */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-6 py-2">Dairy Products</Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getDairyImage() || "/placeholder.svg"}
                    alt="Fresh milk bottles from local dairy farms"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Fresh Milk</h4>
                <p className="text-xs text-gray-600 mt-1">Pasteurized, calcium-rich</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getDairyImage() || "/placeholder.svg"}
                    alt="Farm fresh eggs from free-range chickens"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Farm Eggs</h4>
                <p className="text-xs text-gray-600 mt-1">Free-range, protein-rich</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getDairyImage() || "/placeholder.svg"}
                    alt="Local cheese varieties from South African dairies"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Local Cheese</h4>
                <p className="text-xs text-gray-600 mt-1">Artisanal, aged varieties</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={getDairyImage() || "/placeholder.svg"}
                    alt="Complete dairy selection from local suppliers"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-green-800">Dairy Selection</h4>
                <p className="text-xs text-gray-600 mt-1">Complete variety pack</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
