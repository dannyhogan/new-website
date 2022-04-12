import React from "react";
import "./Contact.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { AwesomeButton } from 'react-awesome-button';


const Contact = () => {
  return (
    <section className="Contact">
      <h1>Let's Get in Touch!</h1>
      <ul>
        <li >
          <a href="mailto:dannyhogancodes@gmail.com">
            <AwesomeButton type='primary'>
              <GoMail />
              <p>dannyhogancodes@gmail.com</p>
            </AwesomeButton>
          </a>
        </li>
        <li >
          <a href="https://www.linkedin.com/in/danny-hogan/">
            <AwesomeButton type='primary'>
              <FaLinkedin />
              <p>Connect with me on LinkedIn!</p>
            </AwesomeButton>
          </a>
        </li>
        <li>
          <a href="http://www.github.com/dannyhogan">
            <AwesomeButton type='primary'>
              <FaGithub />
              <p>www.github.com/dannyhogan</p>
            </AwesomeButton>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
