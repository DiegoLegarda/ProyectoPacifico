import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../Estilos/barra.module.css";
//import "../index.css";


const Barra = () => {

  const [tema, setTema] = React.useState("ligth");
  const [isOpen, setIsOpen] = React.useState(false);

  const temaLigth = () => {
    setTema("ligth");
  }

  const temaDark = () => {
    setTema("dark");
  }


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbar bg-base-100 flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex-1 flex justify-between md:justify-start mb-4 md:mb-0 w-full md:w-auto">
          <div className={styles.logo}>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="logosinfondo.png"
                  alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Redes y Tecnología del Pacifico</h2>
                <p>Soluciones inteligentes que transforman</p>
            
              </div>
            </div>
          </div>
          <button
            className="block md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${isOpen ? 'block' : 'hidden'
            } md:block flex-none w-full md:w-auto`}
        >
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
