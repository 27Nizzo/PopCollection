"use client"

import type React from "react"

import { useState } from "react"

interface AddCardProps {
  onAddFigure: (name: string, price: number) => void
}

export default function AddCard({ onAddFigure }: AddCardProps) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (name.trim() && price.trim()) {
      const priceNumber = Number.parseFloat(price)
      if (!isNaN(priceNumber) && priceNumber > 0) {
        onAddFigure(name.trim(), priceNumber)
        setName("")
        setPrice("")
        setIsFormVisible(false)
      }
    }
  }

  if (!isFormVisible) {
    return (
      <div
        onClick={() => setIsFormVisible(true)}
        className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer min-h-[280px] flex flex-col items-center justify-center"
      >
        <div className="text-6xl text-gray-400 mb-4">+</div>
        <p className="text-black text-center font-medium">
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">New PopFigure</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Batman, Spider-Man..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
            step="0.01"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex space-x-2 pt-2">
          <button
            type="submit"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors font-medium"
          >
            Adicionar
          </button>
          <button
            type="button"
            onClick={() => {
              setIsFormVisible(false)
              setName("")
              setPrice("")
            }}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors font-medium"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}
