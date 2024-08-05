import React from "react";
import { Link } from 'react-router-dom';

function Pie() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-10">
    <aside className="flex flex-col items-center md:items-start space-y-2">
      <img src='/icono.png' className="w-16 md:w-24" alt="Icono de la empresa" />
      <p className="text-center md:text-left mt-2 md:mt-0">
        Redes y Tecnología del Pacífico
        <br />
        Soluciones inteligentes que transforman.
      </p>
    </aside>
    
    <nav className="flex flex-col items-center md:items-start">
      <h6 className="footer-title">Empresa</h6>    
      <Link className="link link-hover" to="/contacto">Contacto</Link>
    </nav>
    <nav className="flex flex-col items-center md:items-start">
      <h6 className="footer-title">Conoce más</h6>
      <a className="link link-hover">Políticas de privacidad</a>
      <a className="link link-hover">Términos y condiciones</a>    
    </nav>
  </footer>
  );
}
export default Pie;