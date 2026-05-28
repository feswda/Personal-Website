"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Plus, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"
import { initialBlogPosts, BlogPost } from "@/lib/blog-data"

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])

  useEffect(() => {
    // Load local dynamic blogs and merge with static blogs
    const savedBlogs = localStorage.getItem("admin_blogs")
    if (savedBlogs) {
      setBlogs([...initialBlogPosts, ...JSON.parse(savedBlogs)])
    } else {
      setBlogs(initialBlogPosts)
    }
  }, [])

  const deleteBlog = (slug: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      // We can only delete dynamically created ones for this MVP
      const isStatic = initialBlogPosts.find(b => b.slug === slug)
      if (isStatic) {
        alert("Cannot delete static demo posts. Only custom posts can be deleted.")
        return
      }
      
      const savedBlogsStr = localStorage.getItem("admin_blogs")
      if (savedBlogsStr) {
        const savedBlogs = JSON.parse(savedBlogsStr) as BlogPost[]
        const filtered = savedBlogs.filter(b => b.slug !== slug)
        localStorage.setItem("admin_blogs", JSON.stringify(filtered))
        setBlogs([...initialBlogPosts, ...filtered])
      }
    }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage your blog posts and content.</p>
        </div>
        <Link 
          href="/admin/blogs/create" 
          className="flex items-center px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" /> New Post
        </Link>
      </div>

      <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 border-b border-border/50">
                <th className="p-4 font-medium text-muted-foreground">Title</th>
                <th className="p-4 font-medium text-muted-foreground">Category</th>
                <th className="p-4 font-medium text-muted-foreground">Date</th>
                <th className="p-4 font-medium text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((post) => (
                <tr key={post.slug} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">{post.title}</td>
                  <td className="p-4"><span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{post.category}</span></td>
                  <td className="p-4 text-muted-foreground">{post.date}</td>
                  <td className="p-4 flex justify-end gap-2">
                    <button className="p-2 hover:bg-muted rounded-md text-muted-foreground hover:text-white transition-colors" title="Edit (Coming soon)">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => deleteBlog(post.slug)}
                      className="p-2 hover:bg-red-500/20 rounded-md text-muted-foreground hover:text-red-400 transition-colors" 
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-muted-foreground">
                    No blog posts found. Create one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
