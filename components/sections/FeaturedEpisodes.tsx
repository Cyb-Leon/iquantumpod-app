import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface Episode {
  number: number
  category: string
  title: string
  description: string
  duration: string
  platforms: string[]
}

const episodes: Episode[] = [
  {
    number: 12,
    category: "Culture",
    title: "The Sound of the Streets",
    description:
      "How urban culture shapes the music we hear and the stories we tell. A deep dive into authenticity, expression, and community.",
    duration: "45 min",
    platforms: ["Youtube", ""],
  },
  {
    number: 11,
    category: "Community",
    title: "Building Bridges",
    description:
      "Three community leaders discuss bringing people together across differences. Finding common ground in divided times.",
    duration: "52 min",
    platforms: ["Youtube", ""],
  },
  {
    number: 10,
    category: "Youth",
    title: "Next Generation Rising",
    description:
      "Young activists share their vision for change. What does leadership look like when you're fighting for your future?",
    duration: "38 min",
    platforms: ["Youtube", ""],
  },
  {
    number: 9,
    category: "Politics",
    title: "Power & The People",
    description:
      "What happens when policy meets the pavement? A raw conversation about representation, justice, and accountability.",
    duration: "48 min",
    platforms: ["Youtube", ""],
  },
]

interface EpisodeCardProps {
  episode: Episode
}

function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-emerald-500 transition-all group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <span className="text-emerald-500 text-sm font-medium">
              EP. {episode.number} • {episode.category}
            </span>
            <h3 className="text-white text-xl font-bold mt-2 mb-3 group-hover:text-emerald-500 transition-colors">
              {episode.title}
            </h3>
          </div>
        </div>
        <p className="text-zinc-400 mb-4 leading-relaxed">{episode.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button size="sm" className="bg-accent hover:bg-emerald-600 text-black font-semibold">
              <Play className="w-4 h-4 fill-black" />
            </Button>
            <span className="text-zinc-500 text-sm">{episode.duration}</span>
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

export function FeaturedEpisodes() {
  return (
    <section id="episodes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">Featured Episodes</h2>
        <p className="text-zinc-400 text-center mb-12">Conversations that move the culture forward</p>

        <div className="grid md:grid-cols-2 gap-6">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.number} episode={episode} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/episodes">
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent">
              View All Episodes
            </Button>
          </Link>

        </div>
      </div>
    </section>
  )
}

