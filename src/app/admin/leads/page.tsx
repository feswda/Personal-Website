"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Trash2, MessageSquare, Mail, Briefcase, ChevronDown, ChevronUp } from "lucide-react"

interface Lead {
  id: string
  name: string
  email: string
  intent: string
  budget: string
  message: string
  date: string
  status: string
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    const savedLeads = localStorage.getItem("admin_leads")
    if (savedLeads) {
      setLeads(JSON.parse(savedLeads))
    }
  }, [])

  const deleteLead = (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      const filtered = leads.filter(l => l.id !== id)
      setLeads(filtered)
      localStorage.setItem("admin_leads", JSON.stringify(filtered))
    }
  }

  const markAsRead = (id: string) => {
    const updated = leads.map(l => {
      if (l.id === id) {
        return { ...l, status: "Read" }
      }
      return l
    })
    setLeads(updated)
    localStorage.setItem("admin_leads", JSON.stringify(updated))
  }

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null)
    } else {
      setExpandedId(id)
      markAsRead(id) // Mark as read when opening
    }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold mb-2">Leads & Messages</h1>
        <p className="text-muted-foreground">View and manage inquiries from your "Work With Me" page.</p>
      </div>

      <div className="space-y-4">
        {leads.length === 0 ? (
          <div className="bg-card border border-border/50 rounded-xl p-12 text-center text-muted-foreground flex flex-col items-center justify-center">
            <MessageSquare className="w-12 h-12 mb-4 opacity-50" />
            <p>Your inbox is empty.</p>
            <p className="text-sm">When visitors fill out your contact form, they will appear here.</p>
          </div>
        ) : (
          leads.map((lead) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={lead.id} 
              className={`bg-card border ${lead.status === 'New' ? 'border-primary/50 bg-primary/5' : 'border-border/50'} rounded-xl overflow-hidden transition-all duration-300`}
            >
              {/* Header Row (Clickable) */}
              <div 
                className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-muted/30 transition-colors gap-4"
                onClick={() => toggleExpand(lead.id)}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-2 h-2 rounded-full ${lead.status === 'New' ? 'bg-primary' : 'bg-transparent'}`} />
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      {lead.name}
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-normal">
                        {lead.intent}
                      </span>
                    </h3>
                    <div className="text-sm text-muted-foreground flex items-center gap-4 mt-1">
                      <span className="flex items-center"><Mail className="w-3 h-3 mr-1" /> {lead.email}</span>
                      <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" /> {lead.budget || "Not specified"}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground ml-6">
                  <span>{lead.date}</span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={(e) => { e.stopPropagation(); deleteLead(lead.id) }}
                      className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-md transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {expandedId === lead.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedId === lead.id && (
                <div className="p-6 border-t border-border/50 bg-background/50">
                  <div className="max-w-3xl">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Message:</h4>
                    <p className="whitespace-pre-wrap text-foreground/90 leading-relaxed font-mono text-sm bg-muted/30 p-4 rounded-lg border border-border/30">
                      {lead.message}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-border/30 flex gap-4">
                      <a 
                        href={`mailto:${lead.email}?subject=Re: Inquiry from ${lead.name}`} 
                        className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Reply via Email
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}
