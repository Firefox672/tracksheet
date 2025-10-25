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
      <h2 className="text-3xl font-bold text-white">Co-Curricular Activities</h2>

      {/* Seminars */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Seminars Attended</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {coCurricularData.seminars.map((seminar, idx) => (
              <div key={idx} className="bg-slate-700 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-semibold">{seminar.name}</p>
                    <p className="text-sm text-slate-400">{seminar.organizer}</p>
                  </div>
                  <Badge className="bg-blue-600">{seminar.date}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hackathons */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Hackathons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {coCurricularData.hackathons.map((hackathon, idx) => (
              <div key={idx} className="bg-slate-700 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-semibold">{hackathon.name}</p>
                    <p className="text-sm text-slate-400">{hackathon.team}</p>
                  </div>
                  <Badge className="bg-green-600">{hackathon.position}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Events */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {coCurricularData.events.map((event, idx) => (
              <div key={idx} className="bg-slate-700 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-semibold">{event.name}</p>
                    <p className="text-sm text-slate-400">{event.role}</p>
                  </div>
                  <Badge className="bg-purple-600">{event.date}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Clubs */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Club Memberships</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {coCurricularData.clubs.map((club, idx) => (
              <div key={idx} className="bg-slate-700 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-semibold">{club.name}</p>
                    <p className="text-sm text-slate-400">{club.role}</p>
                  </div>
                  <Badge className={club.status === "Active" ? "bg-green-600" : "bg-gray-600"}>{club.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
