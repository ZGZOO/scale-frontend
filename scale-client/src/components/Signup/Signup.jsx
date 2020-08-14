import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig";

function Signup(props) {
  const [loginInput, setLoginInput] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setLoginInput({
      ...loginInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userdata = {
      user: {
        username: loginInput.username,
        password: loginInput.password,
      },
    };
    axios({
      url: `${apiUrl}/users`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(userdata),
    })
      .then((res) => {
        console.log("handle submit - ", res.data);
        props.handleSignup(res.data);
        props.history.push("/userpage");
      })
      .catch(console.error);
    setLoginInput({ username: "", password: "" });
  };

  return (
    <div className="signup">
      {/* <NavLink to="/">&#8678; Back to Home</NavLink> */}
      <h3>Sign Up Page</h3>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          placeholder="Username"
          name="username"
          value={loginInput.username}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          placeholder="Password"
          name="password"
          value={loginInput.password}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <button type="submit">Sign Up</button>
        <NavLink to="/">
          <button>Cancel</button>
        </NavLink>
      </form>
    </div>
  );
}

export default Signup;
