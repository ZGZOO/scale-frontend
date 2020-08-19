import React, { useEffect } from "react";
import "./Logout.scss";

function Logout(props) {
  // let result = "";
  useEffect(() => {
    setTimeout(function () {
      props.handleLogout(null);
      props.history.push("/home");
      console.log("logging out");
    }, 2000);
  }, []);

  return (
    <div className="logouttitle">
      <h1>Logging out ...</h1>
    </div>
  );
}

export default Logout;
