import Productos from '../productos/Productos';
import { useState } from 'react';

function Home() {

    const [loginData] = useState({});

    return (
        <>
            <h2>BIENVENIDOS A NUESTRO PORTAL</h2>
            <h4>Esta es la página principal donde se encuentran todos los productos</h4>
            <p>Para añadir al carrito simplemente presione en "+", para eliminar pulse "-".</p>
            <Productos idToken={loginData.idToken} />
        </>
    )
}

export default Home;