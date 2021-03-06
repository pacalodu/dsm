import { useState } from 'react';
import './NuevaEntrada.css';

const NuevoEntrada = (props) => {

    const [Number, setNumber] = useState('');

    const NumberHandler = (event) => {
        setNumber(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const datos = {
            id: Math.random(),
            number: parseInt(Number),
            
        };
        props.addEntrada(datos);
    }

    return (
        <form onKeyUp={submitHandler}>
            <div className='nuevoEntrada__controls'>
                <div className='nuevoEntrada__control'>
                    <label>Number</label>
                    <input type='number' min='1' step='1' onChange={NumberHandler} value={Number} />
                </div>
            </div>
        </form>
    )
}

export default NuevoEntrada;