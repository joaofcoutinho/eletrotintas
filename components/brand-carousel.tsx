"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Brand {
  name: string
  logo: string
  description: string
}

interface BrandCarouselProps {
  brands: Brand[]
}

export default function BrandCarousel({ brands }: BrandCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Number of brands to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1)
      } else if (window.innerWidth < 768) {
        setItemsToShow(2)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3)
      } else {
        setItemsToShow(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [currentIndex, isAutoPlaying, brands.length, itemsToShow])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow >= brands.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, brands.length - itemsToShow) : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsAutoPlaying(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide()
    } else if (touchStartX.current - touchEndX.current < -50) {
      prevSlide()
    }
    setIsAutoPlaying(true)
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  const visibleBrands = brands.slice(currentIndex, currentIndex + itemsToShow)

  // If we don't have enough brands to fill the carousel, add from the beginning
  if (visibleBrands.length < itemsToShow) {
    const remainingCount = itemsToShow - visibleBrands.length
    visibleBrands.push(...brands.slice(0, remainingCount))
  }

  return (
    <div
      className="relative w-full overflow-hidden py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center justify-center mb-6">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all duration-300 text-gray-800 hover:text-blue-600 focus:outline-none"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(0)` }}>
          {visibleBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className={cn(
                "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 flex-shrink-0 transition-opacity duration-300",
                index === currentIndex ? "opacity-100" : "opacity-100",
              )}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 h-full flex flex-col items-center justify-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={128}
                    height={128}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{brand.name}</h3>
                <p className="text-gray-600 text-center text-sm">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all duration-300 text-gray-800 hover:text-blue-600 focus:outline-none"
          aria-label="Próximo"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: Math.min(brands.length - itemsToShow + 1, 5) }).map((_, index) => {
          // For longer lists, show only 5 dots with the middle one representing the middle of the list
          let dotIndex = index
          if (brands.length - itemsToShow + 1 > 5) {
            const totalPages = brands.length - itemsToShow + 1
            if (index === 0) dotIndex = 0
            else if (index === 4) dotIndex = totalPages - 1
            else dotIndex = Math.floor((totalPages / 4) * index)
          }

          return (
            <button
              key={index}
              onClick={() => goToSlide(dotIndex)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === dotIndex ? "w-6 bg-blue-600" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir para slide ${dotIndex + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}
