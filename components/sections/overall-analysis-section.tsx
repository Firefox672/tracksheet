"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { TrendingUp, AlertTriangle, Briefcase } from "lucide-react"

interface OverallAnalysisSectionProps {
  studentId: string
}

export default function OverallAnalysisSection({ studentId }: OverallAnalysisSectionProps) {
  const academicData = [
    { category: "10th", score: 92 },
    { category: "Intermediate", score: 88 },
    { category: "Degree", score: 85 },
  ]

  const activitiesData = [
    { name: "Co-Curricular", value: 35 },
    { name: "Extra-Curricular", value: 40 },
    { name: "Online Platforms", value: 25 },
  ]

  const performanceData = [
    { month: "Jan", academic: 80, activities: 70, platforms: 60 },
    { month: "Feb", academic: 82, activities: 75, platforms: 65 },
    { month: "Mar", academic: 85, activities: 80, platforms: 70 },
    { month: "Apr", academic: 88, activities: 85, platforms: 75 },
    { month: "May", academic: 85, activities: 88, platforms: 80 },
    { month: "Jun", academic: 87, activities: 90, platforms: 85 },
  ]

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

  const predictiveData = [
    {
      metric: "Next Semester GPA",
      value: 3.6,
      confidence: 87,
      trend: "up",
      description: "Expected GPA based on current performance trajectory",
    },
    {
      metric: "Dropout Risk Score",
      value: 15,
      confidence: 92,
      trend: "down",
      description: "Probability of dropout (lower is better)",
    },
    {
      metric: "Career Readiness Index",
      value: 78,
      confidence: 84,
      trend: "up",
      description: "Readiness for industry roles based on skills",
    },
  ]

  const radarData = [
    { category: "Academic", value: 85 },
    { category: "Coding Skills", value: 78 },
    { category: "Communication", value: 72 },
    { category: "Leadership", value: 68 },
    { category: "Teamwork", value: 82 },
    { category: "Problem Solving", value: 88 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900 gradient-text">Overall Analysis</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {predictiveData.map((item, index) => {
          const Icon =
            item.metric === "Next Semester GPA"
              ? TrendingUp
              : item.metric === "Dropout Risk Score"
                ? AlertTriangle
                : Briefcase
          return (
            <Card key={index} className="glass-sm border border-slate-200/80">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-slate-500 text-sm mb-1">{item.metric}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-sky-600">{item.value}</span>
                      {item.metric === "Next Semester GPA" && <span className="text-slate-500">/4.0</span>}
                      {item.metric === "Dropout Risk Score" && <span className="text-slate-500">%</span>}
                      {item.metric === "Career Readiness Index" && <span className="text-slate-500">/100</span>}
                    </div>
                  </div>
                  <Icon className="text-sky-500" size={24} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Confidence</span>
                    <span className="text-slate-600">{item.confidence}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-sky-500 h-2 rounded-full" style={{ width: `${item.confidence}%` }}></div>
                  </div>
                  <p className="text-slate-600 text-xs mt-3">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Holistic Profile (360° View)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="category" stroke="#64748b" />
              <PolarRadiusAxis stroke="#64748b" />
              <Radar name="Score" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.35} />
              <Tooltip contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12 }} />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Academic Performance */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Academic Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={academicData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="category" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12 }} />
              <Bar dataKey="score" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Activities Distribution */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Activities Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={activitiesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {activitiesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Performance Trend */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Performance Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12 }} />
              <Legend />
              <Line type="monotone" dataKey="academic" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="activities" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="platforms" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="text-slate-900 font-semibold mb-2">Individual Recommendations</h4>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>• Focus on maintaining consistent academic performance</li>
              <li>• Increase participation in coding competitions</li>
              <li>• Explore more online learning platforms for skill development</li>
              <li>• Balance academic and extra-curricular activities</li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="text-slate-900 font-semibold mb-2">Overall Performance Summary</h4>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>✓ Strong academic foundation with 85% average</li>
              <li>✓ Good participation in co-curricular activities</li>
              <li>✓ Active on multiple online coding platforms</li>
              <li>→ Continue current trajectory with focus on specialization</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
