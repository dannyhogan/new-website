import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import "./Header.scss";
import Particles from "react-particles-js";

const Header = () => {
  return (
    <header className="Header">
      <div className="header-content">
        <Typist
          cursor={{
            show: true,
            blink: true,
            element: "|",
            hideWhenDone: false,
            hideWhenDoneDelay: 1000,
          }}
        >
          <h1>Danny Hogan</h1>
          <br />
          <h2>Full-Stack JavaScript Developer </h2>
        </Typist>
      </div>
    </header>
  );
};

export default Header;
