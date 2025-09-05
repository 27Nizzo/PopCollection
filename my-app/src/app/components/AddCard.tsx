"use client";


export default function AddCard() {
    return(
        <div className="bg-white p-4 m-5 rounded shadow-2xl
                    transform transition duration-300 
                    hover:scale-105 hover:shadow-xl cursor-pointer items-center flex justify-center">
            <button className="text-5xl text-gray-400 font-bold select-none">+</button>
        </div>
    )
}