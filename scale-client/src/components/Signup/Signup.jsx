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
        props.handleSignupInput(userdata);
        props.history.push("/userpage");
      })
      .catch(console.error);
    setLoginInput({ username: "", password: "" });
  };

  return (
    <div className="signup">
      <h3 className="loginTitle">Sign Up</h3>
      <div className="loginFormContainer">
        <form onSubmit={handleSubmit}>
          <div className="two">
            <label className="usernameLogo">
              <i class="fa fa-user-circle"></i>
            </label>
            <input
              placeholder="Username"
              name="username"
              value={loginInput.username}
              onChange={handleChange}
              className="loginInput"
            ></input>
          </div>

          <div className="two">
            <label className="passwordLogo">
              <i class="fa fa-lock"></i>
            </label>
            <input
              placeholder="Password"
              name="password"
              value={loginInput.password}
              onChange={handleChange}
              className="loginInput"
              type="password"
            ></input>
          </div>

          <div className="twobuttons">
            <NavLink to="/">
              <button>Cancel</button>
            </NavLink>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
