"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface OnlinePlatformsSectionProps {
  studentId: string
}

export default function OnlinePlatformsSection({ studentId }: OnlinePlatformsSectionProps) {
  const platformsData = [
    {
      name: "LeetCode",
      username: "rahul_codes",
      problems: 245,
      rating: 1850,
      status: "Active",
      profileUrl: "#",
      progress: 29,
      total: 500,
    },
    {
      name: "HackerRank",
      username: "rahul_kumar",
      problems: 180,
      rating: 5,
      status: "Active",
      profileUrl: "#",
      progress: 30,
      total: 300,
    },
    {
      name: "CodeForces",
      username: "rahul_cf",
      problems: 95,
      rating: 1650,
      status: "Active",
      profileUrl: "#",
      progress: 34,
      total: 200,
    },
  ]

  const achievements = [
    { title: "50 Day Streak", subtitle: "Earned 2 days ago", color: "bg-amber-50" },
    { title: "Algorithm Master", subtitle: "100+ problems solved", color: "bg-blue-50" },
    { title: "Contest Winner", subtitle: "Top 10% in CodeRush", color: "bg-emerald-50" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900 gradient-text">Online Platforms</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {platformsData.map((platform, idx) => (
          <Card key={idx} className="glass-sm border border-slate-200/80">
            <CardHeader>
              <CardTitle className="text-slate-900 text-lg">{platform.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-500 uppercase font-semibold">Progress</span>
                  <span className="text-xs font-semibold text-sky-600">{platform.progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-500 rounded-full transition-all duration-500"
                    style={{ width: `${platform.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Solved: {platform.problems}</span>
                  <span>Total: {platform.total}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`${achievement.color} border border-slate-200 border-l-4 border-l-blue-500 p-4 rounded-lg flex items-center gap-3`}
            >
              <svg
                className="w-6 h-6 text-sky-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-slate-900 font-semibold text-sm">{achievement.title}</p>
                <p className="text-slate-600 text-xs">{achievement.subtitle}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Platform Details Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platformsData.map((platform, idx) => (
          <Card key={`detail-${idx}`} className="glass-sm border border-slate-200/80">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-slate-900">{platform.name} Details</CardTitle>
              <Badge className={platform.status === "Active" ? "bg-emerald-100 text-emerald-700 border border-emerald-200" : "bg-slate-100 text-slate-600 border border-slate-200"}>{platform.status}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-slate-500">Username</p>
                <p className="text-slate-900 font-semibold">{platform.username}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50/90 border border-slate-200 p-3 rounded-xl">
                  <p className="text-xs text-slate-500">Problems Solved</p>
                  <p className="text-2xl font-bold text-sky-600">{platform.problems}</p>
                </div>
                <div className="bg-slate-50/90 border border-slate-200 p-3 rounded-xl">
                  <p className="text-xs text-slate-500">Rating</p>
                  <p className="text-2xl font-bold text-emerald-600">{platform.rating}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
