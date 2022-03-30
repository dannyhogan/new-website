import React from "react";
import "./App.scss";
import NavMenu from "./components/NavMenu/NavMenu";
import Content from "./components/Content/Content";


function App() {

  return (
    <div className="App">
      <NavMenu />
      <Content />
    </div>
  );
}

export default App;
