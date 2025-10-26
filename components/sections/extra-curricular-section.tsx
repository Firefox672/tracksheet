"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

interface ExtraCurricularSectionProps {
  studentId: string
}

export default function ExtraCurricularSection({ studentId }: ExtraCurricularSectionProps) {
  const extraCurricularData = {
    sports: [
      { name: "Cricket", level: "Intermediate", achievements: "College Team Member" },
      { name: "Badminton", level: "Beginner", achievements: "Participated in Inter-college" },
    ],
    arts: [
      { name: "Music", level: "Advanced", achievements: "Won College Talent Show 2023" },
      { name: "Dance", level: "Intermediate", achievements: "Performed in Annual Fest" },
    ],
    socialService: [
      { name: "Community Outreach", level: "Active", achievements: "50+ hours volunteered" },
      { name: "Environmental Club", level: "Active", achievements: "Organized Tree Plantation Drive" },
    ],
  }

  const activityDistribution = [
    { name: "Sports", value: 30 },
    { name: "Clubs", value: 25 },
    { name: "Competitions", value: 20 },
    { name: "Volunteering", value: 15 },
    { name: "Arts", value: 10 },
  ]

  const recentActivities = [
    { title: "Basketball Tournament", role: "Team Captain • 1st Place", date: "15 Mar 2025", color: "border-blue-500" },
    { title: "Coding Club Workshop", role: "Organizer • 45 attendees", date: "10 Mar 2025", color: "border-green-500" },
    { title: "Community Service", role: "Volunteer • 20 hours", date: "5 Mar 2025", color: "border-purple-500" },
    { title: "Debate Competition", role: "Participant • Finalist", date: "1 Mar 2025", color: "border-yellow-500" },
  ]

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Extra-Curricular Activities</h2>

      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Activity Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={activityDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {activityDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity, idx) => (
              <div key={idx} className={`bg-slate-700 border-l-4 ${activity.color} p-4 rounded`}>
                <p className="text-white font-semibold text-sm">{activity.title}</p>
                <p className="text-slate-400 text-xs mt-1">{activity.role}</p>
                <p className="text-slate-500 text-xs mt-2">{activity.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Sports */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Sports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {extraCurricularData.sports.map((sport, idx) => (
              <div key={idx} className="bg-slate-700 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-semibold">{sport.name}</p>
                    <p className="text-sm text-slate-400">{sport.achievements}</p>
                  </div>
                  <Badge className="bg-orange-600">{sport.level}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Arts & Culture */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Arts & Culture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {extraCurricularData.arts.map((art, idx) => (
              <div key={idx} className="bg-slate-700 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-semibold">{art.name}</p>
                    <p className="text-sm text-slate-400">{art.achievements}</p>
                  </div>
                  <Badge className="bg-pink-600">{art.level}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Service */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Social Service</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {extraCurricularData.socialService.map((service, idx) => (
              <div key={idx} className="bg-slate-700 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-semibold">{service.name}</p>
                    <p className="text-sm text-slate-400">{service.achievements}</p>
                  </div>
                  <Badge className="bg-green-600">{service.level}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
