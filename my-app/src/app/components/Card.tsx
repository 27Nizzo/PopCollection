"use client";


export default function Card() {
    return(
        <div className="bg-white p-4 m-5 rounded shadow-2xl
                    transform transition duration-300 
                    hover:scale-105 hover:shadow-xl cursor-pointer">
            <h2 className="text-lg font-bold mb-2 flex justify-center items-center text-black">Pop Name</h2>
            <p className="text-gray-700"></p>
            <div className="bg-gray-200 p-5 m-5 rounded shadow h-50 flex justify-center items-center">
                <img src="https://via.placeholder.com/150" alt="Pop Image" className="max-h-40"/>
            </div>
            <p className="text-gray-700">Pop Description/Price/Type</p>
        </div>
    )
}