import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit -- ", event);
  };

  return (
    <div className="login">
      {/* <NavLink to="/">&#8678; Back to Home</NavLink> */}
      <h3>Log In Page</h3>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input placeholder="Username"></input>
        <br />
        <br />
        <label>Password</label>
        <br />
        <input placeholder="Password"></input>
        <br />
        <br />
        <button type="submit">Log In</button>
        <NavLink to="/">
          <button type="submit">Cancel</button>
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
