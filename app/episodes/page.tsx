import Image from "next/image"
import { Play, Clock, Calendar, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

interface Episode {
  number: number
  category: string
  title: string
  description: string
  duration: string
  date: string
  platforms: string[]
  featured?: boolean
}

const allEpisodes: Episode[] = [
  {
    number: 12,
    category: "Culture",
    title: "The Sound of the Streets",
    description:
      "How urban culture shapes the music we hear and the stories we tell. A deep dive into authenticity, expression, and community.",
    duration: "45 min",
    date: "Dec 28, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
    featured: true,
  },
  {
    number: 11,
    category: "Community",
    title: "Building Bridges",
    description:
      "Three community leaders discuss bringing people together across differences. Finding common ground in divided times.",
    duration: "52 min",
    date: "Dec 21, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
  },
  {
    number: 10,
    category: "Youth",
    title: "Next Generation Rising",
    description:
      "Young activists share their vision for change. What does leadership look like when you're fighting for your future?",
    duration: "38 min",
    date: "Dec 14, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
  },
  {
    number: 9,
    category: "Politics",
    title: "Power & The People",
    description:
      "What happens when policy meets the pavement? A raw conversation about representation, justice, and accountability.",
    duration: "48 min",
    date: "Dec 7, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
  },
  {
    number: 8,
    category: "Culture",
    title: "Art in the Age of AI",
    description:
      "Artists and technologists debate creativity, authenticity, and what it means to make something human in a digital world.",
    duration: "55 min",
    date: "Nov 30, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
  },
  {
    number: 7,
    category: "Society",
    title: "The Housing Question",
    description:
      "From rent prices to gentrification—real stories from people navigating the housing crisis in major cities.",
    duration: "62 min",
    date: "Nov 23, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
  },
  {
    number: 6,
    category: "Community",
    title: "Small Business, Big Dreams",
    description:
      "Local entrepreneurs share the hustle, the setbacks, and the wins of building something from nothing.",
    duration: "44 min",
    date: "Nov 16, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
  },
  {
    number: 5,
    category: "Youth",
    title: "Mental Health Unplugged",
    description:
      "Breaking the stigma—young people open up about anxiety, depression, and finding support in unexpected places.",
    duration: "58 min",
    date: "Nov 9, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
  },
  {
    number: 4,
    category: "Culture",
    title: "Food Is Identity",
    description:
      "Chefs, home cooks, and food writers explore how cuisine connects us to heritage, memory, and each other.",
    duration: "41 min",
    date: "Nov 2, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
  },
  {
    number: 3,
    category: "Politics",
    title: "Voting While Young",
    description:
      "First-time voters share why they showed up—or didn't. A candid look at political engagement in Gen Z.",
    duration: "47 min",
    date: "Oct 26, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
  },
  {
    number: 2,
    category: "Society",
    title: "The Gig Economy Diaries",
    description:
      "Drivers, freelancers, and side-hustlers reveal the reality behind the flexibility myth.",
    duration: "50 min",
    date: "Oct 19, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
  },
  {
    number: 1,
    category: "Community",
    title: "Where It All Began",
    description:
      "The pilot episode. Meet the hosts, learn the vision, and hear the first passengers in our taxi.",
    duration: "35 min",
    date: "Oct 12, 2025",
    platforms: ["Spotify", "Apple", "YouTube"],
  },
]

const categories = ["All", "Culture", "Community", "Youth", "Politics", "Society"]

function EpisodeCard({ episode }: { episode: Episode }) {
  if (episode.featured) {
    return (
      <Card className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-800 border-emerald-500/50 overflow-hidden hover:border-emerald-500 transition-all group">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative w-full md:w-80 h-64 md:h-auto flex-shrink-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent z-10"></div>
            <div className="absolute inset-0 animate-pulse-slow">
              <Image
                src="/iquantumPodcast.png"
                alt={episode.title}
                fill
                className="object-cover animate-float-subtle"
                priority
              />
            </div>
            {/* Animated glow ring */}
            <div className="absolute inset-4 border-2 border-emerald-500/30 rounded-lg animate-ping-slow pointer-events-none"></div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded animate-pulse">
                LATEST
              </span>
              <span className="text-emerald-500 text-sm font-medium">
                EP. {episode.number} • {episode.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white font-bold mb-4 group-hover:text-emerald-500 transition-colors">
              {episode.title}
            </h3>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">{episode.description}</p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                  <Play className="w-4 h-4 fill-black mr-2" />
                  Play Now
                </Button>
                <div className="flex items-center gap-1 text-zinc-500 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{episode.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{episode.date}</span>
                </div>
              </div>
              <div className="flex gap-2">
                {episode.platforms.map((platform) => (
                  <span key={platform} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-emerald-500 transition-all group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <span className="text-emerald-500 text-sm font-medium">
              EP. {episode.number} • {episode.category}
            </span>
            <h3 className="text-xl text-white font-bold mt-2 mb-3 group-hover:text-emerald-500 transition-colors">
              {episode.title}
            </h3>
          </div>
        </div>
        <p className="text-zinc-400 mb-4 leading-relaxed">{episode.description}</p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
              <Play className="w-4 h-4 fill-black mr-2" />
              Play
            </Button>
            <div className="flex items-center gap-1 text-zinc-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>{episode.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-zinc-500 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{episode.date}</span>
            </div>
          </div>
          <div className="flex gap-2">
            {episode.platforms.map((platform) => (
              <span key={platform} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function EpisodesPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
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

      {/* Episodes Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {allEpisodes.map((episode) => (
              <EpisodeCard key={episode.number} episode={episode} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent">
              Load More Episodes
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

