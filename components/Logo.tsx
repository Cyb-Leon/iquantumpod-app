import { Mic } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
        <Mic className="w-5 h-5 text-black" />
      </div>
      <span className="text-xl font-bold text-white">iQuantum Podcast</span>
    </div>
  )
}

