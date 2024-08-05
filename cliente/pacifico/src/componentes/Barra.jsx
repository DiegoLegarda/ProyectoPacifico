import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../Estilos/barra.module.css";
//import "../index.css";


const Barra = () => {

  const [tema, setTema] = React.useState("ligth");
  const [estado, setEstado] = React.useState(true);

  const funcionManejo = () => {
    setEstado(!estado);
    if (estado === true) {
      console.log("compra realizada");
    }
    else {
      console.log("compra cancelada");

    }
  }
  const temaLigth = () => {
    setTema("ligth");
  }

  const temaDark = () => {
    setTema("dark");
  }

  return (

    <header>

      <div class="navbar bg-base-100">
        <div class="flex-1">
          <div className={styles.logo}>
            <img src="/Encabezado.jpeg" alt="Logo de la página" />
          </div>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
          
        </div>
      </div>
    </header>

  );
};
export default Barra;
