import React from "react";
import { Card } from "@mui/material";
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
        <Card className={style.box}>
          <div>
            <Avatar src={Danial} className={style.img} />
          </div>
          <div style={{ color: "black" }}>
            <Typography className={style.name}>Danial</Typography>
            <Typography className={style.case}>301 Cases</Typography>
          </div>
        </Card>
        <Card className={style.box} style={{ backgroundColor: "#E3B748" }}>
          <div>
            <Avatar src={Sanfole} className={style.img} />
          </div>
          <div>
            <Typography className={style.yello}>Sanfole</Typography>
            <Typography className={style.case}>850 Cases</Typography>
          </div>
        </Card>
        <Card className={style.box}>
          <div>
            <Avatar src={Cesforila} className={style.img} />
          </div>
          <div>
            <Typography className={style.name}>Cesforila</Typography>
            <Typography className={style.case}>470 Cases</Typography>
          </div>
        </Card>
      </Stack>
      <Stack direction="row" spacing={6} className={style.details}>
        <Card className={style.box}>
          <div>
            <Avatar src={Colleen} className={style.img} />
          </div>
          <div>
            <Typography className={style.name}>Colleen</Typography>
            <Typography className={style.case}>180 Cases</Typography>
          </div>
        </Card>
        <Card className={style.box}>
          <div>
            <Avatar src={Haldone} className={style.img} />
          </div>
          <div>
            <Typography className={style.name}>Haldone</Typography>
            <Typography className={style.case}>212 Cases</Typography>
          </div>
        </Card>
        <Card className={style.box}>
          <div>
            <Avatar src={NikJoe} className={style.img} />
          </div>
          <div>
            <Typography className={style.name}>NikJoe</Typography>
            <Typography className={style.case}>350 Cases</Typography>
          </div>
        </Card>
      </Stack>
    </div>
  );
};

export default OurTeam;
