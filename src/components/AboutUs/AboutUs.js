import React from "react";
import "./AboutUs.css";
import Menubar from "../Menubar/Menubar";
import "./AboutUs.css";
import Footer from "../Footer/Footer";
import About from "../About/About";

// about us section
const AboutUs = () => {
  return (
    <div>
      <Menubar></Menubar>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
