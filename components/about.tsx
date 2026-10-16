import { profile } from "@/lib/content"
import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            About
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6 font-serif text-2xl leading-[1.35] md:text-[2rem] md:leading-[1.3]">
            {profile.positioning}
          </p>
        </Reveal>

        <div className="mt-8 space-y-6">
          <Reveal>
            <p className="leading-relaxed text-muted-foreground">{profile.about.intro}</p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="flex flex-col gap-3">
              {profile.about.bullets.map((b, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                  <span
                    aria-hidden
                    className="mt-[7px] size-2 shrink-0 rounded-full border border-accent bg-accent"
                  />
                  <span className="flex-1 text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <p className="leading-relaxed text-muted-foreground">{profile.about.closing}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
