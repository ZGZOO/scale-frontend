import React from "react";

import ShowEntryList from "../ShowEntryList/ShowEntryList";

function UserPage({ user }) {
  console.log("UserPage - ", user);
  return (
    <>
      <ShowEntryList user={user} />
    </>
  );
}

export default UserPage;
