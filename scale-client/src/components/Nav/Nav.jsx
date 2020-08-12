import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <a>
        <div></div>
        <div></div>
        <div></div>
      </a>
      <NavLink to="/">
        <img
          src="https://res.cloudinary.com/headincloud/image/upload/v1597210518/scale_logo.png"
          alt="Scale Logo"
          className="logo"
        />
      </NavLink>
      <NavLink to="/login">Log In</NavLink>
    </nav>
  );
}

export default Nav;
