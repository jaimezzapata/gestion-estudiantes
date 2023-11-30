import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  async function getUsuarios() {
    let resultado = await axios.get("http://localhost:3100/usuarios");
    setUsuarios(resultado.data);
    console.log(resultado.data);
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  const buscarUsuario = () => {
    let estado = usuarios.some((usuario) => {
      if (usuario.user == user && usuario.password == password) {
        return true;
      }
    });
    return estado;
  };
  function iniciarSesion() {
    if (buscarUsuario()) {
      Swal.fire({
        icon: "success",
        title: "Yeah...",
        text: "Inicio de sesión correcta...",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error de credenciales",
      });
    }
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Iniciar Sesión</h2>
      </div>
      <form className="login-form">
        <input
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Usuario"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Contraseña"
          required
        />
        <button onClick={iniciarSesion} type="button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
