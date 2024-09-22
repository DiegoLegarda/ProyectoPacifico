import React from 'react';
import estilos from "../Estilos/inicio.module.css";
import Card from '../componentes/card';

const Inicio = () => {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="Productos3.jpeg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Cableado</h2>
                    <p>Hacemos cableado</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Contacto</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inicio;
