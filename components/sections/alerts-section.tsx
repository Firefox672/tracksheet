"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, TrendingDown, Clock, Target } from "lucide-react"

interface AlertsSectionProps {
  studentId: string
}

export default function AlertsSection({ studentId }: AlertsSectionProps) {
  const alerts = [
    {
      id: 1,
      type: "warning",
      title: "Low Attendance Alert",
      message: "Your attendance is below 75%. Please attend more classes.",
      severity: "high",
      date: "2024-01-15",
      icon: AlertCircle,
    },
    {
      id: 2,
      type: "info",
      title: "Assignment Deadline",
      message: "Data Structures assignment due in 2 days",
      severity: "medium",
      date: "2024-01-14",
      icon: Clock,
    },
    {
      id: 3,
      type: "success",
      title: "Performance Improvement",
      message: "Great improvement in recent coding assessments!",
      severity: "low",
      date: "2024-01-13",
      icon: TrendingDown,
    },
    {
      id: 4,
      type: "warning",
      title: "Dropout Risk",
      message: "Your performance trend suggests potential dropout risk. Please meet with advisor.",
      severity: "high",
      date: "2024-01-12",
      icon: AlertCircle,
    },
    {
      id: 5,
      type: "info",
      title: "Skill Gap Identified",
      message: "Consider improving your web development skills",
      severity: "medium",
      date: "2024-01-11",
      icon: Target,
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "border-l-4 border-red-500 bg-red-900/20"
      case "medium":
        return "border-l-4 border-yellow-500 bg-yellow-900/20"
      case "low":
        return "border-l-4 border-green-500 bg-green-900/20"
      default:
        return "border-l-4 border-blue-500 bg-blue-900/20"
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-500/20 text-red-300"
      case "medium":
        return "bg-yellow-500/20 text-yellow-300"
      case "low":
        return "bg-green-500/20 text-green-300"
      default:
        return "bg-blue-500/20 text-blue-300"
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Alerts & Notifications</h2>

      {/* Alert Summary */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">2</div>
              <p className="text-slate-400 text-sm mt-2">High Priority</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">2</div>
              <p className="text-slate-400 text-sm mt-2">Medium Priority</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">1</div>
              <p className="text-slate-400 text-sm mt-2">Low Priority</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {alerts.map((alert) => {
            const Icon = alert.icon
            return (
              <div key={alert.id} className={`p-4 rounded-lg ${getSeverityColor(alert.severity)}`}>
                <div className="flex items-start gap-4">
                  <Icon className="text-slate-300 mt-1" size={20} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">{alert.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${getSeverityBadge(alert.severity)}`}>
                        {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-2">{alert.message}</p>
                    <p className="text-slate-400 text-xs">{alert.date}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* AI Early Intervention */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">AI Early Intervention System</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="text-white font-semibold mb-2">System Analysis</h4>
            <p className="text-slate-300 text-sm mb-3">
              Our AI system has identified patterns in your academic performance and engagement metrics.
            </p>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• Declining attendance trend detected</li>
              <li>• Assignment submission delays increasing</li>
              <li>• Recommended action: Schedule meeting with academic advisor</li>
              <li>• Suggested resources: Tutoring sessions, study groups</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
