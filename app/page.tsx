import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Metrics } from "@/components/metrics"
import { About } from "@/components/about"
import { Competencies } from "@/components/competencies"
import { CaseStudies } from "@/components/case-studies"
import { TargetRoles } from "@/components/target-roles"
import { Experience } from "@/components/experience"
import { AdditionalExperience } from "@/components/additional-experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Hero />
      <Metrics />
      <About />
      <Competencies />
      <CaseStudies />
      <TargetRoles />
      <Experience />
      <AdditionalExperience />
      <Skills />
      <Education />
      <ContactFooter />
    </main>
  )
}
