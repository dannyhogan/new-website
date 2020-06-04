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
          Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah
          Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah
          Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah
          Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah

        </p>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
          <li>List Item 4</li>
          <li>List Item 5</li>
        </ul>
        <p className="description-one">
          Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah
          Blah blah Blah blah Blah blah Blah blah Blah blah Blah blah Blah
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
