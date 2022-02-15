function Entrada(props) {

    const actual = props.actual;
    const x37 = props.x37;
    const x42 = props.x42;

    function functx37() {
        document.getElementById("x37").style.borderColor = "green";
        document.getElementById("x42").style.borderColor = "red";
        document.getElementById("out").style.display = "block";
        document.getElementById("out").innerHTML = x37;
        document.getElementById("out1").style.display = "none";
    }
    function functx42() {
        document.getElementById("x37").style.borderColor = "red";
        document.getElementById("x42").style.borderColor = "green";
        document.getElementById("out").style.display = "none";
        document.getElementById("out1").style.display = "block";
        document.getElementById("out1").innerHTML = x42;
    }
    return (

        <div className='Number'>
            <div className='producto__descripcion'>
                <h2>Num: {actual}</h2>
            </div>
            <div className='producto__descripcion'>
                <button id="x37" style={{
                    borderColor: 'green', font: 'inherit',
                    padding: '0.5rem',
                    width: '10rem'
                }} onClick={functx37}>x37</button>
                <button id="x42" style={{
                    borderColor: 'red', font: 'inherit',
                    padding: '0.5rem',
                    width: '10rem'
                }} onClick={functx42}>x42</button>
                <div className='producto__descripcion'>
                <h2 type="text" id="out" >{x37}</h2>
                <h2 type="text" id="out1" hidden>{x42}</h2>
                </div>
            </div>
        </div>
    )
}

export default Entrada;