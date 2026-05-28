import { Bot, BarChart3, Users, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const expertiseAreas = [
  {
    title: "AI Automation & Workflows",
    description: "Chaining n8n, Zapier, Make, and LLMs to automate ad copy, reporting, and scale beyond human limits.",
    icon: <Bot className="w-8 h-8 text-indigo-400" />,
    href: "/expertise/ai-automation",
  },
  {
    title: "Performance Marketing",
    description: "Managing €500K+ monthly budgets across Google, Meta, and Bing with programmatic precision.",
    icon: <BarChart3 className="w-8 h-8 text-magenta" />,
    href: "/expertise/performance-marketing",
  },
  {
    title: "Affiliate & Partnerships",
    description: "Building partner engines from zero to 1,000+ affiliates using data-driven outbound and tracking.",
    icon: <Users className="w-8 h-8 text-primary" />,
    href: "/expertise/affiliate",
  },
  {
    title: "SEO & Content",
    description: "Programmatic SEO across 35 languages to dominate SERPs and generate compounding organic growth.",
    icon: <Search className="w-8 h-8 text-signal" />,
    href: "/expertise/seo-content",
  },
]

export function ExpertiseGrid() {
  return (
    <section className="py-24 bg-background relative border-t border-border/40">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="flex flex-col gap-4 max-w-2xl mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">What I Do</h2>
          <p className="text-muted-foreground text-lg">
            Fusing computer science with performance marketing to build growth engines that scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area) => (
            <Link key={area.title} href={area.href} className="group h-full">
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 transition-all hover:bg-card hover:border-primary/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] flex flex-col">
                <CardHeader>
                  <div className="mb-4 p-3 rounded-lg bg-background w-fit border border-border/50 group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <CardTitle className="font-heading text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
