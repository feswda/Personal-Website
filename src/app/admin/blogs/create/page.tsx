"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { BlogPost } from "@/lib/blog-data"

export default function CreateBlogPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Generate slug from title
    const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    
    const newPost: BlogPost = {
      slug,
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      category: formData.category || "General",
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: Math.ceil(formData.content.length / 1000) + " min read", // Rough estimate
    }

    // Save to localStorage
    const savedBlogsStr = localStorage.getItem("admin_blogs")
    const savedBlogs = savedBlogsStr ? JSON.parse(savedBlogsStr) : []
    savedBlogs.push(newPost)
    localStorage.setItem("admin_blogs", JSON.stringify(savedBlogs))

    alert("Blog post created successfully!")
    router.push("/admin")
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link href="/admin" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
      </Link>
      
      <h1 className="text-3xl font-heading font-bold mb-8">Create New Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border/50 p-6 md:p-8 rounded-xl shadow-lg">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-muted-foreground mb-2">Title</label>
            <input 
              type="text" 
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-lg font-medium"
              placeholder="e.g., The Future of AI Agents"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Category</label>
            <input 
              type="text" 
              required
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full bg-background border border-border/50 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              placeholder="e.g., Engineering"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Tags (comma separated)</label>
            <input 
              type="text" 
              value={formData.tags}
              onChange={(e) => setFormData({...formData, tags: e.target.value})}
              className="w-full bg-background border border-border/50 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              placeholder="e.g., AI, NextJS, Programming"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-muted-foreground mb-2">Excerpt (Short Summary)</label>
            <textarea 
              required
              rows={2}
              value={formData.excerpt}
              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              className="w-full bg-background border border-border/50 rounded-lg px-4 py-2 focus:outline-none focus:border-primary resize-none"
              placeholder="A short description for the blog card..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-muted-foreground mb-2 flex justify-between">
              <span>Content (Markdown supported)</span>
            </label>
            <textarea 
              required
              rows={15}
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              className="w-full bg-background border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:border-primary font-mono text-sm"
              placeholder="# Introduction\n\nWrite your blog post here using Markdown..."
            />
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-border/50">
          <button 
            type="submit" 
            className="flex items-center px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Save className="w-5 h-5 mr-2" /> Publish Post
          </button>
        </div>
      </form>
    </div>
  )
}
