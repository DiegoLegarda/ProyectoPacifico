import React from 'react';
import { useContext } from 'react';
import { temaContexto } from '../componentes/Tema';



function Registro() {
    const tema = useContext(temaContexto);
    return (
        <>
        <div>
            <img src='Servicios.jpeg' alt='servicios'></img>
        </div>
        <div>
            <img src='Servicios1.jpeg' alt='servicios'></img>
        </div>
        <div>
            <img src='Servicios2.jpeg' alt='servicios'></img>
        </div>
        <div>
            <img src='Servicios3.jpeg' alt='servicios'></img>
        </div>
        <div>
            <img src='Servicios4.jpeg' alt='servicios'></img>
        </div>
        </>
        

    );
}

export default Registro;