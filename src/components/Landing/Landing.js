import React from "react";
import "./Landing.scss";
import Socials from "../Socials/Socials";
import { AiOutlineArrowDown } from "react-icons/ai";
import me from "../../assets/me.jpg";

const Landing = () => {
  return (
    <section className="Landing">


    <div class="container">
        <div class="inner-container">
            <div class="shape">
                <div class="title">
                    <h1>Atomic floating shapes.</h1> 
                    <a class="button" href="#">Freeze shapes</a>
              </div>
            </div>
        </div>
    </div>

      
      <div className="content">
        <p className="greeting">Hi, my name is <span>&nbsp;</span></p>
        <h1 className="name">Danny Hogan.</h1>
        <h1 className="tagline">UI/UX Focused Web Developer.</h1>

        <div className="description-container">
          <div className="photo">
            <img src={me} />
            <div className="border"></div>
          </div>
          <p className="description">
            I'm a software engineer specializing in building (and occasionally
            designing) <i>exceptional</i> digital experiences.
            <br />
            <br /> Currently, I'm on the lookout for my next role that will
            allow me to think creatively, learn new skills, and work with a
            group of awesome developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
