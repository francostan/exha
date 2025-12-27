"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { TIMING, EASING } from "@/lib/constants"

const workCategories = [
  { name: "editorial", slug: "editorial" },
  { name: "personal projects", slug: "personal" },
  { name: "commercial", slug: "commercial" },
  { name: "video works", slug: "video" },
]

const mainNav = [
  { name: "works", href: "/works", hasSubmenu: true },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
  { name: "instagram", href: "https://instagram.com/exhastudio", external: true },
]

export function Sidebar() {
  const [worksOpen, setWorksOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

  const transitionStyle = `${TIMING.medium}ms ${EASING}`

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-8 left-8 z-50 md:hidden flex flex-col gap-1.5"
        aria-label={mobileOpen ? "close menu" : "open menu"}
        aria-expanded={mobileOpen}
      >
        <span
          className="block w-5 h-px bg-foreground"
          style={{
            transition: `transform ${transitionStyle}`,
            transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none",
          }}
        />
        <span
          className="block w-5 h-px bg-foreground"
          style={{
            transition: `opacity ${transitionStyle}`,
            opacity: mobileOpen ? 0 : 1,
          }}
        />
        <span
          className="block w-5 h-px bg-foreground"
          style={{
            transition: `transform ${transitionStyle}`,
            transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none",
          }}
        />
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-full w-60 bg-background z-40
          flex flex-col justify-between py-12 px-8
          transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
        style={{ transitionTimingFunction: EASING }}
        aria-label="Main navigation"
      >
        <div>
          <Link href="/" className="block mb-16" onClick={() => setMobileOpen(false)}>
            <span className="text-sm font-light tracking-[0.25em] lowercase mb-1 block">exha studio</span>
            <span className="text-caption text-muted-foreground lowercase font-thin italic opacity-soft block">
              valentina motta
            </span>
          </Link>

          <nav className="space-y-0" aria-label="Site navigation">
            {mainNav.map((item) => (
              <div key={item.name}>
                {item.hasSubmenu ? (
                  <>
                    <button
                      onClick={() => setWorksOpen(!worksOpen)}
                      aria-expanded={worksOpen}
                      aria-controls="works-submenu"
                      className="flex items-center justify-between w-full py-3 text-label lowercase font-light hover:text-primary"
                      style={{
                        color: isActive("/works") ? "var(--primary)" : "var(--foreground)",
                        transition: `color ${transitionStyle}`,
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className="w-1 h-1 rounded-full"
                          style={{
                            backgroundColor: isActive("/works") ? "var(--primary)" : "transparent",
                            transition: `background-color ${transitionStyle}`,
                          }}
                        />
                        {item.name}
                      </span>
                      <span
                        className="text-xs"
                        style={{
                          transform: worksOpen ? "rotate(45deg)" : "rotate(0deg)",
                          transition: `transform ${transitionStyle}`,
                        }}
                      >
                        +
                      </span>
                    </button>

                    <div
                      id="works-submenu"
                      role="region"
                      aria-label="Work categories"
                      style={{
                        maxHeight: worksOpen ? "240px" : "0",
                        opacity: worksOpen ? 1 : 0,
                        transition: `max-height ${transitionStyle}, opacity ${transitionStyle}`,
                        overflow: "hidden",
                      }}
                    >
                      <div className="pl-2 py-2 space-y-0 border-l border-border/40 ml-2">
                        <Link
                          href="/works"
                          onClick={() => setMobileOpen(false)}
                          tabIndex={worksOpen ? 0 : -1}
                          className="flex items-center gap-2 py-2 text-caption hover:text-primary lowercase font-light"
                          style={{
                            color: pathname === "/works" ? "var(--primary)" : "var(--muted-foreground)",
                            transition: `color ${transitionStyle}`,
                          }}
                        >
                          <span
                            className="w-1 h-1 rounded-full"
                            style={{
                              backgroundColor: pathname === "/works" ? "var(--primary)" : "transparent",
                              transition: `background-color ${transitionStyle}`,
                            }}
                          />
                          all
                        </Link>
                        {workCategories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/works/${cat.slug}`}
                            onClick={() => setMobileOpen(false)}
                            tabIndex={worksOpen ? 0 : -1}
                            className="flex items-center gap-2 py-2 text-caption hover:text-primary lowercase font-light"
                            style={{
                              color: pathname === `/works/${cat.slug}` ? "var(--primary)" : "var(--muted-foreground)",
                              transition: `color ${transitionStyle}`,
                            }}
                          >
                            <span
                              className="w-1 h-1 rounded-full"
                              style={{
                                backgroundColor: pathname === `/works/${cat.slug}` ? "var(--primary)" : "transparent",
                                transition: `background-color ${transitionStyle}`,
                              }}
                            />
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 py-3 text-label lowercase font-light hover:text-primary"
                    style={{
                      color: isActive(item.href) ? "var(--primary)" : "var(--foreground)",
                      transition: `color ${transitionStyle}`,
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{
                        backgroundColor: isActive(item.href) ? "var(--primary)" : "transparent",
                        transition: `background-color ${transitionStyle}`,
                      }}
                    />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <p className="text-micro text-muted-foreground opacity-subtle lowercase font-light">© 2025</p>
      </aside>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
