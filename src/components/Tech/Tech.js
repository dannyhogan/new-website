import React from "react";
import "./Tech.scss";
import Heroku from "../../assets/Tech/Heroku.png";
import HTML from "../../assets/Tech/HTML.png";
import JS from "../../assets/Tech/JS.png";
import CSS from "../../assets/Tech/CSS.png";
import Python from "../../assets/Tech/Python.png";
import ReactIMG from "../../assets/Tech/React.png";
import Redux from "../../assets/Tech/Redux.png";
import SCSS from "../../assets/Tech/SCSS.png";
import Node from "../../assets/Tech/Node.png";
import Express from "../../assets/Tech/Express.png";
import MongoDB from "../../assets/Tech/MongoDB.png";
import PostgreSQL from "../../assets/Tech/PostgreSQL.png";
import SocketIO from "../../assets/Tech/SocketIO.png";
import Firebase from "../../assets/Tech/Firebase.png";
import Git from "../../assets/Tech/Git.png";
import Netlify from "../../assets/Tech/Netlify.png";
import Travis from "../../assets/Tech/Travis.png";
import Photoshop from "../../assets/Tech/Photoshop.png";
import XD from "../../assets/Tech/XD.png";
import Figma from "../../assets/Tech/Figma.png";

const Tech = () => {
  const data = [
    {
      title: "Languages",
      class: "one",
      list: [
        { title: "JavaScript", img: JS },
        { title: "HTML5", img: HTML },
        { title: "CSS", img: CSS },
        { title: "Python", img: Python },
      ],
    },
    {
      title: "Front End",
      class: "two",
      list: [
        { title: "React", img: ReactIMG },
        { title: "Redux", img: Redux },
        { title: "SCSS", img: SCSS },
        { title: "Photoshop", img: Photoshop },
        { title: "Adobe XD", img: XD },
        { title: "Figma", img: Figma },
      ],
    },

    {
      title: "Back End",
      class: "three",
      list: [
        { title: "Node.js", img: Node },
        { title: "Express", img: Express },
        { title: "MongoDB", img: MongoDB },
        { title: "PostgreSQL", img: PostgreSQL },
        { title: "Google Firebase", img: Firebase },
        { title: "Socket.IO", img: SocketIO },
      ],
    },

    {
      title: "Dev Tools",
      class: "four",
      list: [
        {
          title: "Git",
          img: Git,
        },
        {
          title: "Heroku",
          img: Heroku,
        },
        {
          title: "Netlify",
          img: Netlify,
        },
        {
          title: "TravisCI",
          img: Travis,
        }
      ],
    },
  ];

  const TechListItems = ({ techData }) => {
    const listItems = techData.list.map((item, i) => {
      return (
        <li key={i}>
          <img className="tech-image" src={item.img} />
          <p>{item.title}</p>
        </li>
      );
    });

    return (
      <div className={`tech-list ${techData.class}`}>
        <h3>{techData.title}</h3>
        <ul>{listItems}</ul>
      </div>
    );
  };

  const TechStackList = data.map((item) => <TechListItems techData={item} />);

  return (
    <section className="Tech">
      <h1 className="tech-header">Technologies I Love</h1>
      <ul className="tech-lists">{TechStackList}</ul>
    </section>
  );
};

export default Tech;
