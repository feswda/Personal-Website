import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export const metadata = {
  title: "About | Himanshu Garg",
  description: "The Computer Science kid who fell in love with marketing math.",
}

const timeline = [
  {
    year: "2024-Present",
    role: "Marketing Lead",
    company: "Leading European Marketplace",
    description: "Full-funnel ownership managing €500K/month budgets, generating €100M+ revenue.",
  },
  {
    year: "2021-2023",
    role: "Paid Marketing Manager",
    company: "Global Travel Tech Startup, Berlin",
    description: "Scaled marketing team from 4 to 20+, managing 30+ Google Ads accounts and 11K+ campaigns.",
  },
  {
    year: "2020-2021",
    role: "Performance Marketing Exec",
    company: "Kent RO Systems",
    description: "Led Amazon PPC strategy for €3-5K daily budgets, yielding 9x ROI.",
  },
  {
    year: "2018-2020",
    role: "MBA, International Marketing",
    company: "IIM Bodh Gaya",
    description: "Honored with deep insights into business scaling, strategy, and consumer psychology.",
  },
  {
    year: "2013-2017",
    role: "B.Tech Computer Science",
    company: "GGSIPU Delhi",
    description: "Mastered algorithmic thinking, Python, and scalable systems architecture.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="pt-32 pb-16 bg-background relative border-b border-border/40">
        <div className="absolute inset-0 bg-primary/5 opacity-50 -z-10" />
        <div className="container px-4 md:px-8 mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6">
              The Computer Science Kid Who Fell in Love with Marketing Math
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I don't fit the mold of a traditional marketer. I approach user acquisition like an engineering problem: looking for leverage points, building automated systems, and optimizing algorithms until the math compounds into massive revenue.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Download className="w-4 h-4 mr-2" /> Download Full Resume
            </Button>
          </div>
          <div className="w-full max-w-sm shrink-0 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
            <img src="/prof_collage.jpg" alt="Himanshu Garg at work" className="w-full h-auto object-cover aspect-square" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/20">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-12">Career Timeline</h2>
          <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {timeline.map((item, i) => (
              <div key={item.year} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="text-sm font-mono text-primary">{item.year}</span>
                    <h3 className="font-bold text-lg">{item.role}</h3>
                    <span className="text-sm text-muted-foreground">{item.company}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6">Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My approach to marketing was heavily shaped by my time as a competitive chess player. In chess, you don't just react to the board—you build structures that create compounding advantages over time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I view ad accounts, programmatic SEO, and affiliate engines exactly the same way. By architecting scalable, AI-driven foundations, the growth becomes an inevitable outcome of the system rather than a stroke of luck.
            </p>
          </div>
          <div className="bg-muted/50 rounded-xl p-8 border border-border/50">
            <h3 className="font-bold text-xl mb-4">Beyond Work</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">♟</span> Competitive Chess Player
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">🌍</span> Obsessed with Linguistics
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">💻</span> Building Indie Tools
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
