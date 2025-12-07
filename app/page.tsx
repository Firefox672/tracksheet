"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginPage from "@/components/login-page";
import StudentDashboard from "@/components/student-dashboard";
import StaffDashboard from "@/components/staff-dashboard";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<"student" | "staff">("student");
  const [studentId, setStudentId] = useState<string>("");

  const handleLogin = (role: "student" | "staff", id: string) => {
    setUserRole(role);
    setStudentId(id);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setStudentId("");
  };

  const viewKey = isLoggedIn ? userRole : "login";

  return (
    <AnimatePresence mode="wait">
      {!isLoggedIn ? (
        <motion.div
          key="login"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -18, scale: 0.98 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="will-change-transform"
          style={{ backfaceVisibility: "hidden" }}
        >
          <LoginPage onLogin={handleLogin} />
        </motion.div>
      ) : (
        <motion.div
          key={viewKey}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{
            duration: 0.3,
            ease: [0.16, 0.84, 0.44, 1],
          }}
          className="will-change-transform"
          style={{ backfaceVisibility: "hidden" }}
        >
          {userRole === "student" ? (
            <StudentDashboard
              studentId={studentId}
              onLogout={handleLogout}
            />
          ) : (
            <StaffDashboard onLogout={handleLogout} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
