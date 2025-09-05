"use client";
import Account from "./Account";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-1 w-full text-white flex justify-between items-center">
      {/* Esquerda */}
      <h1 className="text-xl font-bold m-2 hover:cursor-pointer hover:border-2 hover:rounded hover:border-blue-500 px-2 py-1 transition">PopCollection</h1>
      <h1 className="text-xl font-bold m-2 hover:cursor-pointer hover:border-2 hover:rounded hover:border-blue-500 px-2 py-1 transition">
        Search 🔍
      </h1>
      {/* Direita */}
      <Account />
    </nav>
  );
}
