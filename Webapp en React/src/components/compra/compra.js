import axios from 'axios';

function Compra(props) {

    const nombre = props[0].nombre;
    const mail = props[0].mail;
    const ciudad = props[0].ciudad;
    const direccion = props[0].direccion;
    const CP = props[0].CP;
    const fecha = props[0].fecha;
    const productos = props[0].productos;
    const precio = props[0].precio;
    const unidades = props[0].unidades;

    axios({
        method: 'post',
        url: 'https://my-demo-49b33-default-rtdb.europe-west1.firebasedatabase.app/historial.json',
        data: {
          nombre: nombre,
          mail: mail,
          ciudad: ciudad,
          direccion: direccion,
          CP: CP,
          fecha: fecha,
          productos: productos,
          precio: precio,
          unidades: unidades
        }
      });
}


export default Compra;