import React from "react";
import style from "./Card.module.css";
import Cards from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Gift from "../../Assests/gift.png";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
const Card = () => {
  return (
    <div className={style.wrapper}>
      <h1>Why Choose us?</h1>

      <div className={style.rapper}>
        <div className={style.box}>
          <img src={Gift} alt="" />
          <h3 variant="h5" component="div" className={style.heading}>
            98% Success Rate
          </h3>
          <p className={style.paragraph}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={style.btns}>Read More</button>
        </div>
        <div className={style.box} style={{ backgroundColor: "#2E2E2E" }}>
          <img src={Gift} alt="" />
          <h3 variant="h5" component="div" className={style.heading}>
            100% Success Rate
          </h3>
          <p className={style.paragraph}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={style.btns}>Read More</button>
        </div>
        <div className={style.box}>
          <img src={Gift} alt="" />
          <h3 variant="h5" component="div" className={style.heading}>
            100% Success Rate
          </h3>
          <p className={style.paragraph}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={style.btns}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
