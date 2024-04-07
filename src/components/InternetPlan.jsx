import React from "react";
import InternetCard from "./InternetCard";

const basicPlanData = {
  imageUrl: "src/assets/net/1.png",
  packageName: "Starter Pack",
  speed: "75",
  features: [
    "100 Mbps Unlimited Bandwidth",
    "Free Installation and Router",
    "Connect multiple users",
    "WiFi router & prevention",
  ],
  price: "11,000 RS",
  vat: " 13% ",
  buttonText: "Subscribe Now",
};

const standardPlanData = {
  imageUrl: "src/assets/net/2.png",
  packageName: "Popular Plan",
  speed: "100",
  features: [
    "100 Mbps Unlimited Bandwidth",
    "Free Installation and Router",
    "Connect multiple users",
    "WiFi router & prevention",
  ],
  price: "10000",
  vat: "13",
  buttonText: "Subscribe Now",
};

const premiumPlanData = {
  imageUrl: "src/assets/net/3.png",
  packageName: "Best Plan",
  speed: "150",
  features: [
    "100 Mbps Unlimited Bandwidth",
    "Free Installation and Router",
    "Connect multiple users",
    "WiFi router & prevention",
  ],
  price: "12000",
  vat: "13",
  buttonText: "Subscribe Now",
};

const InternetPlans = () => {
  return (
    <div className="my-8">
      <h1 className="text-3xl text-center font-semibold mb-12">
        Discover Our Best <br />
        Plans
      </h1>
      <div className=" px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2  justify-around">
        <InternetCard {...basicPlanData} />
        <InternetCard {...standardPlanData} />
        <InternetCard {...premiumPlanData} />
      </div>
    </div>
  );
};

export default InternetPlans;
