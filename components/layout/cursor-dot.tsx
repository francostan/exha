"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { TIMING, EASING } from "@/lib/constants"

export function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }, [])

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      target.dataset.hoverable
    ) {
      setIsHovering(true)
    }
  }, [])

  const handleMouseOut = useCallback(() => {
    setIsHovering(false)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isMobile) return

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [isMobile, handleMouseMove, handleMouseOver, handleMouseOut])

  if (!mounted || isMobile) return null

  return (
    <div
      ref={dotRef}
      className="fixed pointer-events-none z-[100] rounded-full border border-foreground/25"
      style={{
        left: position.x,
        top: position.y,
        width: isHovering ? 14 : 8,
        height: isHovering ? 14 : 8,
        transform: "translate(-50%, -50%)",
        transition: `width ${TIMING.fast}ms ${EASING}, height ${TIMING.fast}ms ${EASING}`,
      }}
    />
  )
}
