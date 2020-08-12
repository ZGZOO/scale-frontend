import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loginInput, setLoginInput] = useState({ username: "", password: "" });
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setLoginInput({
      ...loginInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3000/users/login`,
      method: "PUT",
      data: loginInput,
    })
      .then((res) => {
        setUser(res.data);
        console.log(user);
        // props.history.push("/items");
      })
      .catch(console.error);
    setLoginInput({ username: "", password: "" });
  };

  return (
    <div className="login">
      {/* <NavLink to="/">&#8678; Back to Home</NavLink> */}
      <h3>Log In Page</h3>
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
        <button type="submit">Log In</button>
        <NavLink to="/">
          <button>Cancel</button>
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
