"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"

export function WhatsAppChatButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const whatsappNumber = "27639844453" // 063 984 4453 in international format
  const message = encodeURIComponent(
    "Hello! I'm interested in learning more about Thuba Tlala's fresh produce and Stockvel packages. Can you help me get started?",
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
              <div className="font-medium">Chat with us on WhatsApp</div>
              <div className="text-gray-300 text-xs">063 984 4453</div>
              <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-800 rotate-45"></div>
            </div>
          )}

          {/* Main Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white 
              rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
              ${isHovered ? "px-6 py-4" : "p-4"}
            `}
            onMouseEnter={() => {
              setIsHovered(true)
              setShowTooltip(true)
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              setShowTooltip(false)
            }}
          >
            <MessageCircle className="h-6 w-6 flex-shrink-0" />
            <span
              className={`
              font-medium whitespace-nowrap transition-all duration-300 overflow-hidden
              ${isHovered ? "max-w-32 opacity-100" : "max-w-0 opacity-0"}
            `}
            >
              Chat with us
            </span>
          </a>
        </div>
      </div>
    </>
  )
}
