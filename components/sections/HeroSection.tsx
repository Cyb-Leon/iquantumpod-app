import Image from "next/image"
import Link from "next/link"
import { Play, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden h-screen w-full">
      {/* Animated background with image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full sm:w-[600px] sm:h-[600px] lg:w-full lg:h-full">
          {/* Pulsing glow rings */}
          {/* <div className="absolute inset-0 animate-ping-slow bg-amber-500/10"></div>
          <div className="absolute inset-8 animate-ping-slower bg-amber-500/15"></div>
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-amber-500/20 to-yellow-600/10"></div> */}
          
          {/* Main image with float animation */}
          <div className="absolute -inset-28 sm:inset-0 lg:inset-20 animate-float lg:mt-[-150px] mt-[-200px]">
            <div className="relative w-full h-full animate-pulse scale-100 sm:scale-100 lg:scale-100 -mx-10 lg:-mx-2.5">
              <Image
                src="/iquantumPodcast.png"
                alt="iQuantum Podcast"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(11, 120, 123,0.6)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlays */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-transparent to-[#1a1a1a]/80 pointer-events-none"></div> */}

      <div className="relative max-w-5xl mx-auto text-center">

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:mt-[600px] mt-[500px]">
          <Link href="/episodes">
            <Button className="bg-accent hover:bg-amber-600 text-white font-semibold h-12 px-8 text-lg">
              <Play className="w-5 h-5 mr-2 fill-black" />
              Listen to the Latest Episode
            </Button>
          </Link>
          <Link href="/community">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-amber-500 hover:text-black h-12 px-8 text-lg bg-transparent"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join the Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
