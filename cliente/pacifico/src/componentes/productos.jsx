
function Productos({ imagen, titulo, descripcion}) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img src={imagen} alt={titulo} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{titulo}</h2>
                    <p>{descripcion}</p>                    
                </div>
            </div>            
        </>
    );
}

export default Productos;
