import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const HeroSection = () => {
  return (
    <div
      className="px-4 md:px-8 py-16 md:py-24"
      style={{ backgroundColor: "#020626" }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-white rounded-lg p-8 md:p-12">
        <div className="order-2 md:order-1 max-w-[600px] mb-8 md:mb-0 md:ml-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            The Fastest <span className="text-yellow-400">Connection</span>{" "}
            <br className="md:hidden" /> Service Provider
          </h1>
          <p className="mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Scelerisque porttitor
            vivamus pulvinar tellus auctor. Eget id mauris laoreet eleifend.
            Eget nunc odio placerat ut in. Eu lorem massa sapien facilisis nulla
            morbi. Lacus sit amet viverra ante fringilla ipsum ullamcorper et.
            In lorem consequat fermentum.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
              See Packages
            </button>
            <button className="flex items-center text-white gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700">
              <MdOutlineSlowMotionVideo className="text-2xl" /> Watch Intro
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 md:w-1/2">
          <img
            src="src\assets\image.png"
            alt="Image"
            className="w-full max-w-xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
