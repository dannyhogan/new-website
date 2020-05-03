import React from "react";
import "./Tech.scss";

const Tech = () => {
  const data = [
    {
      title: "Languages",
      list: ["JavaScript ES6+", "HTML5", "CSS", "Python"],
    },
    {
      title: "Front End",
      list: ["React", "Redux", "SCSS"],
    },

    {
      title: "Back End",
      list: [
        "Node.js",
        "Express",
        "MongoDB/Mongoose",
        "PostgreSQL",
        "Socket.IO",
        "Google Firebase",
      ],
    },

    {
      title: "Dev Tools",
      list: ["Git Version Control", "Heroku", "Netlify", "TravisCI"],
    },

    {
      title: "Dev Practices",
      list: ["Agile", "Pair Programming", "Test Driven Development"],
    },
  ];

  const TechListItems = ({ techData }) => {
    
    const listItems = techData.list.map((item, i) => {
      return (
        <li key={i}>
          <p>{item}</p>
        </li>
      );
    });

    return (
      <div className="tech-list">
        <h3>{techData.title}</h3>
        <ul>{listItems}</ul>
      </div>
    );
  };

  const TechStackList = data.map((item) => <TechListItems techData={item} />);

  return <section className="Tech">{TechStackList}</section>;
};

export default Tech;
