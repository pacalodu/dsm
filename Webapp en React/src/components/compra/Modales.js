import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Compra from '../compra/compra';
import React from 'react'
import axios from 'axios';

function Modales(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const pedidoClose = () => setShow1(false);

    const [show2, setShow2] = useState(false);
    const otroPedidico = () => setShow2(true);
    const otroPedidicoClose = () => {
        window.location.href = "../";
        setShow2(false)
    };

    const otroPedidicoClose1 = () => {
        window.location.reload();
        setShow2(false)
    };

    const RealizarPedido = () => {
        setShow1(true);
        handleClose();
    }

    const compra = [];
    const [Nombre, setNombre] = useState("");
    const [Mail, setMail] = useState("");
    const [City, setCity] = useState("");
    const [Address, setAddress] = useState("");
    const [CP, setCP] = useState("");
    const [productos, setProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [unidades, setUnidades] = useState('');

    useEffect(() => {
        axios.get('https://my-demo-49b33-default-rtdb.europe-west1.firebasedatabase.app/carrito.json')
            .then(response => {

                setProducto(response.data.productos);
                setPrecio(response.data.precio);
                setUnidades(response.data.unidades);
            });
    }, []);

    const RealizarCompra = () => {

        pedidoClose();
        handleClose();

        if (props.idToken == null) {
            alert('Inicia sesión primero!!! Compra NO realizada.');
        } else {
            axios({
                method: 'put',
                url: 'https://my-demo-49b33-default-rtdb.europe-west1.firebasedatabase.app/carrito.json?auth=' + props.idToken,
                data: {
                    productos: "",
                    precio: "",
                    unidades: "",
                },
            }).then(response => {
                console.log("pedido!");
                otroPedidico();
                compra.push({
                    nombre: Nombre,
                    mail: Mail,
                    ciudad: City,
                    direccion: Address,
                    CP: CP,
                    fecha: new Date().toLocaleString('eu-Es'),
                    productos: productos,
                    precio: precio,
                    unidades: unidades,
                });

                Compra(compra);

            });
        }
    }

    return (

        <><h2><Button variant="primary" onClick={handleShow}>Realizar Pedido</Button></h2>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Realizar Pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Está seguro que quiere continuar con el pedido?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Volver
                    </Button>
                    <Button variant="primary" onClick={RealizarPedido}>
                        Continuar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show1} onHide={pedidoClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Información adicional</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName" >
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                value={Nombre}
                                onChange={e => {
                                    setNombre(e.target.value);
                                }}
                                type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                value={Mail}
                                onChange={e => {
                                    setMail(e.target.value);
                                }}
                                type="email"
                                placeholder="example@example.com" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                value={City}
                                onChange={e => {
                                    setCity(e.target.value)
                                }}
                                type="text" placeholder="City" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                value={Address}
                                onChange={e => {
                                    setAddress(e.target.value)
                                }}
                                type="text" placeholder="Enter your address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                value={CP}
                                onChange={e => {
                                    setCP(e.target.value);
                                }}
                                type="number" placeholder="Enter your Zip code" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={pedidoClose}>
                        Volver
                    </Button>
                    <Button variant="primary" onClick={RealizarCompra} >
                        Realizar Pedido
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={otroPedidicoClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmación de pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>Pedido realizado con éxito. Muchas gracias!!, ¿Quiere realizar otro pedido?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={otroPedidicoClose1}>
                        Volver
                    </Button>
                    <NavLink to="../">
                        <Button variant="primary" onClick={otroPedidicoClose}>
                            Sí
                        </Button>
                    </NavLink>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modales;