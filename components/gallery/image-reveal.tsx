"use client"

import type React from "react"
import { useRef, useState } from "react"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"
import { TIMING, EASING } from "@/lib/constants"

interface ImageRevealProps {
  src: string
  alt: string
  title?: string
  protagonist?: string
  place?: string
  aspectRatio?: "portrait" | "landscape" | "square"
  priority?: boolean
}

export function ImageReveal({
  src,
  alt,
  title,
  protagonist,
  place,
  aspectRatio = "portrait",
  priority = false,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useIsMobile()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isMobile) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePos({ x: 0, y: 0 })
  }

  const aspectClasses = {
    portrait: "aspect-[3/4]",
    landscape: "aspect-[16/10]",
    square: "aspect-square",
  }

  const cursorSize = 40

  return (
    <div className="group image-lift">
      <div
        ref={containerRef}
        className={`relative overflow-hidden ${aspectClasses[aspectRatio]} bg-muted/20`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        data-hoverable
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: isHovered && !isMobile ? 1 : 0,
            transition: `opacity ${TIMING.fast}ms ${EASING}`,
            clipPath: `circle(${cursorSize}px at ${mousePos.x}px ${mousePos.y}px)`,
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            style={{
              filter: "grayscale(100%) contrast(1.1) brightness(1.05) sepia(0.15)",
            }}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* fine grain - subtle texture */}
          <div
            className="absolute inset-0 mix-blend-overlay"
            style={{
              opacity: 0.18,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          {/* medium grain - film texture */}
          <div
            className="absolute inset-0 mix-blend-soft-light"
            style={{
              opacity: 0.12,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise2)'/%3E%3C/svg%3E")`,
            }}
          />
          {/* micro grain - analog feel */}
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              opacity: 0.06,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise3)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {(title || protagonist) && (
          <>
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 right-3 pointer-events-none z-10">
              <div className="flex flex-col gap-0.5">
                {title && (
                  <h3 className="text-label font-light lowercase text-white/90">
                    {title}
                  </h3>
                )}
                {(protagonist || place) && (
                  <p className="text-micro text-white/50 font-thin italic lowercase">
                    ({protagonist}
                    {protagonist && place && " — "}
                    {place})
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
