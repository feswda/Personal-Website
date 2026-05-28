"use client"

import { Database, FileJson, Globe, ArrowRight } from "lucide-react"

export function WorkflowDiagram() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-2 md:gap-4 p-4 text-muted-foreground">
      <div className="flex flex-col items-center gap-2 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-card border border-border/50 flex items-center justify-center shadow-lg">
          <Database className="w-5 h-5 text-indigo-400" />
        </div>
        <span className="text-[10px] uppercase font-mono">Dataset</span>
      </div>
      
      <ArrowRight className="w-4 h-4 text-border opacity-50" />
      
      <div className="flex flex-col items-center gap-2 group-hover:-translate-y-2 transition-transform duration-500 delay-150">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-card border border-border/50 flex items-center justify-center shadow-lg">
          <FileJson className="w-5 h-5 text-magenta" />
        </div>
        <span className="text-[10px] uppercase font-mono">LLM API</span>
      </div>
      
      <ArrowRight className="w-4 h-4 text-border opacity-50" />
      
      <div className="flex flex-col items-center gap-2 group-hover:-translate-y-2 transition-transform duration-500 delay-300">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-card border border-border/50 flex items-center justify-center shadow-lg">
          <Globe className="w-5 h-5 text-signal" />
        </div>
        <span className="text-[10px] uppercase font-mono">Deploy</span>
      </div>
    </div>
  )
}
