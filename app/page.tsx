import { CollageGrid } from "@/components/gallery"
import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

const featuredProjects = [
  {
    image: "/fashion-editorial-woman-vintage-film-photography-c.jpg",
    title: "morning light",
    protagonist: "clara",
    place: "paris",
    category: "editorial",
    size: "large" as const,
    alt: "portrait of clara in soft parisian morning light, vintage film aesthetic",
  },
  {
    image: "/fashion-editorial-woman-harbor-european-vintage-fi.jpg",
    title: "harbor dreams",
    protagonist: "sofia",
    place: "barcelona",
    category: "commercial",
    size: "medium" as const,
    alt: "sofia at barcelona harbor, european summer mood with vintage tones",
  },
  {
    image: "/fashion-editorial-woman-sunglasses-retro-film-phot.jpg",
    title: "golden hour",
    protagonist: "emma",
    place: "milan",
    category: "personal",
    size: "small" as const,
    alt: "emma wearing retro sunglasses in golden milan sunlight",
  },
  {
    image: "/fashion-editorial-woman-garden-vintage-film-aesthe.jpg",
    title: "garden stories",
    protagonist: "lucia",
    place: "tuscany",
    category: "editorial",
    size: "medium" as const,
    alt: "lucia in tuscan garden surrounded by greenery, film photography",
  },
  {
    image: "/fashion-editorial-woman-sunglasses-retro-film-phot.jpg",
    title: "vinyl days",
    protagonist: "ana",
    place: "madrid",
    category: "personal",
    size: "small" as const,
    alt: "ana with vintage style in madrid, nostalgic film aesthetic",
  },
  {
    image: "/fashion-editorial-woman-garden-vintage-film-aesthe.jpg",
    title: "sunset dreams",
    protagonist: "mia",
    place: "lisbon",
    category: "editorial",
    size: "large" as const,
    alt: "mia during lisbon sunset, dreamy golden hour portrait",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="px-8 md:px-16 pt-28 pb-20" aria-labelledby="hero-title">
        <div className="flex justify-between items-start">
          <div className="max-w-md">
            <FadeIn delay={0}>
              <p className="text-caption text-muted-foreground opacity-soft lowercase mb-8 font-light">
                photographer & creative director
              </p>
            </FadeIn>

            <h1 id="hero-title" className="sr-only">exha studio — valentina motta</h1>
            <FadeIn delay={100}>
              <p className="text-xl md:text-2xl font-light leading-relaxed lowercase tracking-wide mb-2">
                capturing moments,
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl md:text-2xl font-thin italic text-muted-foreground opacity-muted leading-relaxed lowercase tracking-wide">
                crafting narratives
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-caption text-muted-foreground opacity-subtle lowercase mt-16 font-thin italic">
                valentina motta — milan
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <Link
              href="/works"
              className="hidden md:inline-flex items-center gap-4 text-caption lowercase hover:text-primary transition-colors duration-300 group font-light"
            >
              explore all works
              <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <FadeIn delay={500}>
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
      </FadeIn>
    </div>
  )
}
