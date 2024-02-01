import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Attorneys</a>
      </li>
      <li>
        <a href="/">Practice Areas</a>
      </li>
      <li>
        <a href="/">About Us</a>
      </li>
    </div>
  );
};

export default HeroSection;
