import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import "./Socials.scss";

const Socials = () => {
  return (
    <div className="Socials">
      <a href="mailto:dannyhogancodes@gmail.com">
        <GoMail />
      </a>
      <a href="https://www.linkedin.com/in/danny-hogan/">
        <FaLinkedin />
      </a>
      <a href="https://github.com/dannyhogan">
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
