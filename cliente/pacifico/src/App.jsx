import './App.css'
import Home from './paginas/Home';

import { Rutas } from './componentes/Rutas';
import { RouterProvider } from "react-router-dom";
import CardCompra from './componentes/cardcompra';
function App() {

  return (
    <>
    <RouterProvider router={Rutas} />    
    </>
  )
}

export default App
