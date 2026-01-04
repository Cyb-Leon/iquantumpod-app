import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyListenButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="/episodes">
        <Button className="bg-accent hover:bg-amber-600 text-black font-semibold shadow-lg shadow-accent h-14 px-6 rounded-full">
          <Play className="w-5 h-5 mr-2 fill-black" />
          Listen Now
        </Button>
      </Link>
    </div>
  )
}

