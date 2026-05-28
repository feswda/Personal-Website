"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { initialBlogPosts, BlogPost } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    // Check initial hardcoded posts
    let foundPost = initialBlogPosts.find(p => p.slug === slug)
    
    // Check localStorage for dynamic posts
    if (!foundPost) {
      const savedBlogs = localStorage.getItem("admin_blogs")
      if (savedBlogs) {
        const parsed = JSON.parse(savedBlogs) as BlogPost[]
        foundPost = parsed.find(p => p.slug === slug)
      }
    }
    
    setPost(foundPost || null)
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    )
  }

  return (
    <article className="min-h-screen pt-32 pb-24 px-4 md:px-8 max-w-3xl mx-auto w-full">
      <Link href="/blog" className="inline-flex items-center text-primary hover:text-magenta transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to all posts
      </Link>
      
      <header className="mb-12">
        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary">
          {post.category}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center text-sm text-muted-foreground space-x-6 border-b border-border/50 pb-8">
          <span className="flex items-center"><Calendar className="w-4 h-4 mr-2"/> {post.date}</span>
          <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> {post.readTime}</span>
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-primary hover:prose-a:text-magenta prose-img:rounded-xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <div className="mt-16 pt-8 border-t border-border/50 flex gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  )
}
