import "./Registro.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { v4 } from "uuid";

const Registro = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  let redireccion = useNavigate();
  async function getUsuarios() {
    let resultado = await axios.get("http://localhost:3100/usuarios");
    setUsuarios(resultado.data);
    console.log(resultado.data);
  }

  async function agregarUsuario() {
    let nuevoUsuario = {
      id: v4(),
      password,
      user,
    };
    await axios.post("http://localhost:3100/usuarios", nuevoUsuario);
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  const buscarUsuario = () => {
    let estado = usuarios.some((usuario) => {
      if (usuario.user == user) {
        return true;
      }
    });
    return estado;
  };
  function registrarUsuario() {
    if (buscarUsuario()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario ya existe en la base de datos",
      });
    } else {
      agregarUsuario();
      Swal.fire({
        icon: "success",
        title: "Yeah...",
        text: "Usuario creado correctamente",
      });
      redireccion("/");
    }
  }
  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Registro</h2>
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
        <button onClick={registrarUsuario} type="button">
          Registrarse
        </button>
        <hr />
        <button type="button">
          <Link to={"/"}>¿Ya tienes una cuenta?</Link>
        </button>
      </form>
    </div>
  );
};

export default Registro;
