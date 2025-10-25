"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface StaffEditModalProps {
  section: string
  studentData: any
  onClose: () => void
}

export default function StaffEditModal({ section, studentData, onClose }: StaffEditModalProps) {
  const [formData, setFormData] = useState(studentData[section] || {})

  const handleSave = () => {
    console.log(`Saving ${section}:`, formData)
    onClose()
  }

  const renderFormFields = () => {
    switch (section) {
      case "profile":
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-200 block mb-2">Date of Birth</label>
              <Input
                type="date"
                value={formData.dob || ""}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-200 block mb-2">Address</label>
              <Input
                value={formData.address || ""}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-200 block mb-2">Parent Name</label>
              <Input
                value={formData.parentName || ""}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-200 block mb-2">Parent Phone</label>
              <Input
                value={formData.parentPhone || ""}
                onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
        )
      case "academic":
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-200 block mb-2">10th Grade Percentage</label>
              <Input
                type="number"
                value={formData.tenth?.percentage || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    tenth: { ...formData.tenth, percentage: Number.parseFloat(e.target.value) },
                  })
                }
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-200 block mb-2">Intermediate Percentage</label>
              <Input
                type="number"
                value={formData.intermediate?.percentage || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    intermediate: { ...formData.intermediate, percentage: Number.parseFloat(e.target.value) },
                  })
                }
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-200 block mb-2">Degree CGPA</label>
              <Input
                type="number"
                step="0.1"
                value={formData.degree?.cgpa || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    degree: { ...formData.degree, cgpa: Number.parseFloat(e.target.value) },
                  })
                }
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
        )
      default:
        return (
          <div className="space-y-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <label className="text-sm font-medium text-slate-200 block mb-2 capitalize">{key}</label>
                <Input
                  value={String(value)}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
            ))}
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-slate-800 border-slate-700 max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between sticky top-0 bg-slate-800">
          <CardTitle className="text-white capitalize">Edit {section}</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-slate-400">
            <X size={20} />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          {renderFormFields()}
          <div className="flex gap-2 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 text-slate-200 border-slate-600 bg-transparent"
            >
              Cancel
            </Button>
            <Button onClick={handleSave} className="flex-1 bg-blue-600 hover:bg-blue-700">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
