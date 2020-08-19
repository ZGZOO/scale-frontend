import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig";
import "./UpdateWeight.scss";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

function UpdateWeight(props) {
  const [entryInput, setEntryInput] = useState({
    weight: "",
    unit: "",
    date: "",
  });
  const [userid, setUserid] = useState(null);
  const [entryid, setEntryid] = useState(null);

  useEffect(() => {
    console.log(props.user.user);
    setUserid(props.user.user.id);
    console.log("entry id: ", props.location.editProps.entryId);
    setEntryid(props.location.editProps.entryId);
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
      url: `${apiUrl}/users/${userid}/entries/${entryid}`,
      method: "PUT",
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
      <h3>Update your weight entry</h3>
      <form onSubmit={handleSubmit}>
        <label>Change my weight:</label>
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
        <br />
        <br />
        <label>Change the date:</label>
        <br />
        {/* <Calendar /> */}
        <DayPickerInput onDayChange={handleDayChange} />
        <br />
        <br />
        <button type="submit">Update Entry</button>
        <NavLink to="/userpage">
          <button>Cancel</button>
        </NavLink>
        <br />
        <br />
      </form>
    </div>
  );
}

export default UpdateWeight;
