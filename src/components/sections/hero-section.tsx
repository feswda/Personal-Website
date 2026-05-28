"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { label: "Monthly Ad Budgets", value: 500, prefix: "€", suffix: "K+" },
  { label: "Revenue Generated", value: 100, prefix: "€", suffix: "M+" },
  { label: "ROAS Scaled", value: 18, suffix: "x", highlight: true },
  { label: "Languages Automated", value: 35 },
]

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container px-5 mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10 pt-28 pb-16 lg:py-24">
        {/* Text content */}
        <div className="flex-1 flex flex-col items-start gap-6 w-full">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-signal mr-2 animate-pulse shrink-0" />
            Berlin, Germany • Available for Consulting
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            I engineer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-magenta">
              AI-powered growth
            </span>{" "}
            engines for global brands.
          </motion.h1>

          {/* Stats — 2×2 grid on mobile, single row on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="w-full border-y border-border/50 py-5"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(({ label, value, prefix, suffix, highlight }) => (
                <div key={label} className="flex flex-col gap-1 min-w-0">
                  <span className="text-[11px] leading-snug text-muted-foreground truncate">{label}</span>
                  <span className={`text-xl sm:text-2xl md:text-3xl font-bold font-mono tabular-nums ${highlight ? "text-signal" : "text-foreground"}`}>
                    <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 w-full"
          >
            <Button render={<Link href="/contact" />} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(99,102,241,0.4)] w-full sm:w-auto">
              Work With Me →
            </Button>
            <Button render={<Link href="/case-studies" />} variant="outline" size="lg" className="border-border hover:bg-muted w-full sm:w-auto">
              See the Case Studies
            </Button>
          </motion.div>
        </div>

        {/* Hero image — desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block flex-1 w-full max-w-md xl:max-w-lg relative"
        >
          <div className="aspect-square rounded-3xl border border-border/50 shadow-2xl overflow-hidden bg-gradient-to-tr from-primary/20 to-magenta/20">
            <img src="/prof_headshot.jpg" alt="Himanshu Garg" className="object-cover w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
