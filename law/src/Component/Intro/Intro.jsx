import React from "react";
import line from "../../Assests/Line.png";
import Styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.intro}>
        <h2>Let's Introduce</h2>
        <h2>Ourself</h2>
      </div>

      <img src={line} alt="Me" />

      <div className={Styles.rapper}>
        <h2>Criminal Lawyer</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Intro;
