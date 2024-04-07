import React from "react";
import UpdateCard from "./UpdateCard";

const cardDetails = {
  imageUrl: "src/assets/update/1.png",
  heading: "August 08",
  text: "A guide to finding the perfect ultimate Wi-Fi Plan for home",
  buttonText: "Read More",
};
const cardDetails1 = {
  imageUrl: "src/assets/update/2.png",
  heading: "September 20",
  text: "Grab the limited offer Wi-Fi plan for free of cost.....",
  buttonText: "Read More",
};
const cardDetails2 = {
  imageUrl: "src/assets/update/3.png",
  heading: "April 13",
  text: "A guide to choose the perfect safety Wi-Fi Plan .....",
  buttonText: "Read More",
};
const cardDetails3 = {
  imageUrl: "src/assets/update/4.png",
  heading: "January 01",
  text: "Elevate your gaming experience with the right Wi-Fi plans.......",
  buttonText: "Read More",
};

const Update = () => {
  return (
    <div className="mx-4 md:mx-10 mt-12 md:mt-24 mb-8">
      <div className="mb-8 justify-center">
        <h1 className="text-2xl md:text-3xl text-center font-semibold mb-4">
          What’s New Update is <br />
          Coming
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pl-4 md:pl-20">
        <div>
          <UpdateCard {...cardDetails} />
        </div>
        <div>
          <UpdateCard {...cardDetails1} />
        </div>
        <div>
          <UpdateCard {...cardDetails2} />
        </div>
        <div>
          <UpdateCard {...cardDetails3} />
        </div>
      </div>
    </div>
  );
};

export default Update;
