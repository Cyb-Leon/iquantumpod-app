import Link from "next/link"
import { Logo } from "./Logo"

const leftLinks = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
]

const rightLinks = [
  { href: "/community", label: "Community" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex items-center gap-6">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-amber-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Logo />

          <div className="hidden md:flex items-center gap-6">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-amber-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

