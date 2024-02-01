import React from "react";
import style from "./Practices.module.css";
import img1 from "../../Assests/1.png";
import img2 from "../../Assests/2.png";
import img3 from "../../Assests/3.png";
import img4 from "../../Assests/4.png";
import img5 from "../../Assests/5.png";
import img6 from "../../Assests/6.png";

const Practices = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.header}>
          <h1>Area of Practices</h1>
        </div>
        <div className={style.row}>
          <div className={style.rectangle}>
            <img src={img1} alt="BUSINESS LAW" />
            <div className={style.overlay}>BUSINESS LAW</div>
          </div>
          <div className={style.square}>
            <img src={img2} alt="Partnership LAW" />
            <div className={style.overlays}>Partnership LAW</div>
          </div>
        </div>

        <div className={style.row}>
          <div className={style.square}>
            <img src={img3} alt="REAL ESTATE LAW" />
            <div className={style.overlays}>REAL ESTATE LAW</div>
          </div>
          <div className={style.rectangle}>
            <img src={img4} alt="BUSINESS LAW" />
            <div className={style.overlay}>BUSINESS LAW</div>
          </div>
        </div>

        <div className={style.row}>
          <div className={style.rectangle}>
            <img src={img5} alt="LANDLORD DISPUTES" />
            <div className={style.overlay}>LANDLORD DISPUTES</div>
          </div>
          <div className={style.square}>
            <img src={img6} alt="ELDER ABUSE" />
            <div className={style.overlays}>ELDER ABUSE</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practices;
