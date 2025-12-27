import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center">
        <p className="text-caption text-muted-foreground opacity-soft lowercase mb-8 font-light">
          404
        </p>
        <h1 className="text-xl font-light lowercase tracking-wide mb-4">
          page not found
        </h1>
        <p className="text-caption text-muted-foreground lowercase font-thin italic opacity-muted mb-12">
          the page you're looking for doesn't exist
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-4 text-label lowercase hover:text-primary transition-colors duration-300 font-light"
        >
          <span className="w-6 h-px bg-current" />
          back to home
        </Link>
      </div>
    </div>
  )
}
