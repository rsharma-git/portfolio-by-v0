import { caseStudies } from "@/lib/content"
import { Reveal } from "@/components/reveal"
import { ArrowUpRight } from "lucide-react"

const toneMap = {
  mint: "bg-mint text-mint-foreground",
  blush: "bg-blush text-blush-foreground",
  butter: "bg-butter text-butter-foreground",
  sky: "bg-sky text-sky-foreground",
} as const

export function CaseStudies() {
  return (
    <section id="work" className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Perspectives
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
            Thoughts, Experiences &amp; <span className="italic text-accent">Prototypes</span>
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
            Reflections on the Platforms and AI Products I&apos;ve shipped - with
            direct links to full presentations and a live prototype.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.title} delay={i * 100} className="h-full">
              <a
                href={cs.href}
                target={cs.external ? "_blank" : undefined}
                rel={cs.external ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${toneMap[cs.tone]}`}
                >
                  {cs.category}
                </span>
                <h3 className="mt-5 text-balance font-serif text-2xl leading-snug">
                  {cs.title}
                </h3>
                <p className="mt-3 flex-1 text-justify text-sm leading-relaxed text-muted-foreground">
                  {cs.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  {cs.linkLabel}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
