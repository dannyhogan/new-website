import React, { useState } from "react";
import "./Experience.scss";
import experience from "./data";
import { AwesomeButton } from "react-awesome-button";

const Experience = () => {
  const [className, setClassName] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const ExperienceItem = ({ item }) => {
    return (
      <div className={`active-project ${className}`}>
        <h1>{item.company}</h1>
      </div>
    );
  };

  const experienceButtons = experience.map((item, i) => {
    return (
      <button key={i} onClick={() => setActiveIndex(i)}>
        {item.company}
      </button>
    );
  });

  return (
    <section className="Experience">

      <div className="container">

      <div className="header">
        <h3>
          <span>02. </span>Professional Experience
        </h3>
        <hr></hr>
      </div>
      </div>


      <div className="buttons">{experienceButtons}</div>
      <ExperienceItem item={experience[activeIndex]} />
    </section>
  );
};

export default Experience;
