import React, { useEffect } from "react";

function Logout(props) {
  // let result = "";
  useEffect(() => {
    props.handleLogout(null);
    props.history.push("/home");
    // if (props.user !== null) {
    //   result = "Logging out...";
    // } else {
    //   result = "Good bye!";
    // }
  }, []);
  // setTimeout
  return <h1>Hello</h1>;
}

export default Logout;
