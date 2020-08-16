import React, { useEffect } from "react";

function Logout(props) {
  // let result = "";
  useEffect(() => {
    setTimeout(function () {
      props.history.push("/home");
    }, 3000);
    props.handleLogout(null);
    console.log("logging out");
    // if (props.user !== null) {
    //   result = "Logging out...";
    // } else {
    //   result = "Good bye!";
    // }
  }, []);

  return <h1>Logging out ...</h1>;
}

export default Logout;
