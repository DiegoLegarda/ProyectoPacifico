import React from "react"
import { Link } from "react-router-dom"; 

function Card ({ title, imageUrl, link }) {
  return (
    <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
        <div className="flex justify-center">
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover object-center"
        src={imageUrl}
        alt={title}
      />      
          <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300" to={link}>Ver más</Link>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
