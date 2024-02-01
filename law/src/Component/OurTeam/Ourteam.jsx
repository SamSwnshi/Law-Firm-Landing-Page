import React from "react";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import style from "./Ourteam.module.css";
import Danial from "../../Assests/team1.png";
import Sanfole from "../../Assests/member2.png";
import Cesforila from "../../Assests/member3.png";
import Colleen from "../../Assests/member4.png";
import Haldone from "../../Assests/member5.png";
import NikJoe from "../../Assests/member6.png";
import Stack from "@mui/material/Stack";

const OurTeam = () => {
  return (
    <div className={style.wrapper}>
      <h4 className={style.heading}>Our Team</h4>

      <Stack direction="row" spacing={6} className={style.details}>
        <div className={style.box}>
          <img src={Danial} alt="Danial" className={style.img} />
          <div className={style.edit}>
            <Typography className={style.name}>Danial</Typography>
            <Typography className={style.case}>301 Cases</Typography>
          </div>
        </div>
        <div
          className={style.box}
          style={{ backgroundColor: "#E3B748", borderRadius: "14px" }}
        >
          <img src={Sanfole} alt="Sanfole" className={style.img} />

          <div className={style.edit}>
            <Typography className={style.yello}>Sanfole</Typography>
            <Typography className={style.case}>850 Cases</Typography>
          </div>
        </div>
        <div className={style.box}>
          <img src={Cesforila} alt="Cesforila" className={style.img} />

          <div className={style.edit}>
            <Typography className={style.name}>Cesforila</Typography>
            <Typography className={style.case}>470 Cases</Typography>
          </div>
        </div>
      </Stack>
      <Stack direction="row" spacing={6} className={style.details}>
        <div className={style.box}>
          <img src={Colleen} alt="Colleen" className={style.img} />

          <div className={style.edit}>
            <Typography className={style.name}>Colleen</Typography>
            <Typography className={style.case}>180 Cases</Typography>
          </div>
        </div>
        <div className={style.box}>
          <img src={Haldone} alt="Haldone" className={style.img} />

          <div className={style.edit}>
            <Typography className={style.name}>Haldone</Typography>
            <Typography className={style.case}>212 Cases</Typography>
          </div>
        </div>
        <div className={style.box}>
          <img src={NikJoe} alt="NikJoe" className={style.img} />

          <div className={style.edit}>
            <Typography className={style.name}>NikJoe</Typography>
            <Typography className={style.case}>350 Cases</Typography>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default OurTeam;
