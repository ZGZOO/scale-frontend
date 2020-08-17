import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig";
import "./InputWeight.scss";
import Calendar from "../Calendar/Calendar";

function InputWeight(props) {
  const [entryInput, setEntryInput] = useState({
    weight: "",
    unit: "",
    date: "",
  });
  const [loggedInStatus, setLoggedInStatus] = useState(true);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setEntryInput({
      ...entryInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const entrydata = {
      entry: {
        weight: entryInput.weight,
        unit: entryInput.unit,
        date: entryInput.date,
      },
    };
    console.log(JSON.stringify(entrydata));
    axios({
      url: `${apiUrl}/users/login`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(entrydata),
    })
      .then((res) => {
        console.log("handle submit - ", res.data);
        props.handleLogin(res.data);
        // if (res.data.status !== 401) {
        //   props.history.push("/userpage");
        // } else {
        //   setLoggedInStatus(false);
        //   console.log("Log in failed!");
        // }
      })
      .catch(console.error);
    setEntryInput({ weight: "", unit: "", date: "" });
  };

  return (
    <div className="inputWeight">
      <h3>Input your weight Page</h3>
      <form onSubmit={handleSubmit}>
        <label>Your Weight Today:</label>
        <br />
        <input
          placeholder="Input your weight:"
          name="weight"
          value={entryInput.username}
          onChange={handleChange}
        ></input>
        <select name="units">
          <option>lb</option>
          <option>kg</option>
        </select>
        <br />
        <br />
        <label>Today's date:</label>
        <br />
        <Calendar />
        <br />
        <br />
        <button type="submit">Add Entry</button>
        <NavLink to="/userpage">
          <button>Cancel</button>
        </NavLink>
        <br />
        <br />
      </form>
    </div>
  );
}

export default InputWeight;
