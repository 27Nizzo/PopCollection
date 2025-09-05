"use client"

interface NavbarProps {
  user: any
  onProfileClick: () => void
}

export default function Navbar({ user, onProfileClick }: NavbarProps) {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-white text-xl font-bold">My Pop Collection</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onProfileClick}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
            >
              <span className="text-xl">👤</span>
              <span className="text-sm font-medium">{user ? user.name : "Login"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
