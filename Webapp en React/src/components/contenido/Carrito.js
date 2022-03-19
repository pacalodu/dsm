import Modales from '../compra/Modales';
import '../productos/Producto.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Carrito(props) {

    const [productos, setProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [unidades, setUnidades] = useState('');

    useEffect(() => {
        axios.get('https://my-demo-49b33-default-rtdb.europe-west1.firebasedatabase.app/carrito.json')
            .then(response => {

                setProducto(response.data.productos);
                setPrecio(response.data.precio);
                setUnidades(response.data.unidades);
            });
    }, []);

    return (
        <>
            <p>Productos: {productos}</p>
            <p>Unidades: {unidades}</p>
            <p>Precio: {precio}</p>
            <Modales idToken={props.idToken}></Modales>
        </>
    )
}

export default Carrito;