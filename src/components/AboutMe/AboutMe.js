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
          <p className="title">Software Engineer</p>
          <a href="https://www.linkedin.com/in/danny-hogan/" target="_blank">
            Looking for opportunities!
            <FaLinkedin style={{ padding: 0, margin: '0px 5px', transform: 'translateY(2px)' }}/>
          </a>
        </div>
        <hr />
        <p className="description-one">
          I'm a full-stack JavaScript developer focused on team collaboration and continuous learning.
        </p>

        <p className="description-one">
          I pride myself on being a tenacious developer, with a
          graphic designers eye and love for writing clean, maintainable code.
        </p>
        <p className="description-one">
          If I'm not coding or learning something new, I enjoy traveling, hiking, snowboarding,
          playing basketball, and spending time with family and friends.
        </p>
      </div>
    </section >
  );
};

export default AboutMe;
