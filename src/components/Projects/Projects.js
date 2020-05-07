import React, { useState } from "react";
import "./Projects.scss";
import projects from "./projectData";

const Projects = () => {
  const [className, setClassName] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    if (projects[activeIndex + 1]) {
      setClassName("next");
      setActiveIndex((index) => index + 1);
    }
  };

  const prevProject = () => {
    if (activeIndex !== 0 && projects[activeIndex - 1]) {
      setClassName("prev");
      setActiveIndex((index) => index - 1);
    }
  };

  const isPrevProject = !!projects[activeIndex - 1];
  const isNextProject = !!projects[activeIndex + 1];

  const ActiveProject = ({ project }) => (
    <div className={`active-project ${className}`}>
      <div className="project-title">
        <h1>{project.title}</h1>
        <img className="active-project-image" src={project.image} />
      </div>
      <div className="active-project-content">
        <p>{project.description}</p>
        <div className="active-project-buttons">
          <a target="_blank" href={project.deployed}>
            <button>
              Deployed Site
              <span>{project.deployedOn}</span>
            </button>
          </a>
          <a target="_blank" href={project.github}>
            <button>
              Source Code
              <span>GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="Projects">
      <ActiveProject project={projects[activeIndex]} />
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
