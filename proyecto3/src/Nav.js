import React from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

function Nav() {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="#home">
          <img
            className="logo"
            src="{logo}"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </ReactBootStrap.Navbar.Brand>

        <ReactBootStrap.Navbar.Brand href="#home">
          Clinica San Remo
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#features">
              Home
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features">
              Nuestros servicios
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown
              title="Quiénes somos?"
              id="collasible-nav-dropdown"
              className="dropDown1"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Mision
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Vision
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Form inline>
              <ReactBootStrap.FormControl
                type="text"
                placeholder="Que buscas?"
                className="mr-sm-2"
              />
              <ReactBootStrap.Button className="my-2" variant="outline-light">
                Buscar
              </ReactBootStrap.Button>
            </ReactBootStrap.Form>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Nav;
