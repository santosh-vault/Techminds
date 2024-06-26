import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const DiscoverSection = () => {
  return (
    <div
      className="relative h-[500px] md:h-[600px] flex justify-center items-center bg-cover bg-center py-16"
      style={{ backgroundImage: `url('src/assets/discover.png')` }}
    >
      <div className="absolute right-0 bg-gray-900 bg-opacity-50 p-8 mr-8 md:mr-16 rounded-xl max-w-md md:max-w-[604px]">
        <MdOutlineSlowMotionVideo className="text-6xl text-white mt-2" />
        <h2 className="text-3xl md:text-4xl text-white font-medium mb-4">
          Get Connected with Us and <br /> Stay Connected!
        </h2>
        <p className="text-gray-100 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default DiscoverSection;
