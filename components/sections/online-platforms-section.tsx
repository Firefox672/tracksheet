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
    { title: "50 Day Streak", subtitle: "Earned 2 days ago", color: "bg-yellow-500/20" },
    { title: "Algorithm Master", subtitle: "100+ problems solved", color: "bg-blue-500/20" },
    { title: "Contest Winner", subtitle: "Top 10% in CodeRush", color: "bg-green-500/20" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Online Platforms</h2>

      <div className="grid grid-cols-3 gap-4">
        {platformsData.map((platform, idx) => (
          <Card key={idx} className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">{platform.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Progress</span>
                  <span className="text-xs font-semibold text-blue-400">{platform.progress}%</span>
                </div>
                <div className="w-full h-2 bg-blue-500/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${platform.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Solved: {platform.problems}</span>
                  <span>Total: {platform.total}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`${achievement.color} border-l-4 border-blue-500 p-4 rounded flex items-center gap-3`}
            >
              <svg
                className="w-6 h-6 text-blue-400 flex-shrink-0"
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
                <p className="text-white font-semibold text-sm">{achievement.title}</p>
                <p className="text-slate-400 text-xs">{achievement.subtitle}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Original platform cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platformsData.map((platform, idx) => (
          <Card key={`detail-${idx}`} className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">{platform.name} Details</CardTitle>
              <Badge className={platform.status === "Active" ? "bg-green-600" : "bg-gray-600"}>{platform.status}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-slate-400">Username</p>
                <p className="text-white font-semibold">{platform.username}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700 p-3 rounded-lg">
                  <p className="text-xs text-slate-400">Problems Solved</p>
                  <p className="text-2xl font-bold text-blue-400">{platform.problems}</p>
                </div>
                <div className="bg-slate-700 p-3 rounded-lg">
                  <p className="text-xs text-slate-400">Rating</p>
                  <p className="text-2xl font-bold text-green-400">{platform.rating}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
