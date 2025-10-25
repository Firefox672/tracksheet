"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Extra-Curricular Activities</h2>

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
