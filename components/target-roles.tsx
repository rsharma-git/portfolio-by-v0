import { targetRoles } from "@/lib/content"
import { Reveal } from "@/components/reveal"

const dotMap = {
  mint: "bg-mint-foreground",
  blush: "bg-blush-foreground",
  butter: "bg-butter-foreground",
  sky: "bg-sky-foreground",
} as const

export function TargetRoles() {
  return (
    <section id="roles" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            What I&apos;m looking for
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
            Roles I&apos;m <span className="italic text-accent">targeting</span>
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted-foreground">
            Senior, Staff, and Principal Product Management roles where platform
            depth and AI product sense compound. A few of the teams I&apos;m
            actively pursuing:
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {targetRoles.map((role, i) => (
            <Reveal
              key={role.title}
              delay={i * 90}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-center gap-3">
                <span className={`size-2.5 rounded-full ${dotMap[role.tone]}`} aria-hidden />
                <h3 className="font-serif text-2xl">{role.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {role.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
