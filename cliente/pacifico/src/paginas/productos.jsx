import React from 'react';
//import {Button, Card, Container } from 'react-bootstrap';
import Productos from '../componentes/productos';
import { Link } from 'react-router-dom';

function Acerca() {
    return (
        <>
            <div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="Prod1.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">UPS</h2>
                        <p>Variedad en marcas y modelos con diferentes potencias. Interactivas y online</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">¿Quieres que te llamemos?</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="Prod2.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Comprar con un asesor</h2>
                        <p></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">¿Quieres que te llamemos?</button>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <img src='Productos1.jpeg' alt='productos'></img>
            </div>
            <div>
                <img src='Productos2.jpeg' alt='productos'></img>
            </div>
            <div>
                <img src='Productos3.jpeg' alt='productos'></img>
            </div>
            <div>
                <img src='Productos4.jpeg' alt='productos'></img>
            </div>
            <div className="p-8 bg-gradient-to-r from-blue-100 to-blue-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Productos
                        imagen="Prod1.png"
                        titulo="UPS"
                        descripcion="Variedad en marcas y modelos con diferentes potencias. Interactivas y online."
                    />
                    <Productos
                        imagen="Prod2.png"
                        titulo="Red UPS"
                        descripcion="Variedad en marcas y modelos con diferentes potencias. Interactivas y online."
                    />
                    <Productos
                        imagen="Productos.jpeg"
                        titulo="Bateria UPS"
                        descripcion="Variedad en marcas y modelos con diferentes potencias. Interactivas y online."
                    />
                </div>

                {/* Contenedor del botón centrado */}
                <div className="flex justify-center mt-8">
                    <Link to="/contacto">
                        <button className="btn btn-primary">Quieres que te llamemos</button>
                    </Link>
                </div>
            </div>

        </>
    )
}
export default Acerca;