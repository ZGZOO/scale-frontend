import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <NavLink to="/">&#8678; Back to Home</NavLink>
      <br />
      <br />
      <form>
        <label>Username</label>
        <br />
        <input placeholder="Username"></input>
        <br />
        <br />
        <label>Password</label>
        <br />
        <input placeholder="Password"></input>
      </form>
    </div>
  );
}

export default Login;
