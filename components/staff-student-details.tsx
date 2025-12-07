"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import StaffEditModal from "./staff-edit-modal"
import OverallAnalysisSection from "./sections/overall-analysis-section"

interface StaffStudentDetailsProps {
  studentId: string
  onBack?: () => void
}

export default function StaffStudentDetails({ studentId, onBack }: StaffStudentDetailsProps) {
  const [editingSection, setEditingSection] = useState<string | null>(null)

  const studentData = {
    id: studentId,
    name: "Rahul Kumar",
    email: "rahul@example.com",
    phone: "9876543210",
    profile: {
      dob: "2003-05-15",
      address: "123 Main St, City",
      parentName: "Mr. Kumar",
      parentPhone: "9876543211",
    },
    academic: {
      tenth: { percentage: 92, board: "CBSE", year: 2019 },
      intermediate: { percentage: 88, board: "CBSE", year: 2021 },
      degree: { cgpa: 8.5, semester: 6, branch: "CSE" },
    },
    cocircular: {
      seminars: [{ name: "AI & Machine Learning", date: "2024-03-15", organizer: "Tech Club" }],
      hackathons: [{ name: "CodeFest 2024", date: "2024-01-10", position: "2nd Place" }],
      events: [{ name: "Tech Fest 2024", date: "2024-03-01", role: "Volunteer" }],
      clubs: [{ name: "Coding Club", status: "Active", role: "Member" }],
    },
    extracircular: {
      sports: [{ name: "Cricket", level: "Intermediate", achievements: "College Team Member" }],
      arts: [{ name: "Music", level: "Advanced", achievements: "Won College Talent Show 2023" }],
      socialService: [{ name: "Community Outreach", level: "Active", achievements: "50+ hours volunteered" }],
    },
    platforms: [
      { name: "LeetCode", username: "rahul_codes", problems: 245, rating: 1850 },
      { name: "HackerRank", username: "rahul_kumar", problems: 180, rating: 5 },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        {onBack && (
          <Button variant="outline" onClick={onBack} className="text-slate-700 border-slate-300 bg-white/70 hover:bg-slate-100">
            <ArrowLeft size={20} />
            Back
          </Button>
        )}
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{studentData.name}</h2>
          <p className="text-slate-500">{studentData.email}</p>
        </div>
      </div>

      {/* Profile section */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-slate-900">Profile Details</CardTitle>
          <Button size="sm" onClick={() => setEditingSection("profile")} className="bg-sky-600 hover:bg-sky-700">
            Edit
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-slate-500">Date of Birth</p>
            <p className="text-slate-900 font-semibold">{studentData.profile.dob}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Phone</p>
            <p className="text-slate-900 font-semibold">{studentData.phone}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Address</p>
            <p className="text-slate-900 font-semibold">{studentData.profile.address}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Parent Name</p>
            <p className="text-slate-900 font-semibold">{studentData.profile.parentName}</p>
          </div>
        </CardContent>
      </Card>

      {/* Academic section */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-slate-900">Academic Details</CardTitle>
          <Button size="sm" onClick={() => setEditingSection("academic")} className="bg-sky-600 hover:bg-sky-700">
            Edit
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-sm text-slate-600">10th Grade</p>
              <p className="text-2xl font-bold text-sky-600">{studentData.academic.tenth.percentage}%</p>
              <p className="text-xs text-slate-500">{studentData.academic.tenth.board}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-sm text-slate-600">Intermediate</p>
              <p className="text-2xl font-bold text-emerald-600">{studentData.academic.intermediate.percentage}%</p>
              <p className="text-xs text-slate-500">{studentData.academic.intermediate.board}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-sm text-slate-600">Degree CGPA</p>
              <p className="text-2xl font-bold text-violet-600">{studentData.academic.degree.cgpa}</p>
              <p className="text-xs text-slate-500">Sem {studentData.academic.degree.semester}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Co-Curricular section */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-slate-900">Co-Curricular Activities</CardTitle>
          <Button size="sm" onClick={() => setEditingSection("cocircular")} className="bg-sky-600 hover:bg-sky-700">
            Edit
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-slate-600 mb-2">Seminars: {studentData.cocircular.seminars.length}</p>
            <p className="text-sm text-slate-600 mb-2">Hackathons: {studentData.cocircular.hackathons.length}</p>
            <p className="text-sm text-slate-600 mb-2">Events: {studentData.cocircular.events.length}</p>
            <p className="text-sm text-slate-600">Clubs: {studentData.cocircular.clubs.length}</p>
          </div>
        </CardContent>
      </Card>

      {/* Extra-Curricular section */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-slate-900">Extra-Curricular Activities</CardTitle>
          <Button
            size="sm"
            onClick={() => setEditingSection("extracircular")}
            className="bg-sky-600 hover:bg-sky-700"
          >
            Edit
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-slate-600 mb-2">Sports: {studentData.extracircular.sports.length}</p>
            <p className="text-sm text-slate-600 mb-2">Arts: {studentData.extracircular.arts.length}</p>
            <p className="text-sm text-slate-600">Social Service: {studentData.extracircular.socialService.length}</p>
          </div>
        </CardContent>
      </Card>

      {/* Online Platforms section */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-slate-900">Online Platforms</CardTitle>
          <Button size="sm" onClick={() => setEditingSection("platforms")} className="bg-sky-600 hover:bg-sky-700">
            Edit
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {studentData.platforms.map((platform, idx) => (
              <div key={idx} className="flex justify-between items-center bg-slate-50 border border-slate-200 p-3 rounded-lg">
                <div>
                  <p className="text-slate-900 font-semibold">{platform.name}</p>
                  <p className="text-sm text-slate-600">{platform.username}</p>
                </div>
                <div className="text-right">
                  <p className="text-sky-600 font-semibold">{platform.problems} problems</p>
                  <p className="text-sm text-slate-600">Rating: {platform.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <OverallAnalysisSection studentId={studentId} />

      {editingSection && (
        <StaffEditModal section={editingSection} studentData={studentData} onClose={() => setEditingSection(null)} />
      )}
    </div>
  )
}
