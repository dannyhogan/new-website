import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import "./NavMenu.scss";

const NavMenu = () => {
  const [open, toggleOpen] = useState(false);
  const handleClick = () => toggleOpen((open) => !open);

  return (
    <div className={`NavMenu ${open ? "open" : "closed"}`}>
      <button className="toggle-button" onClick={handleClick}>
        {open ? <IoMdClose /> : <AiOutlineMenu />}
      </button>
      <nav className="top-menu">
        <ul>
          <li>
            <NavLink exact to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/tech">TECH</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
      <nav className="side-menu">
        <ul>
          <li onClick={handleClick}>
            <NavLink exact to="/">
              HOME
            </NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/tech">TECH</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;