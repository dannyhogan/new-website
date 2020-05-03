import React, { useState } from "react";
import "./Projects.scss";
import projects from "./projectData";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    if (projects[activeIndex + 1]) {
      setActiveIndex((index) => index + 1);
    }
  };

  const prevProject = () => {
    if (activeIndex !== 0 && projects[activeIndex - 1]) {
      setActiveIndex((index) => index - 1);
    }
  };

  const isPrevProject = !!projects[activeIndex - 1];
  const isNextProject = !!projects[activeIndex + 1];

  return (
    <section className="Projects">
      <div className="active-project">
        <div className="project-title">
          <h1>{projects[activeIndex].title}</h1>
          <img
            className="active-project-image"
            src={projects[activeIndex].image}
          />
        </div>
        <div className="active-project-content">
          <p>{projects[activeIndex].description}</p>
          <div className="active-project-buttons">
            <button>Deployed</button>
            <button>GitHub</button>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className={!isPrevProject && "disabled"} onClick={prevProject}>
          Previous Project
        </button>
        <button className={!isNextProject && "disabled"} onClick={nextProject}>
          Next Project
        </button>
      </div>
    </section>
  );
};

export default Projects;
