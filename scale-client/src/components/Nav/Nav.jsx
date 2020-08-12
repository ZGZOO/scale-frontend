import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img
          src="https://res.cloudinary.com/headincloud/image/upload/v1597210518/scale_logo.png"
          alt="Scale Logo"
          className="logo"
        />
      </NavLink>
    </nav>
  );
}

export default Nav;
