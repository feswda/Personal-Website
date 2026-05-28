"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "GPT-4o vs Claude 3.5: The Ultimate Showdown for Programmatic SEO",
    excerpt: "An in-depth analysis of processing costs, instruction following capabilities, and output structure when generating thousands of localized landing pages using AI.",
    date: "May 28, 2026",
    readTime: "8 min read",
    tags: ["AI", "SEO", "Engineering"],
    category: "Technical Deep Dive"
  },
  {
    title: "How I use Antigravity Agents to Build Full-Stack Apps in Minutes",
    excerpt: "Exploring the power of the Antigravity SDK. From scaffolding Next.js architectures to autonomous bug fixing, here's how AI agents are fundamentally changing my workflow.",
    date: "May 20, 2026",
    readTime: "12 min read",
    tags: ["Agents", "Antigravity", "Web Dev"],
    category: "Engineering"
  },
  {
    title: "The Death of Manual Campaign Optimization: AI Bidding at Scale",
    excerpt: "Why managing €500k/mo ad budgets manually is obsolete. A look into custom Python scripts interacting with the Google Ads API for real-time margin bidding.",
    date: "May 10, 2026",
    readTime: "6 min read",
    tags: ["Performance Marketing", "Python", "Google Ads"],
    category: "Marketing Strategy"
  },
  {
    title: "Building a Zero-Touch Affiliate Ecosystem with n8n",
    excerpt: "How to eliminate manual partner onboarding and Stripe payout errors by designing a robust, webhook-driven architecture.",
    date: "April 25, 2026",
    readTime: "10 min read",
    tags: ["n8n", "Automation", "Stripe"],
    category: "Operations"
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto w-full text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-extrabold mb-6"
        >
          Insights at the <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-magenta">
            Edge of AI & Growth.
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          Technical playbooks, thoughts on autonomous agents, and strategies for scaling revenue.
        </motion.p>
      </section>

      {/* Blog Grid */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground space-x-4">
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-1"/> {post.date}</span>
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t border-border/30 pt-4 mt-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link href="#" className="text-primary hover:text-magenta transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}
