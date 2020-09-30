import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { Switch, Route, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Navbar />
      </Switch>
    </div>
  );
}

export default App;
