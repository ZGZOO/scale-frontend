import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import { NavLink } from "react-router-dom";
import "./ShowEntryList.scss";

function ShowEntryList({ user, info }) {
  const [entries, setEntries] = useState([]);

  const getEntries = async (data) => {
    try {
      console.log("getEntries: ", data);
      const response = await axios.get(`${apiUrl}/users/${data.id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      console.log(
        "getEntries - response.data.entries: ",
        response.data.entries
      );
      setEntries(response.data.entries);
    } catch (err) {
      console.error(err);
    }
  };

  const getEntriesForSignUp = async (data) => {
    try {
      console.log("getEntries: ", data);
      const response = await axios.get(`${apiUrl}/users/${data.user.id}`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });

      console.log(
        "getEntries - response.data.entries: here!!",
        response.data.entries
      );
      setEntries(response.data.entries);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user !== null) {
      //   const parsedUser = JSON.parse(user.user);
      //   console.log("useEffect, parse: ", JSON.parse(user.user));
      //   getEntries(parsedUser);
      console.log(user);
      //sign up, need log in
      if (user.status === undefined) {
        axios({
          url: `${apiUrl}/users/login`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(info),
        })
          .then((res) => {
            console.log("handle submit here!! - ", res.data);
            // props.handleLogin(res.data);
            // if (res.data.status !== 401) {
            //   props.history.push("/userpage");
            // } else {
            //   setLoggedInStatus(false);
            //   console.log("Log in failed!");
            // }
            getEntriesForSignUp(res.data);
          })
          .catch(console.error);
      } else {
        getEntries(user.user);
      }
    }
  }, []);

  const handleDelete = async (data, id) => {
    console.log("in handle delete");
    const response = await axios({
      url: `${apiUrl}/users/${data.id}/entries/${id}`,
      method: "DELETE",
    });
    getEntries(user.user);
    console.log("handleDelete", response);
  };

  console.log("entries", entries);

  const entriesArr = entries.map((entry) => {
    return (
      <div key={entry.id} className="entryContainer">
        <div className="dataGroup">
          <p>
            Weight: {entry.weight}
            <span> </span>
            {entry.unit}
          </p>
          <p>
            Date: {new Date(entry.date).getFullYear()}/
            {new Date(entry.date).getMonth()}/{new Date(entry.date).getDate()}
          </p>
        </div>

        <div className="iconGroup">
          <NavLink
            to={{
              pathname: "/userpage/editWeight",
              editProps: {
                entryId: entry.id,
              },
            }}
            className="editLink"
          >
            <i className="fa fa-pencil-square-o" id="editIcon"></i>
          </NavLink>

          <i
            className="fa fa-trash-o"
            id="deleteIcon"
            onClick={() => {
              handleDelete(user.user, entry.id);
            }}
          ></i>
        </div>
      </div>
    );
  });

  if (!user) {
    return <p>Loading...</p>;
  } else if (user !== null && entries !== null && entries.length === 0) {
    console.log("before error", user);
    return (
      <div className="addEntryDiv">
        <h2>Hello, {user.username}!</h2>
        <p>You don't have weights yet.</p>
        <div className="addAndSeeContainer">
          <NavLink to="/userpage/addWeight" className="addLink">
            Add Entry<i className="fa fa-calendar-plus-o"></i>
          </NavLink>
          <NavLink to="/userpage/seeChart" className="seeChart">
            See Chart<i class="fa fa-line-chart"></i>
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Welcome back, {user.user.username}!</h2>
        <div className="addAndSeeContainer">
          <NavLink to="/userpage/addWeight" className="addLink">
            Add Entry<i className="fa fa-calendar-plus-o"></i>
          </NavLink>
          <NavLink to="/userpage/seeChart" className="seeChart">
            See Chart<i class="fa fa-line-chart"></i>
          </NavLink>
        </div>
        {entriesArr}
      </div>
    );
  }
}

export default ShowEntryList;
