"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CoCurricularSectionProps {
  studentId: string
}

export default function CoCurricularSection({ studentId }: CoCurricularSectionProps) {
  const coCurricularData = {
    seminars: [
      { name: "AI & Machine Learning", date: "2024-03-15", organizer: "Tech Club" },
      { name: "Cloud Computing Basics", date: "2024-02-20", organizer: "CSE Department" },
    ],
    hackathons: [
      { name: "CodeFest 2024", date: "2024-01-10", position: "2nd Place", team: "Team Alpha" },
      { name: "Web Dev Challenge", date: "2023-11-05", position: "Participant", team: "Solo" },
    ],
    events: [
      { name: "Tech Fest 2024", date: "2024-03-01", role: "Volunteer" },
      { name: "Orientation Program", date: "2023-08-15", role: "Participant" },
    ],
    clubs: [
      { name: "Coding Club", status: "Active", role: "Member", joinDate: "2021-09-01" },
      { name: "Robotics Club", status: "Active", role: "Core Member", joinDate: "2022-01-15" },
    ],
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900 gradient-text">
        Co-Curricular Activities
      </h2>

      {/* Seminars */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Seminars Attended</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {coCurricularData.seminars.map((seminar, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-slate-900 font-semibold">{seminar.name}</p>
                    <p className="text-sm text-slate-500">{seminar.organizer}</p>
                  </div>
                  <Badge className="bg-blue-600">{seminar.date}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hackathons */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Hackathons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {coCurricularData.hackathons.map((hackathon, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-slate-900 font-semibold">{hackathon.name}</p>
                    <p className="text-sm text-slate-500">{hackathon.team}</p>
                  </div>
                  <Badge className="bg-green-600">{hackathon.position}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Events */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {coCurricularData.events.map((event, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-slate-900 font-semibold">{event.name}</p>
                    <p className="text-sm text-slate-500">{event.role}</p>
                  </div>
                  <Badge className="bg-purple-600">{event.date}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Clubs */}
      <Card className="glass-sm border border-slate-200/80">
        <CardHeader>
          <CardTitle className="text-slate-900">Club Memberships</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {coCurricularData.clubs.map((club, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-slate-900 font-semibold">{club.name}</p>
                    <p className="text-sm text-slate-500">{club.role}</p>
                  </div>
                  <Badge
                    className={
                      club.status === "Active"
                        ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }>
                    {club.status}
                  </Badge>

                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
