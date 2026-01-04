const quotes = [
  "We amplify voices that don't always get the mic.",
  "Because real dialogue changes minds.",
  "Community isn't just an audience—it's the conversation.",
]

export function WhyQuantumMatters() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-zinc-900/50 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl mb-8 graffi-titles bg-clip-text text-transparent"                     style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}>Why iQuantum Podcast Matters</h2>
        <div className="space-y-8">
          {quotes.map((quote) => (
            <div key={quote} className="border-l-4 border-accent pl-6 text-left">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2 text-balance">&quot;{quote}&quot;</p>
            </div>
          ))}
        </div>
        <p className="text-xl text-zinc-400 mt-12 leading-relaxed">
          In a world of echo chambers and soundbites, iQuantum Podcast creates space for nuance, empathy, and understanding. We
          don&apos;t claim to have all the answers—we&apos;re just here to ask better questions.
        </p>
      </div>
    </section>
  )
}

