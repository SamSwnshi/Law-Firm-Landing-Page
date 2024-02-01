import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroDiv from "../HeroDiv/HeroDiv";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
      <HeroDiv />
    </div>
  );
};

export default Hero;
