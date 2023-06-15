import React from "react";
import "./Content.scss";
import { Switch, Route } from "react-router-dom";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Tech from "../Tech/Tech";
import Resume from "../Resume/Resume";

const Content = ({ toggleNavbar }) => {
  return (
    <div className="Content">
      <Switch>
        <Route exact path="/" render={() => <Home toggleNavbar={toggleNavbar} />} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
        <Route path="/tech" component={Tech} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
};

export default Content;
