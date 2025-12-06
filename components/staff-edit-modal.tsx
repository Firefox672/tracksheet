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
              <label className="text-sm font-medium text-slate-700 block mb-2">Date of Birth</label>
              <Input
                type="date"
                value={formData.dob || ""}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-200"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">Address</label>
              <Input
                value={formData.address || ""}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-200"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">Parent Name</label>
              <Input
                value={formData.parentName || ""}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-200"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">Parent Phone</label>
              <Input
                value={formData.parentPhone || ""}
                onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-200"
              />
            </div>
          </div>
        )
      case "academic":
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">10th Grade Percentage</label>
              <Input
                type="number"
                value={formData.tenth?.percentage || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    tenth: { ...formData.tenth, percentage: Number.parseFloat(e.target.value) },
                  })
                }
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-200"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">Intermediate Percentage</label>
              <Input
                type="number"
                value={formData.intermediate?.percentage || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    intermediate: { ...formData.intermediate, percentage: Number.parseFloat(e.target.value) },
                  })
                }
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-200"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-2">Degree CGPA</label>
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
                className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-200"
              />
            </div>
          </div>
        )
      default:
        return (
          <div className="space-y-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <label className="text-sm font-medium text-slate-700 block mb-2 capitalize">{key}</label>
                <Input
                  value={String(value)}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-200"
                />
              </div>
            ))}
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md glass-sm border border-slate-200/80 max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
          <CardTitle className="text-slate-900 capitalize">Edit {section}</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100">
            <X size={20} />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          {renderFormFields()}
          <div className="flex gap-2 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 text-slate-700 border-slate-300 bg-white/70 hover:bg-slate-100 hover:text-slate-900"
            >
              Cancel
            </Button>
            <Button onClick={handleSave} className="flex-1 bg-sky-600 hover:bg-sky-700 text-white">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
