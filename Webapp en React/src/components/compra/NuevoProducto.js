import './NuevoProducto.css';
import axios from 'axios';

function NuevoProducto(props) {
    const productos = [];
    const precio = [];
    const unidades = [];
    
    let num = 0;
    let prtotal = 0;
    for (let key in props) {
        productos[num] = props[key].nombre;
        precio[num] = props[key].precio;
        unidades[num] = props[key].unidades;
        prtotal += precio[num];
        num++;
    }

    axios({
        method: 'put',
        url: 'https://my-demo-49b33-default-rtdb.europe-west1.firebasedatabase.app/carrito.json',
        data: {
            productos: productos.join(),
            precio: prtotal,
            unidades: unidades.join(),
        },
    });

}


export default NuevoProducto;