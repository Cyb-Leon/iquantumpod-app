import Image from "next/image"
import { Calendar, User, MessageSquare, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  comments: number
  likes: number
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    slug: "behind-the-mic-season-2",
    title: "Behind the Mic: What's Coming in Season 2",
    excerpt:
      "A sneak peek at the guests, topics, and surprises we have lined up for the next chapter of iQuantum Podcast. Spoiler: it's going to be big.",
    author: "The iQuantum Team",
    date: "Jan 2, 2026",
    readTime: "5 min read",
    category: "Announcements",
    comments: 24,
    likes: 156,
    featured: true,
  },
  {
    slug: "listener-stories-december",
    title: "Listener Stories: How Quantum Changed My Perspective",
    excerpt:
      "Every month, we share stories from our community. This December, listeners opened up about episodes that shifted how they see the world.",
    author: "Maya Johnson",
    date: "Dec 30, 2025",
    readTime: "8 min read",
    category: "Community",
    comments: 42,
    likes: 203,
  },
  {
    slug: "episode-breakdown-sound-of-streets",
    title: "Episode Breakdown: The Sound of the Streets",
    excerpt:
      "Our latest episode sparked major conversation. Here's a deep dive into the themes, the guests, and what didn't make the final cut.",
    author: "Marcus Chen",
    date: "Dec 28, 2025",
    readTime: "6 min read",
    category: "Episodes",
    comments: 18,
    likes: 89,
  },
  {
    slug: "community-spotlight-aisha",
    title: "Community Spotlight: Aisha from Oakland",
    excerpt:
      "Meet Aisha, a day-one listener who's now organizing local listening parties. Her story of community building is pure inspiration.",
    author: "James Williams",
    date: "Dec 22, 2025",
    readTime: "4 min read",
    category: "Spotlight",
    comments: 31,
    likes: 178,
  },
  {
    slug: "how-to-pitch-topic",
    title: "How to Pitch a Topic to iQuantum",
    excerpt:
      "Want us to cover something specific? Here's our guide to submitting topics, what we look for, and how to increase your chances of being heard.",
    author: "The iQuantum Team",
    date: "Dec 18, 2025",
    readTime: "3 min read",
    category: "Guide",
    comments: 15,
    likes: 67,
  },
  {
    slug: "year-in-review-2025",
    title: "2025: A Year of Real Conversations",
    excerpt:
      "From our first episode to 100,000 downloads—here's how the iQuantum community grew, the moments that defined us, and what we learned.",
    author: "The iQuantum Team",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    category: "Announcements",
    comments: 56,
    likes: 312,
  },
]

const categories = ["All", "Announcements", "Community", "Episodes", "Spotlight", "Guide"]

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Card className="bg-linear-to-br from-zinc-900 to-zinc-800 border-emerald-500/50 overflow-hidden group">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-80 h-64 md:h-auto shrink-0 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-transparent z-10"></div>
          <div className="absolute inset-0 animate-pulse-slow">
            <Image
              src="/iquantumPodcast.png"
              alt={post.title}
              fill
              className="object-cover animate-float-subtle"
              priority
            />
          </div>
          {/* Animated glow ring */}
          <div className="absolute inset-4 border-2 border-emerald-400/30 rounded-lg animate-ping-slow pointer-events-none"></div>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-10 flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded animate-pulse">
              FEATURED
            </span>
            <span className="text-emerald-500 text-sm font-medium">{post.category}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-emerald-500 transition-colors">
            {post.title}
          </h2>
          <p className="text-lg text-zinc-400 mb-6 leading-relaxed">{post.excerpt}</p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
            <Button className="bg-emerald-500 hover:bg-amber-600 text-black font-semibold">
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-emerald-500  transition-all group">
      <div className="p-6">
        <span className="text-emerald-500 text-sm font-medium">{post.category}</span>
        <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-zinc-400 mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-zinc-500">
          <div className="flex items-center gap-3">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function CommunityPage() {
  const featuredPost = blogPosts.find((p) => p.featured)
  const regularPosts = blogPosts.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center ">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 graffi-titles bg-clip-text text-transparent"   style={{
              backgroundImage: 'linear-gradient(to right,rgb(255, 0, 0),rgb(255, 11, 11),rgb(255, 106, 0),rgb(255, 191, 0),rgb(11, 120, 123),rgb(148, 1, 9),rgb(93, 7, 143))'
            }}>
            The <span className="text-emerald-500">Community</span> Hub
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Stories, updates, and conversations from the iQuantum family. This is where the community speaks.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-emerald-500 text-black"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-6xl mx-auto">
            <FeaturedPost post={featuredPost} />
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Join the Conversation</h3>
            <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
              Get weekly updates, exclusive content, and be the first to know when new episodes drop. 
              No spam, just real talk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 "
              />
              <Button className="bg-emerald-500 hover:bg-accent text-black font-semibold h-12 px-8 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-zinc-500 text-sm mt-4">
              Already have an account?{" "}
              <Link href="#" className="text-emerald-500 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

