import React from "react";
import "./AboutMe.scss";
import me from "../../assets/me.png";
import { FaLinkedin } from 'react-icons/fa';



const AboutMe = () => {
  return (
    <section className="AboutMe">
      <div className="about-content">
        <div className="me">
          <img src={me} alt="Self portrait" />
          <p className="name">Danny Hogan</p>
          <p className="title">Full-Stack Software Engineer</p>
          <a href="https://www.linkedin.com/in/danny-hogan/" target="_blank">
            Seeking opportunities!
            <FaLinkedin style={{ padding: 0, margin: '0px 5px', transform: 'translateY(2px)' }}/>
          </a>
        </div>
        <hr />
        <p className="description-one">
          Tenacious Senior Software Engineer with experience in the fintech and medtech sectors.
        </p>

        <p className="description-one">
          Recognized for designing and developing intuitive investor dashboards and automating client systems.
          Accomplished in writing scalable, well-documented, clean code.
        </p>
        <p className="description-one">
          Creative, solutution oriented team-player with strong debugging and problem solving skills.
        </p>
      </div>
    </section >
  );
};

export default AboutMe;
