"use client"

import { motion } from "framer-motion"
import { Terminal, Code2, Cpu, Zap, Activity, Bot, Users, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

export default function AILabPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto w-full text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-extrabold mb-6"
        >
          The Agentic <span className="text-primary">Workspace.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Where marketing strategy meets AI engineering. I don't just use AI tools — I architect autonomous systems that execute entire workflows while you sleep.
        </motion.p>
      </section>

      {/* Interactive Terminal Demo */}
      <section className="px-4 md:px-8 max-w-5xl mx-auto w-full mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl overflow-hidden border border-border/50 shadow-2xl bg-[#0d1117]"
        >
          {/* Terminal Header */}
          <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-border/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="ml-4 flex items-center text-xs text-muted-foreground font-mono">
              <Terminal className="w-3 h-3 mr-2" /> antigravity-agent ~ zsh
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm space-y-4 text-gray-300">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-green-400">user@workspace</span>:<span className="text-blue-400">~/projects</span>$ npx @antigravity/cli init personal-website
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-gray-400"
            >
              Initializing Antigravity workspace...<br/>
              [OK] Subagents loaded: Codebase Researcher, Bug Fixer, Architect<br/>
              [OK] Connected to GitHub context
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              <span className="text-green-400">user@workspace</span>:<span className="text-blue-400">~/projects</span>$ agent "Build a high-converting Expertise page using shadcn/ui and framer-motion"
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              className="text-primary space-y-1"
            >
              <p>➜ Researching codebase dependencies...</p>
              <p>➜ Generating layout structure in src/app/expertise/page.tsx</p>
              <p>➜ Running UI validation checks...</p>
              <p className="text-green-400">✓ Task completed in 14.2s. Output pushed to local branch.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5 }}
              className="animate-pulse"
            >
              <span className="text-green-400">user@workspace</span>:<span className="text-blue-400">~/projects</span>$ 
              <span className="inline-block w-2 h-4 bg-gray-400 align-middle ml-1" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Core Use Cases */}
      <section className="px-4 md:px-8 max-w-6xl mx-auto w-full mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">How I leverage Agents</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <Code2 className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Automated Code Gen</h3>
            <p className="text-muted-foreground text-sm">
              Using autonomous subagents to write, refactor, and review massive codebases instantly. It turns weeks of frontend development into a few hours of architectural review.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-magenta/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <Cpu className="w-10 h-10 text-magenta mb-6" />
            <h3 className="text-xl font-bold mb-3">Complex Architecture</h3>
            <p className="text-muted-foreground text-sm">
              Delegating system design, database schema creation, and API route structure to specialized AI models, ensuring scalable foundations before writing a single line of code.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-signal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <Activity className="w-10 h-10 text-signal mb-6" />
            <h3 className="text-xl font-bold mb-3">Self-Healing Systems</h3>
            <p className="text-muted-foreground text-sm">
              Deploying agents that can detect build errors, fix syntax issues automatically, and re-deploy without human intervention. Zero downtime, maximum efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXAMPLE 1: n8n Content Automation ── */}
      <section className="px-4 md:px-8 max-w-6xl mx-auto w-full mb-32">
        <motion.div {...fadeUp} className="mb-6 flex items-center gap-3">
          <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20">Case Study 01</span>
        </motion.div>

        <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-heading font-bold leading-tight">
              Fully Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-magenta">Content Engine</span> — Zero Human Touch
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I designed and deployed a fully automated content creation pipeline using <strong className="text-foreground">n8n</strong> as the orchestration layer. The system generates, illustrates, SEO-optimises, and publishes every blog post, image, and social snippet — completely hands-free. This very website is a live demonstration.
            </p>

            <div className="space-y-4">
              {[
                { step: "01", title: "Scheduled Trigger", desc: "A cron node fires every morning at 6 AM. It pulls trending topics from Google Trends & Reddit APIs, cross-referencing them against my existing content library to eliminate duplicates." },
                { step: "02", title: "AI Content Generator (GPT-4)", desc: "A GPT-4 node receives the topic + my brand voice system prompt and writes a fully structured 1,200-word article with H1/H2 hierarchy, LSI keywords, and internal link placeholders pre-filled." },
                { step: "03", title: "Image Generator (DALL-E / Midjourney)", desc: "Simultaneously, a parallel branch sends the article summary to DALL-E to generate a photorealistic hero image. No stock photos, no designer required." },
                { step: "04", title: "SEO Optimiser", desc: "The draft passes through a dedicated SEO node that scores readability (Flesch-Kincaid), validates keyword density, checks meta description length, and rewrites until all scores are green." },
                { step: "05", title: "CMS Publisher (Next.js API)", desc: "A Webhook node POSTs the finalised JSON payload to this website's Admin API, which saves it to the database and immediately makes it live on /blog." },
                { step: "06", title: "Social Media Distributor", desc: "Finally, repurposed snippets — a LinkedIn carousel, an X thread, and an Instagram caption — are auto-posted via their respective APIs. The system tags times for peak engagement using historical performance data." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 p-4 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 transition-colors">
                  <span className="text-primary font-mono font-bold text-sm pt-0.5 shrink-0">{step}</span>
                  <div>
                    <p className="font-semibold text-sm mb-1">{title}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { value: "6 hrs", label: "Saved Daily" },
                { value: "100%", label: "Publish Rate" },
                { value: "0", label: "Manual Edits" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-2xl font-heading font-bold text-primary">{value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Workflow Diagram */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-[#0d0f14]">
              <div className="bg-[#161b22] px-4 py-2.5 flex items-center gap-2 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-3 text-xs text-muted-foreground font-mono">n8n — content-automation.json</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">● Active</span>
              </div>
              <div className="p-2">
                <Image 
                  src="/n8n-content-workflow.png" 
                  alt="n8n Content Creation Automation Workflow" 
                  width={1024} 
                  height={512} 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center italic">Live n8n workflow powering this website's content pipeline</p>
          </div>
        </motion.div>
      </section>

      {/* ── EXAMPLE 2: Department Workflow Automation ── */}
      <section className="px-4 md:px-8 max-w-6xl mx-auto w-full mb-24">
        <motion.div {...fadeUp} className="mb-6 flex items-center gap-3">
          <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-magenta/10 text-magenta border border-magenta/20">Case Study 02</span>
        </motion.div>

        <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Workflow Image */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-[#0d0f14]">
              <div className="bg-[#161b22] px-4 py-2.5 flex items-center gap-2 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-3 text-xs text-muted-foreground font-mono">n8n — enterprise-dept-automation.json</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">● Active</span>
              </div>
              <div className="p-2">
                <Image 
                  src="/n8n-dept-workflow.png" 
                  alt="n8n Enterprise Department Workflow Automation" 
                  width={1024} 
                  height={1024} 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center italic">AI Orchestrator dispatching 5 parallel department automation pipelines</p>
          </div>

          {/* Right: Copy */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-heading font-bold leading-tight">
              One AI Brain, <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-primary">Five Departments</span> Automated
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Scaling a company shouldn't mean scaling headcount linearly. I architected a centralised <strong className="text-foreground">AI Orchestrator</strong> on n8n that dispatches intelligent, context-aware automations across every department — simultaneously. Here's how each vertical was transformed:
            </p>

            <div className="space-y-4">
              {[
                {
                  color: "text-cyan-400",
                  border: "border-cyan-400/20",
                  bg: "bg-cyan-400/5",
                  icon: "💬",
                  dept: "Customer Service",
                  flow: "Ticket Intake → AI Response → CRM Update → Auto-Reply",
                  desc: "Support tickets are captured from email, WhatsApp, and chat. GPT-4 drafts contextually accurate responses based on the knowledge base, resolves >60% of tickets autonomously, and escalates edge cases to a human agent with a full summary pre-written."
                },
                {
                  color: "text-orange-400",
                  border: "border-orange-400/20",
                  bg: "bg-orange-400/5",
                  icon: "⚙️",
                  dept: "Operations",
                  flow: "Process Monitor → Anomaly Detector → Alert → Auto-Fix",
                  desc: "Real-time KPI dashboards are watched by an anomaly-detection node. If fulfilment SLA drops or inventory thresholds are breached, the system auto-generates Slack alerts, triggers reorder workflows, and logs incidents with root-cause annotations."
                },
                {
                  color: "text-purple-400",
                  border: "border-purple-400/20",
                  bg: "bg-purple-400/5",
                  icon: "🤝",
                  dept: "KAMs / Key Account Managers",
                  flow: "Account Signal → AI Brief → CRM Log → Slack Notify",
                  desc: "Account health signals (usage drops, NPS dips, renewal dates) are monitored continuously. When a risk signal fires, the AI generates a personalised relationship brief — recent wins, open issues, upsell opportunities — and pushes it directly to the KAM via Slack before their next call."
                },
                {
                  color: "text-green-400",
                  border: "border-green-400/20",
                  bg: "bg-green-400/5",
                  icon: "📈",
                  dept: "Sales",
                  flow: "Lead Capture → AI Scoring → Personalised Outreach → Pipeline Update",
                  desc: "Inbound leads from LinkedIn, website forms, and ad campaigns are scored using a custom AI model trained on historical conversion data. High-intent leads receive hyper-personalised outreach sequences within 4 minutes of entering the funnel. Pipeline stages update in HubSpot automatically."
                },
                {
                  color: "text-pink-400",
                  border: "border-pink-400/20",
                  bg: "bg-pink-400/5",
                  icon: "📣",
                  dept: "Marketing",
                  flow: "Trend Analyzer → Content Scheduler → Social Publisher → Performance Report",
                  desc: "Weekly trend data from SEMrush, Google Trends, and competitor RSS feeds is synthesised into a content calendar. Campaigns are auto-scheduled across channels at optimal times. Every Monday, a performance report is generated and delivered to the CMO with zero manual effort."
                },
              ].map(({ color, border, bg, icon, dept, flow, desc }) => (
                <div key={dept} className={`p-4 rounded-xl border ${border} ${bg} hover:brightness-110 transition-all`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{icon}</span>
                    <div>
                      <p className={`font-bold text-sm ${color}`}>{dept}</p>
                      <p className="text-xs text-muted-foreground font-mono">{flow}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Result metrics */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { value: "5 depts", label: "Fully Automated" },
                { value: "~40 hrs/wk", label: "Saved Per Team" },
                { value: "4 min", label: "Avg Lead Response" },
                { value: "60%+", label: "Tickets Auto-Resolved" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-3 rounded-xl bg-magenta/5 border border-magenta/20">
                  <p className="text-xl font-heading font-bold text-magenta">{value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
