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
        <Cards style={{ backgroundColor: "transparent" }} className={style.box}>
          <img src={Gift} alt="" />
          <CardContent>
            <Typography variant="h5" component="div" className={style.heading}>
              98% Success Rate
            </Typography>
            <Typography className={style.paragraph}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </CardContent>
          <CardActions>
            <button className={style.btns}>Read More</button>
          </CardActions>
        </Cards>
        <Cards className={style.box} style={{ backgroundColor: "#2E2E2E" }}>
          <img src={Gift} alt="" />
          <CardContent>
            <Typography variant="h5" component="div" className={style.heading}>
              100% Success Rate
            </Typography>
            <Typography className={style.paragraph}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </CardContent>
          <CardActions>
            <button className={style.btns}>Read More</button>
          </CardActions>
        </Cards>
        <Cards className={style.box} style={{ backgroundColor: "transparent" }}>
          <img src={Gift} alt="" />
          <CardContent>
            <Typography variant="h5" component="div" className={style.heading}>
              100% Success Rate
            </Typography>
            <Typography className={style.paragraph}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </CardContent>
          <CardActions>
            <button className={style.btns}>Read More</button>
          </CardActions>
        </Cards>
      </div>
    </div>
  );
};

export default Card;
