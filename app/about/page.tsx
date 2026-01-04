import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {Users, Heart, Radio, MapPin, Coffee } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Navigation */}
      <Navbar />


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight text-balance graffi-titles bg-clip-text text-transparent"
                    style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}>
            Welcome to Quantum
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
            Every voice has a seat. A podcast inspired by the spontaneous conversations that happen in the back of a
            taxi—real, unfiltered, and human.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-8 text-center graffi-titles bg-clip-text text-transparent"
                    style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}>Our Story</h2>
          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              Quantum started with a simple idea: the best conversations happen when people from different worlds share
              the same space. Think about a taxi ride through the city—strangers become storytellers, sharing
              perspectives you&apos;d never hear anywhere else.
            </p>
            <p>
              We wanted to capture that magic. Not the polished, scripted version you see on TV, but the raw, honest
              dialogue that happens when people feel comfortable enough to be real. Every episode is a journey with
              voices from all walks of life—activists, artists, teachers, entrepreneurs, students, and everyday heroes.
            </p>
            <p>
              Our mission is to build a platform where diverse perspectives aren&apos;t just welcomed—they&apos;re celebrated.
              Where culture, community, and conversation collide. Where you leave each episode thinking a little
              differently about the world around you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-12 text-center graffi-titles bg-clip-text text-transparent"
                    style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}>What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 p-8 hover:border-emerald-500 transition-all">
              <Users className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-white text-2xl font-bold mb-3">Authenticity</h3>
              <p className="text-zinc-400 leading-relaxed">
                No filters, no scripts. Just real people having real conversations about what matters to them.
              </p>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 p-8 hover:border-emerald-500 transition-all">
              <Heart className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-white text-2xl font-bold mb-3">Community</h3>
              <p className="text-zinc-400 leading-relaxed">
                We&apos;re built by listeners, for listeners. This isn&apos;t just our podcast—it&apos;s yours too.
              </p>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 p-8 hover:border-emerald-500 transition-all">
              <Radio className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-white text-2xl font-bold mb-3">Inclusion</h3>
              <p className="text-zinc-400 leading-relaxed">
                Every voice deserves a seat at the table. We amplify perspectives that often go unheard.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl mb-8 text-center graffi-titles bg-clip-text text-transparent"
                    style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}>Meet the Team</h2>
          <p className="text-xl text-zinc-400 text-center mb-12 max-w-3xl mx-auto">
            We&apos;re a collective of storytellers, creators, and community builders dedicated to bringing you the most
            authentic conversations possible.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-emerald-500 transition-all">
              <div className="aspect-square bg-linear-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center">
                <Users className="w-20 h-20 text-emerald-500" />
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-1">Alex Rivera</h3>
                <p className="text-emerald-500 text-sm mb-3">Founder & Host</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Former taxi driver turned podcaster. Alex knows how to make anyone feel comfortable sharing their
                  story.
                </p>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-emerald-500 transition-all">
              <div className="aspect-square bg-linear-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center">
                <Coffee className="w-20 h-20 text-emerald-500" />
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-1">Jordan Chen</h3>
                <p className="text-emerald-500 text-sm mb-3">Producer</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Audio wizard and storytelling expert. Jordan shapes raw conversations into compelling episodes.
                </p>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-emerald-500 transition-all">
              <div className="aspect-square bg-linear-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center">
                <MapPin className="w-20 h-20 text-emerald-500" />
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-1">Maya Patel</h3>
                <p className="text-emerald-500 text-sm mb-3">Community Director</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  The bridge between listeners and creators. Maya ensures every voice in our community is heard.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl mb-6 graffi-titles bg-clip-text text-transparent"
                    style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}>Join the Movement</h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Quantum isn&apos;t just a podcast—it&apos;s a community. Whether you want to be a guest, suggest a topic, or just
            connect with fellow listeners, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold h-12 px-8 text-lg">
              Become a Guest
            </Button>
            <Button
              variant="outline"
              className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black h-12 px-8 text-lg bg-transparent"
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </section>

       <Footer />
    </div>
  )
}
