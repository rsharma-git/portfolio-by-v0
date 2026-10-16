import { profile } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { ArrowUpRight, Download, Mail } from "lucide-react"

// Soft, light lavender band. Set inline so it renders reliably regardless of
// the Tailwind theme-token build cache. Text uses the standard foreground
// tokens to stay consistent with the rest of the page.
const lavenderBand = "oklch(0.955 0.045 300)"

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-border text-foreground"
      style={{ backgroundColor: lavenderBand }}
    >
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-[1.08] md:text-6xl">
            Let&apos;s build great products together.
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            I&apos;m exploring Product Management opportunities across AI-enabled
            Platforms, Developer Experience, and Search. Reach out - I&apos;d love
            to talk.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              className="h-11 gap-2 whitespace-nowrap rounded-full bg-mint px-5 text-sm font-medium text-mint-foreground transition-colors hover:bg-mint/85"
              render={<a href={`mailto:${profile.email}`} />}
            >
              <Mail className="size-4" />
              Get in touch
            </Button>
            <Button
              size="lg"
              nativeButton={false}
              className="h-11 gap-2 whitespace-nowrap rounded-full bg-sky px-5 text-sm font-medium text-sky-foreground transition-colors hover:bg-sky/85"
              render={<a href={profile.linkedin} target="_blank" rel="noopener noreferrer" />}
            >
              LinkedIn
              <ArrowUpRight className="size-4" />
            </Button>
            <Button
              size="lg"
              nativeButton={false}
              className="h-11 gap-2 whitespace-nowrap rounded-full bg-butter px-5 text-sm font-medium text-butter-foreground transition-colors hover:bg-butter/85"
              render={<a href={profile.resume} download="RahulSharma.pdf" />}
            >
              <Download className="size-4" />
              Resume
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            {profile.name} - {profile.title}
          </span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
