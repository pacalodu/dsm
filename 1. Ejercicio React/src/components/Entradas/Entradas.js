import Entrada from './Entrada';

function Entradas(props) {
    return (
        // console.log(props),
        
        <div>
            <Entrada
                actual={props.entradas[0].number}
                x37={props.entradas[0].number*37}
                x42={props.entradas[0].number*42}
            />
            
        </div>
    )
    
}
 
export default Entradas;