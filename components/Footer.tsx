import Link from "next/link"
import { Logo } from "./Logo"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
  { href: "/community", label: "Community" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="text-zinc-400 hover:text-amber-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 text-center text-zinc-500 text-sm">
          <p>© 2026 iQuantum Podcast. A ride for every voice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

