import { metrics } from "@/lib/content"
import { Reveal } from "@/components/reveal"

const toneMap = {
  mint: "bg-mint text-mint-foreground",
  blush: "bg-blush text-blush-foreground",
  butter: "bg-butter text-butter-foreground",
  sky: "bg-sky text-sky-foreground",
} as const

export function Metrics() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <Reveal>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Measurable impact
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 90}
              className={`flex flex-col items-center rounded-2xl p-5 text-center transition-transform duration-300 hover:-translate-y-1 ${toneMap[m.tone as keyof typeof toneMap]}`}
            >
              <span className="font-serif text-4xl leading-none">{m.value}</span>
              <p className="mt-3 text-xs leading-relaxed opacity-90">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
