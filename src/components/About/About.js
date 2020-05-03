import React from "react";
import Fade from "react-reveal/Fade";
import "./About.scss";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

const About = () => {
  return (
    <div className="About">
      <p className="one">
        Hi there, thanks for visiting my website!😃
        <br />
      </p>
      <p className="two">
        My name is <span>Danny Hogan</span>, I'm a software developer focused on
        UX/UI and Front-End development. I love building applications with
        modern web technologies such as React, Node.js, Express, MongoDB,
        Socket.IO, and more.
      </p>
      <p className="three">
        I'm currently seeking my next opportunity as a Front-End software
        developer (open to remote opportunities)!
      </p>
      <p className="four">
        <Link to="/contact">
          Let's get in touch!
          <MdArrowForward />
        </Link>
      </p>
    </div>
  );
};

export default About;
