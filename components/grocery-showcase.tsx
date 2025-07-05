import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  getVegetableImage,
  getMeatImage,
  getDairyImage,
  getAppleImage,
  getOrangeImage,
  getMixedFruitImage,
  getStyledFruitImage,
} from "@/lib/image-sources"

export function GroceryShowcase() {
  const groceryCategories = [
    {
      title: "Fresh Vegetables",
      items: [
        { name: "Spinach", image: getVegetableImage(), description: "Nutrient-rich leafy greens" },
        { name: "Tomatoes", image: getVegetableImage(), description: "Vine-ripened, full flavor" },
        { name: "Broccoli", image: getVegetableImage(), description: "Crisp, vitamin-packed" },
        { name: "Mixed Vegetables", image: getVegetableImage(), description: "Seasonal variety pack" },
      ],
    },
    {
      title: "Premium Meat",
      items: [
        { name: "Beef Steak", image: getMeatImage(), description: "Premium cuts, locally sourced" },
        { name: "Pork Cuts", image: getMeatImage(), description: "Fresh, well-marbled" },
        { name: "Mixed Cuts", image: getMeatImage(), description: "Variety pack selection" },
        { name: "Grilled Specialties", image: getMeatImage(), description: "Ready-to-serve options" },
      ],
    },
    {
      title: "Fresh Fruits",
      items: [
        { name: "Fresh Apples", image: getAppleImage(), description: "Crisp, sweet varieties" },
        { name: "Citrus Fruits", image: getOrangeImage(), description: "Vitamin C rich, juicy" },
        { name: "Premium Selection", image: getStyledFruitImage(), description: "Hand-picked quality fruits" },
        { name: "Seasonal Mix", image: getMixedFruitImage(), description: "Best variety of the season" },
      ],
    },
    {
      title: "Dairy Products",
      items: [
        { name: "Fresh Milk", image: getDairyImage(), description: "Pasteurized, calcium-rich" },
        { name: "Farm Eggs", image: getDairyImage(), description: "Free-range, protein-rich" },
        { name: "Local Cheese", image: getDairyImage(), description: "Artisanal, aged varieties" },
        { name: "Dairy Selection", image: getDairyImage(), description: "Complete variety pack" },
      ],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Our Fresh Produce Selection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the variety of fresh, locally-sourced products available through our Stockvel packages
          </p>
        </div>

        <div className="space-y-12">
          {groceryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center justify-center mb-8">
                <Badge className="bg-green-100 text-green-800 text-lg px-6 py-2">{category.title}</Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="group hover:shadow-lg transition-shadow border-green-100">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={`${item.name} - ${item.description}`}
                          width={200}
                          height={150}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-green-800 mb-1">{item.name}</h4>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
