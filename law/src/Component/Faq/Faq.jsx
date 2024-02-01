import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import style from "./Faq.module.css";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const Faq = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.rapper}>
        <h1>FAQ</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit <br />
          aliqua dolor do amet sint
        </p>
      </div>
      <div className={style.accor}>
        <Accordion defaultExpanded>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            Do I need a personal injury report?
          </AccordionSummary>
          <AccordionDetails>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddCircleRoundedIcon style={{ color: "#E3B748" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            How much is my case worth?
          </AccordionSummary>
          <AccordionDetails>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </AccordionDetails>
        </Accordion>
        {/* <hr /> */}
        <Accordion>
          <AccordionSummary
            expandIcon={<AddCircleIcon style={{ color: "#E3B748" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What should I do right after car accidect
          </AccordionSummary>
          <AccordionDetails>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </AccordionDetails>
        </Accordion>
        {/* <hr /> */}
        <Accordion>
          <AccordionSummary
            expandIcon={<AddCircleIcon style={{ color: "#E3B748" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What should I do right after car accidect
          </AccordionSummary>
          <AccordionDetails>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
