import React from "react";
import Card from "./Card";

const LogoSection = () => {
  return (
    <div className=" px-12 py-16 xl:px-24">
      <h2 className="text-2xl text-center font-bold mb-8">
        We are trusted by 100+ businesses
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="flex justify-center items-center flex-wrap gap-4">
          <img src="src\assets\Frame 31.png" alt="Logo 1" className="h-16" />
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 mt-2">
          <img src="src\assets\Frame 32.png" alt="Logo 5" className="h-24" />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl text-center font-bold mb-4">
            We Are Internet Service <br /> Provider Company
          </h2>
          <div className="flex justify-center items-center gap-4">
            <Card
              title="Broadband Connection"
              description="Lorem ipsum dolor sit amet consectetur. Viverra convallis donec ac egestas egestas bibendum proin. Cursus id gravida proin felis et est nunc."
              imageUrl="src\assets\clipart382231 1.png"
            />
            <Card
              title="Office Internet"
              description="Lorem ipsum dolor sit amet consectetur. Viverra convallis donec ac egestas egestas bibendum proin. Cursus id gravida proin felis et est nunc."
              imageUrl="src\assets\router 1 (1).png"
            />
            <Card
              title="Business Pack"
              description="Lorem ipsum dolor sit amet consectetur. Viverra convallis donec ac egestas egestas bibendum proin. Cursus id gravida proin felis et est nunc."
              imageUrl="src\assets\router 1.png"
            />
            <Card
              title="TV & Streaming"
              description="Lorem ipsum dolor sit amet consectetur. Viverra convallis donec ac egestas egestas bibendum proin. Cursus id gravida proin felis et est nunc."
              imageUrl="src\assets\router 1 (2).png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
