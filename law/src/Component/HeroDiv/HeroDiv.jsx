import React from "react";
import styles from "./HeroDiv.module.css";
import Image from "../../Assests/Man.png";
import EmailIcon from "@mui/icons-material/Email";

const HeroDiv = () => {
  return (
    <div class={styles.wrapper}>
      <div className={styles.heading}>
        <h1>You don't have to</h1>
        <h1>Fight them Alone,</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <form action="" className={styles.forms}>
          {/* <EmailIcon className={styles.icon} /> */}
          <input
            type="text"
            placeholder="Enter your email address"
            clasName={styles.enter}
            required
          />

          <button className={styles.btns}>Let's Talk</button>
        </form>
      </div>
      <div>
        <img src={Image} alt="img" />
      </div>
    </div>
  );
};

export default HeroDiv;
