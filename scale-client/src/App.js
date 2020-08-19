import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import UserPage from "./components/UserPage/UserPage";
import Logout from "./components/Logout/Logout";
import InputWeight from "./components/InputWeight/InputWeight";
import UpdateWeight from "./components/UpdateWeight/UpdateWeight";
import WeightChart from "./components/Chart/Chart";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const setTheUser = (person) => {
    setUser(person);
  };

  useEffect(() => {
    if (user === null) {
      setLoggedIn(false);
    } else if (user !== null && user.status === 401) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [user]);

  // if (status === "log-in") {
  //   return <Redirect to={"/userpage"} />;
  // }

  return (
    <div className="App">
      <Nav loggedIn={loggedIn} />
      <main>
        <Switch>
          <Route
            path="/userpage/addWeight"
            render={(props) => <InputWeight {...props} user={user} />}
          />
          <Route
            path="/userpage/editWeight"
            render={(props) => <UpdateWeight {...props} user={user} />}
          />
          <Route
            path="/userpage/seeChart"
            render={(props) => <WeightChart {...props} user={user} />}
          />
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
          <Redirect from="/" to="/home" />
        </Switch>
      </main>
      <footer>&copy;2020 Jenny Xu</footer>
    </div>
  );
};

export default App;
