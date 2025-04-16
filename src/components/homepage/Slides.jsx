"use client"

import { useState, useEffect, useCallback, useRef } from "react"
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

export function DashboardCarousel({ images = [
  {
    title: "Search",
    description: "Quick search through our vast and powerful leads and intuitive search tools. Find new opportunities fast without wasting time.",
    src: "/Leads.png",
    alt: "Search Interface"
  },
  {
    title: "Create Or Add To Lists",
    description: "Stay organized. Easily add prospects to new or existing lists for targeted follow-ups.",
    src: "/Leads.png",
    alt: "Lists Interface"
  },
  {
    title: "Create Or Add To Lists",
    description: "Stay organized. Easily add prospects to new or existing lists for targeted follow-ups.",
    src: "/Leads.png",
    alt: "Lists Interface"
  },
  {
    title: "Data Enrichment",
    description: "Get up-to-date information on each lead. Automatically pull in relevant data so you can make your outreach more effective.",
    src: "//Leads.png",
    alt: "Data Enrichment Interface"
  }
], autoPlayInterval = 8000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const { width } = useWindowSize()
  const [isScrolling, setIsScrolling] = useState(false)
  const [progress, setProgress] = useState(0)
  const tabsContainerRef = useRef(null)

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

  // Add scroll into view effect when currentIndex changes
  useEffect(() => {
    if (tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const activeTab = container.querySelector(`[data-index="${currentIndex}"]`);
      
      if (activeTab) {
        const containerRect = container.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        
        const scrollLeft = container.scrollLeft + tabRect.left - containerRect.left - (containerRect.width - tabRect.width) / 2;
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

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
    setProgress(0)
    const startTime = performance.now()
    let animationFrameId

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const newProgress = Math.min((elapsed / autoPlayInterval) * 100, 100)
      
      setProgress(newProgress)
      
      if (newProgress < 100) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        nextSlide()
      }
    }

    // Start the animation on the next frame to ensure proper initialization
    requestAnimationFrame(() => {
      animationFrameId = requestAnimationFrame(animate)
    })

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [currentIndex, autoPlayInterval, nextSlide])

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
        <div className="mt-10 sm:mt-16 flex justify-center overflow-x-auto ml-5 md:ml-15 relative">
          <div ref={tabsContainerRef} className="flex flex-nowrap gap-5 min-w-0 relative mx-auto overflow-x-auto scroll-smooth">
            {images.map((image, index) => (
              <div 
                key={index}
                data-index={index}
                className="flex flex-col gap-8 min-w-[280px] max-w-[403px] relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-md bg-[#D1D5DB]">
                  {currentIndex === index && (
                    <motion.div
                      className="absolute top-0 left-0 h-full w-full bg-[#7F56D9] origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: progress / 100 }}
                      transition={{
                        duration: 0,
                        ease: "linear"
                      }}
                    />
                  )}
                </div>
                <div
                  className={cn(
                    "flex flex-col items-start gap-6 pt-8 w-full cursor-pointer",
              
                  )}
                >
                  <div onClick={() => handleTabClick(index)} className="w-full flex flex-col gap-6">
                    <h3 className={cn(
                      "text-[20px] font-medium leading-tight text-text-color"
                    )}>
                      {image.title}
                    </h3>
                    <p className="text-[15px] text-[#6B7280] font-normal leading-tight w-full whitespace-normal line-clamp-3">
                      {image.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[15px] text-text-color font-medium leading-tight">
                    <span>View more</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="#475467" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}