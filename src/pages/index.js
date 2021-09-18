import React, { useState } from "react";
import Burger from "../components/Burger/Burger";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/Hero";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/infoSection/Data";
import InfoSection from "../components/infoSection/Info";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Burger isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services {...Services} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
