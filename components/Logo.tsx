import Image from "next/image"
import Link from "next/link"
export function Logo() {
  return (
     <Link href="/">
    <div className="flex items-center gap-2">
      <div className="w-28 h-28 flex items-center justify-center">

        <Image
          src="/iquantumPodcast.png"
          alt="iQuantum Podcast"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <span
        className="text-4xl font-bold bg-clip-text text-transparent water-brush-regular"
        style={{
          backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(108, 162, 250),rgb(148, 1, 9),rgb(93, 7, 143))'
        }}
      >
        Quantum
      </span>
      <span className="text-4xl font-bold bg-clip-text text-transparent oooh-baby"
        style={{
          backgroundImage: 'linear-gradient(rgba(11, 120, 123))'
        }}>
          Podcast
        </span>
    </div>
     </Link>

  )
}

