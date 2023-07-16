import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/carrito.js";

function App() {

  const [ productos, guardarProductos] = useState([
    { id: 1, nombre: 'camisa reactjs', precio: 50 },
    { id: 2, nombre: 'camisa angular', precio: 20 }
  ]);
  
  const [ carrito, agregarProducto ] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment >
     <Header 
      titulo="Tienda Virtual"
      />

      <h1> Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id} 
          producto={producto}
          carrito={carrito}
          //se pasan los valores directos del state.
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}
     <Footer
      fecha={fecha}
      />
      <Carrito
      //se agrega del usestate, el valor inicial es un array vacío.
      carrito={carrito}
      agregarProducto={agregarProducto}
      />
    </Fragment>
  );
}

export default App;
