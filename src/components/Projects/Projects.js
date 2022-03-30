import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./Projects.scss";
import projects from "./projectData";

const Projects = () => {
  const [className, setClassName] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    if(projects[activeIndex + 1]) {
      setClassName("next");
      setActiveIndex((index) => index + 1);
    }
  };

  const prevProject = () => {
    if(activeIndex !== 0 && projects[activeIndex - 1]) {
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
            <img className="active-project-image" src={project.image} alt="Project" />
          </div>

          <div className="active-project-content">
            <p className="project-description">{project.description}</p>

            <div className="active-project-tech">
              <ul className="project-tech-list">{techItems}</ul>
            </div>

            <div className="active-project-buttons">
              <a target="_blank" rel="noopener noreferrer" href={project.deployed}>
                <button>
                  Deployed on
                  <span>{project.deployedOn}</span>
                </button>
              </a>
              <a target="_blank" rel="noopener noreferrer" href={project.github}>
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
        <Button
          variant="outlined"
          className={!isPrevProject && "disabled"}
          onClick={prevProject}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          className={!isNextProject && "disabled"}
          onClick={nextProject}
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default Projects;
