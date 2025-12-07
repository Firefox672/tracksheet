"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import StudentSidebar from "./student-sidebar";
import TopBar from "./ui/TopBar";
import AnnouncementBox from "./ui/AnnouncementBox";
import OverviewSection from "./sections/overview-section";
import ProfileSection from "./sections/profile-section";
import AcademicSection from "./sections/academic-section";
import CoCurricularSection from "./sections/co-curricular-section";
import ExtraCurricularSection from "./sections/extra-curricular-section";
import OnlinePlatformsSection from "./sections/online-platforms-section";
import OverallAnalysisSection from "./sections/overall-analysis-section";
import AlertsSection from "./sections/alerts-section";

interface StudentDashboardProps {
  studentId: string;
  onLogout: () => void;
  userName?: string;
  userEmail?: string;
}

export default function StudentDashboard({
  studentId,
  onLogout,
  userName = "Student",
  userEmail = "student@tracksheet.edu",
}: StudentDashboardProps) {
  const [activeSection, setActiveSection] = useState("overview");
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // TODO: Implement search functionality across sections
  };

  const handleAnnouncementCTA = () => {
    setActiveSection("profile");
  };

  const handleProfileClick = () => {
    setActiveSection("profile");
  };

  const handleDashboardClick = () => {
    setActiveSection("overview");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection studentId={studentId} />;
      case "profile":
        return <ProfileSection studentId={studentId} />;
      case "academic":
        return <AcademicSection studentId={studentId} />;
      case "cocircular":
        return <CoCurricularSection studentId={studentId} />;
      case "extracircular":
        return <ExtraCurricularSection studentId={studentId} />;
      case "platforms":
        return <OnlinePlatformsSection studentId={studentId} />;
      case "analysis":
        return <OverallAnalysisSection studentId={studentId} />;
      case "alerts":
        return <AlertsSection studentId={studentId} />;
      default:
        return <OverviewSection studentId={studentId} />;
    }
  };

  return (
    <div className="flex h-screen">
      <StudentSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div className="flex-1 flex flex-col">
        {/* TopBar with integrated navigation */}
        <TopBar
          userName={userName}
          userEmail={userEmail}
          onSearch={handleSearch}
          onLogout={onLogout}
          onProfileClick={handleProfileClick}
          onDashboardClick={handleDashboardClick}
        />

        {/* Announcement Banner */}
        {showAnnouncement && (
          <AnnouncementBox
            text="Complete your profile to unlock personalized insights and recommendations! 🎯"
            cta={{
              label: "Complete Profile",
              onClick: handleAnnouncementCTA,
            }}
            onClose={() => setShowAnnouncement(false)}
          />
        )}

        {/* Animated section content */}
        <div className="flex-1 overflow-auto p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{
                duration: 0.28,
                ease: [0.19, 0.79, 0.29, 1],
              }}
              className="will-change-transform"
              style={{ backfaceVisibility: "hidden" }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
