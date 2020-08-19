import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig";
// import "./EditProfile.scss";

function EditProfile(props) {
  const [input, setInput] = useState({ username: "", password: "" });
  const [loggedInStatus, setLoggedInStatus] = useState(true);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userdata = {
      user: {
        username: input.username,
        password: input.password,
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
    setInput({ username: "", password: "" });
  };

  return (
    <div className="editProfile">
      <h3>Edit Profile Page</h3>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          placeholder="Username"
          name="username"
          value={input.username}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <button type="submit">Log In</button>
        <NavLink to="/">
          <button>Cancel</button>
        </NavLink>
        <br />
        <br />
        <div className={loggedInStatus ? "disappear" : ""}>
          Logged in failed! Please try again!
        </div>
        <br />
      </form>
    </div>
  );
}

export default EditProfile;
