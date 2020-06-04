import React from "react";
import "./Content.scss";
import { Switch, Route } from "react-router-dom";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Tech from "../Tech/Tech";

const Content = () => {
  return (
    <div className="Content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/tech" component={Tech} />
      </Switch>
    </div>
  );
};

export default Content;
