import React from "react";
import "./App.css";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoSection from "./components/LogoSection";
import CheckNet from "./components/CheckNet";
import InternetPlans from "./components/InternetPlan";
import DiscoverSection from "./components/DiscoverNow";
import Update from "./components/Update";
import CustomerSupport from "./components/CustomerSupport";
import ClientReview from "./components/ClientReview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <div>
      <InfoSection />
      <Navbar />
      <HeroSection />
      <LogoSection />
      <CheckNet />
      <InternetPlans />
      <DiscoverSection />
      <div className="flex justify-center items-center mx-auto my-12">
        <img src="src/assets/banner.png" alt="" />
      </div>
      <Update />
      <CustomerSupport />
      <ClientReview />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
