import { Link } from "react-router-dom";
import "./Panel.css";

const Panel = () => {
  return (
    <div className="panel-container">
      <div className="panel">
        <h2>Panel de Control</h2>
        <button className="control-button">Gestion Estudiantes</button>
        <button className="control-button">Gestión Materias</button>
        <button className="control-button">
          <Link to={'/'}>Cerrar Sesion</Link>
        </button>
      </div>
      <section className="contenido">
        <h1>Métricas de gestión Escolar</h1>
      </section>
    </div>
  );
};

export default Panel;
