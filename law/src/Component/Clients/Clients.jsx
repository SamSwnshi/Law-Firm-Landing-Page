import React from "react";
import style from "./Clients.module.css";

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
        <div className={style.square}>
          <div>
            <img src={client1} alt="Jane Cooper" className={style.img} />
          </div>
          <div className={style.name}>
            <h4>Jane Cooper</h4>
          </div>
          <div className={style.company}>
            <h5> Ceo of Hunt</h5>
          </div>

          <p className={style.paragraph}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>

        <div className={style.newSqur}>
          <div>
            <img src={client3} alt="Jane Cooper" className={style.img} />
          </div>
          <div className={style.name}>
            <h4>Devon Lane</h4>
          </div>
          <div className={style.company}>
            <h5> Ceo of Hunt</h5>
          </div>

          <p className={style.paragraph}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>

        <div className={style.square}>
          <div>
            <img src={client2} alt="Jane Cooper" className={style.img} />
          </div>
          <div className={style.name}>
            <h4>Robert Fox</h4>
          </div>
          <div className={style.company}>
            <h5> Ceo of Hunt</h5>
          </div>

          <p className={style.paragraph}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
