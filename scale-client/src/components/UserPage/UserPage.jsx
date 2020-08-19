import React from "react";
import { NavLink } from "react-router-dom";

import ShowEntryList from "../ShowEntryList/ShowEntryList";

function UserPage({ user }) {
  console.log("UserPage - ", user);
  return (
    <>
      <h3>In the User Page</h3>
      <ShowEntryList user={user} />
      <NavLink to="/chart">See the chart</NavLink>
    </>
  );
}

export default UserPage;
