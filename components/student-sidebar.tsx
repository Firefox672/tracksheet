"use client"

import { Button } from "@/components/ui/button"
import { LayoutDashboard, User, BookOpen, Users, Zap, Globe, BarChart3, Bell } from 'lucide-react'

interface StudentSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function StudentSidebar({ activeSection, onSectionChange }: StudentSidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "profile", label: "Profile", icon: User },
    { id: "academic", label: "Academic Details", icon: BookOpen },
    { id: "cocircular", label: "Co-Circulars", icon: Users },
    { id: "extracircular", label: "Extra-Circulars", icon: Zap },
    { id: "platforms", label: "Online Platforms", icon: Globe },
    { id: "analysis", label: "Overall Analysis", icon: BarChart3 },
    { id: "alerts", label: "Alerts", icon: Bell },
  ]

  return (
    <div className="w-64 glass glass-lg border-r border-blue-500/20 p-6 flex flex-col">
      <div className="mb-8">
        <h2 className="text-lg font-bold gradient-text">Menu</h2>
      </div>
      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={`w-full justify-start gap-3 transition-all ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50"
                  : "text-blue-200 hover:text-white hover:bg-blue-500/20 border-transparent"
              }`}
              onClick={() => onSectionChange(item.id)}
            >
              <Icon size={20} />
              {item.label}
            </Button>
          )
        })}
      </nav>
    </div>
  )
}
