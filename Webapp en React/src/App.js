import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrito from './components/contenido/Carrito';
import Home from './components/contenido/Home';
import Historial from './components/contenido/Historial';
import ErrorPage from './components/contenido/ErrorPage';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import DetalleProducto from './components/productos/DetalleProducto';
import Login from './components/login/Login';
import Registro from './components/login/Registro';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [, setLogin] = useState(false);
  const [loginData, setLoginData] = useState({});
  
  const actualizaLogin = (valor, datos) => {
    setLogin(valor);
    setLoginData(datos);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito idToken={loginData.idToken}/>} />
        <Route path="/historial/:id" element={<DetalleProducto idToken={loginData.idToken} />} />
        <Route path="/historial" element={<Historial idToken={loginData.idToken} />} />
        <Route path="/login" element={<Login actualizaLogin={actualizaLogin} />} />
        <Route path="/registro" element={<Registro actualizaLogin={actualizaLogin} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
