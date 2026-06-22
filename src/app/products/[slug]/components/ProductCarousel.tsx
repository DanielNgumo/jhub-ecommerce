'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

interface ProductCarouselProps {
  images: string[]
  category: string
}

const getCategoryGradient = (category: string) => {
  switch (category.toLowerCase()) {
    case 'electronics':
      return 'from-blue-600 to-indigo-700 text-white'
    case 'footwear':
      return 'from-amber-500 to-orange-600 text-white'
    case 'accessories':
      return 'from-purple-600 to-pink-700 text-white'
    case 'kitchen':
      return 'from-emerald-500 to-teal-700 text-white'
    default:
      return 'from-indigo-600 to-blue-700 text-white'
  }
}

export default function ProductCarousel({ images, category }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const selectSlide = (idx: number) => {
    setCurrentIndex(idx)
  }

  return (
    <div className="relative w-full">
      {/* Main Slide Panel */}
      <div className={`relative aspect-square w-full rounded-2xl bg-gradient-to-br ${getCategoryGradient(category)} flex items-center justify-center shadow-inner overflow-hidden group`}>
        
        {/* Glass Overlay Hover Effect */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Label badge */}
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white select-none z-10">
          {category}
        </div>

        {/* Carousel Items Render (Slide Transition Simulator) */}
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute transition-all duration-500 transform ${
                idx === currentIndex
                  ? 'opacity-100 scale-100 translate-x-0'
                  : 'opacity-0 scale-90 translate-x-full pointer-events-none'
              }`}
            >
              <span className="text-[10rem] sm:text-[12rem] drop-shadow-2xl select-none block">
                {img}
              </span>
            </div>
          ))}
        </div>

        {/* Left Arrow Navigation */}
        <button
          onClick={handlePrev}
          className="absolute left-4 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all shadow-md group-hover:scale-105 active:scale-95"
          type="button"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        {/* Right Arrow Navigation */}
        <button
          onClick={handleNext}
          className="absolute right-4 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all shadow-md group-hover:scale-105 active:scale-95"
          type="button"
          aria-label="Next image"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Dot Indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => selectSlide(idx)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-indigo-600 w-6'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
