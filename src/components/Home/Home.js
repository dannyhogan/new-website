import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Landing from "../Landing/Landing";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Landing />
      <AboutMe />
    </div>
  );
};

export default Home;
