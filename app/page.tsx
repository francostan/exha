import { CollageGrid } from "@/components/gallery"
import Link from "next/link"

const featuredProjects = [
  {
    image: "/fashion-editorial-woman-vintage-film-photography-c.jpg",
    title: "morning light",
    protagonist: "clara",
    place: "paris",
    category: "editorial",
    size: "large" as const,
  },
  {
    image: "/fashion-editorial-woman-harbor-european-vintage-fi.jpg",
    title: "harbor dreams",
    protagonist: "sofia",
    place: "barcelona",
    category: "commercial",
    size: "medium" as const,
  },
  {
    image: "/fashion-editorial-woman-sunglasses-retro-film-phot.jpg",
    title: "golden hour",
    protagonist: "emma",
    place: "milan",
    category: "personal",
    size: "small" as const,
  },
  {
    image: "/fashion-editorial-woman-garden-vintage-film-aesthe.jpg",
    title: "garden stories",
    protagonist: "lucia",
    place: "tuscany",
    category: "editorial",
    size: "medium" as const,
  },
  {
    image: "/fashion-editorial-woman-sunglasses-retro-film-phot.jpg",
    title: "vinyl days",
    protagonist: "ana",
    place: "madrid",
    category: "personal",
    size: "small" as const,
  },
  {
    image: "/fashion-editorial-woman-garden-vintage-film-aesthe.jpg",
    title: "sunset dreams",
    protagonist: "mia",
    place: "lisbon",
    category: "editorial",
    size: "large" as const,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="px-8 md:px-16 pt-28 pb-20" aria-labelledby="hero-title">
        <div className="flex justify-between items-start">
          <div className="max-w-md">
            <p className="text-caption text-muted-foreground opacity-soft lowercase mb-8 font-light">
              photographer & creative director
            </p>

            <h1 id="hero-title" className="sr-only">exha studio — valentina motta</h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed lowercase tracking-wide mb-2">
              capturing moments,
            </p>
            <p className="text-xl md:text-2xl font-thin italic text-muted-foreground opacity-muted leading-relaxed lowercase tracking-wide">
              crafting narratives
            </p>

            <p className="text-caption text-muted-foreground opacity-subtle lowercase mt-16 font-thin italic">
              valentina motta — milan
            </p>
          </div>

          <Link
            href="/works"
            className="hidden md:inline-flex items-center gap-4 text-caption lowercase hover:text-primary transition-colors duration-300 group font-light"
          >
            explore all works
            <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
          </Link>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-32" aria-label="Featured projects">
        <CollageGrid projects={featuredProjects} />

        <div className="mt-24 flex items-center justify-between md:justify-end">
          <Link
            href="/works"
            className="md:hidden inline-flex items-center gap-6 text-caption lowercase hover:text-primary transition-colors duration-300 group font-light"
          >
            explore all works
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
          </Link>

          <span className="text-micro text-muted-foreground opacity-subtle lowercase font-light" aria-hidden="true">
            scroll
          </span>
        </div>
      </section>
    </div>
  )
}
