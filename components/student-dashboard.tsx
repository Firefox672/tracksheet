"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import StudentSidebar from "./student-sidebar"
import ProfileSection from "./sections/profile-section"
import AcademicSection from "./sections/academic-section"
import CoCurricularSection from "./sections/co-curricular-section"
import ExtraCurricularSection from "./sections/extra-curricular-section"
import OnlinePlatformsSection from "./sections/online-platforms-section"
import OverallAnalysisSection from "./sections/overall-analysis-section"

interface StudentDashboardProps {
  studentId: string
  onLogout: () => void
}

export default function StudentDashboard({ studentId, onLogout }: StudentDashboardProps) {
  const [activeSection, setActiveSection] = useState("profile")

  const renderSection = () => {
    switch (activeSection) {
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
      default:
        return <ProfileSection studentId={studentId} />
    }
  }

  return (
    <div className="flex h-screen bg-slate-900">
      <StudentSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <div className="bg-slate-800 border-b border-slate-700 px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">TRACKSHEET</h1>
          <Button variant="outline" onClick={onLogout} className="text-slate-200 border-slate-600 bg-transparent">
            Logout
          </Button>
        </div>
        <div className="flex-1 overflow-auto p-8">{renderSection()}</div>
      </div>
    </div>
  )
}
