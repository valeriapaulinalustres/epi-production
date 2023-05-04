import React from "react";
import "./loginUser.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import DataContext from "../../context/DataContext.js";

import UsersContext from "../../context/UsersContext.js";

function LoginUser({ setLogin }) {
  const { user, setUser } = useContext(DataContext);
  const {login} = useContext(UsersContext)

  const navigate = useNavigate();

  function handleSubmitLogin(e) {
    e.preventDefault();
    const userData = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    //console.log(userData)
    login(userData, setLogin).then(()=>navigate("/"))

    // setLogin(false)
  }

  
  console.log(user);
  return (
    <div className="login-container">
      <div className="login-logo"></div>
      <div className="login-alert-container">
        <h1>Municipalidad de Morón</h1>
        <h2>Dirección de Epidemiología</h2>
        <form className="form-login" onSubmit={handleSubmitLogin}>
          <input className="calendar-input" placeholder="Ingrese su mail" />
          <input
            className="calendar-input"
            placeholder="Ingrese su contraseña"
            type="password"
            name="password"
          />
          <button className="buttonActive" type="submit">
            Iniciar sesión
          </button>
        </form>
        {/* <h3>Olvidé mi contraseña</h3> */}
      </div>
    </div>
  );
}

export default LoginUser;
