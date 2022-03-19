import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function DetalleProducto() {

    const [producto, setProducto] = useState({});

    const parametros = useParams();

    useEffect(() => {
        axios.get('https://my-demo-49b33-default-rtdb.europe-west1.firebasedatabase.app/historial.json?orderBy="$key"&equalTo="' + parametros.id + '"')
            .then(response => {
                setProducto(response.data[parametros.id]);
            });
    }, [parametros]);

    const Borrar = () => {
        axios({
            method: 'delete',
            url: 'https://my-demo-49b33-default-rtdb.europe-west1.firebasedatabase.app/historial/' + parametros.id + '.json'
        });
        alert("Compra borrada con éxito!!");
    }

    return (
        <>
            <h3>ESTA ES LA FICHA DE LA COMPRA CON ID={parametros.id}</h3>
            <p>Nombre: {producto.nombre}</p>
            <p>Mail: {producto.mail}</p>
            <p>Ciudad: {producto.ciudad}</p>
            <p>direccion: {producto.direccion}</p>
            <p>CP: {producto.CP}</p>
            <p>Fecha de compra: {producto.fecha}</p>
            <p>Productos: {producto.productos}</p>
            <p>Unidades: {producto.unidades}</p>
            <p>Precio: {producto.precio}</p>
            <NavLink to='/historial'  >
                <Button variant="secondary" onClick={Borrar}>
                    Eliminar compra del historial
                </Button>
            </NavLink>
            <p></p>
            <NavLink to='/historial'  >
                <Button variant="primary">
                    Volver
                </Button>
            </NavLink>
        </>
    )
}

export default DetalleProducto;