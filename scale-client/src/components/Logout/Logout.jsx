import React, { useEffect } from "react";

function Logout(props) {
  // let result = "";
  useEffect(() => {
    props.handleLogout(null);
    console.log("logging out");
    setTimeout(function () {
      props.history.push("/home");
    }, 3000);
    // if (props.user !== null) {
    //   result = "Logging out...";
    // } else {
    //   result = "Good bye!";
    // }
  }, []);

  return <h1>Logging out ...</h1>;
}

export default Logout;
