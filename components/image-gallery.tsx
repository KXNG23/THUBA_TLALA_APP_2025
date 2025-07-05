"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { imageConfig } from "@/lib/image-sources"

interface ImageGalleryProps {
  category: "farmers" | "vegetables" | "meat" | "fruits" | "dairy"
  title: string
}

export function ImageGallery({ category, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = Object.entries(imageConfig[category]).map(([key, path]) => ({
    id: key,
    src: path,
    alt: key.replace(/([A-Z])/g, " $1").trim(),
    title: key.replace(/([A-Z])/g, " $1").trim(),
  }))

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
    setSelectedImage(images[nextIndex].src)
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(prevIndex)
    setSelectedImage(images[prevIndex].src)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Badge className="bg-green-100 text-green-800 text-lg px-6 py-2 mb-4">{title}</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Card
            key={image.id}
            className="group cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(image.src, index)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
              </div>
              <div className="p-3">
                <h4 className="font-medium text-green-800 text-sm capitalize">{image.title}</h4>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <Image
              src={selectedImage || "/placeholder.svg"}
              alt={images[currentIndex]?.alt || "Gallery image"}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg font-medium capitalize">{images[currentIndex]?.title}</p>
              <p className="text-sm opacity-75">
                {currentIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
