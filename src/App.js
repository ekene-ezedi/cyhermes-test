import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
};

export default App;
