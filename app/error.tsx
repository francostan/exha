"use client"

import Link from "next/link"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center">
        <p className="text-caption text-muted-foreground opacity-soft lowercase mb-8 font-light">
          something went wrong
        </p>
        <h1 className="text-xl font-light lowercase tracking-wide mb-8">
          an error occurred
        </h1>
        <div className="flex gap-8 justify-center">
          <button
            onClick={reset}
            className="text-label lowercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
          >
            try again
          </button>
          <Link
            href="/"
            className="text-label lowercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
          >
            go home
          </Link>
        </div>
      </div>
    </div>
  )
}
