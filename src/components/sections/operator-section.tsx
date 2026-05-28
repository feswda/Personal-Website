import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BadgeCheck, GraduationCap, Award } from "lucide-react"

export function OperatorSection() {
  return (
    <section className="py-16 md:py-24 bg-card/20 relative">
      <div className="container px-5 mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Image card */}
        <div className="w-full max-w-sm mx-auto lg:mx-0 lg:flex-1 relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-magenta/20 rounded-[2rem] blur-2xl -z-10" />
          <div className="w-full aspect-[4/5] bg-background border border-border/50 rounded-[2rem] shadow-xl overflow-hidden flex flex-col">
            <div className="flex-1 bg-muted overflow-hidden">
              <img src="/prof_collage.jpg" alt="Himanshu Garg - Office" className="object-cover w-full h-full object-left" />
            </div>
            <div className="p-5 bg-card">
              <h3 className="font-heading font-bold text-xl mb-1">Himanshu Garg</h3>
              <p className="text-sm text-muted-foreground">Marketing Lead & AI Automation Expert</p>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
              The Operator Behind the Numbers
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I am a computer science graduate who fell in love with marketing math. I don't just run ads; I architect full-funnel growth engines powered by data, automation, and AI. My approach is rooted in systems thinking, honed through years of competitive chess and managing hyper-scale ad accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />, title: "MBA Int. Marketing", sub: "IIM Bodh Gaya" },
              { icon: <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />, title: "B.Tech Computer Science", sub: "GGSIPU Delhi" },
              { icon: <BadgeCheck className="w-5 h-5 text-signal shrink-0 mt-0.5" />, title: "Certified Expert", sub: "Google Ads & Meta Blueprint" },
              { icon: <Award className="w-5 h-5 text-magenta shrink-0 mt-0.5" />, title: "Chess Champion", sub: "1st Place IIM & IPU" },
            ].map(({ icon, title, sub }) => (
              <div key={title} className="flex items-start gap-3 p-3 rounded-xl bg-card/40 border border-border/30">
                {icon}
                <div>
                  <h4 className="font-semibold text-sm">{title}</h4>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Button render={<Link href="/about" />} variant="default" className="w-full sm:w-auto">
              Read Full Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
