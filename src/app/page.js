import Banner from "@/components/homepage/Banner";
import Partner from "@/components/homepage/Brands";
import FAQSection from "@/components/homepage/FAQSection";
import GetStarted from "@/components/homepage/GetStarted";
import HeroSection from "@/components/homepage/HeroSection";
import ThreeImageSlider from "@/components/homepage/LeadsSection";
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
      description: "Quickly discover the right prospects using powerful filters and intuitive search tools. Find new opportunities fast without wasting time.",
      alt: "Search Dashboard Interface",
    },
    {
      id: 2,
      title: "Create Or Add To Lists",
      src: "/HeroSection.svg",
      description: "Stay organized and never lose track of potential customers. Easily add prospects to new or existing lists for targeted follow-ups.",
      alt: "Lists Dashboard Interface",
    },
    {
      id: 3,
      title: "Data Enrichment",
      src: "/Leads.png",
      description: "Get rich, up-to-date information on each lead. Automatically pull in relevant data so you can tailor your outreach more effectively.",
      alt: "Data Enrichment Dashboard Interface",
    },
    {
      id: 4,
      title: "View Analytics",
      src: "/HeroSection.svg",
      description: "Stay organized and never lose track of potential customers. Easily add prospects to new or existing lists for targeted follow-ups.",
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
      <Banner />
    </div>
  );
}
