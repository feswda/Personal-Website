"use client"

import { motion } from "framer-motion"
import { Terminal, Code2, Cpu, Zap, Activity } from "lucide-react"

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
          Experience how I utilize the Antigravity SDK and autonomous agents to architect complex web applications, write code, and debug deployments instantly.
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
      <section className="px-4 md:px-8 max-w-6xl mx-auto w-full">
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

    </div>
  )
}
