import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig";
import "./Login.scss";

function Login(props) {
  const [loginInput, setLoginInput] = useState({ username: "", password: "" });
  const [loggedInStatus, setLoggedInStatus] = useState(true);

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
    console.log(JSON.stringify(userdata));
    axios({
      url: `${apiUrl}/users/login`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(userdata),
    })
      .then((res) => {
        console.log("handle submit - ", res.data);
        props.handleLogin(res.data);
        if (res.data.status !== 401) {
          props.history.push("/userpage");
        } else {
          setLoggedInStatus(false);
          console.log("Log in failed!");
        }
      })
      .catch(console.error);
    setLoginInput({ username: "", password: "" });
  };

  return (
    <div className="login">
      <h3 className="loginTitle">Log In</h3>
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
            ></input>
          </div>

          <div className="twobuttons">
            <NavLink to="/">
              <button>Cancel</button>
            </NavLink>
            <button type="submit">Log In</button>
          </div>

          <div className="dontHaveAccount">
            Don't have an account?{" "}
            <NavLink to="/signup" className="signupInLogin">
              Sign Up
            </NavLink>
          </div>

          <div className={loggedInStatus ? "disappear" : "loginFail"}>
            Logged in failed! Please try again!
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Login;
