import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../productos/Producto.css';

function Historial(props) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        if (props.idToken == null){
            alert('Inicia sesión primero!!!');
        }else{
        axios.get('https://my-demo-49b33-default-rtdb.europe-west1.firebasedatabase.app/historial.json?auth=' + props.idToken)
            .then(response => {
                let arrayProductos = [];
                for (let key in response.data) {
                    arrayProductos.push({
                        id: key,
                        precio: response.data[key].precio,
                        productos: response.data[key].productos,
                        unidades: response.data[key].unidades
                    });
                }
                setProductos(arrayProductos);
            }).catch(error => {
                
            }, []);
        }
    }, [props]);

    return (
        <>
            <h2>Historial de pedidos</h2>
            <p>Aquí encontrará el historial de los pedidos realizados.</p>
            {productos.map((elemento) => (
                <div className='producto' key={elemento.id}>
                    <div className='producto__descripcion'>
                        <h2>ID compra: {elemento.id} ---
                            <NavLink style={{fontWeight: "bold",color: "white", textDecoration: "none"}} 
                            to={`/historial/${elemento.id}`}>VER DETALLE</NavLink>{' '}
                        </h2>
                    </div>
                </div>
            ))}

        </>
    )
}

export default Historial;