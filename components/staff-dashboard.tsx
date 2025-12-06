"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import StaffStudentSelector from "./staff-student-selector";
import StaffStudentDetails from "./staff-student-details";

interface StaffDashboardProps {
  onLogout: () => void;
}

export default function StaffDashboard({ onLogout }: StaffDashboardProps) {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="glass glass-sm border-b border-slate-200/80 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">
          TRACKSHEET – Staff Portal
        </h1>
        <Button
          variant="outline"
          onClick={onLogout}
          className="rounded-full border-slate-300 bg-white/70 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        >
          Logout
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        {!selectedStudent ? (
          <StaffStudentSelector onSelectStudent={setSelectedStudent} />
        ) : (
          <StaffStudentDetails
            studentId={selectedStudent}
            onBack={() => setSelectedStudent(null)}
          />
        )}
      </div>
    </div>
  );
}
