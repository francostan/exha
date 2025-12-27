"use client"

import { ImageReveal } from "./image-reveal"
import Link from "next/link"

interface Project {
  image: string
  title: string
  protagonist: string
  place: string
  category: string
  size: "small" | "medium" | "large"
}

interface CollageGridProps {
  projects: Project[]
}

export function CollageGrid({ projects }: CollageGridProps) {
  return (
    <div className="relative">
      <div className="grid grid-cols-12 gap-5 md:gap-8 mb-8 md:mb-12">
        {/* hero image - left aligned */}
        <div className="col-span-12 md:col-span-5 md:col-start-1">
          <Link href={`/works/${projects[0].category}`} className="block">
            <ImageReveal
              src={projects[0].image || "/placeholder.svg"}
              alt={projects[0].title}
              title={projects[0].title}
              protagonist={projects[0].protagonist}
              place={projects[0].place}
              aspectRatio="portrait"
              priority
            />
          </Link>
        </div>

        {/* secondary image - right side, offset down for rhythm */}
        <div className="col-span-12 md:col-span-5 md:col-start-7 md:mt-40">
          <Link href={`/works/${projects[1].category}`} className="block">
            <ImageReveal
              src={projects[1].image || "/placeholder.svg"}
              alt={projects[1].title}
              title={projects[1].title}
              protagonist={projects[1].protagonist}
              place={projects[1].place}
              aspectRatio="landscape"
            />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 md:gap-8 mb-8 md:mb-12">
        {/* small square - left */}
        <div className="col-span-6 md:col-span-3 md:col-start-2">
          <Link href={`/works/${projects[2].category}`} className="block">
            <ImageReveal
              src={projects[2].image || "/placeholder.svg"}
              alt={projects[2].title}
              title={projects[2].title}
              protagonist={projects[2].protagonist}
              place={projects[2].place}
              aspectRatio="square"
            />
          </Link>
        </div>

        {/* medium portrait - center */}
        <div className="col-span-6 md:col-span-4 md:col-start-5 md:mt-20">
          <Link href={`/works/${projects[3].category}`} className="block">
            <ImageReveal
              src={projects[3].image || "/placeholder.svg"}
              alt={projects[3].title}
              title={projects[3].title}
              protagonist={projects[3].protagonist}
              place={projects[3].place}
              aspectRatio="portrait"
            />
          </Link>
        </div>

        {/* small square - right */}
        <div className="col-span-6 md:col-span-3 md:col-start-10 md:-mt-8">
          <Link href={`/works/${projects[4].category}`} className="block">
            <ImageReveal
              src={projects[4].image || "/placeholder.svg"}
              alt={projects[4].title}
              title={projects[4].title}
              protagonist={projects[4].protagonist}
              place={projects[4].place}
              aspectRatio="square"
            />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 md:gap-8">
        <div className="col-span-12 md:col-span-6 md:col-start-4">
          <Link href={`/works/${projects[5].category}`} className="block">
            <ImageReveal
              src={projects[5].image || "/placeholder.svg"}
              alt={projects[5].title}
              title={projects[5].title}
              protagonist={projects[5].protagonist}
              place={projects[5].place}
              aspectRatio="landscape"
            />
          </Link>
        </div>
      </div>

      <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2">
        <p className="text-micro text-muted-foreground opacity-subtle vertical-text lowercase font-light">
          selected — 2025
        </p>
      </div>
    </div>
  )
}
