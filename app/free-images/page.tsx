import { FreeStockImageFinder } from "@/components/free-stock-image-finder"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function FreeImagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/home" className="flex items-center space-x-2 text-green-600 hover:text-green-700">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Thuba Tlala Logo" width={40} height={40} />
              <span className="text-xl font-bold text-green-800">THUBA TLALA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <FreeStockImageFinder />
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src="/logo.png" alt="Thuba Tlala Logo" width={40} height={40} />
            <span className="text-xl font-bold">THUBA TLALA</span>
          </div>
          <p className="text-green-200">Fresh from Farm to Table - Supporting Local Communities</p>
        </div>
      </footer>
    </div>
  )
}
