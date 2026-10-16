import { additionalExperience } from "@/lib/content"
import { Reveal } from "@/components/reveal"

export function AdditionalExperience() {
  return (
    <section id="additional-experience" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Additional Experience
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-6 flex flex-col divide-y divide-border">
            {additionalExperience.map((a) => (
              <li
                key={a.company}
                className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[22rem_1fr_auto] sm:items-baseline sm:gap-4"
              >
                <span className="text-sm font-semibold">{a.company}</span>
                <span className="text-sm text-muted-foreground">{a.role}</span>
                <span className="font-mono text-xs text-muted-foreground">{a.period}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
