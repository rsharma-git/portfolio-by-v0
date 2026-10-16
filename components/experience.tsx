import { experiences } from "@/lib/content"
import { Reveal } from "@/components/reveal"

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Relevant Experience
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col">
          {experiences.map((exp, i) => (
            <Reveal
              key={exp.company}
              as="article"
              className={`grid gap-5 py-10 ${i !== 0 ? "border-t border-border" : "pt-2"}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>

              <div className="-mt-3">
                <p className="text-sm font-medium text-accent">{exp.role}</p>
                {exp.meta && (
                  <p className="mt-0.5 text-xs text-muted-foreground">{exp.meta}</p>
                )}
              </div>

              <p className="text-justify leading-relaxed text-muted-foreground">{exp.summary}</p>

              <ul className="flex flex-col gap-3">
                {exp.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden className="mt-[7px] size-2 shrink-0 rounded-full border border-accent bg-accent" />
                    <span className="flex-1 text-justify">{h}</span>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <li key={t} className="rounded-md border border-border bg-card px-2 py-1 font-mono text-xs text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
