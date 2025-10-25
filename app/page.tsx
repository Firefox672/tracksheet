"use client"

import { useState } from "react"
import LoginPage from "@/components/login-page"
import StudentDashboard from "@/components/student-dashboard"
import StaffDashboard from "@/components/staff-dashboard"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<"student" | "staff">("student")
  const [studentId, setStudentId] = useState<string>("")

  const handleLogin = (role: "student" | "staff", id: string) => {
    setUserRole(role)
    setStudentId(id)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setStudentId("")
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />
  }

  return userRole === "student" ? (
    <StudentDashboard studentId={studentId} onLogout={handleLogout} />
  ) : (
    <StaffDashboard onLogout={handleLogout} />
  )
}
