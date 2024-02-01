import React from "react";
import Typography from "@mui/material/Typography";

import Cards from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import style from "./Clients.module.css";
import Avatar from "@mui/material/Avatar";
import client1 from "../../Assests/client1.png";
import client2 from "../../Assests/client2.png";
import client3 from "../../Assests/client3.png";

const Clients = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.heading}>
        <h1>What says our</h1>
        <h1> happy Clients</h1>
      </div>

      <div className={style.rapper}>
        <Cards
          style={{ backgroundColor: "transparent" }}
          className={style.square}
        >
          <img src={client1} alt="Jane Cooper" className={style.img} />

          <CardContent className={style.content}>
            <Typography variant="h5" className={style.name}>
              Jane Cooper
            </Typography>
            <Typography variant="h7" component="div" className={style.company}>
              Ceo of Hunt
            </Typography>
            <Typography className={style.paragraph}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </CardContent>
        </Cards>
        <Cards
          sx={{ maxWidth: 345 }}
          style={{ backgroundColor: "#2E2E2E" }}
          className={style.square}
        >
          <img src={client3} alt="Jane Cooper" className={style.img} />

          <CardContent>
            <Typography variant="h5" className={style.name}>
              Devon Lane
            </Typography>
            <Typography variant="h7" component="div" className={style.company}>
              Ceo of Hunt
            </Typography>
            <Typography className={style.paragraph}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </CardContent>
        </Cards>
        <Cards
          sx={{ maxWidth: 345 }}
          style={{ backgroundColor: "transparent" }}
          className={style.square}
        >
          <img src={client2} alt="Robert Fox" className={style.img} />
          <CardContent>
            <Typography variant="h5" className={style.name}>
              Robert Fox
            </Typography>
            <Typography variant="h7" component="div" className={style.company}>
              Ceo of Hunt
            </Typography>
            <Typography className={style.paragraph}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </CardContent>
        </Cards>
      </div>
    </div>
  );
};

export default Clients;
