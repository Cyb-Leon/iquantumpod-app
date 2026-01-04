import { Play, Clock, Tag, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { useState } from "react"

const episodes = [
  {
    id: "dQw4w9WgXcQ",
    episodeNumber: 12,
    title: "The Sound of the Streets",
    description:
      "How urban culture shapes the music we hear and the stories we tell. A deep dive into authenticity, expression, and community.",
    duration: "45:23",
    category: "Culture",
    thumbnail: "/urban-street-culture-podcast.jpg",
  },
  {
    id: "jNQXAC9IVRw",
    episodeNumber: 11,
    title: "Building Bridges",
    description:
      "Three community leaders discuss bringing people together across differences. Finding common ground in divided times.",
    duration: "52:18",
    category: "Community",
    thumbnail: "/community-bridge-building.jpg",
  },
  {
    id: "9bZkp7q19f0",
    episodeNumber: 10,
    title: "Next Generation Rising",
    description:
      "Young activists share their vision for change. What does leadership look like when you're fighting for your future?",
    duration: "38:45",
    category: "Youth",
    thumbnail: "/youth-activism-rising.jpg",
  },
  {
    id: "kJQP7kiw5Fk",
    episodeNumber: 9,
    title: "Power & The People",
    description:
      "What happens when policy meets the pavement? A raw conversation about representation, justice, and accountability.",
    duration: "48:12",
    category: "Politics",
    thumbnail: "/politics-power-people.jpg",
  },
  {
    id: "oHg5SJYRHA0",
    episodeNumber: 8,
    title: "Art as Resistance",
    description:
      "How creativity becomes a tool for social change. Artists discuss using their platform to challenge the status quo.",
    duration: "41:30",
    category: "Arts",
    thumbnail: "/art-resistance-creativity.jpg",
  },
  {
    id: "hTWKbfoikeg",
    episodeNumber: 7,
    title: "Economic Justice Now",
    description:
      "Breaking down wealth inequality and what it means for everyday people. Real talk about money, access, and opportunity.",
    duration: "55:07",
    category: "Economics",
    thumbnail: "/economic-justice-wealth.jpg",
  },
]
const categories = ["All", "Culture", "Community", "Youth", "Politics", "Society"]

// function EpisodeCard({ episode }: { episode: Episode }) {
//   if (episode.featured) {
//     return (
//       <Card className="md:col-span-2 bg-linear-to-br from-zinc-900 to-zinc-800 border-emerald-500/50 overflow-hidden hover:border-emerald-500 transition-all group">
//         <div className="flex flex-col md:flex-row">
//           {/* Image Section */}
//           <div className="relative w-full md:w-80 h-64 md:h-auto shrink-0 overflow-hidden">
//             <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-transparent z-10"></div>
//             <div className="absolute inset-0 animate-pulse-slow">
//               <Image
//                 src="/iquantumPodcast.png"
//                 alt={episode.title}
//                 fill
//                 className="object-cover animate-float-subtle"
//                 priority
//               />
//             </div>
//             {/* Animated glow ring */}
//             <div className="absolute inset-4 border-2 border-emerald-500/30 rounded-lg animate-ping-slow pointer-events-none"></div>
//           </div>

//           {/* Content Section */}
//           <div className="p-6 md:p-8 flex-1">
//             <div className="flex items-center gap-3 mb-3">
//               <span className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded animate-pulse">
//                 LATEST
//               </span>
//               <span className="text-emerald-500 text-sm font-medium">
//                 EP. {episode.number} • {episode.category}
//               </span>
//             </div>
//             <h3 className="text-2xl sm:text-3xl text-white font-bold mb-4 group-hover:text-emerald-500 transition-colors">
//               {episode.title}
//             </h3>
//             <p className="text-lg text-zinc-400 mb-6 leading-relaxed">{episode.description}</p>
//             <div className="flex flex-wrap items-center justify-between gap-4">
//               <div className="flex items-center gap-4">
//                 <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
//                   <Play className="w-4 h-4 fill-black mr-2" />
//                   Play Now
//                 </Button>
//                 <div className="flex items-center gap-1 text-zinc-500 text-sm">
//                   <Clock className="w-4 h-4" />
//                   <span>{episode.duration}</span>
//                 </div>
//                 <div className="flex items-center gap-1 text-zinc-500 text-sm">
//                   <Calendar className="w-4 h-4" />
//                   <span>{episode.date}</span>
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 {episode.platforms.map((platform) => (
//                   <span key={platform} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
//                     {platform}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Card>
//     )
//   }

//   return (
//     <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-emerald-500 transition-all group">
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-4">
//           <div className="flex-1">
//             <span className="text-emerald-500 text-sm font-medium">
//               EP. {episode.number} • {episode.category}
//             </span>
//             <h3 className="text-xl text-white font-bold mt-2 mb-3 group-hover:text-emerald-500 transition-colors">
//               {episode.title}
//             </h3>
//           </div>
//         </div>
//         <p className="text-zinc-400 mb-4 leading-relaxed">{episode.description}</p>
//         <div className="flex flex-wrap items-center justify-between gap-4">
//           <div className="flex items-center gap-4">
//             <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
//               <Play className="w-4 h-4 fill-black mr-2" />
//               Play
//             </Button>
//             <div className="flex items-center gap-1 text-zinc-500 text-sm">
//               <Clock className="w-4 h-4" />
//               <span>{episode.duration}</span>
//             </div>
//             <div className="flex items-center gap-1 text-zinc-500 text-sm">
//               <Calendar className="w-4 h-4" />
//               <span>{episode.date}</span>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             {episode.platforms.map((platform) => (
//               <span key={platform} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
//                 {platform}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Card>
//   )
// }

export default function EpisodesPage() {
    const [currentVideo, setCurrentVideo] = useState(episodes[0])
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 graffi-titles bg-clip-text text-transparent" style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}>
            All <span className="text-emerald-500">Episodes</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Every conversation, every voice, every story. Dive into our archive of real talk.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3">
            <Filter className="w-5 h-5 text-zinc-500" />
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-emerald-500 text-black"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Grid 
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {allEpisodes.map((episode) => (
              <EpisodeCard key={episode.number} episode={episode} />
            ))}
          </div>

          {/* Load More 
          <div className="text-center mt-12">
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent">
              Load More Episodes
            </Button>
          </div>
        </div>
      </section>*/}
      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">All Episodes</h1>
          <p className="text-zinc-400 mb-8">Watch and listen to every conversation</p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                {/* YouTube Iframe */}
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=0`}
                    title={currentVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Custom Metadata */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-500 rounded-full text-sm font-medium">
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
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
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
                    className={`bg-zinc-900 border-zinc-800 overflow-hidden cursor-pointer transition-all hover:border-amber-500 ${
                      currentVideo.id === episode.id ? "border-amber-500" : ""
                    }`}
                    onClick={() => setCurrentVideo(episode)}
                  >
                    <div className="relative">
                      <img
                        src={episode.thumbnail || "/placeholder.svg"}
                        alt={episode.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 fill-black text-black ml-1" />
                        </div>
                      </div>
                      <span className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                        {episode.duration}
                      </span>
                    </div>

                    <div className="p-4">
                      <span className="text-amber-500 text-xs font-medium">
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
      <Footer />
    </div>
  )
}

