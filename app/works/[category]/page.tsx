import type { Metadata } from "next"
import { ImageReveal } from "@/components/gallery/image-reveal"
import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"
import { notFound } from "next/navigation"

const categoryData: Record<
  string,
  {
    name: string
    description: string
    works: Array<{
      image: string
      title: string
      protagonist: string
      place: string
      aspectRatio: "portrait" | "landscape" | "square"
      alt: string
    }>
  }
> = {
  editorial: {
    name: "editorial",
    description: "fashion and lifestyle stories for magazines and publications.",
    works: [
      {
        image: "/fashion-editorial-woman-vintage-film-photography-c.jpg",
        title: "morning light",
        protagonist: "clara",
        place: "paris",
        aspectRatio: "portrait",
        alt: "portrait of clara in soft parisian morning light, vintage film aesthetic",
      },
      {
        image: "/fashion-editorial-woman-garden-vintage-film-aesthe.jpg",
        title: "garden stories",
        protagonist: "lucia",
        place: "tuscany",
        aspectRatio: "portrait",
        alt: "lucia in tuscan garden surrounded by greenery, film photography",
      },
      {
        image: "/fashion-editorial-woman-garden-vintage-film-aesthe.jpg",
        title: "sunset dreams",
        protagonist: "mia",
        place: "lisbon",
        aspectRatio: "square",
        alt: "mia during lisbon sunset, dreamy golden hour portrait",
      },
    ],
  },
  personal: {
    name: "personal projects",
    description: "self-initiated work exploring themes close to my heart.",
    works: [
      {
        image: "/fashion-editorial-woman-sunglasses-retro-film-phot.jpg",
        title: "golden hour",
        protagonist: "emma",
        place: "barcelona",
        aspectRatio: "portrait",
        alt: "emma wearing retro sunglasses in golden barcelona sunlight",
      },
      {
        image: "/fashion-editorial-woman-sunglasses-retro-film-phot.jpg",
        title: "vinyl days",
        protagonist: "ana",
        place: "madrid",
        aspectRatio: "portrait",
        alt: "ana with vintage style in madrid, nostalgic film aesthetic",
      },
    ],
  },
  commercial: {
    name: "commercial",
    description: "brand collaborations and advertising campaigns.",
    works: [
      {
        image: "/fashion-editorial-woman-harbor-european-vintage-fi.jpg",
        title: "harbor dreams",
        protagonist: "sofia",
        place: "barcelona",
        aspectRatio: "landscape",
        alt: "sofia at barcelona harbor, european summer mood with vintage tones",
      },
      {
        image: "/fashion-editorial-woman-harbor-european-vintage-fi.jpg",
        title: "city lights",
        protagonist: "nina",
        place: "prague",
        aspectRatio: "portrait",
        alt: "nina silhouette in prague streets, european city atmosphere",
      },
      {
        image: "/fashion-editorial-woman-vintage-film-photography-c.jpg",
        title: "sweet moments",
        protagonist: "local stories",
        place: "lyon",
        aspectRatio: "landscape",
        alt: "intimate moment captured in lyon, warm vintage tones",
      },
    ],
  },
  video: {
    name: "video works",
    description: "motion projects, short films, and behind-the-scenes.",
    works: [
      {
        image: "/fashion-editorial-woman-vintage-film-photography-c.jpg",
        title: "summer in motion",
        protagonist: "various",
        place: "southern europe",
        aspectRatio: "landscape",
        alt: "cinematic summer moments across southern europe",
      },
      {
        image: "/fashion-editorial-woman-harbor-european-vintage-fi.jpg",
        title: "behind the lens",
        protagonist: "studio sessions",
        place: "barcelona",
        aspectRatio: "portrait",
        alt: "behind the scenes studio session in barcelona",
      },
      {
        image: "/fashion-editorial-woman-garden-vintage-film-aesthe.jpg",
        title: "golden hour reel",
        protagonist: "lucia",
        place: "tuscany",
        aspectRatio: "landscape",
        alt: "golden hour video reel featuring lucia in tuscany",
      },
    ],
  },
}

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const data = categoryData[category]

  if (!data) {
    return { title: "not found — exha studio" }
  }

  return {
    title: `${data.name} — exha studio`,
    description: data.description,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const data = categoryData[category]

  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen px-8 md:px-16 pt-32 md:pt-28 pb-28">
      <FadeIn delay={0}>
        <nav className="mb-16 text-caption text-muted-foreground lowercase font-light" aria-label="Breadcrumb">
          <Link href="/works" className="hover:text-primary transition-colors duration-300">
            works
          </Link>
          <span className="mx-2 opacity-soft">/</span>
          <span className="text-foreground">{data.name}</span>
        </nav>
      </FadeIn>

      <header className="mb-20" aria-labelledby="category-title">
        <FadeIn delay={100}>
          <h1 id="category-title" className="text-xl font-light lowercase tracking-wide mb-4">{data.name}</h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="text-caption text-muted-foreground lowercase font-thin italic opacity-muted max-w-xl">
            {data.description}
          </p>
        </FadeIn>
      </header>

      <FadeIn delay={250}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {data.works.map((work, index) => (
            <div
              key={work.title}
              className={index % 3 === 0 ? "md:col-span-2" : ""}
            >
              <ImageReveal
                src={work.image}
                alt={work.alt}
                title={work.title}
                protagonist={work.protagonist}
                place={work.place}
                aspectRatio={index % 3 === 0 ? "landscape" : work.aspectRatio}
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="mt-20">
          <Link
            href="/works"
            className="inline-flex items-center gap-4 text-label lowercase hover:text-primary transition-colors duration-300 font-light group"
          >
            <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
            back to all works
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }))
}
