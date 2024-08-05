import React from "react";
import { Link } from 'react-router-dom';

function Pie() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <img src='/icono.png' width={100}></img>    
    <p>
      Redes y Tecnología del Pacífico
      <br />
      Soluciones inteligentes que transforman.
    </p>
  </aside>
  
  <nav>
    <h6 className="footer-title">Empresa</h6>    
    <Link className="link link-hover" to="/contacto">Contacto</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Conoce más</h6>
    <a className="link link-hover">Políticas de privacidad</a>
    <a className="link link-hover">Términos y condiciones</a>    
  </nav>
</footer>
  );
}
export default Pie;