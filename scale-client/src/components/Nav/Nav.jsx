import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav({ loggedIn }) {
  const [openBtn, setOpenBtn] = useState(false);

  const handleOpenBtn = () => {
    setOpenBtn(!openBtn);
  };

  const handleCloseBtn = () => {
    setOpenBtn(!openBtn);
  };

  const sideNavStatus = openBtn ? "show" : "";
  const hamStatus = openBtn ? "disappear" : "";

  return (
    <>
      <nav className="navbar">
        <div className={"hamburger " + hamStatus} onClick={handleOpenBtn}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <section className={"sideNav " + sideNavStatus}>
        <div
          className={
            loggedIn ? "loggedInSideNavContainer" : "loggedOutSideNavContainer"
          }
        >
          <NavLink to="/home" onClick={handleOpenBtn} className="navlink">
            <img
              src="https://res.cloudinary.com/headincloud/image/upload/v1597210518/scale_logo.png"
              alt="Scale Logo"
              className="logo"
            />
          </NavLink>
          {loggedIn ? (
            <>
              <NavLink to="/logout" onClick={handleOpenBtn} className="navlink">
                Log Out
              </NavLink>
              <NavLink
                to="/userpage"
                onClick={handleOpenBtn}
                className="navlink"
              >
                My Page
              </NavLink>
              <NavLink
                to="/userpage/addWeight"
                onClick={handleOpenBtn}
                className="navlink"
              >
                Add Entry
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/home" onClick={handleOpenBtn} className="navlink">
                Home
              </NavLink>
              <NavLink to="/login" onClick={handleOpenBtn} className="navlink">
                Log In
              </NavLink>
              <NavLink to="/signup" onClick={handleOpenBtn} className="navlink">
                Sign Up
              </NavLink>
            </>
          )}
        </div>

        {/* {loggedIn ? <h3>log-in</h3> : <h3>log-out</h3>} */}

        <div className={"closebtn"} onClick={handleCloseBtn}>
          <div className={"closebars"}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
