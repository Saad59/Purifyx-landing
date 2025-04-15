"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

function useWindowSize() {
  const [size, setSize] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return size
}

export function DashboardCarousel({ images, autoPlayInterval = 8000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const { width } = useWindowSize()
  const [isScrolling, setIsScrolling] = useState(false)

  // Responsive size logic
  let centerSlideWidth = width - 80
  if (width >= 375) centerSlideWidth = 320
  if (width >= 640) centerSlideWidth = 400
  if (width >= 768) centerSlideWidth = 550
  if (width >= 1024) centerSlideWidth = 716
  if (width >= 1440) centerSlideWidth = 950

  let gapBetweenSlides = 10
  if (width >= 640) gapBetweenSlides = 30
  if (width >= 768) gapBetweenSlides = 50
  if (width >= 1024) gapBetweenSlides = 60
  if (width >= 1440) gapBetweenSlides = 70

  const sideSlideScale = 0.9
  const sideSlideWidth = centerSlideWidth * sideSlideScale



  const handleTabClick = async (targetIndex) => {
    if (targetIndex === currentIndex || isScrolling) return
  
    const stepDirection = targetIndex > currentIndex ? 1 : -1
    setIsScrolling(true)
    setDirection(stepDirection)
  
    const steps = Math.abs(targetIndex - currentIndex)
  
    for (let i = 0; i < steps; i++) {
      setCurrentIndex((prevIndex) => prevIndex + stepDirection)
      await new Promise((res) => setTimeout(res, 150)) // match animation duration
    }
  
    setIsScrolling(false)
  }
  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)
    return () => clearInterval(interval)
  }, [nextSlide, autoPlayInterval])

  // Calculate all slides positions for smoother transitions
  const getSlideProps = (index) => {
    // Calculate relative index (compared to current)
    let relativeIndex = index - currentIndex
    
    // Handle wrapping
    if (relativeIndex > images.length / 2) {
      relativeIndex -= images.length
    } else if (relativeIndex < -images.length / 2) {
      relativeIndex += images.length
    }
    
    // Only show 3 slides: current, next, and previous
    const isVisible = relativeIndex >= -1 && relativeIndex <= 1
    
    // Default position (center)
    let xPosition = 0
    let zIndex = 10
    let opacity = 0
    let scale = sideSlideScale
    
    if (relativeIndex === 0) {
      // Current slide
      xPosition = 0
      zIndex = 20
      opacity = 1
      scale = 1
    } else if (relativeIndex === -1 || relativeIndex === images.length - 1) {
      // Previous slide
      xPosition = -(sideSlideWidth / 2 + gapBetweenSlides + centerSlideWidth / 2)
      opacity = 0.5
    } else if (relativeIndex === 1 || relativeIndex === -(images.length - 1)) {
      // Next slide
      xPosition = sideSlideWidth / 2 + gapBetweenSlides + centerSlideWidth / 2
      opacity = 0.5
    }
    
    return {
      xPosition,
      zIndex,
      opacity,
      scale,
      isVisible
    }
  }

  return (
    <div className="w-full bg-[#F6F6FD] py-20 sm:py-28 md:py-32 relative">
      <div className="text-center space-y-4 mb-12 sm:mb-16">
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold text-text-color tracking-[-0.02em]">
          Find Your Ideal Leads in Seconds
        </h2>
        <p className="text-[15px] font-medium leading-[150%] text-text-color max-w-[500px] mx-auto px-4">
          Access the world's largest lead database with 200M+ verified contacts. Filter by industry, job title,
          location, and more.
        </p>
      </div>

      <div className="relative mx-auto w-full">
        <div className="dashboard-glow"></div>

        <div className="relative flex items-center justify-center h-[300px] sm:h-[300px] md:h-[420px] lg:h-[550px] xl:h-[800px] overflow-hidden">
          <div className="relative w-full max-w-[1440px] mx-auto flex justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {images.map((image, index) => {
                const { xPosition, zIndex, opacity, scale, isVisible } = getSlideProps(index)
                
                // Skip rendering slides that aren't visible
                if (!isVisible) return null
                
                const isCurrent = index === currentIndex
                
                return (
                  <motion.div
                    key={index}
                    custom={direction}
                    className="absolute top-1/2"
                    style={{ zIndex }}
                    initial={{
                      x: direction > 0 
                        ? xPosition + centerSlideWidth 
                        : xPosition - centerSlideWidth,
                      y: "-50%",
                      scale,
                      opacity: 0
                    }}
                    animate={{
                      x: xPosition,
                      y: "-50%",
                      scale,
                      opacity,
                    }}
                    exit={{
                      x: direction > 0 
                        ? xPosition - centerSlideWidth 
                        : xPosition + centerSlideWidth,
                      y: "-50%",
                      scale,
                      opacity: 0,
                      zIndex: 5
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                  >
                    <div
                      className="relative overflow-hidden shadow-lg transition-all duration-500 rounded-b-lg"
                      style={{
                        width: `${isCurrent ? centerSlideWidth : sideSlideWidth}px`,
                        transformOrigin: "center center",
                      }}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={centerSlideWidth}
                        height={675}
                        className="w-full h-auto"
                        priority={isCurrent}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>


        {/* Tabs */}
        <div className="mt-10 sm:mt-16 flex justify-center overflow-x-auto pb-6 px-1 sm:px-6 md:px-8">
          <div className="flex flex-nowrap gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[104px] border-b border-gray-200 min-w-0">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={cn(
                  "text-[10px] sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-geist pb-3 sm:pb-4 relative sm:px-3 md:px-4 whitespace-nowrap transition-all duration-300",
                  currentIndex === index ? "text-[#101828]" : "text-[#667085]"
                )}
                aria-current={currentIndex === index ? "true" : "false"}
              >
                {image.title}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6938EF]"
                  initial={false}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    scaleX: currentIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}