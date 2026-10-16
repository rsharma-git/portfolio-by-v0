"use client"

import { useState } from "react"
import { profile } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Download, Mail, Menu, X } from "lucide-react"

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#roles", label: "Roles" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#top" className="flex shrink-0 items-center gap-2 font-medium tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
            RS
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* LinkedIn icon */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rahul Sharma on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-accent"
          >
            <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.73v20.53C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.73C24 .78 23.2 0 22.22 0z" />
            </svg>
          </a>

          {/* Resume pill — hidden on mobile */}
          <Button
            size="sm"
            nativeButton={false}
            className="hidden h-9 items-center gap-1.5 whitespace-nowrap rounded-full bg-butter px-4 text-sm font-medium text-butter-foreground hover:bg-butter/85 sm:inline-flex"
            render={<a href={profile.resume} download="RahulSharma.pdf" />}
          >
            <Download className="size-4" />
            Resume
          </Button>

          {/* Get in touch pill */}
          <Button
            size="sm"
            nativeButton={false}
            className="hidden h-9 items-center gap-1.5 whitespace-nowrap rounded-full bg-mint px-4 text-sm font-medium text-mint-foreground hover:bg-mint/80 sm:inline-flex"
            render={<a href={`mailto:${profile.email}`} />}
          >
            <Mail className="size-4" />
            Get in touch
          </Button>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border/60 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 pb-4 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            {/* Mobile action buttons */}
            <div className="mt-3 flex gap-2 border-t border-border pt-3">
              <a
                href={profile.resume}
                download="RahulSharma.pdf"
                className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-butter text-sm font-medium text-butter-foreground"
              >
                <Download className="size-4" />
                Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-mint text-sm font-medium text-mint-foreground"
              >
                <Mail className="size-4" />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
