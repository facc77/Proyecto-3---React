import React from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <div>
      <ReactBootStrap.Jumbotron className="jumbotron">
        <div className="divButton">
          <p>
            <Link to="loginPaciente">
              <ReactBootStrap.Button
                className="jumbotronButton"
                variant="primary"
              >
                Paciente
              </ReactBootStrap.Button>
            </Link>
          </p>
          <p>
            <Link to="/loginMedico">
              <ReactBootStrap.Button
                className="jumbotronButton"
                variant="primary"
              >
                Medico
              </ReactBootStrap.Button>
            </Link>
          </p>
        </div>
      </ReactBootStrap.Jumbotron>
    </div>
  );
}

export default Jumbotron;
