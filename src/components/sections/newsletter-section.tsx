"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container px-4 md:px-8 mx-auto relative z-10 max-w-3xl text-center flex flex-col items-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Join 1,500+ Marketers
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl">
          Learn how to build AI-powered growth engines. I share one tactical playbook or automation workflow every Sunday.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
            required
          />
          <Button type="submit" size="lg" className="bg-signal hover:bg-signal/90 text-primary h-12 font-bold px-8">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-primary-foreground/60 mt-4">
          No fluff. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
