import { Cliente } from './Components/Cliente';
import styled, { css } from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ClienteCompras } from './Components/ClienteCompras';
import { Menu } from './Components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='col-12 m-2'>
      <h4>Controle de Vendas - Nelzeli Felicio</h4>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<ClienteCompras />} />
            <Route path="clientes" element={<Cliente />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
