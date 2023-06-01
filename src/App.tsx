import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Menu } from './Components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Produto } from './Components/Produto';
import { ClienteCadastro } from "./Components/ClienteCadastro";
import { Compras } from "./Components/Compras";
import { ToastContainer } from "react-bootstrap";

function App() {
  return <>
    <div className='col-12 m-2'>
      <h4>Controle de Vendas</h4>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<Compras />} />
            <Route path="clientes" element={<ClienteCadastro />} />
            <Route path="produtos" element={<Produto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </>
}

export default App;
