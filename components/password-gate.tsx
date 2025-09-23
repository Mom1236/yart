"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Lock } from "lucide-react"

interface PasswordGateProps {
  children: React.ReactNode
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const auth = localStorage.getItem("traplanta-auth")
    if (auth === "authenticated") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "Lockedin") {
      setIsAuthenticated(true)
      localStorage.setItem("traplanta-auth", "authenticated")
      setError("")
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/10 rounded-full mb-4">
                <Lock className="w-8 h-8 text-pink-500" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Traplanta</h1>
              <p className="text-neutral-400">Enter password to access the store</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-neutral-700/50 border-neutral-600 text-white placeholder:text-neutral-400 pr-12 h-12 text-lg"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {error && (
                <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white h-12 text-lg font-semibold transition-all duration-200 hover:scale-[1.02]"
              >
                Access Store
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-xs text-neutral-500">Authorized access only • Yart.Shop</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
