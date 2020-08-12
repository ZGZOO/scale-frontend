import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <main>
        <section>
          Scale helps you track your weight, and show a line for you.
        </section>
        <section>Welcome back, my friend, by logging in!</section>
        <section>Or reveal another way to see yourself, sign up now!</section>
        <NavLink to="/login">Log In</NavLink>
        <br />
        <br />
        <NavLink to="/signup">Sign Up</NavLink>
      </main>
    </div>
  );
}

export default Home;
