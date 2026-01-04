import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Testimonial {
  quote: string
  author: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Finally, podcast ene warri that feels like a real conversation, not a performance.",
    author: "Thabo",
    location: "Teanong, Tembisa",
  },
  {
    quote: "Quantum helped me understand perspectives I'd never considered. That's powerful.",
    author: "Zama",
    location: "Phomolong, Chloorkop x52",
  },
  {
    quote: "This is what media should be—authentic, inclusive, and community-driven. Ringas mfethu",
    author: "Nathi",
    location: "Meadowlands, Soweto",
  },
]

function TestimonialCard({ quote, author, location }: Testimonial) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 p-6">
      <p className="text-zinc-300 mb-4 italic leading-relaxed">"{quote}"</p>
      <p className="text-emerald-500 font-semibold">
        — {author}, {location}
      </p>
    </Card>
  )
}

export function CommunitySection() {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Join the Quantum Community</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-accent/10 to-emerald-600/10 border border-accent/30 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">What Should We Talk About Next?</h3>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            Quantum is shaped by our community. Submit a topic, share your story, or nominate someone whose voice
            deserves to be heard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-accent hover:bg-amber-600 text-black font-semibold h-12 px-8">
              Submit a Topic
            </Button>
            <Button
              variant="outline"
              className="border-accent text-emerald-600 hover:bg-amber-500 hover:text-black h-12 px-8 bg-transparent"
            >
              Become a Guest
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

