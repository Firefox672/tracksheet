"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface StaffStudentSelectorProps {
  onSelectStudent: (studentId: string) => void
}

export default function StaffStudentSelector({ onSelectStudent }: StaffStudentSelectorProps) {
  const [year, setYear] = useState("")
  const [branch, setBranch] = useState("")
  const [section, setSection] = useState("")

  const mockStudents = [
    { id: "STU001", name: "Rahul Kumar", year: "3", branch: "CSE", section: "A" },
    { id: "STU002", name: "Priya Singh", year: "3", branch: "CSE", section: "A" },
    { id: "STU003", name: "Amit Patel", year: "3", branch: "ECE", section: "B" },
    { id: "STU004", name: "Neha Sharma", year: "2", branch: "CSE", section: "A" },
  ]

  const filteredStudents = mockStudents.filter(
    (student) =>
      (!year || student.year === year) &&
      (!branch || student.branch === branch) &&
      (!section || student.section === section),
  )

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Filter Students</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-200 block mb-2">Year</label>
              <Input
                placeholder="e.g., 1, 2, 3, 4"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-200 block mb-2">Branch</label>
              <Input
                placeholder="e.g., CSE, ECE"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-200 block mb-2">Section</label>
              <Input
                placeholder="e.g., A, B, C"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Students ({filteredStudents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filteredStudents.map((student) => (
              <Button
                key={student.id}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 bg-slate-700 border-slate-600 hover:bg-slate-600 text-white"
                onClick={() => onSelectStudent(student.id)}
              >
                <div>
                  <p className="font-semibold">{student.name}</p>
                  <p className="text-sm text-slate-300">
                    {student.year}Y | {student.branch} | Section {student.section}
                  </p>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
