import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </main>
      <footer>&copy;2020 Jenny Xu</footer>
    </div>
  );
}

export default App;
