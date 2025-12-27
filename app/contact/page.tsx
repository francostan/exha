import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen px-8 md:px-16 pt-32 md:pt-28 pb-28 flex flex-col">
      {/* main content */}
      <div className="flex-1">
        <header className="mb-24">
          <p className="text-caption text-muted-foreground opacity-soft lowercase mb-10 font-light">contact</p>

          <h1 className="text-xl md:text-2xl font-light leading-relaxed mb-4 lowercase tracking-wide">let's create</h1>
          <h1 className="text-xl md:text-2xl font-thin italic text-muted-foreground opacity-muted lowercase tracking-wide mb-10">
            something beautiful
          </h1>

          <p className="text-muted-foreground max-w-md text-sm leading-loose font-light lowercase">
            whether you're looking for editorial photography, a brand campaign, or creative direction for your next
            project, i'd love to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
          {/* email */}
          <div>
            <p className="text-caption lowercase text-muted-foreground opacity-muted mb-4 font-light">email</p>
            <a
              href="mailto:hello@exhastudio.com"
              className="text-base md:text-lg font-light lowercase hover:text-primary transition-colors duration-300"
            >
              hello@exhastudio.com
            </a>
          </div>

          {/* social */}
          <div>
            <p className="text-caption lowercase text-muted-foreground opacity-muted mb-4 font-light">social</p>
            <a
              href="https://instagram.com/exhastudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg font-light lowercase hover:text-primary transition-colors duration-300"
            >
              @exhastudio
            </a>
          </div>
        </div>

        <section className="border-t border-border/60 pt-20">
          <p className="text-caption text-muted-foreground opacity-soft lowercase mb-12 font-light">services</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "editorial", desc: "magazine features, cover stories, and fashion editorials" },
              { title: "commercial", desc: "brand campaigns, lookbooks, and product photography" },
              { title: "creative direction", desc: "concept development, art direction, and visual strategy" },
              { title: "video", desc: "short films, brand videos, and behind-the-scenes content" },
            ].map((service) => (
              <div key={service.title}>
                <h3 className="text-sm font-light mb-3 lowercase">{service.title}</h3>
                <p className="text-caption text-muted-foreground font-light lowercase leading-relaxed opacity-soft">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-border/60 pt-12 mt-24">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div>
            <p className="text-caption lowercase text-muted-foreground opacity-muted mb-3 font-light">based in</p>
            <p className="text-sm font-light lowercase">milan, italy</p>
            <p className="text-caption text-muted-foreground font-thin italic mt-2 opacity-muted">
              (available worldwide)
            </p>
          </div>
          <Link
            href="/works"
            className="inline-flex items-center gap-6 text-caption lowercase hover:text-primary transition-colors duration-500 group font-light"
          >
            view my work
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-500" />
          </Link>
        </div>
      </footer>
    </div>
  )
}
