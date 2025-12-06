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
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Filter Students</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">Year</label>
              <Input
                placeholder="e.g., 1, 2, 3, 4"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">Branch</label>
              <Input
                placeholder="e.g., CSE, ECE"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">Section</label>
              <Input
                placeholder="e.g., A, B, C"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Students ({filteredStudents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filteredStudents.map((student) => (
              <Button
                key={student.id}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-900"
                onClick={() => onSelectStudent(student.id)}
              >
                <div>
                  <p className="font-semibold text-slate-900">{student.name}</p>
                  <p className="text-sm text-slate-600">
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
