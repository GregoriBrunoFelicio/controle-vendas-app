import { useState } from "react"
import { Cliente } from "../Models/Cliente";
import { ClienteLista } from "./ClienteLista";
import { Button, Form } from "react-bootstrap";
import { TipoClienteSelect } from './TipoClienteSelect';
import { ClienteService } from '../Services/ClienteService';
import { ToastContainer } from 'react-toastify';
import { ToastService } from './Shared/ToastService';
import { TipoCliente } from "../Models/TipoCliente";

export const ClienteCadastro = () => {
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  const [loading, setLoading] = useState(false);
  const [editando, setEditando] = useState(false);
  const clienteService = new ClienteService();
  const toastService = new ToastService();

  const salvar = () => {
    if (editando) {
      editar()
    } else {
      criar()
    }
  }

  const criar = () => {
    setLoading(true)
    clienteService.criar(cliente)
      .then(() => {
        setLoading(false);
        limparFormulario();
        toastService.notificarSucesso('Cliente criado com sucesso');
      }).catch(() => {
        setLoading(false)
        toastService.notificarFalha('Erro ao salvar cliente');
      }
      )
  }

  const editar = () => {
    setLoading(true)
    clienteService.editar(cliente)
      .then(() => {
        setEditando(false)
        setLoading(false);
        limparFormulario();
        toastService.notificarSucesso('Cliente editado com sucesso');
      }).catch(() => {
        setLoading(false)
        toastService.notificarFalha('Erro ao editar cliente');
      })
  }

  const handleEvent = (event: any) => {
    setCliente({ ...cliente, [event.target.name]: event.target.value });
  }

  const limparFormulario = () => setCliente({
    id: 0,
    nome: '',
    sobrenome: '',
    tipoClienteId: 0,
    compras: [],
    totalDivida: 0,
    tipoCliente: {} as TipoCliente
  });

  const setTipoCliente = (tipoClienteId: number) => {
    setCliente({ ...cliente, tipoClienteId: tipoClienteId })
  }

  const preecherFormulario = (cliente: Cliente) => {
    setEditando(true)
    setCliente(cliente)
  }

  const validarFormulario = () => {
    if (cliente?.tipoClienteId === 0) {
      return false;
    }
    if (!cliente.nome || !cliente.sobrenome) {
      return false;
    }
    else {
      return true;
    }
  }

  return <>
    <ToastContainer />
    <div className="form-group col-12">
      <Form className='col-12'>
        <Form.Group className='col-3 m-2'>
          <Form.Control type='text' placeholder='Nome' name="nome" onChange={handleEvent} value={cliente?.nome} />
        </Form.Group>
        <Form.Group className='col-3 m-2'>
          <Form.Control type='text' placeholder='Sobrenome' name="sobrenome" onChange={handleEvent} value={cliente?.sobrenome} />
        </Form.Group>
        <Form.Group className='col-3 m-2'>
          <TipoClienteSelect setTipoCliente={setTipoCliente} loading={loading} />
        </Form.Group>
        <Form.Group className='col-3 m-2'>
          <Button size="lg" onClick={salvar} disabled={loading || !validarFormulario()}>Salvar</Button>
        </Form.Group>
      </Form>
      <ClienteLista loading={loading} preecherFormulario={preecherFormulario} />
    </div >
  </>
}


