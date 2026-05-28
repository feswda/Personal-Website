"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Terminal, Copy, Cpu, Zap } from "lucide-react"

export function AILabPreview() {
  return (
    <section className="py-24 bg-card/40 border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      
      <div className="container px-4 md:px-8 mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 flex flex-col gap-6">
          <div className="inline-flex items-center rounded-full border border-magenta/30 bg-magenta/10 px-3 py-1 text-sm font-medium text-magenta shadow-sm w-fit">
            <Zap className="w-4 h-4 mr-2" />
            Active Experiments
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            Inside My AI Lab
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I don't just use AI; I build with it. Access my library of n8n automation workflows, battle-tested LLM prompts, and interactive marketing tools.
          </p>
          
          <ul className="flex flex-col gap-4 mt-2">
            <li className="flex items-center gap-3 font-mono text-sm">
              <span className="text-signal">✓</span> 50+ Automation Templates
            </li>
            <li className="flex items-center gap-3 font-mono text-sm">
              <span className="text-signal">✓</span> Multilingual Copy Generators
            </li>
            <li className="flex items-center gap-3 font-mono text-sm">
              <span className="text-signal">✓</span> Programmatic SEO Scripts
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <Button render={<Link href="/ai-lab" />} size="lg" className="bg-magenta hover:bg-magenta/90 text-primary-foreground">
              Explore the Lab →
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg">
          <div className="rounded-xl border border-border/50 bg-background shadow-2xl overflow-hidden font-mono text-sm">
            <div className="flex items-center px-4 py-3 border-b border-border/50 bg-card">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-signal/80" />
              </div>
              <div className="ml-4 text-muted-foreground flex items-center gap-2">
                <Terminal className="w-4 h-4" /> auto-generate-ads.py
              </div>
            </div>
            <div className="p-6 bg-background/50 overflow-x-auto">
              <pre className="text-muted-foreground">
                <code className="block text-indigo-400">import openai</code>
                <code className="block text-indigo-400">import requests</code>
                <code className="block mt-4 text-primary">def <span className="text-magenta">generate_variants</span>(product, languages):</code>
                <code className="block ml-4"># Generates highly converting ad copy</code>
                <code className="block ml-4">variants = []</code>
                <code className="block ml-4 text-primary">for <span className="text-foreground">lang</span> in languages:</code>
                <code className="block ml-8">prompt = build_prompt(product, lang)</code>
                <code className="block ml-8">response = openai.Completion.create(...)</code>
                <code className="block ml-8">variants.append(response)</code>
                <code className="block ml-4 text-primary">return <span className="text-foreground">variants</span></code>
                <code className="block mt-4 text-foreground animate-pulse">_</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
