import React, { useEffect } from "react";

function Logout(props) {
  useEffect(() => {
    props.handleLogout(null);
    props.history.push("/");
  }, []);

  return <h1>Logging out...</h1>;
}

export default Logout;
