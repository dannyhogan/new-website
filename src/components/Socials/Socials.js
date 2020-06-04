import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import "./Socials.scss";

const Socials = () => {
  return (
    <div className="Socials">
      <a href="">
        <GoMail />
      </a>
      <a href="">
        <FaLinkedin />
      </a>
      <a href="">
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
