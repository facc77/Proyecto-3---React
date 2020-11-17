import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./home.js";
import Nav from "./Nav.js";
import LoginPaciente from "./login-paciente.js";
import Jumbotron from "./jumbotron.js";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SimpleForm from "./SimpleForm";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/LoginPaciente" exact component={LoginPaciente} />
        <Route path="/RegistroPaciente" exact component={SimpleForm} />
      </div>
    </Router>
  );
}

export default App;
