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
                <img src='Expertos.jpeg' alt='servicios'></img>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="1.jpg"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">PRODUCTOS</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Ver más</button>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="2.jpg"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">SERVICIOS</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Ver más</button>
                    </div>
                </div>
            </div>
            <div>
                <img src='Metodologia.jpg' alt='servicios'></img>
            </div>
            <div>
                <img src='Metodologia1.jpg' alt='servicios'></img>
            </div>
            <div>
                <img src='Empresas1.jpg' alt='servicios'></img>
            </div>
            <div>
                <img src='Empresas2.jpg' alt='servicios'></img>
            </div>
        </>
    );
}

export default Inicio;
