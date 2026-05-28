import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { RoasChart } from "@/components/ui/roas-chart"
import { WorkflowDiagram } from "@/components/ui/workflow-diagram"
import { DashboardPreview } from "@/components/ui/dashboard-preview"

const caseStudies = [
  {
    title: "Scaling ROAS from 10x to 18x at a Global Marketplace",
    metrics: ["€500K Monthly Budget", "80% Efficiency Lift"],
    image: <RoasChart />,
    href: "/case-studies/marketplace-roas",
    color: "from-primary/20 to-transparent",
  },
  {
    title: "35-Language Programmatic SEO Engine",
    metrics: ["100+ Top 3 SERPs", "Fully Automated Content"],
    image: <WorkflowDiagram />,
    href: "/case-studies/programmatic-seo",
    color: "from-indigo-500/20 to-transparent",
  },
  {
    title: "From 0 to 1,000 Affiliates in 8 Months",
    metrics: ["Partnerize", "Apollo.io Outbound"],
    image: <DashboardPreview />,
    href: "/case-studies/affiliate-engine",
    color: "from-magenta/20 to-transparent",
  }
]

export function CaseStudiesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">Featured Case Studies</h2>
            <p className="text-muted-foreground text-lg">
              Real numbers. Real dashboards. No fluff. How I engineer growth at scale.
            </p>
          </div>
          <Button render={<Link href="/case-studies" />} variant="outline" className="shrink-0 w-fit">
            View All <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link key={study.title} href={study.href} className="group flex">
              <Card className="flex flex-col overflow-hidden border-border/50 bg-card/50 hover:bg-card transition-colors w-full">
                <div className={`h-48 bg-gradient-to-br ${study.color} border-b border-border/50 flex items-center justify-center p-0 relative overflow-hidden`}>
                  <div className="w-full h-full group-hover:scale-105 transition-transform flex items-center justify-center">
                    {typeof study.image === 'string' ? (
                      <span className="text-muted-foreground font-mono text-sm">{study.image}</span>
                    ) : (
                      study.image
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl leading-tight group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex gap-2 flex-wrap">
                  {study.metrics.map(m => (
                    <Badge key={m} variant="secondary" className="bg-secondary/50">{m}</Badge>
                  ))}
                </CardContent>
                <CardFooter className="pt-4 pb-6">
                  <span className="text-sm font-medium text-primary flex items-center group-hover:translate-x-1 transition-transform">
                    Read Study <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
