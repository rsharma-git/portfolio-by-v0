import { competencies } from "@/lib/content"
import { Reveal } from "@/components/reveal"

export function Competencies() {
  return (
    <section id="competencies" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Core Competencies
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-6 flex flex-wrap gap-2">
            {competencies.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
