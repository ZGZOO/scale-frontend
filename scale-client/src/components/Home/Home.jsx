import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <h1 className="homeTitle">Scale</h1>
      <main className="homeMain">
        <section>
          <span className="line1">Track Your Weight</span>
          <br />
          <span className="line2">Every single day</span>
          <br />
          {/* Record it! <br />
          Track it! <br />
          See it! <br />
          Feel it! */}
        </section>
        <NavLink to="/login" className="logInInHome">
          Start Now!
        </NavLink>
      </main>
    </div>
  );
}

export default Home;
