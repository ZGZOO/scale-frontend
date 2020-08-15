import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav({ loggedIn }) {
  return (
    <nav className="navbar">
      <NavLink to="/home">
        <img
          src="https://res.cloudinary.com/headincloud/image/upload/v1597210518/scale_logo.png"
          alt="Scale Logo"
          className="logo"
        />
      </NavLink>
      {loggedIn ? (
        <>
          <NavLink to="/logout">Log Out</NavLink>
          <NavLink to="/userpage">My page</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
      {loggedIn ? <h3>log-in</h3> : <h3>log-out</h3>}
    </nav>
  );
}

export default Nav;
