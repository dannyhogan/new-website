import React from "react";
import "./Landing.scss";
import Socials from "../Socials/Socials";
import { AiOutlineArrowDown } from "react-icons/ai";

const Landing = () => {
  return (
    <section className="Landing">
      <div className="mask">
        <div className="landing-content">
          <h1 className="name">DANNY HOGAN</h1>
          <h2>Full Stack Software Engineer</h2>
          <Socials />
        </div>
      </div>
      <div className="scroll-down">
        <p className="scroll-text">Learn More</p>
        <AiOutlineArrowDown />
      </div>
    </section>
  );
};

export default Landing;
