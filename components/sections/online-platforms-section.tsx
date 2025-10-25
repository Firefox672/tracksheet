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
    },
    {
      name: "HackerRank",
      username: "rahul_kumar",
      problems: 180,
      rating: 5,
      status: "Active",
      profileUrl: "#",
    },
    {
      name: "GeeksForGeeks",
      username: "rahul_gfg",
      problems: 320,
      rating: "Expert",
      status: "Active",
      profileUrl: "#",
    },
    {
      name: "CodeChef",
      username: "rahul_chef",
      problems: 95,
      rating: 1650,
      status: "Inactive",
      profileUrl: "#",
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Online Platforms</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platformsData.map((platform, idx) => (
          <Card key={idx} className="bg-slate-800 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">{platform.name}</CardTitle>
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
