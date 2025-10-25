"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AcademicSectionProps {
  studentId: string
}

export default function AcademicSection({ studentId }: AcademicSectionProps) {
  const academicData = {
    tenth: {
      percentage: 92,
      board: "CBSE",
      year: 2019,
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies"],
    },
    intermediate: {
      percentage: 88,
      board: "CBSE",
      year: 2021,
      stream: "Science",
      subjects: ["Physics", "Chemistry", "Mathematics", "English"],
    },
    degree: {
      cgpa: 8.5,
      semester: 6,
      branch: "Computer Science & Engineering",
      courses: [
        { name: "Data Structures", grade: "A+", credits: 4 },
        { name: "Database Management", grade: "A", credits: 4 },
        { name: "Web Development", grade: "A+", credits: 3 },
        { name: "Algorithms", grade: "A", credits: 4 },
      ],
    },
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Academic Details</h2>

      {/* 10th Grade */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">10th Grade</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Percentage</p>
              <p className="text-3xl font-bold text-blue-400">{academicData.tenth.percentage}%</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Board</p>
              <p className="text-lg font-semibold text-white">{academicData.tenth.board}</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Year</p>
              <p className="text-lg font-semibold text-white">{academicData.tenth.year}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Intermediate */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Intermediate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Percentage</p>
              <p className="text-3xl font-bold text-blue-400">{academicData.intermediate.percentage}%</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Stream</p>
              <p className="text-lg font-semibold text-white">{academicData.intermediate.stream}</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Year</p>
              <p className="text-lg font-semibold text-white">{academicData.intermediate.year}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Degree */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Degree</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">CGPA</p>
              <p className="text-3xl font-bold text-green-400">{academicData.degree.cgpa}</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Current Semester</p>
              <p className="text-lg font-semibold text-white">{academicData.degree.semester}</p>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg">
              <p className="text-sm text-slate-400">Branch</p>
              <p className="text-lg font-semibold text-white">CSE</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Current Semester Courses</h4>
            <div className="space-y-2">
              {academicData.degree.courses.map((course, idx) => (
                <div key={idx} className="bg-slate-700 p-3 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="text-white font-semibold">{course.name}</p>
                    <p className="text-sm text-slate-400">{course.credits} Credits</p>
                  </div>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">{course.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
