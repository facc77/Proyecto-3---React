import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./Nav.js";
import LoginPaciente from "./login-paciente.js";
import Jumbotron from "./jumbotron.js";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={(Jumbotron, Nav)} />
        <Route path="/LoginPaciente" component={LoginPaciente} />
      </div>
    </Router>
  );
}

export default App;
