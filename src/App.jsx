import React from "react";
import Navbar from "./components/Navbar";
import LandingPag from "./components/LandingPag";
import Marque from "./components/Marque";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Try from "./components/Try";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=" w-full h-screen ">
      <Navbar />
      <LandingPag />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Try />
      <Footer />
    </div>
  );
}

export default App;
