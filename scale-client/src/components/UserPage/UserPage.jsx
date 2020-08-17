import React from "react";
import { Route, NavLink } from "react-router-dom";
import InputWeight from "../InputWeight/InputWeight";

function UserPage({ user }) {
  console.log("UserPage - ", user);
  return (
    <>
      <h3>In the User Page</h3>
      {user !== null && user.status === 200 ? (
        <h1>{user.success}</h1>
      ) : (
        <h1>Hi?</h1>
      )}
      {/* <showweightlist /> */}
      <Route
        path="/userpage/addWeight"
        render={(props) => <InputWeight {...props} />}
      />
      <NavLink to="/chart">See the chart</NavLink>
    </>
  );
}

export default UserPage;
