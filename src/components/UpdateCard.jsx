import React from "react";

const UpdateCard = ({ imageUrl, heading, text, buttonText }) => {
  return (
    <div className="border rounded-lg shadow-md pb-4">
      <img
        src={imageUrl}
        alt="Card"
        className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover mb-4 rounded-t-xl"
      />
      <h2 className="text-lg md:text-xl lg:text-2xl text-blue-600 font-semibold mb-2 px-4">
        {heading}
      </h2>
      <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 px-4">
        {text}
      </p>
      <button className="bg-blue-500 text-white px-8 ml-2 py-1 rounded-full hover:bg-blue-600 transition duration-300 text-sm md:text-base lg:text-lg">
        {buttonText}
      </button>
    </div>
  );
};

export default UpdateCard;
