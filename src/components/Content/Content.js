import React from "react";
import "./Content.scss";
import { Switch, Route } from "react-router-dom";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Tech from "../Tech/Tech";
import Resume from "../Resume/Resume";

const Content = ({ toggleNavbar }) => {
  return (
    <div className="Content">
      <Switch>
        <Route exact path="/" render={() => <Home toggleNavbar={toggleNavbar} />} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/tech" component={Tech} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
};

export default Content;
