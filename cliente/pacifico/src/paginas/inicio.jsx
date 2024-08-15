import React from 'react';
import estilos from "../Estilos/inicio.module.css";
import Card from '../componentes/card';

const Inicio = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="carrusel2.jpeg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="carrusel1.jpeg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <img src='Expertos.jpeg'></img>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <Card
                    title="PRODUCTOS"
                    imageUrl="ProductosInicio.jpeg"
                    link="/productos"
                />
                <Card
                    title="SERVICIOS"
                    imageUrl="Expertos.jpeg"
                    link="/servicios"
                />
            </div>
        </>
    );
}

export default Inicio;
