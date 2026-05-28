import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BadgeCheck, GraduationCap, Award } from "lucide-react"

export function OperatorSection() {
  return (
    <section className="py-24 bg-card/20 relative">
      <div className="container px-4 md:px-8 mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 w-full relative aspect-[4/5] max-w-md">
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-magenta/20 rounded-[2rem] blur-2xl -z-10" />
          <div className="w-full h-full bg-background border border-border/50 rounded-[2rem] shadow-xl overflow-hidden flex flex-col">
            <div className="h-2/3 bg-muted flex items-center justify-center relative overflow-hidden">
              <img src="/prof_collage.jpg" alt="Himanshu Garg - Office" className="object-cover w-full h-full object-left" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-center bg-card">
              <h3 className="font-heading font-bold text-2xl mb-2">Himanshu Garg</h3>
              <p className="text-muted-foreground">Marketing Lead & AI Automation Expert</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
              The Operator Behind the Numbers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a computer science graduate who fell in love with marketing math. I don't just run ads; I architect full-funnel growth engines powered by data, automation, and AI. My approach is rooted in systems thinking, honed through years of competitive chess and managing hyper-scale ad accounts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">MBA Int. Marketing</h4>
                <p className="text-sm text-muted-foreground">IIM Bodh Gaya</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap className="w-6 h-6 text-indigo-400 mt-1" />
              <div>
                <h4 className="font-semibold">B.Tech Computer Science</h4>
                <p className="text-sm text-muted-foreground">GGSIPU Delhi</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BadgeCheck className="w-6 h-6 text-signal mt-1" />
              <div>
                <h4 className="font-semibold">Certified Expert</h4>
                <p className="text-sm text-muted-foreground">Google Ads & Meta Blueprint</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-magenta mt-1" />
              <div>
                <h4 className="font-semibold">Chess Champion</h4>
                <p className="text-sm text-muted-foreground">1st Place IIM & IPU</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-border/50">
            <Button render={<Link href="/about" />} variant="default">
              Read Full Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
