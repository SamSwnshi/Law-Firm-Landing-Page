import React from "react";
import Logo from "../Logo/Logo";
import HeroSection from "../HeroSection/HeroSection";
import Icons from "../Icons/Icons";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.rapper}>
        <Logo />
        <HeroSection />
        <Icons />
      </div>
      <div className={style.zero}>
        <p>© 2020 Acme. All right reserved</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
