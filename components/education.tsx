import { credentials } from "@/lib/content"
import { Reveal } from "@/components/reveal"

export function Education() {
  return (
    <section id="education" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Education
          </p>
        </Reveal>

        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          <Reveal>
            <h3 className="text-sm font-semibold">Degrees</h3>
            <ul className="mt-4 flex flex-col gap-4">
              {credentials.education.map((e) => (
                <li key={e.school}>
                  <p className="text-base font-medium">{e.school}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{e.degree}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="text-sm font-semibold">Certifications</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {credentials.certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="mt-[7px] size-2 shrink-0 rounded-full bg-accent" />
                  <span className="flex-1">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
