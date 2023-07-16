import React from 'react'

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {id, nombre, precio} = producto;

    //agregar producto al carro.
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            //se copian lo que hay en el carrito y el producto, así se mantienen los productos en el carrito.
            ...carrito,
            producto
        ]);
    }
    //elimina un producto del carrito.
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        //colocar los productos en el state
        agregarProducto(productos);
    }
    return (
         <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {/* en caso de que productos exista, se tiene el botón para comprar  */}
            {productos
            ?   (
                <button
                type="button"
                //captura el id del destructuring.
                onClick={ () => seleccionarProducto(id) }
                >
                Comprar   
                </button>
                )
            :    (
                <button
                type="button"
                onClick={() => eliminarProducto(id)}
                >
                Eliminar   
                </button>
                )
            }
         </div>
     );
}
 
export default Producto;