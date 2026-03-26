"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption?: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/forum-1.jpg",
    alt: "論壇開幕式",
    caption: "2025 國際兒童博物館交流論壇開幕式"
  },
  {
    id: 2,
    src: "/gallery/forum-2.jpg",
    alt: "專題演講",
    caption: "國際講者專題演講"
  },
  {
    id: 3,
    src: "/gallery/forum-3.jpg",
    alt: "工作坊活動",
    caption: "互動工作坊活動"
  },
  {
    id: 4,
    src: "/gallery/forum-4.jpg",
    alt: "座談會",
    caption: "綜合座談會"
  },
]

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="bg-muted py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-foreground lg:text-3xl text-balance">
          精彩回顧
        </h2>

        <div className="relative">
          {/* Main Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg bg-card shadow-md">
            <div 
              className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10"
            >
              <div className="text-center p-8">
                <div className="mb-4 text-6xl text-primary/30">
                  {currentIndex + 1}
                </div>
                <p className="text-lg font-medium text-foreground">
                  {galleryImages[currentIndex].caption}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {galleryImages[currentIndex].alt}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="secondary"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 shadow-md"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={goToPrevious}
            className="text-muted-foreground hover:text-foreground"
          >
            Prev
          </Button>
          
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-border hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            className="text-muted-foreground hover:text-foreground"
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  )
}
