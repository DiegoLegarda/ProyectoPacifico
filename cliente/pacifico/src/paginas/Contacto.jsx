import React from 'react';
import { useContext } from 'react';
import { temaContexto } from '../componentes/Tema';



function Registro() {
    const tema = useContext(temaContexto);
    return (
        <>
            <form>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Nombre y apellido" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Correo" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.5 1.5 0 011.61-.33c1.12.45 2.33.68 3.58.68a1.5 1.5 0 011.5 1.5v3.5A1.5 1.5 0 0118 22a18 18 0 01-16.5-16.5A1.5 1.5 0 013 4h3.5a1.5 1.5 0 011.5 1.5c0 1.25.23 2.46.68 3.58a1.5 1.5 0 01-.33 1.61l-2.2 2.2z" />
                    </svg>

                    <input type="phone" className="grow" placeholder="Celular" />
                </label>

            </form>
        </>


    );
}

export default Registro;