"use client"

import { Users, TrendingUp, DollarSign } from "lucide-react"

export function DashboardPreview() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3 justify-center">
      <div className="flex items-center justify-between p-3 rounded-lg bg-card border border-border/50 shadow-sm group-hover:border-primary/30 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
            <Users className="w-4 h-4 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase font-mono">Active Affiliates</span>
            <span className="font-bold text-sm">1,024</span>
          </div>
        </div>
        <div className="flex items-center text-[10px] text-signal font-mono">
          <TrendingUp className="w-3 h-3 mr-1" /> +12%
        </div>
      </div>
      
      <div className="flex items-center justify-between p-3 rounded-lg bg-card border border-border/50 shadow-sm group-hover:border-magenta/30 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-magenta/10 flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-magenta" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase font-mono">Partner Revenue</span>
            <span className="font-bold text-sm">€142,500</span>
          </div>
        </div>
        <div className="flex items-center text-[10px] text-signal font-mono">
          <TrendingUp className="w-3 h-3 mr-1" /> +24%
        </div>
      </div>
    </div>
  )
}
