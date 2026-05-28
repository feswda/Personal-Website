"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { RoasChart } from "@/components/ui/roas-chart"
import { WorkflowDiagram } from "@/components/ui/workflow-diagram"
import { DashboardPreview } from "@/components/ui/dashboard-preview"

const caseStudies = [
  {
    title: "The €100M Revenue Engine",
    clientType: "Leading European Marketplace",
    metrics: [
      { label: "ROAS Scale", value: "10x → 18x" },
      { label: "Ad Spend", value: "€500K/mo" },
      { label: "Revenue", value: "€100M/yr" }
    ],
    challenge: "Scaling ad spend for a high-volume European marketplace without diminishing returns or massive manual oversight.",
    solution: "Engineered custom AI bidding scripts in Python interacting directly with the Google Ads API to automate bid adjustments based on real-time margin data, alongside automated creative A/B testing pipelines.",
    visual: <RoasChart />
  },
  {
    title: "Programmatic SEO & AI Content Pipeline",
    clientType: "Global Travel Tech Startup",
    metrics: [
      { label: "Organic Traffic", value: "+300%" },
      { label: "Timeframe", value: "4 Months" },
      { label: "Cost per Lead", value: "-65%" }
    ],
    challenge: "Organic traffic had plateaued, and the cost of manually producing high-quality, localized landing pages was severely impacting margins.",
    solution: "Built a fully automated pipeline using Python, BigQuery, and the OpenAI API. The system parsed search intent data to generate thousands of highly relevant, localized landing pages instantly.",
    visual: <WorkflowDiagram />
  },
  {
    title: "The Zero-Touch Affiliate System",
    clientType: "B2B SaaS Provider",
    metrics: [
      { label: "Hours Saved", value: "40/week" },
      { label: "Payout Errors", value: "0%" },
      { label: "Partner Growth", value: "+150%" }
    ],
    challenge: "The affiliate marketing team was drowning in manual spreadsheets, partner onboarding delays, and payout miscalculations.",
    solution: "Deployed an n8n webhook architecture connecting the proprietary CRM directly to Stripe and a custom partner portal, creating a zero-touch onboarding and payout ecosystem.",
    visual: <DashboardPreview />
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto w-full text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-extrabold mb-6"
        >
          Results <span className="text-primary">Engineered.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          Deep dives into how I've fused marketing strategy with technical automation to solve complex growth challenges.
        </motion.p>
      </section>

      {/* Case Studies Deep Dives */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto w-full space-y-32">
        {caseStudies.map((study, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Content Side */}
            <div className={`flex-1 space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="inline-block px-3 py-1 bg-muted rounded-full border border-border/50 text-sm font-mono text-muted-foreground">
                {study.clientType}
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">{study.title}</h2>
              
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-border/30">
                {study.metrics.map((metric, mIndex) => (
                  <div key={mIndex}>
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
              </div>
            </div>

            {/* Visual Side */}
            <div className={`flex-1 w-full ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="bg-card/30 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group">
                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {study.visual}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  )
}
