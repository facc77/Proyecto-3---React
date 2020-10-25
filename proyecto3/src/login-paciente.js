import React, { Component } from "react";
import Logo from "./logo.png";
import ReactDOM from "react-dom";

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
        <Form className="form">
          <img src={Logo} alt="website logo" />
          <h2>Bienvenido</h2>
          <FormGroup>
            <Form.Label>Usuario</Form.Label>{" "}
            <Form.Control type="email" placeholder="Enter email" />{" "}
          </FormGroup>
          <FormGroup>
            <Form.Label>Contrasena</Form.Label>{" "}
            <Form.Control type="email" placeholder="Enter email" />{" "}
          </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
        </Form>
      </div>
    );
  }
}

export default LoginPaciente;
