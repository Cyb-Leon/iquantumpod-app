import { Button } from "@/components/ui/button"

export function SponsorsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl mb-4 graffi-titles bg-clip-text text-transparent"  style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}>Sponsors & Collaborations</h2>
        <p className="text-zinc-400 mb-12">Partnering with brands that believe in community-driven conversation</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center h-20 bg-zinc-800 rounded-lg border border-zinc-700"
            >
              <span className="text-zinc-600 font-semibold">Partner Logo</span>
            </div>
          ))}
        </div>

        <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent">
          Partner with Quantum
        </Button>
      </div>
    </section>
  )
}

