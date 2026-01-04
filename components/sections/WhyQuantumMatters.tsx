const quotes = [
  "We amplify voices that don't always get the mic.",
  "Because real dialogue changes minds.",
  "Community isn't just an audience—it's the conversation.",
]

export function WhyQuantumMatters() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900/50 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Why iQuantum Podcast Matters</h2>
        <div className="space-y-8">
          {quotes.map((quote) => (
            <div key={quote} className="border-l-4 border-accent pl-6 text-left">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2 text-balance">"{quote}"</p>
            </div>
          ))}
        </div>
        <p className="text-xl text-zinc-400 mt-12 leading-relaxed">
          In a world of echo chambers and soundbites, iQuantum Podcast creates space for nuance, empathy, and understanding. We
          don't claim to have all the answers—we're just here to ask better questions.
        </p>
      </div>
    </section>
  )
}

