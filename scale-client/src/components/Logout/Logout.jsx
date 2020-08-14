import React, { useEffect } from "react";

function Logout(props) {
  let result = "";
  useEffect(() => {
    props.handleLogout(null);
    props.history.push("/home");
    if (props.user !== null) {
      result = "Logging out...";
    } else {
      result = "Good bye!";
    }
  }, []);
  return <h1>{result}</h1>;
}

export default Logout;
