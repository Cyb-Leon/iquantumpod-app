import { Navbar } from "@/components/Navbar"
import { StickyListenButton } from "@/components/StickyListenButton"
import { Footer } from "@/components/Footer"
import {
  HeroSection,
  WhatIsQuantum,
  FeaturedEpisodes,
  WhyQuantumMatters,
  CommunitySection,
  SponsorsSection,
} from "@/components/sections"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <StickyListenButton />
      <HeroSection />
      <WhatIsQuantum />
      <FeaturedEpisodes />
      <WhyQuantumMatters />
      <CommunitySection />
      <SponsorsSection />
      <Footer />
    </div>
  )
}
