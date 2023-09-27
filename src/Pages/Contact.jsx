import React from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import ContactAddress from "../Components/Body/Contact-Detail";
import ContactForm from "../Components/Body/Contact-Form";
import "../index.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="boxcontainer">
        <div className="flex justify-center items-center mb-5 pt-20 ">
          <div className="flex flex-col gap-5 lg:flex-row w-[98%] lg:w-[80%] lg:-ml-16 px-5 pt-5 min-h-[120vh] ">
            <ContactAddress />
            <div className="w-full sm:w-2/3 lg:w-1/2  m-5 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
