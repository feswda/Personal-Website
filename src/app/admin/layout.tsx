"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, FileText, Settings, LogOut } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  const handleLogout = () => {
    document.cookie = "admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/50 bg-card hidden md:block">
        <div className="p-6 h-full flex flex-col">
          <div className="text-xl font-bold font-heading mb-8">Admin Panel</div>
          
          <nav className="space-y-2 flex-1">
            <Link 
              href="/admin" 
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${pathname === '/admin' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}
            >
              <LayoutDashboard className="w-5 h-5 mr-3" /> Dashboard
            </Link>
            <Link 
              href="/admin" 
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${pathname === '/admin' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}
            >
              <FileText className="w-5 h-5 mr-3" /> Manage Blogs
            </Link>
            <Link 
              href="#" 
              className={`flex items-center px-4 py-3 rounded-lg transition-colors text-muted-foreground hover:bg-muted`}
            >
              <Settings className="w-5 h-5 mr-3" /> Settings
            </Link>
          </nav>

          <button 
            onClick={handleLogout}
            className="flex items-center px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors mt-auto w-full"
          >
            <LogOut className="w-5 h-5 mr-3" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
