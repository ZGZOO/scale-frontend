import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import UserPage from "./components/UserPage/UserPage";

function App() {
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

  return (
    <div className="App">
      <Nav user={user} status={status} />
      <main>
        <Switch>
          <Route
            path="/login"
            render={() => <Login handleLogin={setTheUser} />}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/userpage" render={() => <UserPage user={user} />} />
          <Route path="/" render={() => <Home handleLogout={setTheUser} />} />
        </Switch>
      </main>
      <footer>&copy;2020 Jenny Xu</footer>
    </div>
  );
}

export default App;
