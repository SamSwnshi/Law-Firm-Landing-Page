import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import style from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.rapper}>
        <Typography variant="h3" className={style.heading}>
          Subscribe Our Newsletter
        </Typography>
        <div className={style.inputTag}>
          <TextField label="Name:" className={style.name} />
          <TextField label="Enter your Email" className={style.email} />
          <button className={style.btns}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
