"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TopBar from "./ui/TopBar";
import AnnouncementBox from "./ui/AnnouncementBox";
import StaffStudentSelector from "./staff-student-selector";
import StaffStudentDetails from "./staff-student-details";

interface StaffDashboardProps {
  onLogout: () => void;
  userName?: string;
  userEmail?: string;
}

export default function StaffDashboard({
  onLogout,
  userName = "Staff Member",
  userEmail = "staff@tracksheet.edu",
}: StaffDashboardProps) {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const handleSearch = (query: string) => {
    console.log("Staff search query:", query);
    // TODO: Implement staff search functionality
  };

  const handleAnnouncementCTA = () => {
    // Navigate to staff resources or training
    console.log("View training resources");
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-50 via-sky-50 to-white">
      {/* TopBar with integrated navigation */}
      <TopBar
        userName={userName}
        userEmail={userEmail}
        onSearch={handleSearch}
        onLogout={onLogout}
      />

      {/* Staff-specific Announcement Banner */}
      {showAnnouncement && (
        <AnnouncementBox
          text="New training materials available! Learn about the latest features and best practices. 📚"
          cta={{
            label: "View Resources",
            onClick: handleAnnouncementCTA,
          }}
          onClose={() => setShowAnnouncement(false)}
        />
      )}

      {/* Content area with animated views */}
      <div className="flex-1 overflow-auto">
        <AnimatePresence mode="wait">
          {selectedStudent === null ? (
            <motion.div
              key="selector"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.28,
                ease: [0.19, 0.79, 0.29, 1],
              }}
              className="p-8 will-change-transform"
              style={{ backfaceVisibility: "hidden" }}
            >
              <StaffStudentSelector onSelectStudent={setSelectedStudent} />
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 0.84, 0.44, 1],
              }}
              className="p-8 will-change-transform"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Button
                onClick={() => setSelectedStudent(null)}
                className="mb-4 rounded-full bg-sky-500 text-white hover:bg-sky-600"
              >
                ← Back to Search
              </Button>
              <StaffStudentDetails studentId={selectedStudent} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
