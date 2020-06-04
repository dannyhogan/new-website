import React from "react";
import Socials from "../Socials/Socials";
import "./Landing.scss";
import { AiOutlineArrowDown } from "react-icons/ai";

const Landing = () => {
  return (
    <section className="Landing">
      <h1 className="name">DANNY HOGAN</h1>
      <div className="mask">
        <div className="landing-content">
          <hr className="hr2" />
          <h2>FULL-STACK JAVASCRIPT DEVELOPER</h2>
          <hr className="hr1" />
          <Socials />
        </div>
      </div>
      <div className="scroll-down">
        <p className="scroll-text">LEARN MORE</p>
        <AiOutlineArrowDown />
      </div>
    </section>
  );
};

export default Landing;
