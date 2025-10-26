"use client"

import { Button } from "@/components/ui/button"
import { LayoutDashboard, User, BookOpen, Users, Zap, Globe, BarChart3, Bell } from "lucide-react"

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
    <div className="w-64 bg-slate-800 border-r border-slate-700 p-6 flex flex-col">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white">Menu</h2>
      </div>
      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                activeSection === item.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
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
