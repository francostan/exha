"use client"

import { useEffect, useState, type ReactNode } from "react"
import { TIMING, EASING } from "@/lib/constants"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "none"
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const translateY = direction === "up" ? 20 : direction === "down" ? -20 : 0

  return (
    <div
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${translateY}px)`,
        transition: `opacity ${TIMING.slow}ms ${EASING}, transform ${TIMING.slow}ms ${EASING}`,
      }}
    >
      {children}
    </div>
  )
}
