"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import StaffStudentSelector from "./staff-student-selector"
import StaffStudentDetails from "./staff-student-details"

interface StaffDashboardProps {
  onLogout: () => void
}

export default function StaffDashboard({ onLogout }: StaffDashboardProps) {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="bg-slate-800 border-b border-slate-700 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">TRACKSHEET - Staff Portal</h1>
        <Button variant="outline" onClick={onLogout} className="text-slate-200 border-slate-600 bg-transparent">
          Logout
        </Button>
      </div>

      <div className="p-8">
        {!selectedStudent ? (
          <StaffStudentSelector onSelectStudent={setSelectedStudent} />
        ) : (
          <StaffStudentDetails studentId={selectedStudent} onBack={() => setSelectedStudent(null)} />
        )}
      </div>
    </div>
  )
}
