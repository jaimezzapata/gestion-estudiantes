import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [usuarios, setUsuarios] = useState([]);

  async function getUsuarios() {
    let resultado = await axios.get("http://localhost:3100/usuarios");
    setUsuarios(resultado.data);
    console.log(resultado.data);
  }

  useEffect(() => {
    getUsuarios();
  }, []);

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
