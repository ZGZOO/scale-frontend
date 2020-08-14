import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import UserPage from "./components/UserPage/UserPage";
import Logout from "./components/Logout/Logout";

const App = () => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("log-out");

  const setTheUser = (person) => {
    setUser(person);
  };

  useEffect(() => {
    if (user === null) {
      setStatus("log-out");
    } else {
      setStatus("log-in");
    }
  }, [user]);

  // if (status === "log-in") {
  //   return <Redirect to={"/userpage"} />;
  // }

  return (
    <div className="App">
      <Nav user={user} status={status} />
      <main>
        <Switch>
          <Route
            path="/login"
            render={(props) => <Login {...props} handleLogin={setTheUser} />}
          />
          <Route
            path="/signup"
            render={(props) => <Signup {...props} handleSignup={setTheUser} />}
          />
          <Route
            path="/userpage"
            render={(props) => <UserPage {...props} user={user} />}
          />
          <Route
            path="/logout"
            render={(props) => (
              <Logout {...props} handleLogout={setTheUser} user={user} />
            )}
          />
          <Route path="/home" render={() => <Home />} />
        </Switch>
      </main>
      <footer>&copy;2020 Jenny Xu</footer>
    </div>
  );
};

export default App;
