import React from "react";
import "./AboutMe.scss";
import me from "../../assets/me.png";

const AboutMe = () => {
  return (
    <section className="AboutMe">
      <div className="about-content">
        <div className="me">
          <img src={me} />
          <p>Danny Hogan - Full Stack Software Developer</p>
        </div>
        <p className="description-one">
          For as long as I can remember I've been fascinated by technology,
          computers, and the internet. It has been a natural evolution to take
          my passion for tech and turn it into a rewarding career.
        </p>
        <p className="description-one">
          I pride myself on being a tenacious full-stack developer, with a
          designers eye and love for writing clean, maintainable code. I love to
          work collaboratively on teams - Let's build something great!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
