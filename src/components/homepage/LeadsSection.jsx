"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const LeadsSection = () => {
  const slides = [
    {
      id: 1,
      title: "Search",
      image: "/Leads.png",
      alt: "Search Dashboard Interface",
    },
    {
      id: 2,
      title: "Create Or Add To Lists",
      image: "/Leads.png",
      alt: "Lists Dashboard Interface",
    },
    {
      id: 3,
      title: "Data Enrichment",
      image: "/Leads.png",
      alt: "Data Enrichment Dashboard Interface",
    },
    {
      id: 4,
      title: "View Analytics",
      image: "/Leads.png",
      alt: "Analytics Dashboard Interface",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isManualInteraction, setIsManualInteraction] = useState(false)
  const autoScrollRef = useRef(null)
  const slideContainerRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prevIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1
  const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1

  const goToNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const goToPrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
    setIsManualInteraction(true)

    // Reset the auto-scroll timer when manually changing slides
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
      autoScrollRef.current = setInterval(goToNext, 5000)
    }
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current

    // Minimum swipe distance to trigger slide change (px)
    const minSwipeDistance = 50

    if (touchDiff > minSwipeDistance) {
      // Swiped left, go to next slide
      goToNext()
      setIsManualInteraction(true)
    } else if (touchDiff < -minSwipeDistance) {
      // Swiped right, go to previous slide
      goToPrev()
      setIsManualInteraction(true)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToPrev()
        setIsManualInteraction(true)
      } else if (e.key === "ArrowRight") {
        goToNext()
        setIsManualInteraction(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex])

  // Auto-scroll effect
  useEffect(() => {
    if (!isPaused) {
      autoScrollRef.current = setInterval(goToNext, 5000) // Increased from 3000ms to 5000ms for better readability
    }

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current)
    }
  }, [isPaused])

  // Reset manual interaction flag after a delay
  useEffect(() => {
    if (isManualInteraction) {
      const timer = setTimeout(() => {
        setIsManualInteraction(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isManualInteraction])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // Enhanced animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
      filter: "blur(8px)",
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
      filter: "blur(8px)",
      rotateY: direction < 0 ? 15 : -15,
    }),
  }

  // Animation variants for side slides
  const sideSlideVariants = {
    initial: (isNext) => ({
      x: isNext ? "-100%" : "100%",
      opacity: 0,
      scale: 0.8,
    }),
    animate: (isNext) => ({
      x: isNext ? "10%" : "-10%",
      opacity: 0.6,
      scale: 0.9,
      filter: "blur(2px)",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  }

  return (
    <div className="w-full bg-[#F6F6FD] py-[120px] relative">
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-[#6938EF] rounded-t-[48px] -z-10"></div>
      <div className="mx-auto px-4 md:px-6 xl:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#101828] tracking-[-0.02em]">
            Find Your Ideal Leads in Seconds
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#475467] max-w-[800px] mx-auto">
            Access the world's largest lead database with 200M+ verified contacts. Filter by industry, job title,
            location, and more.
          </p>
        </div>

        <div
          ref={slideContainerRef}
          className="relative mx-auto w-full overflow-hidden py-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-[#F6F6FD] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-[#F6F6FD] to-transparent z-10 pointer-events-none"></div>

          {/* Navigation arrows */}
          {/* <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#6938EF] rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#6938EF] focus:ring-opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#6938EF] rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#6938EF] focus:ring-opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button> */}

          <div className="relative flex items-center justify-center h-[400px] md:h-[600px]">
            {/* Previous slide */}
            <motion.div
              key={`prev-${prevIndex}`}
              className="absolute left-0 w-[30%] md:w-[25%] transform -translate-x-[10%] z-0"
              custom={false}
              variants={sideSlideVariants}
              initial="initial"
              animate="animate"
            >
              <Image
                src={slides[prevIndex].image || "/placeholder.svg"}
                alt={slides[prevIndex].alt}
                width={916}
                height={675}
                className="w-full h-auto rounded-xl shadow-md"
              />
            </motion.div>

            {/* Current slide */}
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={`current-${activeIndex}`}
                className="relative w-[60%] md:w-[50%] z-20"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1.0],
                  opacity: { duration: 0.4 },
                }}
              >
                <motion.div
                  className="absolute -inset-10 bg-gradient-radial from-[rgba(105,56,239,0.15)] to-transparent rounded-full blur-xl z-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 0.7,
                    scale: isManualInteraction ? 1.1 : 1,
                    transition: {
                      duration: isManualInteraction ? 0.4 : 0.8,
                      ease: "easeOut",
                    },
                  }}
                ></motion.div>
                <Image
                  src={slides[activeIndex].image || "/placeholder.svg"}
                  alt={slides[activeIndex].alt}
                  width={916}
                  height={675}
                  className="w-full h-auto rounded-xl shadow-xl relative z-10"
                  priority
                />

                {/* Slide title overlay */}
                {/* <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <span className="text-[#101828] font-medium">{slides[activeIndex].title}</span>
                </motion.div> */}
              </motion.div>
            </AnimatePresence>

            {/* Next slide */}
            <motion.div
              key={`next-${nextIndex}`}
              className="absolute right-0 w-[30%] md:w-[25%] transform translate-x-[10%] z-0"
              custom={true}
              variants={sideSlideVariants}
              initial="initial"
              animate="animate"
            >
              <Image
                src={slides[nextIndex].image || "/placeholder.svg"}
                alt={slides[nextIndex].alt}
                width={916}
                height={675}
                className="w-full h-auto rounded-xl shadow-md"
              />
            </motion.div>
          </div>

          {/* Progress indicators */}
          {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => goToSlide(index)}
                className="focus:outline-none focus:ring-2 focus:ring-[#6938EF] rounded-full"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : "false"}
              >
                <motion.div
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                    activeIndex === index ? "bg-[#6938EF]" : "bg-[#D0D5DD]"
                  }`}
                  initial={false}
                  animate={{
                    scale: activeIndex === index ? 1.2 : 1,
                    opacity: activeIndex === index ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div> */}
        </div>

        <div className="mt-20 flex justify-center overflow-x-auto pb-4">
          <div className="flex flex-nowrap gap-4 md:gap-8 border-b border-gray-200 min-w-0">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`text-[18px] md:text-[24px] lg:text-[28px] font-medium pb-4 relative px-2 md:px-4 whitespace-nowrap transition-all duration-300 ${
                  activeIndex === index ? "text-[#101828]" : "text-[#667085]"
                }`}
                aria-current={activeIndex === index ? "true" : "false"}
              >
                {slide.title}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6938EF]"
                  initial={false}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    scaleX: activeIndex === index ? 1 : 0,
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

export default LeadsSection
