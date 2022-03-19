import './Header.css';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className='header'>
            <h2>Realización y gestión de productos</h2>
            <nav>
                <Link style={{ color: '#FFF' }} to="/">Inicio</Link> | {'   '}
                <Link style={{ color: '#FFF' }} to="/carrito">Carrito</Link> | {'   '}
                <Link style={{ color: '#FFF' }} to="/historial">Historial</Link> | {'   '}
                <Link style={{ color: '#FFF' }} to="/login">Login</Link> | {'   '}
                <Link style={{ color: '#FFF' }} to="/registro">Registro</Link>

            </nav>
        </div>
    )
}

export default Header;