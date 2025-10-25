"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import StaffEditModal from "./staff-edit-modal"
import OverallAnalysisSection from "./sections/overall-analysis-section"

interface StaffStudentDetailsProps {
  studentId: string
  onBack: () => void
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
        <Button variant="outline" onClick={onBack} className="text-slate-200 border-slate-600 bg-transparent">
          <ArrowLeft size={20} />
          Back
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-white">{studentData.name}</h2>
          <p className="text-slate-400">{studentData.email}</p>
        </div>
      </div>

      {/* Profile section */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Profile Details</CardTitle>
          <Button size="sm" onClick={() => setEditingSection("profile")} className="bg-blue-600 hover:bg-blue-700">
            Edit
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-slate-400">Date of Birth</p>
            <p className="text-white font-semibold">{studentData.profile.dob}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Phone</p>
            <p className="text-white font-semibold">{studentData.phone}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Address</p>
            <p className="text-white font-semibold">{studentData.profile.address}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Parent Name</p>
            <p className="text-white font-semibold">{studentData.profile.parentName}</p>
          </div>
        </CardContent>
      </Card>

      {/* Academic section */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Academic Details</CardTitle>
          <Button size="sm" onClick={() => setEditingSection("academic")} className="bg-blue-600 hover:bg-blue-700">
            Edit
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">10th Grade</p>
              <p className="text-2xl font-bold text-white">{studentData.academic.tenth.percentage}%</p>
              <p className="text-xs text-slate-400">{studentData.academic.tenth.board}</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Intermediate</p>
              <p className="text-2xl font-bold text-white">{studentData.academic.intermediate.percentage}%</p>
              <p className="text-xs text-slate-400">{studentData.academic.intermediate.board}</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Degree CGPA</p>
              <p className="text-2xl font-bold text-white">{studentData.academic.degree.cgpa}</p>
              <p className="text-xs text-slate-400">Sem {studentData.academic.degree.semester}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Co-Curricular section */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Co-Curricular Activities</CardTitle>
          <Button size="sm" onClick={() => setEditingSection("cocircular")} className="bg-blue-600 hover:bg-blue-700">
            Edit
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-slate-400 mb-2">Seminars: {studentData.cocircular.seminars.length}</p>
            <p className="text-sm text-slate-400 mb-2">Hackathons: {studentData.cocircular.hackathons.length}</p>
            <p className="text-sm text-slate-400 mb-2">Events: {studentData.cocircular.events.length}</p>
            <p className="text-sm text-slate-400">Clubs: {studentData.cocircular.clubs.length}</p>
          </div>
        </CardContent>
      </Card>

      {/* Extra-Curricular section */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Extra-Curricular Activities</CardTitle>
          <Button
            size="sm"
            onClick={() => setEditingSection("extracircular")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Edit
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-slate-400 mb-2">Sports: {studentData.extracircular.sports.length}</p>
            <p className="text-sm text-slate-400 mb-2">Arts: {studentData.extracircular.arts.length}</p>
            <p className="text-sm text-slate-400">Social Service: {studentData.extracircular.socialService.length}</p>
          </div>
        </CardContent>
      </Card>

      {/* Online Platforms section */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Online Platforms</CardTitle>
          <Button size="sm" onClick={() => setEditingSection("platforms")} className="bg-blue-600 hover:bg-blue-700">
            Edit
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {studentData.platforms.map((platform, idx) => (
              <div key={idx} className="flex justify-between items-center bg-slate-700 p-3 rounded-lg">
                <div>
                  <p className="text-white font-semibold">{platform.name}</p>
                  <p className="text-sm text-slate-400">{platform.username}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-400 font-semibold">{platform.problems} problems</p>
                  <p className="text-sm text-slate-400">Rating: {platform.rating}</p>
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
