import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import style from "./Icons.module.css";
const Icons = () => {
  return (
    <div className={style.icon}>
      <InstagramIcon style={{ color: "#E3B748" }} />
      <FacebookIcon style={{ color: "#E3B748" }} />
      <TwitterIcon style={{ color: "#E3B748" }} />
      <PinterestIcon style={{ color: "#E3B748" }} />
    </div>
  );
};

export default Icons;
