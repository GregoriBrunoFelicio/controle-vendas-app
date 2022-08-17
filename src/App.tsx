import { Cliente } from './Components/Cliente';
import styled, { css } from 'styled-components'

function App() {
  return (
    <Container>
      <Titulo>Controle de Vendas - Nelzeli Felicio</Titulo>
      <Cliente/>
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