import React, { Component } from "react";
import Logo from "./logo.png";
import ReactDOM from "react-dom";
import "./loginPaciente2.css";
import { Link } from "react-router-dom";

import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";

class LoginPaciente extends Component {
  render() {
    return (
      <div className="container">
        <div className="login-content">
          <Form className="formLogin">
            <img className="img" src={Logo} alt="website logo" />
            <h2>Bienvenido</h2>
            <FormGroup className="input-div one">
              <div className="div">
                {" "}
                <Form.Label>
                  {" "}
                  <h5>Usuario</h5>
                </Form.Label>{" "}
                <Form.Control type="text" />{" "}
              </div>
            </FormGroup>
            <FormGroup className="input-div pass">
              <div className="div">
                <div className="i"></div>{" "}
                <Form.Label>
                  <h5>Contrasena</h5>
                </Form.Label>{" "}
                <Form.Control className="input" type="password" />{" "}
              </div>
            </FormGroup>
            <Link to="RegistroPaciente">
              <a>Todavia no estas registrado?</a>
            </Link>
            <Button variant="primary" type="submit" className="submitButton">
              Ingresar
            </Button>{" "}
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginPaciente;
