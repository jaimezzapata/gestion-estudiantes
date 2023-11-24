import React from "react";
import './Login.css'
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Iniciar Sesión</h2>
      </div>
      <form className="login-form">
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
