import Account from "./Account";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-white text-xl font-bold">PopCollection</h1>
          </div>
          <Account />
        </div>
      </div>
    </nav>
  )
}
