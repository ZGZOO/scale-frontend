import React from "react";

import ShowEntryList from "../ShowEntryList/ShowEntryList";

function UserPage({ user }) {
  console.log("UserPage - ", user);
  return (
    <>
      <h3>In the User Page</h3>
      <ShowEntryList user={user} />
    </>
  );
}

export default UserPage;
