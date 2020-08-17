import React from "react";
import { NavLink } from "react-router-dom";
import InputWeight from "../InputWeight/InputWeight";

function UserPage({ user }) {
  //   if (!user) {
  //     return <h1>Loading</h1>;
  //   } else {
  //     return <h1>{user.success}</h1>;
  //   }
  console.log(user);
  return (
    <>
      <h1>In the User Page</h1>
      <h3>Hi!</h3>
      <showweightlist />
      <InputWeight />
      <NavLink to="/chart">See the chart</NavLink>
    </>
  );
}

export default UserPage;
