import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import HeroSection from "../HeroSection/HeroSection";
import Button from "../Button/Button";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <HeroSection />
      <Button />
    </nav>
  );
}

export default Navbar;
