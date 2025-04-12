import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6938EF] opacity-100 rounded-b-3xl" />
      <div className="relative mx-auto max-w-[1300px] px-4 md:px-6 xl:px-8 2xl:px-0 gap-64">
        <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-[150px] md:pt-[200px]">
          <div className='flex flex-col gap-8 items-center justify-center'>
            <h1 className="max-w-[900px] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[100%] font-semibold tracking-[-0.02em] text-text-color text-center px-4 lg:px-0">
              Supercharge Your Sales with the Ultimate Lead Generation Tool
            </h1>
            <div className="flex flex-col gap-4 text-center px-4">
              <p className="max-w-[600px] text-[16px]  text-text-color font-medium leading-[150%]">
                Access millions of verified leads and automate outreach in minutes.
                Grow your pipeline faster than ever.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto px-4">
              <Button
                size="lg"
                className="text-text-color py-2 px-5 border border-text-color rounded-sm text-[16px] leading-[150%] bg-none"
              >
                Request Demo
              </Button>
              <Button
                className="bg-primary-500 hover:bg-primary-500/90 rounded-sm text-[16px] leading-[150%] py-2 px-5 text-white"
                size="lg"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Dashboard Preview in Hero Section */}
          <div className="w-full rounded-2xl shadow-xl">
            <Image
              src="/HeroSection.svg"
              alt="PurifyX Dashboard"
              width={1200}
              height={800}
              className="w-full rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection