"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProfileSectionProps {
  studentId: string
}

export default function ProfileSection({ studentId }: ProfileSectionProps) {
  const profileData = {
    name: "Rahul Kumar",
    email: "rahul@example.com",
    phone: "9876543210",
    dob: "2003-05-15",
    address: "123 Main St, City",
    parentName: "Mr. Kumar",
    parentPhone: "9876543211",
    rollNumber: "CSE-2021-001",
    year: "3",
    branch: "Computer Science & Engineering",
    section: "A",
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Profile</h2>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-slate-400">Full Name</p>
            <p className="text-lg font-semibold text-white">{profileData.name}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Email</p>
            <p className="text-lg font-semibold text-white">{profileData.email}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Phone</p>
            <p className="text-lg font-semibold text-white">{profileData.phone}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Date of Birth</p>
            <p className="text-lg font-semibold text-white">{profileData.dob}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-slate-400">Address</p>
            <p className="text-lg font-semibold text-white">{profileData.address}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Academic Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-slate-400">Roll Number</p>
            <p className="text-lg font-semibold text-white">{profileData.rollNumber}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Year</p>
            <p className="text-lg font-semibold text-white">Year {profileData.year}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Branch</p>
            <p className="text-lg font-semibold text-white">{profileData.branch}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Section</p>
            <p className="text-lg font-semibold text-white">{profileData.section}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Parent/Guardian Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-slate-400">Parent Name</p>
            <p className="text-lg font-semibold text-white">{profileData.parentName}</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Parent Phone</p>
            <p className="text-lg font-semibold text-white">{profileData.parentPhone}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
