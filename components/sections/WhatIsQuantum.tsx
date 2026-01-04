import { Users, MessageCircle, TrendingUp, Mic, LucideIcon } from "lucide-react"

const topics = ["Culture", "Community", "Youth", "Society", "Politics"]

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 hover:border-amber-500 transition-colors">
      <Icon className="w-8 h-8 text-emerald-500 mb-3" />
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm">{description}</p>
    </div>
  )
}

const features: FeatureCardProps[] = [
  { icon: Users, title: "Kasi Voices", description: "Real people, real perspectives" },
  { icon: MessageCircle, title: "Open Dialogue", description: "Honest, unfiltered talk" },
  { icon: TrendingUp, title: "Community First", description: "Built by and for listeners" },
  { icon: Mic, title: "16Bus Energy", description: "The pulse of the city" },
]

export function WhatIsQuantum() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto"> 
        <div className="relative">
          <span
            className="text-3xl font-bold bg-clip-text text-transparent water-brush-regular"
            style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}
          >
            Quantum
          </span>
          <span className="text-3xl font-bold bg-clip-text text-transparent  oooh-baby"
            style={{
              backgroundImage: 'linear-gradient(rgba(11, 120, 123))'
            }}>
            Podcast
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl mb-12 text-center graffi-titles bg-clip-text text-transparent"
                    style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}
        >What Is Quantum Podcast?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Think of a taxi ride through the city. Different people, different stories, one shared moment. That&apos;s
              iQuantum Podcast—a podcast that brings together voices from all walks of life for conversations that matter.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              We dive into culture, community, politics, and everything in between. No filters. No scripts. Just real
              people talking about what&apos;s real.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-accent/50 text-emerald-500 rounded-full text-sm font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

