import './Producto.css';
import ImagenProducto from './ImagenProducto';
import Button from 'react-bootstrap/Button';
import NuevoProducto from '../compra/NuevoProducto';
const datos = [];

function Producto(props) {

    const nombre = props.nombre;
    const precio = props.precio;
    const imagen = props.imagen;
    var unidades = 0;

    const borrarProducto = () => {
        unidades--
        if (unidades > 0) {
            datos[nombre] = {
                nombre: props.nombre,
                precio: props.precio * unidades,
                imagen: props.imagen,
                valor: props.id,
                unidades: unidades
            };
            NuevoProducto(datos);
        } else {
            delete datos[nombre];
            NuevoProducto(datos);
            alert('No hay más unidades en el carrito!!')
        }
    }

    const addProducto = () => {
        unidades++;
        datos[nombre] = {
            nombre: props.nombre,
            precio: props.precio * unidades,
            imagen: props.imagen,
            valor: props.id,
            unidades: unidades
        };
        NuevoProducto(datos);
    }
    
    return (
        <div className='producto'>
            <ImagenProducto imagen={imagen} />
            <div className='producto__descripcion'>
                <h2>{nombre} <Button variant="danger" onClick={borrarProducto}>-</Button>{' '}
                    <Button variant="success" onClick={addProducto}>+</Button></h2>
                <div className='producto__precio' > Precio: {precio}</div>
            </div>
        </div>
    )
}

export default Producto;