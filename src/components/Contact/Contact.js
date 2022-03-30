import React from "react";
import "./Contact.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Contact = () => {
  return (
    <section className="Contact">
      <h1>Let's Get in Touch!</h1>
      <ul>
        <li className="one">
          <a href="mailto:dannyhogancodes@gmail.com">
            <GoMail />
            <p>dannyhogancodes@gmail.com</p>
          </a>
        </li>
        <li className="two">
          <a href="https://www.linkedin.com/in/danny-hogan/">
            <FaLinkedin />
            <p>LinkedIn</p>
          </a>
        </li>
        <li className="three">
          <a href="http://www.github.com/dannyhogan">
            <FaGithub />
            <p>github.com/dannyhogan</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
