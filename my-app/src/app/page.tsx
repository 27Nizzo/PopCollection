"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import AddCard from "./components/AddCard"
import Account from "./components/Account"

export interface PopFigure {
  id: string
  name: string
  price: number
}

interface User {
  id: string
  name: string
  email: string
}

export default function Home() {
  const [popFigures, setPopFigures] = useState<PopFigure[]>([
    { id: "1", name: "Batman", price: 15.99 },
    { id: "2", name: "Spider-Man", price: 12.99 },
  ])

  const [user, setUser] = useState<User | null>(null)
  const [showAccount, setShowAccount] = useState(false)

  const addPopFigure = (name: string, price: number) => {
    const newFigure: PopFigure = {
      id: Date.now().toString(),
      name,
      price,
    }
    setPopFigures([...popFigures, newFigure])
  }

  const removePopFigure = (id: string) => {
    setPopFigures(popFigures.filter((figure) => figure.id !== id))
  }

  const handleLogin = (email: string, password: string) => {
    // Simulate login - in real app, this would call an API
    const mockUser: User = {
      id: "1",
      name: "Nizzo",
      email: email,
    }
    setUser(mockUser)
    setShowAccount(false)
  }

  const handleSignup = (name: string, email: string, password: string) => {
    // Simulate signup - in real app, this would call an API
    const newUser: User = {
      id: Date.now().toString(),
      name: name,
      email: email,
    }
    setUser(newUser)
    setShowAccount(false)
  }

  const handleLogout = () => {
    setUser(null)
    setShowAccount(false)
  }

  const handleProfileClick = () => {
    setShowAccount(!showAccount)
  }

  return (
    <div className="bg-gray-700 min-h-screen">
      <Navbar user={user} onProfileClick={handleProfileClick} />

      <div className="container mx-auto px-4 py-8">
        {showAccount && (
          <div className="mb-8">
            <Account user={user} onLogin={handleLogin} onSignup={handleSignup} onLogout={handleLogout} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AddCard onAddFigure={addPopFigure} />
          {popFigures.map((figure) => (
            <Card key={figure.id} figure={figure} onRemove={removePopFigure} />
          ))}
        </div>
      </div>
    </div>
  )
}
