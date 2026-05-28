"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container px-4 md:px-8 mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 pt-24 pb-12 lg:pt-0 lg:pb-0">
        <div className="flex-1 flex flex-col items-start gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-signal mr-2 animate-pulse" />
            Berlin, Germany • Available for Consulting
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            I engineer <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-magenta">AI-powered growth</span><br/>
            engines for global brands.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6 w-full"
          >
            {/* Stats grid — 2 columns on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 border-y border-border/50 py-6">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-muted-foreground leading-tight">Monthly Ad Budgets</span>
                <span className="text-2xl md:text-3xl font-bold font-mono text-foreground">
                  <AnimatedCounter value={500} prefix="€" suffix="K+" />
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-muted-foreground leading-tight">Revenue Generated</span>
                <span className="text-2xl md:text-3xl font-bold font-mono text-foreground">
                  <AnimatedCounter value={100} prefix="€" suffix="M+" />
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-muted-foreground leading-tight">ROAS Scaled</span>
                <span className="text-2xl md:text-3xl font-bold font-mono text-signal">
                  <AnimatedCounter value={18} suffix="x" />
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-muted-foreground leading-tight">Languages Automated</span>
                <span className="text-2xl md:text-3xl font-bold font-mono text-foreground">
                  <AnimatedCounter value={35} />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <Button render={<Link href="/contact" />} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              Work With Me →
            </Button>
            <Button render={<Link href="/case-studies" />} variant="outline" size="lg" className="px-8 text-lg border-border hover:bg-muted">
              See the Case Studies
            </Button>
          </motion.div>
        </div>

        {/* Hero image — hidden on small screens to keep stats readable */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex flex-1 w-full max-w-md lg:max-w-none relative aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-magenta/20 rounded-3xl border border-border/50 shadow-2xl overflow-hidden backdrop-blur-sm flex items-center justify-center">
            <img src="/prof_headshot.jpg" alt="Himanshu Garg" className="object-cover w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

