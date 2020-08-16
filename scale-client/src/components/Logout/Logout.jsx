import React, { useEffect } from "react";

function Logout(props) {
  // let result = "";
  useEffect(() => {
    setTimeout(function () {
      props.handleLogout(null);
      props.history.push("/home");
      console.log("logging out");
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
