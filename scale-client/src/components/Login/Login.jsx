import React from "react";

function Login() {
  return (
    <div className="login">
      <form>
        <label>Username</label>
        <input placeholder="Username"></input>
        <label>Password</label>
        <input placeholder="Password"></input>
      </form>
    </div>
  );
}

export default Login;
