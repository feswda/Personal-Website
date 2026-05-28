import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Himanshu completely transformed our performance marketing. Scaling our ROAS while significantly increasing budget is something very few can achieve.",
    author: "CEO",
    company: "Leading Global Marketplace",
  },
  {
    quote: "His ability to bridge the gap between complex technical automation and high-level marketing strategy makes him an invaluable leader.",
    author: "VP of Growth",
    company: "Tech Startup",
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-8 mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">
          What Partners Say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card/50 border-border/50 relative overflow-hidden">
              <div className="absolute top-6 left-6 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>
              <CardContent className="pt-12 pb-8 px-8 relative z-10">
                <p className="text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
