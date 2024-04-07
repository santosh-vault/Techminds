import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const HeroSection = () => {
  return (
    <div
      className="flex justify-around items-center px-8 py-16"
      style={{ height: "600px", top: "150px", backgroundColor: "#020626" }}
    >
      <div className="max-w-[600px] text-white">
        <h1 className="text-2xl font-semibold mb-4">
          The Fastest <span className="text-yellow-400">Connection</span> <br />
          Service Provider
        </h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur. Scelerisque porttitor vivamus
          pulvinar tellus auctor. Eget id mauris laoreet eleifend. Eget nunc
          odio placerat ut in. Eu lorem massa sapien facilisis nulla morbi.
          Lacus sit amet viverra ante fringilla ipsum ullamcorper et. In lorem
          consequat fermentum.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            See Packages
          </button>
          <button className="flex text-white gap-2 px-4 py-2 rounded-full">
            <MdOutlineSlowMotionVideo className="text-2xl" /> Watch Intro
          </button>
        </div>
      </div>
      <div>
        <img
          src="src\assets\image.png"
          alt="Image"
          className="w-full max-w-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
