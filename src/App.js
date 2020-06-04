import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import NavMenu from "./components/NavMenu/NavMenu";
import Content from "./components/Content/Content";
import { useHistory } from "react-router-dom";
import Particles from "react-particles-js";

function App() {

  return (
    <div className="App">
      <NavMenu />
      <Content />
    </div>
  );
}

export default App;
