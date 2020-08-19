import React, { useEffect } from "react";

function Logout(props) {
  // let result = "";
  useEffect(() => {
    setTimeout(function () {
      props.handleLogout(null);
      props.history.push("/home");
      console.log("logging out");
    }, 2000);
  }, []);

  return <h1>Logging out ...</h1>;
}

export default Logout;
