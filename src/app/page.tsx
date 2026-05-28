import { HeroSection } from "@/components/sections/hero-section"
import { OperatorSection } from "@/components/sections/operator-section"
import { ExpertiseGrid } from "@/components/sections/expertise-grid"
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview"
import { AILabPreview } from "@/components/sections/ai-lab-preview"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <OperatorSection />
      <ExpertiseGrid />
      <CaseStudiesPreview />
      <AILabPreview />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}
