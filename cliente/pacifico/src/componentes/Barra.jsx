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
    <div className="navbar bg-base-100 flex flex-col md:flex-row items-center justify-between p-4">
      <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
        <div className={styles.logo}>
          <img src="/Encabezado.jpeg" alt="Logo de la página" className="h-12 md:h-16" />
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <li><Link to="/inicio" className="text-lg md:text-base">Inicio</Link></li>
          <li><Link to="/productos" className="text-lg md:text-base">Productos</Link></li>
          <li><Link to="/servicios" className="text-lg md:text-base">Servicios</Link></li>
          <li><Link to="/contacto" className="text-lg md:text-base">Contacto</Link></li>
        </ul>
      </div>
    </div>
  </header>

  );
};
export default Barra;
