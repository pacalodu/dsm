import './ImagenProducto.css';
import Image from 'react-bootstrap/Image';

function ImagenProducto(props) {

    const url = props.imagen;

    return (
        <div className='producto-imagen'>
            <Image fluid src={url} />
        </div>
    )
}

export default ImagenProducto;