import { Button } from "@/components/ui/button"

export function SponsorsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Sponsors & Collaborations</h2>
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

