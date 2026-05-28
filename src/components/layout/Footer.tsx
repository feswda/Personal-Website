import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 bg-background mt-auto">
      <div className="container px-4 md:px-8 mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col gap-2 max-w-xs">
          <Link href="/" className="font-heading font-bold text-xl tracking-tight">
            Himanshu Garg
          </Link>
          <p className="text-sm text-muted-foreground">
            Where Marketing Meets Machine Intelligence.
          </p>
        </div>
        
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Explore</h4>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
            <Link href="/expertise/ai-automation" className="text-sm text-muted-foreground hover:text-foreground">Expertise</Link>
            <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-foreground">Case Studies</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2">Connect</h4>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            <Link href="https://linkedin.com" className="text-sm text-muted-foreground hover:text-foreground">LinkedIn</Link>
            <Link href="/ai-lab" className="text-sm text-muted-foreground hover:text-foreground">AI Lab</Link>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-8 mx-auto mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Himanshu Garg. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
