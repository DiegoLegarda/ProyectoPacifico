import React, { useState } from 'react';
import CardCompra from '../componentes/cardcompra';
import FormLogin from '../componentes/formLogin';
import Formulario from '../componentes/formulario';
import FormProtegido from '../componentes/formProtegido';
import FormProtegidoBD from '../componentes/formManejoBaseDatos';
import ContadorClicks from '../componentes/contadorClicks';
import ImagenForm from '../componentes/imagenForm'
import DocumentoForm from '../componentes/documentoForm'
function Home() {
  const [autenticacion, setAutenticacion] = useState(false);

  const handleLogin = () => {
    setAutenticacion(true);
  };
  return (
    <div className="container">
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      <ImagenForm />
      <DocumentoForm />
    </div>
  )
  /*
  return (
    <div className="App">
      <header className="App-header" />
      <h1>Home</h1>
      {autenticacion ? (
        <FormProtegidoBD />
      ) : (
        <FormLogin onLogin={handleLogin} />
      )}    
    </div>
  );*/
}

export default Home;