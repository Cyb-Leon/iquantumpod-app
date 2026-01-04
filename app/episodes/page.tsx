"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Clock, Tag } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

// Sample episode data - in a real app, this would come from your YouTube API or database
const episodes = [
  {
    id: "zU9D_4zN41M",
    episodeNumber: 58,
    title: "Mighty Paragon — Hip-Hop Roots, Hype, Gangster Rap, YFM, Drugs, and Surviving the Edge..",
    description:
      "Young activists share their vision for change. What does leadership look like when you're fighting for your future?",
    duration: "45:23",
    category: "Youth",
    thumbnail: "/hqdefault.avif",
  },
  {
    id: "xS-l_dbqpvI",
    episodeNumber: 22,
    title: "Hlogi Makau on Family business, succession plan, Caprivi, Drugs and property business.",
    description:
      "Three community leaders discuss bringing people together across differences. Finding common ground in divided times.",
    duration: "59:47",
    category: "Community",
    thumbnail: "/hlhogim.jpg",
  },
  {
    id: "10GoaoFNLs4",
    episodeNumber: 48,
    title: " Ndabezitha Macingwane II Chief Delisa Moses Masilela on Heritage, Chiefery, & Tradition.",
    description:
      "How urban culture shapes the music we hear and the stories we tell. A deep dive into authenticity, expression, and community.",
    duration: "1:13:46",
    category: "Culture",
    thumbnail: "/ndabezitham.jpg",
  },
  {
    id: "d619lJCExgk",
    episodeNumber: 12,
    title: "Muzithembuzi on Soccer, Norkem Park High, Touchline, Buffet, Nak'indaba zakho & Music...",
    description:
      "How creativity becomes a tool for social change. Artists discuss using their platform to challenge the status quo.",
    duration: "47:39",
    category: "Arts",
    thumbnail: "/muzithembuzi.jpg",
  },
  {
    id: "mYDGczkEsnM",
    episodeNumber: 56,
    title: "Mickey M on Siz n Scoop, MT Mtekza, Skhanda Nation, K.O, Universal Records & Kasi Rap.",
    description:
      "How creativity becomes a tool for social change. Artists discuss using their platform to challenge the status quo.",
    duration: "1:20:44",
    category: "Arts",
    thumbnail: "/mickym.jpg",
  },
  {
    id: "h9VYJ7FqJXE",
    episodeNumber: 13,
    title: "Tembisa west secondary, Bukhosi Mkhize & Fortune Mashala on matric results & Awards...",
    description:
      "Breaking down wealth inequality and what it means for everyday people. Real talk about money, access, and opportunity.",
    duration: "1:31:20",
    category: "Education",
    thumbnail: "/tembisawest.jpg",
  },
]

export default function EpisodesPage() {
  const [currentVideo, setCurrentVideo] = useState(episodes[0])

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
<Navbar/>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl mb-2 graffi-titles bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}> All <span className="text-accent">Episodes</span></h1>
          <p className="text-zinc-400 mb-8">Watch and listen to every conversation</p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                {/* YouTube Iframe */}
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`}
                    title={currentVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Custom Metadata */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-500 rounded-full text-sm font-medium">
                      EP. {currentVideo.episodeNumber}
                    </span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {currentVideo.category}
                    </span>
                    <span className="text-zinc-500 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {currentVideo.duration}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{currentVideo.title}</h2>

                  <p className="text-zinc-400 leading-relaxed mb-6">{currentVideo.description}</p>

                  <div className="flex gap-3">
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                      <Play className="w-4 h-4 mr-2 fill-black" />
                      Listen on Spotify
                    </Button>
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent"
                    >
                      Apple Podcasts
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Episode List */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">More Episodes</h3>
              <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
                {episodes.map((episode) => (
                  <Card
                    key={episode.id}
                    className={`bg-zinc-900 border-zinc-800 overflow-hidden cursor-pointer transition-all hover:border-emerald-500 ${
                      currentVideo.id === episode.id ? "border-emerald-500" : ""
                    }`}
                    onClick={() => setCurrentVideo(episode)}
                  >
                    <div className="relative">
                      <img
                        src={episode.thumbnail || "/placeholder.svg"}
                        alt={episode.title}
                        className="w-full h-50 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 fill-black text-black ml-1" />
                        </div>
                      </div>
                      <span className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                        {episode.duration}
                      </span>
                    </div>

                    <div className="p-4">
                      <span className="text-emerald-500 text-xs font-medium">
                        EP. {episode.episodeNumber} • {episode.category}
                      </span>
                      <h4 className="text-white font-semibold mt-1 mb-2 line-clamp-2">{episode.title}</h4>
                      <p className="text-zinc-500 text-sm line-clamp-2">{episode.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
