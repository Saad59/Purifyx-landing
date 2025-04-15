import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="relative bg-[#171051] flex flex-col space-y-[-20px] items-center justify-center px-4 sm:px-8 md:px-16 py-[150px] md:py-[200px] overflow-hidden max-h-[779px]">
      {/* Background Visual Image */}
      <Image
        src="/90M.svg"
        alt="banner background"
        width={1050}
        height={600}
      />

      {/* Text Content */}
      <div className="relative z-10 max-w-[1000px] w-full text-center">
        <p className="font-semibold text-white text-[28px] md:text-[32px] lg:text-[35px] leading-[150%]">
          Discover Your Next Big Win – Find Leads in Our Massive
        </p>
        <p className="text-primary-500 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-semibold leading-[150%]">
          90M+ Contact Database!
        </p>
      </div>

      {/* Bottom Glow Blur */}
      <div className="absolute bottom-0 w-screen h-[340px] blur-[50px] bg-[#20166F]" />
    </div>
  )
}

export default Banner
