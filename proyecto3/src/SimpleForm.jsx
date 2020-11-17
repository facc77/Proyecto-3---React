import React, { Component } from "react";

const initialState = {
  usuario: "",
  email: "",
  contrasena: "",
  contrasena2: "",
  userNameError: "",
  emailError: "",
  passwordError: "",
  passwordError2: "",
};

class ValidationForm extends Component {
  state = initialState;

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  checkUserName = (e) => {
    let userNameError = "";
  };

  almacenar = (e) => {
    if (localStorage.getItem("users")) {
      let users1 = JSON.parse(localStorage.getItem("users"));
      users1.push({
        usuario: this.state.usuario,
        email: this.state.email,
        contrasena: this.state.contrasena,
        permiso: false,
      });
      localStorage.setItem("users", JSON.stringify(users1));
    } else {
      let users = Array({
        usuario: this.state.usuario,
        email: this.state.email,
        contrasena: this.state.contrasena,
        permiso: false,
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
  };

  validate = () => {
    let userNameError = "";
    let emailError = "";
    let passwordError = "";
    let passwordError2 = "";

    if (!this.state.usuario) {
      userNameError = "este campo no puede quedar vacio";
    }
    if (this.state.usuario.length < 6) {
      userNameError = "no puede contener menos de 6 caracteres";
    }

    if (!this.state.contrasena) {
      passwordError = "este campo no puede quedar vacio";
    }
    if (this.state.contrasena !== this.state.contrasena2) {
      passwordError = "las contrasenas no coinciden";
    }

    if (!this.state.contrasena2) {
      passwordError2 = "este campo no puede quedar vacio";
    }
    if (this.state.contrasena.length < 6) {
      passwordError = "no puede contener menos de 6 caracteres";
    }

    if (!this.state.email.includes("@")) {
      emailError = "email invalido";
    }
    if (emailError || userNameError || passwordError || passwordError2) {
      this.setState({
        emailError,
        userNameError,
        passwordError,
        passwordError2,
      });
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
      this.checkUserName();
    }
  };

  render() {
    return (
      <div className="container form">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <h1>Formulario</h1>
            </div>
            <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                className="form-control"
                name="usuario"
                onChange={this.handleChange}
              />
              <div>{this.state.userNameError}</div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                name="email"
                onChange={this.handleChange}
              />
              <div>{this.state.emailError}</div>
            </div>
            <div className="form-group">
              <label>Contrasena</label>
              <input
                type="password"
                className="form-control"
                name="contrasena"
                onChange={this.handleChange}
              />
              <div>{this.state.passwordError}</div>
            </div>
            <div className="form-group">
              <label>Repetir Contrasena</label>
              <input
                type="password"
                className="form-control"
                name="contrasena2"
                onChange={this.handleChange}
              />
              <div>{this.state.passwordError2}</div>
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              onSubmit={this.handleSubmit}
            >
              enviar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ValidationForm;
