import './App.css';
import Entradas from './components/Entradas/Entradas';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import NuevoNumber from './components/NuevaEntrada/NuevaEntrada';
import { useState } from 'react';

function App() {

  const [entradas, SetEntradas] = useState(
    [
      {
        id: 1,
        number: 1
      }
    ]);

  const addEntrada = (entrada) => {
    SetEntradas([entrada, ...entradas]);
  };

  return (
    <div>
      <Header />
      <NuevoNumber addEntrada={addEntrada} />
      <Entradas entradas={entradas} />
      <Footer />
    </div>
  );
}

export default App;
