import Partner from "@/components/homepage/Brands";
import FAQSection from "@/components/homepage/FAQSection";
import GetStarted from "@/components/homepage/GetStarted";
import HeroSection from "@/components/homepage/HeroSection";
import LeadsSection from "@/components/homepage/LeadsSection";
import { Pricing } from "@/components/homepage/pricing";
import { DashboardCarousel, ImageCarousel } from "@/components/homepage/Slides";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import { Divide } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const images = [
    {
      id: 1,
      title: "Search",
      src: "/Leads.png",
      alt: "Search Dashboard Interface",
    },
    {
      id: 2,
      title: "Create Or Add To Lists",
      src: "/HeroSection.svg",
      alt: "Lists Dashboard Interface",
    },
    {
      id: 3,
      title: "Data Enrichment",
      src: "/Leads.png",
      alt: "Data Enrichment Dashboard Interface",
    },
    {
      id: 4,
      title: "View Analytics",
      src: "/HeroSection.svg",
      alt: "Analytics Dashboard Interface",
    },
  ]
  return (
    <div>
      <HeroSection />
      <Partner />
      <WhyChooseUs />
      <DashboardCarousel images={images}/>
      <GetStarted />
      <Pricing />
      <FAQSection />
    </div>
  );
}
