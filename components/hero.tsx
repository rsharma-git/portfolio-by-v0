import Image from "next/image"
import { profile } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr]">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Open to Product Management roles
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-serif text-6xl leading-[1.02] md:text-7xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl text-pretty text-xl leading-relaxed text-foreground md:text-2xl md:leading-relaxed">
              Product Manager building{" "}
              <span className="font-serif italic text-accent">AI-enabled Platforms</span>,
              Developer Experience, and{" "}
              <span className="font-serif italic text-accent">Search &amp; Conversational</span>{" "}
              products.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-justify leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={260}>
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
                className="h-11 gap-2 whitespace-nowrap rounded-full bg-butter px-5 text-sm font-medium text-butter-foreground transition-colors hover:bg-butter/85"
                render={<a href={profile.resume} download="RahulSharma.pdf" />}
              >
                <Download className="size-4" />
                Download Resume
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
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground sm:flex-nowrap sm:gap-4 sm:overflow-x-auto sm:whitespace-nowrap">
              <span className="flex shrink-0 items-center gap-2">
                <MapPin className="size-4" />
                {profile.location}
              </span>
              <span className="shrink-0 text-border">|</span>
              <span className="shrink-0">{profile.pedigree}</span>
              <span className="shrink-0 text-border">|</span>
              <span className="shrink-0">{profile.school}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-mint/45" aria-hidden />
          <div className="absolute -bottom-5 -right-5 -z-10 h-28 w-28 rounded-3xl bg-sky/60" aria-hidden />
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm">
            <Image
              src="/rahul-portrait.jpg"
              alt={`Portrait of ${profile.name}`}
              width={480}
              height={600}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
