import type { Metadata } from "next"
import { ImageReveal } from "@/components/gallery/image-reveal"
import Link from "next/link"

export const metadata: Metadata = {
  title: "works — exha studio",
  description: "Selected photography projects by Valentina Motta. Editorial, commercial, and personal work.",
}

const categories = [
  { name: "editorial", slug: "editorial" },
  { name: "personal projects", slug: "personal" },
  { name: "commercial", slug: "commercial" },
  { name: "video works", slug: "video" },
]

const allWorks = [
  {
    category: "editorial",
    image: "/fashion-editorial-woman-vintage-film-photography-c.jpg",
    title: "morning light",
    protagonist: "clara",
    place: "paris",
  },
  {
    category: "commercial",
    image: "/fashion-editorial-woman-harbor-european-vintage-fi.jpg",
    title: "harbor dreams",
    protagonist: "sofia",
    place: "barcelona",
  },
  {
    category: "personal",
    image: "/fashion-editorial-woman-sunglasses-retro-film-phot.jpg",
    title: "golden hour",
    protagonist: "emma",
    place: "milan",
  },
  {
    category: "editorial",
    image: "/fashion-editorial-woman-garden-vintage-film-aesthe.jpg",
    title: "garden stories",
    protagonist: "lucia",
    place: "tuscany",
  },
  {
    category: "personal",
    image: "/fashion-editorial-woman-sunglasses-retro-film-phot.jpg",
    title: "vinyl days",
    protagonist: "ana",
    place: "madrid",
  },
  {
    category: "editorial",
    image: "/fashion-editorial-woman-garden-vintage-film-aesthe.jpg",
    title: "sunset dreams",
    protagonist: "mia",
    place: "lisbon",
  },
  {
    category: "commercial",
    image: "/fashion-editorial-woman-harbor-european-vintage-fi.jpg",
    title: "city lights",
    protagonist: "nina",
    place: "prague",
  },
  {
    category: "commercial",
    image: "/fashion-editorial-woman-vintage-film-photography-c.jpg",
    title: "sweet moments",
    protagonist: "local stories",
    place: "lyon",
  },
]

export default function WorksPage() {
  return (
    <div className="min-h-screen px-8 md:px-16 pt-32 md:pt-28 pb-28 relative">
      <header className="mb-20" aria-labelledby="works-title">
        <p className="text-caption text-muted-foreground opacity-soft lowercase mb-10 font-light">works</p>
        <h1 id="works-title" className="text-xl font-light lowercase tracking-wide mb-2">selected projects</h1>
        <p className="text-caption text-muted-foreground lowercase font-thin italic opacity-muted">2019—2024</p>
      </header>

      <nav className="flex flex-wrap items-center gap-8 mb-20" aria-label="Work categories">
        <Link href="/works" className="text-label lowercase text-foreground transition-colors duration-300 font-light">
          all
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/works/${cat.slug}`}
            className="text-label lowercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
          >
            {cat.name}
          </Link>
        ))}
      </nav>

      <div className="grid grid-cols-12 gap-5 md:gap-8 relative">
        <div className="col-span-12 md:col-span-5">
          <Link href={`/works/${allWorks[0].category}`}>
            <ImageReveal
              src={allWorks[0].image}
              alt={allWorks[0].title}
              title={allWorks[0].title}
              protagonist={allWorks[0].protagonist}
              place={allWorks[0].place}
              aspectRatio="portrait"
              priority
            />
          </Link>
        </div>

        <div className="col-span-6 md:col-span-5 md:col-start-7 md:mt-40">
          <Link href={`/works/${allWorks[1].category}`}>
            <ImageReveal
              src={allWorks[1].image}
              alt={allWorks[1].title}
              title={allWorks[1].title}
              protagonist={allWorks[1].protagonist}
              place={allWorks[1].place}
              aspectRatio="landscape"
              priority
            />
          </Link>
        </div>

        <div className="col-span-6 md:col-span-3 md:col-start-10 md:-mt-8">
          <Link href={`/works/${allWorks[2].category}`}>
            <ImageReveal
              src={allWorks[2].image}
              alt={allWorks[2].title}
              title={allWorks[2].title}
              protagonist={allWorks[2].protagonist}
              place={allWorks[2].place}
              aspectRatio="square"
              priority
            />
          </Link>
        </div>

        <div className="col-span-5 md:col-span-3 md:col-start-2 md:-mt-12">
          <Link href={`/works/${allWorks[3].category}`}>
            <ImageReveal
              src={allWorks[3].image}
              alt={allWorks[3].title}
              title={allWorks[3].title}
              protagonist={allWorks[3].protagonist}
              place={allWorks[3].place}
              aspectRatio="portrait"
            />
          </Link>
        </div>

        <div className="col-span-7 md:col-span-5 md:col-start-5 md:mt-8">
          <Link href={`/works/${allWorks[4].category}`}>
            <ImageReveal
              src={allWorks[4].image}
              alt={allWorks[4].title}
              title={allWorks[4].title}
              protagonist={allWorks[4].protagonist}
              place={allWorks[4].place}
              aspectRatio="landscape"
            />
          </Link>
        </div>

        <div className="col-span-6 md:col-span-3 md:col-start-10 md:-mt-16">
          <Link href={`/works/${allWorks[5].category}`}>
            <ImageReveal
              src={allWorks[5].image}
              alt={allWorks[5].title}
              title={allWorks[5].title}
              protagonist={allWorks[5].protagonist}
              place={allWorks[5].place}
              aspectRatio="portrait"
            />
          </Link>
        </div>

        <div className="col-span-6 md:col-span-4 md:col-start-1 md:mt-4">
          <Link href={`/works/${allWorks[6].category}`}>
            <ImageReveal
              src={allWorks[6].image}
              alt={allWorks[6].title}
              title={allWorks[6].title}
              protagonist={allWorks[6].protagonist}
              place={allWorks[6].place}
              aspectRatio="portrait"
            />
          </Link>
        </div>

        <div className="col-span-6 md:col-span-5 md:col-start-6 md:-mt-20">
          <Link href={`/works/${allWorks[7].category}`}>
            <ImageReveal
              src={allWorks[7].image}
              alt={allWorks[7].title}
              title={allWorks[7].title}
              protagonist={allWorks[7].protagonist}
              place={allWorks[7].place}
              aspectRatio="landscape"
            />
          </Link>
        </div>
      </div>

      <aside className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2" aria-hidden="true">
        <p className="vertical-text text-micro text-muted-foreground opacity-subtle lowercase font-light">
          exha studio
        </p>
      </aside>
    </div>
  )
}
