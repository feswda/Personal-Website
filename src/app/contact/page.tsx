"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Clock, CheckCircle2 } from "lucide-react"

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intent: "",
    budget: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const formPayload = new URLSearchParams()
      formPayload.append("form-name", "contact")
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value as string)
      })

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formPayload.toString(),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", intent: "", budget: "", message: "" })
        
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-magenta/10 to-transparent -z-10" />
        
        <div className="container px-4 md:px-8 mx-auto max-w-6xl grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
              Let's build something that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-magenta">compounds.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you need to scale your paid media, build a programmatic SEO engine, or hire a strategic growth leader—let's talk.
            </p>
            
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:hgarg0111@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">hgarg0111@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card">
                <LinkedinIcon className="w-6 h-6 text-[#0A66C2]" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Connect on LinkedIn</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 bg-primary/5">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium">SLA</p>
                  <p className="text-sm text-muted-foreground">I reply within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                <CheckCircle2 className="w-16 h-16 text-primary" />
                <h3 className="text-2xl font-bold font-heading">Message Sent!</h3>
                <p className="text-muted-foreground">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Label htmlFor="intent">What can I help you with?</Label>
                  <select 
                    id="intent" 
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    value={formData.intent}
                    onChange={e => setFormData({...formData, intent: e.target.value})}
                    required
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="hire">Hire me full-time / fractional</option>
                    <option value="consulting">Consulting project</option>
                    <option value="speaking">Speaking invitation</option>
                    <option value="partnership">Partnership / collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="budget">Monthly Budget / Project Size (Optional)</Label>
                  <Input 
                    id="budget" 
                    placeholder="e.g., €50K+/mo" 
                    value={formData.budget}
                    onChange={e => setFormData({...formData, budget: e.target.value})}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your current growth bottlenecks..." 
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
