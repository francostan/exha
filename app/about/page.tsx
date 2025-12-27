import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen px-8 md:px-16 pt-32 md:pt-28 pb-28">
      {/* hero section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-32">
        {/* text content */}
        <div className="order-2 lg:order-1 lg:col-span-5">
          <p className="text-caption text-muted-foreground opacity-soft lowercase mb-10 font-light">about</p>

          <h1 className="text-xl md:text-2xl font-light leading-relaxed mb-4 lowercase tracking-wide">why i do</h1>
          <h1 className="text-xl md:text-2xl font-thin italic text-muted-foreground opacity-muted lowercase tracking-wide mb-14">
            what i love
          </h1>

          <div className="space-y-6 text-muted-foreground text-sm leading-loose font-light lowercase">
            <p>
              photography, for me, is about capturing the in-between moments — the glances, the pauses, the fleeting
              emotions that tell a story words cannot express.
            </p>
            <p>
              growing up between cultures and cities across europe, i developed an eye for the poetic in the everyday.
              the way light falls through a cafe window in paris, the colors of a summer afternoon in tuscany.
            </p>
            <p>
              as a creative director, i bring this same sensibility to every project — whether editorial, commercial, or
              personal exploration. i believe in authentic storytelling, in creating images that feel lived-in.
            </p>
          </div>

          <p className="text-caption text-muted-foreground opacity-subtle lowercase mt-14 font-thin italic">
            valentina motta
          </p>
        </div>

        {/* portrait image */}
        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7 relative">
          <div className="aspect-[3/4] relative overflow-hidden">
            <Image
              src="/fashion-editorial-woman-vintage-film-photography-c.jpg"
              alt="valentina motta"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <p className="mt-5 text-caption text-muted-foreground font-thin italic opacity-soft">
            (valentina — milan, 2024)
          </p>
        </div>
      </div>

      {/* details grid */}
      <section className="mb-24">
        <p className="text-caption text-muted-foreground opacity-soft lowercase mb-10 font-light">details</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <p className="text-caption lowercase text-muted-foreground opacity-muted mb-3 font-light">based in</p>
            <p className="text-sm font-light lowercase">milan, italy</p>
          </div>
          <div>
            <p className="text-caption lowercase text-muted-foreground opacity-muted mb-3 font-light">experience</p>
            <p className="text-sm font-light lowercase">8+ years</p>
          </div>
          <div>
            <p className="text-caption lowercase text-muted-foreground opacity-muted mb-3 font-light">focus</p>
            <p className="text-sm font-light lowercase">editorial & commercial</p>
          </div>
          <div>
            <p className="text-caption lowercase text-muted-foreground opacity-muted mb-3 font-light">approach</p>
            <p className="text-sm font-light lowercase">film & digital</p>
          </div>
        </div>
      </section>

      {/* clients */}
      <section className="border-t border-border/60 pt-20 mb-20">
        <p className="text-caption text-muted-foreground opacity-soft lowercase mb-10 font-light">selected clients</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground font-light lowercase">
          <p>vogue italia</p>
          <p>elle magazine</p>
          <p>harper's bazaar</p>
          <p>dior beauty</p>
          <p>zara</p>
          <p>massimo dutti</p>
          <p>salvatore ferragamo</p>
          <p>bulgari</p>
        </div>
      </section>

      {/* recognition */}
      <section className="border-t border-border/60 pt-20">
        <p className="text-caption text-muted-foreground opacity-soft lowercase mb-10 font-light">recognition</p>

        <div className="space-y-0">
          {[
            { title: "international photography awards", year: "2024" },
            { title: "photo vogue festival", year: "2023" },
            { title: "communication arts photo annual", year: "2022" },
          ].map((award) => (
            <div key={award.title} className="flex justify-between items-baseline border-b border-border/40 py-5">
              <p className="text-sm font-light lowercase">{award.title}</p>
              <p className="text-caption text-muted-foreground font-thin italic opacity-muted">{award.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
