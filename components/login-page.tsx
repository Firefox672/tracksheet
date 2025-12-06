"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface LoginPageProps {
  onLogin: (role: "student" | "staff", id: string) => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [isStudent, setIsStudent] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      onLogin(isStudent ? "student" : "staff", email)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md glass glass-lg border-blue-500/30">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle className="text-2xl gradient-text font-bold">TRACKSHEET</CardTitle>
              <CardDescription className="text-blue-200/70">Student Performance Tracking</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2 mb-6">
              <Button
                type="button"
                variant={isStudent ? "default" : "outline"}
                className={`flex-1 ${
                  isStudent
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                    : "border-blue-300/30 text-blue-200 hover:bg-blue-500/20"
                }`}
                onClick={() => setIsStudent(true)}
              >
                Student
              </Button>
              <Button
                type="button"
                variant={!isStudent ? "default" : "outline"}
                className={`flex-1 ${
                  !isStudent
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                    : "border-blue-300/30 text-blue-200 hover:bg-purple-500/20"
                }`}
                onClick={() => setIsStudent(false)}
              >
                Staff
              </Button>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-100">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-sm bg-blue-950/50 border-blue-400/30 text-white placeholder:text-blue-300/50 focus:border-cyan-400/60"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-100">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-sm bg-blue-950/50 border-blue-400/30 text-white placeholder:text-blue-300/50 focus:border-cyan-400/60"
              />
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white font-semibold">
              Login
            </Button>
          </form>

          <div className="mt-6 p-3 glass-sm border-blue-300/20 rounded-lg text-xs text-blue-100">
            <p className="font-semibold mb-2 gradient-text">Demo Credentials:</p>
            <p className="text-blue-200">Email: student@example.com (Student)</p>
            <p className="text-blue-200">Email: staff@example.com (Staff)</p>
            <p className="text-blue-200">Password: any password</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
