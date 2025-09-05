"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import AddCard from "./components/AddCard"

export interface PopFigure {
  id: string
  name: string
  price: number
}

export default function Home() {
  const [popFigures, setPopFigures] = useState<PopFigure[]>([
    { id: "1", name: "Batman", price: 15.99 },
    { id: "2", name: "Spider-Man", price: 12.99 },
  ])

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

  return (
    <div className="bg-gray-700 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
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
