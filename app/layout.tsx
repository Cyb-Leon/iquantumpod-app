import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Water_Brush,Oooh_Baby } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _wBrush = Water_Brush({style:["normal"], weight:"400"})
const _OoohBaby = Oooh_Baby({style:["normal"],weight:"400"})

export const metadata: Metadata = {
  title: "iQuantum Podcast | A ride for every voice",
  description:
    "A community-driven podcast inspired by taxi conversations—diverse people, real talk, spontaneous debate. Join the conversation.",
  generator: "next.js",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
