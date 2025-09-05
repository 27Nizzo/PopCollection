"use client";
import { useState } from "react";
import Navbar from "../app/components/Navbar";
import Card from "../app/components/Card";
import AddCard from "../app/components/AddCard";
export default function Home() {

  return (
    <div className="bg-gray-700 min-h-screen">
      <div className="font-sans grid items-center w-full gap-20">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card />
        <AddCard/>
      </div>
    </div>
  );
}
