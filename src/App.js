import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import { useHistory } from "react-router-dom";
import Particles from "react-particles-js";

function App() {
  const history = useHistory();

  useEffect(() => {
    history.push("/about");
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Content />
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default App;
