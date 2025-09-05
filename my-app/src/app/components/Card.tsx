"use client"

import type { PopFigure } from "../page"

interface CardProps {
  figure: PopFigure
  onRemove: (id: string) => void
}

export default function Card({ figure, onRemove }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md">
          {figure.name.charAt(0).toUpperCase()}
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{figure.name}</h3>
          <p className="text-2xl font-bold text-green-600">{figure.price.toFixed(2)}$</p>
        </div>

        <button
          onClick={() => onRemove(figure.id)}
          className="bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
        >
          Remover
        </button>
      </div>
    </div>
  )
}
