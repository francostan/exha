import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen px-8 md:px-16 pt-32 md:pt-28 pb-28 flex flex-col">
      <div className="flex-1">
        <header className="mb-20">
          <FadeIn delay={0}>
            <p className="text-caption text-muted-foreground opacity-soft lowercase mb-10 font-light">contact</p>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-xl md:text-2xl font-light leading-relaxed mb-4 lowercase tracking-wide">let's create</h1>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-xl md:text-2xl font-thin italic text-muted-foreground opacity-muted lowercase tracking-wide mb-10">
              something beautiful
            </p>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="text-muted-foreground max-w-md text-sm leading-loose font-light lowercase">
              whether you're looking for editorial photography, a brand campaign, or creative direction for your next
              project, i'd love to hear from you.
            </p>
          </FadeIn>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <FadeIn delay={300}>
            <div>
              <p className="text-caption text-muted-foreground opacity-soft lowercase mb-8 font-light">send a message</p>
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="space-y-12">
              <div>
                <p className="text-caption lowercase text-muted-foreground opacity-muted mb-4 font-light">email directly</p>
                <a
                  href="mailto:hello@exhastudio.com"
                  className="text-base md:text-lg font-light lowercase hover:text-primary transition-colors duration-300"
                >
                  hello@exhastudio.com
                </a>
              </div>

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

              <div>
                <p className="text-caption lowercase text-muted-foreground opacity-muted mb-3 font-light">based in</p>
                <p className="text-sm font-light lowercase">milan, italy</p>
                <p className="text-caption text-muted-foreground font-thin italic mt-2 opacity-muted">
                  (available worldwide)
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={500}>
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
        </FadeIn>
      </div>

      <FadeIn delay={600}>
        <footer className="border-t border-border/60 pt-12 mt-24">
          <div className="flex justify-end">
            <Link
              href="/works"
              className="inline-flex items-center gap-6 text-caption lowercase hover:text-primary transition-colors duration-300 group font-light"
            >
              view my work
              <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </footer>
      </FadeIn>
    </div>
  )
}
