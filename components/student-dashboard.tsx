"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import StudentSidebar from "./student-sidebar"
import OverviewSection from "./sections/overview-section"
import ProfileSection from "./sections/profile-section"
import AcademicSection from "./sections/academic-section"
import CoCurricularSection from "./sections/co-curricular-section"
import ExtraCurricularSection from "./sections/extra-curricular-section"
import OnlinePlatformsSection from "./sections/online-platforms-section"
import OverallAnalysisSection from "./sections/overall-analysis-section"
import AlertsSection from "./sections/alerts-section"

interface StudentDashboardProps {
  studentId: string
  onLogout: () => void
}

export default function StudentDashboard({ studentId, onLogout }: StudentDashboardProps) {
  const [activeSection, setActiveSection] = useState("overview")

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection studentId={studentId} />
      case "profile":
        return <ProfileSection studentId={studentId} />
      case "academic":
        return <AcademicSection studentId={studentId} />
      case "cocircular":
        return <CoCurricularSection studentId={studentId} />
      case "extracircular":
        return <ExtraCurricularSection studentId={studentId} />
      case "platforms":
        return <OnlinePlatformsSection studentId={studentId} />
      case "analysis":
        return <OverallAnalysisSection studentId={studentId} />
      case "alerts":
        return <AlertsSection studentId={studentId} />
      default:
        return <OverviewSection studentId={studentId} />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <StudentSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <div className="glass glass-sm border-b border-blue-500/20 px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">TRACKSHEET</h1>
          <Button 
            variant="outline" 
            onClick={onLogout} 
            className="text-blue-200 border-blue-400/40 bg-blue-950/30 hover:bg-blue-900/50 hover:text-blue-100"
          >
            Logout
          </Button>
        </div>
        <div className="flex-1 overflow-auto p-8">{renderSection()}</div>
      </div>
    </div>
  )
}
