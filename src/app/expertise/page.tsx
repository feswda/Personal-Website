"use client"

import { Bot, LineChart, Database, Users, Code, Zap, Target, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const expertisePillars = [
  {
    icon: <Bot className="w-8 h-8 text-magenta" />,
    title: "AI Automation Engineering",
    description: "Building autonomous systems that handle lead scoring, personalized outreach, and CRM updates without human intervention.",
    tools: ["n8n", "Zapier", "OpenAI", "Python"],
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "High-Scale Performance Marketing",
    description: "Managing and optimizing €500K/month ad budgets to deliver hyper-targeted campaigns with predictable, scalable ROAS.",
    tools: ["Google Ads", "Meta Ads", "Programmatic SEO", "LinkedIn Ads"],
  },
  {
    icon: <Database className="w-8 h-8 text-signal" />,
    title: "Data Engineering & Analytics",
    description: "Structuring complex data pipelines to create single sources of truth, enabling confident, data-driven marketing decisions.",
    tools: ["BigQuery", "Looker Studio", "Server-Side Tracking", "SQL"],
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: "Strategic Growth Leadership",
    description: "Bridging the gap between engineering and marketing to lead cross-functional teams toward massive revenue milestones.",
    tools: ["Agile", "OKRs", "Conversion Rate Optimization", "Growth Hacking"],
  }
]

export default function ExpertisePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full text-center relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-extrabold mb-6"
        >
          Engineering Growth with <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-magenta">
            Technical Precision.
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          I don't just run ads. I build scalable, AI-powered growth engines that fuse computer science with marketing psychology.
        </motion.p>
      </section>

      {/* Core Pillars */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertisePillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4 p-3 bg-background rounded-xl w-max border border-border group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground mb-6">
                    {pillar.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {pillar.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border/50 font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee (Simplified CSS version for MVP) */}
      <section className="py-24 border-y border-border/30 bg-muted/20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-2xl font-heading font-bold text-muted-foreground">The tools powering the growth</h2>
        </div>
        <div className="flex w-full whitespace-nowrap overflow-x-hidden relative">
          <div className="animate-marquee flex gap-16 items-center w-max">
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-16 items-center min-w-full justify-around px-8">
                <span className="text-3xl font-heading font-bold text-muted-foreground/40">Python</span>
                <span className="text-3xl font-heading font-bold text-muted-foreground/40">Next.js</span>
                <span className="text-3xl font-heading font-bold text-muted-foreground/40">BigQuery</span>
                <span className="text-3xl font-heading font-bold text-muted-foreground/40">Google Ads</span>
                <span className="text-3xl font-heading font-bold text-muted-foreground/40">OpenAI</span>
                <span className="text-3xl font-heading font-bold text-muted-foreground/40">n8n</span>
                <span className="text-3xl font-heading font-bold text-muted-foreground/40">Looker Studio</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
