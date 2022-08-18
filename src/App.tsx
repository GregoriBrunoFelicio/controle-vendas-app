import { Cliente } from './Components/Cliente';
import styled, { css } from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ClienteCompras } from './Components/ClienteCompras';
import { Menu } from './Components/Menu';


function App() {
  return (
    <Container>
      <Titulo>Controle de Vendas - Nelzeli Felicio</Titulo>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<ClienteCompras />} />
            <Route path="clientes" element={<Cliente />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin:10px auto 10px 10px;
  max-width:1920px;
`

const Titulo = styled.h2`
  
`
