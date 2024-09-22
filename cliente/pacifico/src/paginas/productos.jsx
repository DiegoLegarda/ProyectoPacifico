import React from 'react';
//import {Button, Card, Container } from 'react-bootstrap';


function Acerca() {
    return (
        <>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
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
        </>
    )
}
export default Acerca;