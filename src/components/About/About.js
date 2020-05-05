import React from "react";
import Fade from "react-reveal/Fade";
import "./About.scss";
import { Link } from "react-router-dom";
import { MdArrowForward, MdPictureAsPdf } from "react-icons/md";

const About = () => {
  return (
    <div className="About">
      <p className="one">
        Hi there, thanks for visiting my website!😃
        <br />
      </p>
      <p className="two">
        My name is <span>Danny Hogan</span>, I'm a software developer focused on
        UX/UI and Front-End development. I love building applications
        with modern web technologies such as React, Node.js, Express, MongoDB,
        Socket.IO, etc.
      </p>
      <p className="three">
        I'm currently seeking my next opportunity as a Front-End software
        developer. Open to remote opportunities and relocation!
      </p>
      <div className="links">
        <p className="four">
          <a href="">
            View Resume
            <MdPictureAsPdf />
          </a>
        </p>
        <p className="five">
          <Link to="/contact">
            Let's get in touch!
            <MdArrowForward />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default About;
