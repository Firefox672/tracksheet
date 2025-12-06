"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

interface OverviewSectionProps {
  studentId: string
}

export default function OverviewSection({ studentId }: OverviewSectionProps) {
  const performanceData = [
    { month: "Jan", gpa: 3.2, attendance: 85 },
    { month: "Feb", gpa: 3.4, attendance: 88 },
    { month: "Mar", gpa: 3.6, attendance: 90 },
    { month: "Apr", gpa: 3.5, attendance: 87 },
    { month: "May", gpa: 3.8, attendance: 92 },
  ]

  const radarData = [
    { category: "Academic", value: 85 },
    { category: "Coding", value: 78 },
    { category: "Extracurricular", value: 72 },
    { category: "Attendance", value: 90 },
    { category: "Participation", value: 88 },
    { category: "Leadership", value: 75 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Overview</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-slate-800 border-slate-700 border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-400">Growth Score Index</p>
                <h3 className="text-3xl font-bold text-white mt-2">78.5</h3>
                <p className="text-xs text-slate-400 mt-1">+5.2 from last month</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-400">Academic GPA</p>
                <h3 className="text-3xl font-bold text-white mt-2">3.8</h3>
                <p className="text-xs text-slate-400 mt-1">Top 15% of class</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 border-l-4 border-l-yellow-500">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-400">Coding Problems</p>
                <h3 className="text-3xl font-bold text-white mt-2">301</h3>
                <p className="text-xs text-slate-400 mt-1">67 this month</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 border-l-4 border-l-red-500">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-400">Achievements</p>
                <h3 className="text-3xl font-bold text-white mt-2">24</h3>
                <p className="text-xs text-slate-400 mt-1">8 new badges</p>
              </div>
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
                <Legend />
                <Line type="monotone" dataKey="gpa" stroke="#3b82f6" strokeWidth={2} name="GPA" />
                <Line type="monotone" dataKey="attendance" stroke="#10b981" strokeWidth={2} name="Attendance %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Holistic Profile (360° View)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#475569" />
                <PolarAngleAxis dataKey="category" stroke="#94a3b8" />
                <PolarRadiusAxis stroke="#94a3b8" />
                <Radar name="Performance" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            AI-Powered Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-white font-semibold text-sm">Focus Area: Data Structures</p>
            <p className="text-slate-300 text-sm mt-1">
              Based on your coding patterns, concentrate on Tree and Graph problems to improve algorithm efficiency.
            </p>
          </div>
          <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded">
            <p className="text-white font-semibold text-sm">Strength: Mathematics</p>
            <p className="text-slate-300 text-sm mt-1">
              Excellent performance! Consider participating in Math Olympiad or advanced placement courses.
            </p>
          </div>
          <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-white font-semibold text-sm">Improvement Needed: Leadership Activities</p>
            <p className="text-slate-300 text-sm mt-1">
              Join student council or lead a project team to develop leadership skills for holistic growth.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
