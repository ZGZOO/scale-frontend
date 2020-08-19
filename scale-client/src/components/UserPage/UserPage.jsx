import React from "react";

import ShowEntryList from "../ShowEntryList/ShowEntryList";

function UserPage({ user, info }) {
  console.log("UserPage - ", user);
  return (
    <>
      <ShowEntryList user={user} info={info} />
    </>
  );
}

export default UserPage;
