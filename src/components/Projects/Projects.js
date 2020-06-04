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

  const ActiveProject = ({ project }) => {
    const techItems = project.tech.map((item, i) => (
      <li className="project-tech-item" key={i}>
        {item}
      </li>
    ));

    return (
      <div className={`active-project ${className}`}>
        <h1 className="project-title">{project.title}</h1>

        <div className="project-container">

          <div className="project-image">
            <img className="active-project-image" src={project.image} />
          </div>

          <div className="active-project-content">

            <p className="project-description">{project.description}</p>

            <div className="active-project-tech">
              <ul className="project-tech-list">{techItems}</ul>
            </div>

            <div className="active-project-buttons">
              <a target="_blank" href={project.deployed}>
                <button>
                  Deployed on
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
      </div>
    );
  };

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
