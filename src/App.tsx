import { Clientes } from './Components/Clientes';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ClienteCompras } from './Components/ClienteCompras';
import { Menu } from './Components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Produto } from './Components/Produto';



function App() {
  return (
    <div className='col-12 m-2'>
      <h4>Controle de Vendas - Nelzeli Felicio</h4>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<ClienteCompras />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="produtos" element={<Produto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
