import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import HomeHero from "../Components/Body/Home-Hero";
import HomeOurProject from "../Components/Body/Home-OurProject";
import HomeSocialMedia from "../Components/Body/Home-SocialMedia";
import HomeSection from "../Components/Body/Home-Section";
import "../index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="boxcontainer">
        <HomeHero.Main />
        <HomeHero.Second />
        <div className="hidden md:flex md:mt-10">
          <HomeOurProject />
        </div>
        <HomeSocialMedia />
        <HomeSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
