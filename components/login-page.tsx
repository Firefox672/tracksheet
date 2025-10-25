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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-800 border-slate-700">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle className="text-2xl text-white">TRACKSHEET</CardTitle>
              <CardDescription className="text-slate-400">Student Performance Tracking</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2 mb-6">
              <Button
                type="button"
                variant={isStudent ? "default" : "outline"}
                className="flex-1"
                onClick={() => setIsStudent(true)}
              >
                Student
              </Button>
              <Button
                type="button"
                variant={!isStudent ? "default" : "outline"}
                className="flex-1"
                onClick={() => setIsStudent(false)}
              >
                Staff
              </Button>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-200">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-200">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Login
            </Button>
          </form>

          <div className="mt-6 p-3 bg-slate-700 rounded-lg text-xs text-slate-300">
            <p className="font-semibold mb-2">Demo Credentials:</p>
            <p>Email: student@example.com (Student)</p>
            <p>Email: staff@example.com (Staff)</p>
            <p>Password: any password</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
