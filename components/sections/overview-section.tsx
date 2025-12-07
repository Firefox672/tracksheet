"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedCard from "@/components/ui/AnimatedCard"
import DashboardGrid from "@/components/dashboard/DashboardGrid"
import SectionFadeSlide from "@/components/transitions/SectionFadeSlide"
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
    { month: "Jun", gpa: 3.85, attendance: 93 },
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
    <SectionFadeSlide>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 gradient-text">Overview</h2>

        {/* Stat Cards */}
        <DashboardGrid columns={4}>
          <AnimatedCard glassy>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-medium text-slate-500">Growth Score Index</p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">78.5</h3>
                <p className="text-xs text-emerald-600 mt-1">+5.2 from last month</p>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard glassy>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-medium text-slate-500">Academic GPA</p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">3.8</h3>
                <p className="text-xs text-slate-500 mt-1">Top 15% of class</p>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard glassy>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-medium text-slate-500">Coding Problems</p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">301</h3>
                <p className="text-xs text-slate-500 mt-1">67 this month</p>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard glassy>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-medium text-slate-500">Achievements</p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">24</h3>
                <p className="text-xs text-slate-500 mt-1">8 new badges</p>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </AnimatedCard>
        </DashboardGrid>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-sm border border-slate-200/80">
          <CardHeader>
            <CardTitle className="text-slate-900">Performance Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ borderRadius: 12, backgroundColor: "#ffffff", border: "1px solid #e2e8f0" }} />
                <Legend />
                <Line type="monotone" dataKey="gpa" stroke="#6366f1" strokeWidth={2} name="GPA" dot={{ r: 4 }} />
                <Line type="monotone" dataKey="attendance" stroke="#22c55e" strokeWidth={2} name="Attendance %" dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-sm border border-slate-200/80">
          <CardHeader>
            <CardTitle className="text-slate-900">Holistic Profile (360° View)</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="category" tick={{ fill: "#64748b", fontSize: 12 }} />
                <PolarRadiusAxis tick={{ fill: "#64748b" }} />
                <Radar name="Performance" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.35} />
                <Tooltip contentStyle={{ borderRadius: 12, backgroundColor: "#ffffff", border: "1px solid #e2e8f0" }} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <CardContent className="space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
          <div className="bg-sky-50 border border-sky-100 p-4 rounded-xl">
            <p className="text-sm font-semibold text-sky-800">Focus Area: Data Structures</p>
            <p className="text-xs text-sky-700 mt-1">
              Based on your coding patterns, concentrate on Tree and Graph problems to improve algorithm efficiency.
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
            <p className="text-sm font-semibold text-emerald-800">Strength: Mathematics</p>
            <p className="text-xs text-emerald-700 mt-1">
              Excellent performance! Consider participating in Math Olympiad or advanced placement courses.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
            <p className="text-sm font-semibold text-amber-800">Improvement Needed: Leadership Activities</p>
            <p className="text-xs text-amber-700 mt-1">
              Join student council or lead a project team to develop leadership skills for holistic growth.
            </p>
          </div>
        </CardContent>
      </Card>
      </div>
    </SectionFadeSlide>
  )
}
