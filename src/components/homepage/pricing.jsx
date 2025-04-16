"use client"
import React, { useState } from "react";

// Consolidated Pricing Component
export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Define pricing plans with features
  const starterFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/a38a09c16d10aed37d240b6e085072e44dc16a94?placeholderIfAbsent=true",
      text: "Credits: 150",
      subtext: "(one-time)",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/fe858d8e8e363af2a4c8fb5f4bdfe7b01b50e8bb?placeholderIfAbsent=true",
      text: "Email Cost: 2 credits",
      subtext: "/email",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/5af7c2a8a0c3f40ba4ab6a17eb30f61184749fae?placeholderIfAbsent=true",
      text: "Phone Cost: 10 credits",
      subtext: "/number",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/53b33a1ace70cf1c36337739cd2f6a217edf7ec9?placeholderIfAbsent=true",
      text: "Lead Filters: Basic",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/c6a9f2bd5c8f00d09ae5c81b3d94949ba7cc0f49?placeholderIfAbsent=true",
      text: "Export Options: CSV only",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/a38a09c16d10aed37d240b6e085072e44dc16a94?placeholderIfAbsent=true",
      text: "Support: Email only",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/fe858d8e8e363af2a4c8fb5f4bdfe7b01b50e8bb?placeholderIfAbsent=true",
      text: "Free Trial: Yes",
      subtext: "(150 credits)",
    },
  ];

  const basicFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/721e74e5cb23e05c83b3c31b5f881bca2d3f9ece?placeholderIfAbsent=true",
      text: "Everything In Starter",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/721e74e5cb23e05c83b3c31b5f881bca2d3f9ece?placeholderIfAbsent=true",
      text: "Credits: 1,000",
      subtext: "/month",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/721e74e5cb23e05c83b3c31b5f881bca2d3f9ece?placeholderIfAbsent=true",
      text: "Email Cost: 2 credits",
      subtext: "/email",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/721e74e5cb23e05c83b3c31b5f881bca2d3f9ece?placeholderIfAbsent=true",
      text: "Phone Cost: 10 credits",
      subtext: "/number",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/721e74e5cb23e05c83b3c31b5f881bca2d3f9ece?placeholderIfAbsent=true",
      text: "Lead Filters: Advanced",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/721e74e5cb23e05c83b3c31b5f881bca2d3f9ece?placeholderIfAbsent=true",
      text: "Export Options: CSV and Excel",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/721e74e5cb23e05c83b3c31b5f881bca2d3f9ece?placeholderIfabsent=true",
      text: "Support: Email + Chat",
    },
  ];

  const professionalFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/415467b76e0db61b9c4b918201f7dc0b5e94fd86?placeholderIfAbsent=true",
      text: "Credits: 3,000",
      subtext: "/month",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/0ee4eb2698f1639f0bd4ef3761cd8ac2d07f46e1?placeholderIfAbsent=true",
      text: "Email Cost: 2 credits",
      subtext: "/email",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/fc0b4ce61654dab25951de9becafef8354ee2af9?placeholderIfAbsent=true",
      text: "Phone Cost: 10 credits",
      subtext: "/number",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/5bec2fee713ae96f7d3f08bd4d677af9d34b3a14?placeholderIfAbsent=true",
      text: "Lead Filters: Advanced",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/3fd8019268105a151669f829d809bc0a7c0ef570?placeholderIfAbsent=true",
      text: "Export Options: CSV, Excel and CRM",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/415467b76e0db61b9c4b918201f7dc0b5e94fd86?placeholderIfAbsent=true",
      text: "Support: Email + Chat + Phone",
    },
  ];

  const enterpriseFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/fe858d8e8e363af2a4c8fb5f4bdfe7b01b50e8bb?placeholderIfAbsent=true",
      text: "Credits: 10,000",
      subtext: "/month",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/3ce6d06d6a7824e10c0047f24857b71585e1b335?placeholderIfAbsent=true",
      text: "Email Cost: 1 credits",
      subtext: "/email",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/1d0a4b86c59db22d2344ebeb9f3ee599ae06c4dd?placeholderIfAbsent=true",
      text: "Phone Cost: 5 credits",
      subtext: "/number",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/e648840982093eee030a72165018d04c7f149ea0?placeholderIfAbsent=true",
      text: "Lead Filters: Premium",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/ac105983c025fb39aa960e78459e0abdf88cf0bb?placeholderIfAbsent=true",
      text: "Export Options: CSV, Excel and CRM, API",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/52175229ad7340fb392f4b88b48c63fcdd5b9cc7?placeholderIfAbsent=true",
      text: "Support: Dedicated Account Manager",
    },
  ];

  // Apply discount for annual billing
  const basicPrice = isAnnual ? "$28" : "$35";
  const professionalPrice = isAnnual ? "$79" : "$99";
  const enterprisePrice = isAnnual ? "$239" : "$299";
  const period = "/month";

  // PricingFeature Component
  const PricingFeature = ({ icon, text, subtext }) => {
    return (
      <div className="flex w-full items-center gap-[9px] mt-[11px] first:mt-0">
        <img
          src={icon}
          className="aspect-[1] object-contain w-[15px] self-stretch shrink-0 my-auto"
          alt=""
        />
        <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
          {text}
          {subtext && (
            <span className="text-[rgba(135,143,157,1)]"> {subtext}</span>
          )}
        </div>
      </div>
    );
  };

  // PricingCard Component
  const PricingCard = ({
    name,
    description,
    price,
    period,
    features,
    highlighted = false,
    badge,
  }) => {
    return (
      <div className="w-full min-w-[280px] mx-auto">
        <div
          className={`relative flex w-full flex-col overflow-hidden items-stretch justify-center px-4 sm:px-[42px] py-[22px] rounded-[11px] bg-gradient-to-b from-[#F3EBFF] via-white/10 to-white ${
            highlighted
              ? "border-[color:var(--Purple-Graident,#A49CE6)] border-2 border-solid rounded-xl"
              : "border border-[rgba(240,241,243,1)] border-solid"
          }`}
        >
          <div className="z-[1] flex w-full items-center justify-between">
            <div className="self-stretch flex-1">
              <div className="text-text-color text-sm font-semibold leading-loose">
                {name}
              </div>
              <div className="text-[#878F9D] text-xs font-normal leading-loose mt-1">
                {description}
              </div>
            </div>
            {badge && (
              <img
                src={badge}
                className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
                alt="Badge"
              />
            )}
          </div>
        </div>
        <div
          className={`bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border min-h-[445px] w-full mt-[22px] pb-[18px] rounded-[7px] border-solid ${
            highlighted
              ? "border-[color:var(--Purple-Graident,#A49CE6)] border-2 rounded-lg"
              : "border-[rgba(240,241,243,1)]"
          }`}
        >
          <div className="flex w-full flex-col items-stretch text-[27px] text-[#3E3941] font-semibold leading-[1.2] justify-center p-[22px] max-md:px-5">
            <div className="flex justify-start items-baseline">
              <span className="text-[27px] font-semibold tracking-tight">{price}</span>
              {period && (
                <span className="font-medium text-[15px] text-[rgba(135,143,157,1)] ml-1">
                  {period}
                </span>
              )}
            </div>
          </div>
          <div className="w-full text-[13px] font-medium text-center pb-5 px-5">
            <button className="self-stretch flex-1 shrink basis-[0%] bg-[rgba(84,67,218,1)] hover:bg-[rgba(84,67,218,0.9)] transition-colors w-full text-white px-5 py-2 rounded-[5px]">
              Get started
            </button>
            <button className="self-stretch bg-white hover:bg-gray-50 transition-colors border border-[#D0D5DD] w-full text-[rgba(48,48,48,1)] mt-3.5 px-5 py-2 rounded-[5px] border-solid">
              Chat to sales
            </button>
          </div>
          <div className="w-full">
            <div className="border border-[rgba(240,241,243,1)] min-h-0 w-full border-solid" />
            <div className="w-full mt-[18px] px-[18px]">
              <div className="text-[rgba(84,67,218,1)] text-xs font-semibold leading-loose">
                What's included:
              </div>
              <div className="flex w-full flex-col items-stretch text-[11px] text-black font-medium justify-center mt-[22px]">
                {features.map((feature, index) => (
                  <PricingFeature
                    key={index}
                    icon={feature.icon}
                    text={feature.text}
                    subtext={feature.subtext}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // PricingHeader Component
  const PricingHeader = ({ title, subtitle }) => {
    return (
      <div className="w-full max-w-[1056px] px-4">
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold text-text-color tracking-[-0.02em]">
          {title}
        </h1>
        <div className="mt-7 text-center">
          <p className="text-[15px] font-medium leading-[150%] text-text-color max-w-[700px] mx-auto px-4">{subtitle}</p>
        </div>
      </div>
    );
  };

  // BillingToggle Component
  const BillingToggle = ({ isAnnual, onChange }) => {
    return (
      <div
        className="bg-[rgba(221,217,248,1)] flex w-full max-w-[300px] items-center gap-2 sm:gap-4 text-center p-2 rounded-[999px]"
        role="group"
        aria-label="Billing period selection"
      >
        <button
          onClick={() => onChange(true)}
          className={`flex min-h-11 items-center gap-2 justify-center flex-1 px-2 sm:px-4 py-2 rounded-[98px] ${
            isAnnual ? "bg-white" : ""
          }`}
          aria-pressed={isAnnual}
        >
          <div className="text-[#252525] text-xs font-semibold leading-loose text-nowrap">
            Bill annually
          </div>
          {isAnnual && (
            <div className="hidden text-nowrap sm:flex justify-center items-start bg-[#F4F4FF] overflow-hidden text-[8px] text-[#3E3941] font-medium leading-4 px-2 py-1.5 rounded-[68px]">
              <div>Save 20%</div>
            </div>
          )}
        </button>
        <button
          onClick={() => onChange(false)}
          className={`text-[#252525] text-xs font-semibold leading-loose flex-1 ${
            !isAnnual ? "bg-white rounded-[98px] px-2 sm:px-4 py-2" : ""
          }`}
          aria-pressed={!isAnnual}
        >
          Bill Monthly
        </button>
      </div>
    );
  };

  return (
    <section className="w-full flex justify-center px-4">
      <div className="w-full max-w-[1300px] flex flex-col items-center justify-center py-[80px] md:py-[100px] lg:py-[140px]">
        <PricingHeader
          title="Pick the Perfect Plan to Grow Your Business"
          subtitle="Choose a plan that fits your needs and start finding leads today. All plans come with a 7-day free trial, so you can try before you buy!"
        />

        <div className="mt-10 sm:mt-20 w-full flex justify-center">
          <BillingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
        </div>

        <div className="w-full mt-10 sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[50px]">
            <PricingCard
              name="Starter"
              description="New users testing the tool"
              price="Free"
              period=""
              features={starterFeatures}
              badge=""
            />

            <PricingCard
              name="Basic"
              description="Small businesses or individual marketers"
              price={basicPrice}
              period={period}
              features={basicFeatures}
              highlighted={true}
              badge="https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/f39af84c1ac8c4aef4dd86d4c470a461eeb37dcf?placeholderIfAbsent=true"
            />

            <PricingCard
              name="Professional"
              description="Growing Teams Or Agencies"
              price={professionalPrice}
              period={period}
              features={professionalFeatures}
              badge="https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/d29fa70782d08ab3450ffb8b4d33886c73807a59?placeholderIfAbsent=true"
            />
          </div>

          <div className="min-h-[606px] w-full mt-6">
            <div className="relative flex w-full flex-col overflow-hidden items-stretch justify-center px-4 sm:px-[47px] py-6 rounded-xl bg-gradient-to-b from-[#F3EBFF] via-white/10 to-white border border-[rgba(240,241,243,1)] border-solid">
              <div className="z-[1] flex w-full items-stretch justify-between flex-wrap">
                <div className="min-w-60 flex-1 shrink basis-[0%] my-auto">
                  <div className="text-[#3E3941] text-[15px] font-semibold leading-loose">
                    Enterprise
                  </div>
                  <div className="text-[#878F9D] text-[13px] font-normal leading-loose mt-1">
                    Large businesses with high lead needs
                  </div>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a541ebb3442546939997c0a9735cb960/33435cc9a45b7a6e5f54f24e566071367d0b908a?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-12 shrink-0"
                  alt=""
                />
              </div>
            </div>

            <div className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border border-[rgba(240,241,243,1)] flex w-full flex-col items-stretch justify-center mt-6 pb-5 rounded-lg border-solid">
              <div className="flex w-full flex-col items-stretch text-3xl text-[#3e3941] font-semibold leading-[1.2] justify-center p-6">
                <div className="flex justify-start items-baseline">
                  <span className="text-[27px] font-semibold tracking-tight">{enterprisePrice}</span>
                  <span className="font-medium text-[15px] text-[rgba(135,143,157,1)] ml-1">
                    {period}
                  </span>
                </div>
              </div>
              <div className="w-full text-[13px] font-medium text-center pb-5 px-5">
                <button className="self-stretch flex-1 shrink basis-[0%] bg-[rgba(84,67,218,1)] hover:bg-[rgba(84,67,218,0.9)] transition-colors w-full text-white px-5 py-2 rounded-[5px]">
                  Get started
                </button>
                <button className="self-stretch bg-white hover:bg-gray-50 transition-colors border border-[#D0D5DD] w-full text-[rgba(48,48,48,1)] mt-3.5 px-5 py-2 rounded-[5px] border-solid">
                  Chat to sales
                </button>
              </div>
              <div className="min-h-[239px] w-full">
                <div className="border border-[rgba(240,241,243,1)] min-h-0 w-full border-solid" />
                <div className="w-full mt-[18px] px-[18px]">
                  <div className="text-[rgba(84,67,218,1)] text-xs font-semibold leading-loose">
                    What's included:
                  </div>
                  <div className="flex w-full flex-col items-stretch text-[11px] text-black font-medium justify-center mt-[22px]">
                    {enterpriseFeatures.map((feature, index) => (
                      <PricingFeature
                        key={index}
                        icon={feature.icon}
                        text={feature.text}
                        subtext={feature.subtext}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;