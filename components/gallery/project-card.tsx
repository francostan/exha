import Link from "next/link"
import { ImageReveal } from "./image-reveal"

interface ProjectCardProps {
  href: string
  image: string
  title: string
  protagonist?: string
  place?: string
  aspectRatio?: "portrait" | "landscape" | "square"
}

export function ProjectCard({
  href,
  image,
  title,
  protagonist,
  place,
  aspectRatio = "portrait",
}: ProjectCardProps) {
  return (
    <Link href={href} className="block group">
      <ImageReveal
        src={image}
        alt={title}
        title={title}
        protagonist={protagonist}
        place={place}
        aspectRatio={aspectRatio}
      />
    </Link>
  )
}
