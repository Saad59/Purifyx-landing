const WhyChooseUs = () => {
    return (
      <section className="z-0 flex w-full flex-col overflow-hidden items-center justify-center px-4 md:px-6 xl:px-8 2xl:px-0 py-[80px] md:py-[100px] lg:py-[140px] max-md:max-w-full bg-[#F6F6FD]">
        <div className="flex max-w-full w-full lg:w-[1300px] flex-col items-center gap-20">
          {/* Section Header */}
          <div className="flex flex-col items-center text-text-color max-md:max-w-full gap-[27px]">
            <h2 className="self-stretch text-3xl sm:text-4xl md:text-5xl font-semibold text-center leading-[100%] max-md:text-[40px]">
              Why Choose Us
            </h2>
            <div className="flex flex-col items-center text-[15px] font-medium max-md:max-w-full leading-[150%]">
              <p className="text-center max-md:max-w-full">
                Say goodbye to outdated data and manual work. Our AI-powered platform helps you find, verify, and connect
                with high-quality leads in real time
              </p>
              <p className="text-center">—so you can focus on closing deals, not chasing dead ends.</p>
            </div>
          </div>
  
          {/* Grid Container */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-6 text-black">
            {/* First Card */}
            <div className="border border-[#E3E5E9] bg-white min-h-[200px] sm:min-h-[342px] rounded-lg flex flex-col justify-end pb-6 px-5">
              <div className="w-full">
                <h3 className="text-xl font-medium">Work Smarter, Not Harder</h3>
                <p className="text-xs font-normal mt-2">Let AI automate your outreach.</p>
              </div>
            </div>
  
            {/* Second Card - Now spans 2 columns */}
            <div className="border border-[#E3E5E9] bg-white min-h-[200px] sm:min-h-[342px] rounded-lg flex flex-col justify-end pb-6 px-5 col-span-1 sm:col-span-3">
              <div className="w-full">
                <h3 className="text-xl font-medium">Find More Leads</h3>
                <p className="text-xs font-normal mt-2">Access over 200 million verified leads</p>
              </div>
            </div>
  
            {/* Third Card - Now spans 2 columns */}
            <div className="border border-[#E3E5E9] bg-white min-h-[200px] sm:min-h-[342px] rounded-lg flex flex-col justify-end pb-6 px-5 col-span-1 sm:col-span-3">
              <div className="w-full">
                <h3 className="text-xl font-medium">Fresh, Not Outdated Data</h3>
                <p className="text-xs font-normal mt-2">
                  Rely on real-time, up-to-date lead information—no stale data here.
                </p>
              </div>
            </div>
  
            {/* Fourth Card */}
            <div className="border border-[#E3E5E9] bg-white min-h-[200px] sm:min-h-[342px] rounded-lg flex flex-col justify-end pb-6 px-5">
              <div className="w-full">
                <h3 className="text-xl font-medium">Verified Data</h3>
                <p className="text-xs font-normal mt-2">
                  Rely on real-time, verified data with ValidLeads—no stale leads here.
                </p>
              </div>
            </div>
  
            {/* Fifth Card - Now spans 3 columns */}
            <div className="border border-[#E3E5E9] bg-[#5443DA] min-h-[150px] sm:min-h-[342px] rounded-lg text-white col-span-1 sm:col-span-4 flex flex-col justify-start pt-6 px-5">
              <div className="w-full">
                <h3 className="text-xl font-medium">No Tech Skills Needed</h3>
                <p className="text-xs font-normal mt-2">Start finding leads in minutes, no expertise required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default WhyChooseUs
  