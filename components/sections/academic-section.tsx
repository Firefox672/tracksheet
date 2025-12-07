"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedCard from "@/components/ui/AnimatedCard"
import DashboardGrid from "@/components/dashboard/DashboardGrid"
import SectionFadeSlide from "@/components/transitions/SectionFadeSlide"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

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

  const subjectPerformanceData = [
    { subject: "Mathematics", yourScore: 85, classAvg: 75 },
    { subject: "Physics", yourScore: 78, classAvg: 72 },
    { subject: "Chemistry", yourScore: 92, classAvg: 80 },
    { subject: "Computer Science", yourScore: 95, classAvg: 82 },
    { subject: "English", yourScore: 88, classAvg: 78 },
  ]

  return (
    <SectionFadeSlide>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 gradient-text">Academic Details</h2>

        <Card className="glass-sm border border-slate-200/80">
          <CardHeader>
            <CardTitle className="text-slate-900">Subject-wise Performance</CardTitle>
          </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="subject" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12 }} />
              <Legend />
              <Bar dataKey="yourScore" fill="#6366f1" name="Your Score" />
              <Bar dataKey="classAvg" fill="#22c55e" name="Class Average" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <DashboardGrid columns={3}>
        <AnimatedCard glassy header={<span className="text-slate-900 text-lg font-semibold">Attendance</span>}>
          <div className="text-center">
            <p className="text-4xl font-bold text-emerald-500">92%</p>
            <p className="text-slate-500 text-sm mt-2">Overall Attendance</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Theory Classes</span>
                <span className="font-semibold">95%</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Lab Sessions</span>
                <span className="font-semibold">88%</span>
              </div>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard glassy header={<span className="text-slate-900 text-lg font-semibold">Assignments</span>}>
          <div className="text-center">
            <p className="text-4xl font-bold text-sky-500">18/20</p>
            <p className="text-slate-500 text-sm mt-2">Completed</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>On Time</span>
                <span className="font-semibold text-emerald-600">16</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Late</span>
                <span className="font-semibold text-amber-500">2</span>
              </div>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard glassy header={<span className="text-slate-900 text-lg font-semibold">Class Participation</span>}>
          <div className="text-center">
            <p className="text-4xl font-bold text-violet-500">87%</p>
            <p className="text-slate-500 text-sm mt-2">Engagement Score</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Questions Asked</span>
                <span className="font-semibold">34</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Discussions</span>
                <span className="font-semibold">22</span>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </DashboardGrid>

      {/* 10th Grade */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">10th Grade</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500">Percentage</p>
              <p className="text-3xl font-bold text-sky-500">{academicData.tenth.percentage}%</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500">Board</p>
              <p className="text-lg font-semibold text-slate-900">{academicData.tenth.board}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500">Year</p>
              <p className="text-lg font-semibold text-slate-900">{academicData.tenth.year}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Intermediate */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Intermediate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500">Percentage</p>
              <p className="text-3xl font-bold text-sky-500">{academicData.intermediate.percentage}%</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500">Stream</p>
              <p className="text-lg font-semibold text-slate-900">{academicData.intermediate.stream}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500">Year</p>
              <p className="text-lg font-semibold text-slate-900">{academicData.intermediate.year}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Degree */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Degree</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500">CGPA</p>
              <p className="text-3xl font-bold text-emerald-500">{academicData.degree.cgpa}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500">Current Semester</p>
              <p className="text-lg font-semibold text-slate-900">{academicData.degree.semester}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-500">Branch</p>
              <p className="text-lg font-semibold text-slate-900">CSE</p>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Current Semester Courses</h4>
            <div className="space-y-2">
              {academicData.degree.courses.map((course, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="text-slate-900 font-semibold">{course.name}</p>
                    <p className="text-sm text-slate-500">{course.credits} Credits</p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold">{course.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </SectionFadeSlide>
  )
}
