import Estructura from "../paginas/Estructura";
import Inicio from "../paginas/inicio";
import Productos from "../paginas/productos";
import Servicios from "../paginas/Servicios";
import Contacto from "../paginas/Contacto";
import Prueba from "../paginas/prueba";
import { createBrowserRouter } from "react-router-dom";
export const Rutas = createBrowserRouter([
  {
    path: "/",
    element: <Estructura />,
    children: [
      { path: "/", element: <Inicio /> },
      { path: "/inicio", element: <Inicio /> },
      { path: "/productos", element: <Productos /> },
      { path: "/contacto", element: <Contacto />},
      { path: "/servicios", element: <Servicios /> },
      { path: "/prueba", element: <Prueba /> },
    ],
  },
]);

