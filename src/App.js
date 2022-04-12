import React, { useState } from "react";
import "./App.scss";
import NavMenu from "./components/NavMenu/NavMenu";
import Content from "./components/Content/Content";


function App() {

  const [hideNavbar, toggleNavbar] = useState(false);

  console.log('hide nav bar??', hideNavbar)

  return (
    <div className="App">
      <NavMenu hideNavbar={hideNavbar} />
      <Content toggleNavbar={toggleNavbar} />
    </div>
  );
}

export default App;
