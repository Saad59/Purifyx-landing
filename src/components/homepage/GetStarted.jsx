import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Step data to avoid repetitive markup
const steps = [
  {
    id: "card1",
    number: "01",
    title: "Sign Up",
    description: "Create your free account in seconds.",
    imageAlt: "Sign Up Form"
  },
  {
    id: "card2",
    number: "02",
    title: "Find Leads",
    description: "Search our database and pick your targets.",
    imageAlt: "Search Database"
  },
  {
    id: "card3",
    number: "03",
    title: "Send Emails",
    description: "Use our templates to reach out fast.",
    imageAlt: "Email Templates"
  }
]

// Reusable step component
const StepCard = ({ step, number, title, description, imageAlt }) => (
  <div id={step} className="step-item sticky top-40 ">
    <div className="step-content card-body px-4 md:px-6 xl:px-8 2xl:px-0">
      <div className="mx-auto max-w-[1300px] w-full bg-[#F6F6FD] rounded-lg p-4 lg:py-15 lg:px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="w-full md:w-2/5">
            <div className="flex items-center gap-2 mb-6 text-nowrap">
              <span className="text-base text-text-color">Step {number}/</span>
              <Link href="/" className="text-base text-[#6938EF] font-medium hover:underline transition-colors">
                {title}
              </Link>
            </div>
            <h3 className="text-xl  md:2xl lg:text-[36px] font-medium text-text-color max-w-[500px] leading-tight">
              {description}
            </h3>
          </div>
          <div className="w-full md:w-3/5">
            <Image
              src="/Leads.png"
              alt={imageAlt}
              width={1200}
              height={675}
              className="w-full rounded-2xl shadow-lg aspect-video object-cover"
              priority={number === "01"} // Only prioritize loading the first image
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const GetStarted = () => {
  return (
    <section className="w-full bg-[#f6f6fd] py-[80px] md:py-[100px] lg:py-[140px]">
      {/* Section Header */}
      <div className="text-center pt-4 pb-36">
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold text-text-color tracking-[-0.02em]">
          Get Started Easily
        </h2>
        <p className="text-[15px] font-medium leading-[150%] text-text-color max-w-[500px] mx-auto px-4">
          Start Growing Your Business in 3 Steps
        </p>
      </div>

      {/* Steps Container */}
      <div id="cards" className="flex flex-col gap-36">
        {steps.map((step) => (
          <StepCard
            key={step.id}
            step={step.id}
            number={step.number}
            title={step.title}
            description={step.description}
            imageAlt={step.imageAlt}
          />
        ))}
      </div>
    </section>
  )
}

export default GetStarted