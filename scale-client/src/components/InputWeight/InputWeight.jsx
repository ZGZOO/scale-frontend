import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig";
import "./InputWeight.scss";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

function InputWeight(props) {
  const [entryInput, setEntryInput] = useState({
    weight: "",
    unit: "",
    date: "",
  });
  const [userid, setUserid] = useState(null);

  useEffect(() => {
    console.log(props.user);
    // console.log(props.user.user.id);
    setUserid(props.user.user.id);
  }, []);

  const handleChange = (event) => {
    // console.log("event", event.target.name, event.target.value);
    setEntryInput({
      ...entryInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const entrydata = {
      entry: {
        weight: parseFloat(entryInput.weight),
        unit: entryInput.unit,
        date: entryInput.date,
      },
    };
    console.log(JSON.stringify(entrydata));
    axios({
      url: `${apiUrl}/users/${userid}/entries`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(entrydata),
    })
      .then((res) => {
        console.log("handle submit inputWeight - ", res.data);
        props.history.push("/userpage");
      })
      .catch(console.error);
    setEntryInput({ weight: "", unit: "", date: "" });
  };

  const handleDayChange = (day) => {
    setEntryInput({
      ...entryInput,
      ["date"]: day,
    });
  };

  // 2020-08-04T19:00:00.000Z

  return (
    <div className="inputWeight">
      <h3>Input your weight</h3>
      <div className="inputFormContainer">
        <form onSubmit={handleSubmit}>
          <div className="two">
            <label>
              <i class="fa fa-user"></i>
            </label>
            <br />
            <input
              placeholder="Input your weight:"
              name="weight"
              value={entryInput.weight}
              onChange={handleChange}
            ></input>
            <select name="unit" value={entryInput.unit} onChange={handleChange}>
              <option value="lb">lb</option>
              <option value="kg">kg</option>
            </select>
          </div>

          <div className="two">
            <label>
              <i class="fa fa-calendar"></i>
            </label>
            <br />
            {/* <Calendar /> */}
            <DayPickerInput onDayChange={handleDayChange} />
          </div>

          <div className="twoInputButtons">
            <NavLink to="/userpage">
              <button>Cancel</button>
            </NavLink>
            <button type="submit">Add Entry</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputWeight;
