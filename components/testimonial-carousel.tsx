"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, User, Star } from "lucide-react"

// Modificar a interface Testimonial para incluir rating
export interface Testimonial {
  id: number
  name: string
  role: string
  image?: string // Tornar opcional
  content: string
  rating?: number // Adicionar rating opcional (1-5)
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[]
}

export default function TestimonialCarousel({ testimonials = [] }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const goToNext = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const goToPrev = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  // Auto play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      goToNext()
    }, 5000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [testimonials.length])

  // Reset auto play when user interacts
  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = setInterval(() => {
        goToNext()
      }, 5000)
    }
  }

  const handlePrev = () => {
    goToPrev()
    resetAutoPlay()
  }

  const handleNext = () => {
    goToNext()
    resetAutoPlay()
  }

  // Função para renderizar as estrelas de avaliação
  const renderStars = (rating = 5) => {
    return (
      <div className="flex mt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      <div className="overflow-hidden rounded-xl bg-white shadow-lg">
        <div
          className="transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, display: "flex" }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center border-4 border-blue-100">
                    <User className="h-16 w-16 text-blue-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <p className="text-gray-700 text-lg italic leading-relaxed">{testimonial.content}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-md transition-all duration-300 z-10"
        aria-label="Depoimento anterior"
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-md transition-all duration-300 z-10"
        aria-label="Próximo depoimento"
        disabled={isTransitioning}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index)
              resetAutoPlay()
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-blue-600" : "w-4 bg-gray-300"
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
