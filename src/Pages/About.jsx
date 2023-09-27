import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import AboutMain from "../Components/Body/About-Main";
import "../index.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="boxcontainer border-none pt-20">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[98%] md:w-4/5 lg:w-[80%] lg:-ml-16 px-5 pt-5 pb-0 flex flex-col-reverse md:flex-col lg:flex-row ">
            <AboutMain.Head />
            <AboutMain.img />
          </div>
          <div className="w-[98%] lg:w-[80%] lg:-ml-16 px-5 pt-5 pb-0 flex  flex-col-reverse lg:flex-col lg:gap-5 ">
            <AboutMain.foot />
            <AboutMain.card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
