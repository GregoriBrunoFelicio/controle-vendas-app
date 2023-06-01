import axios from 'axios';
import { useEffect, useState } from "react"
import { Cliente } from "../Models/Cliente";
import { ClienteLista } from "./ClienteLista";
import { Button, Form, Modal } from "react-bootstrap";
import { TipoCliente } from '../Models/TipoCliente';
import { TipoClienteSelect } from './TipoClienteSelect';
import { ClienteService } from '../Services/ClienteService';

export const ClienteCadastro = () => {
  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  const [loading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const clienteService = new ClienteService();

  const save = () => {
    if (isUpdate) {
      update()
    } else {
      create()
    }
  }

  const create = () => {
    setLoading(true)
    clienteService.criar(cliente)
      .then(() => {
        setLoading(false);
        resetForm();
      }).catch(() => setLoading(false))
  }

  const update = () => {
    setLoading(true)
    clienteService.editar(cliente)
      .then(() => {
        setIsUpdate(false)
        setLoading(false);
        resetForm();
      }).catch(() => setLoading(false))
  }

  const handleEvent = (event: any) => {
    setCliente({ ...cliente, [event.target.name]: event.target.value });
  }

  const resetForm = () => setCliente({
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

  const fillForm = (cliente: Cliente) => {
    setIsUpdate(true)
    setCliente(cliente)
  }

  const isFormValid = () => {
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
          <Button size="lg" onClick={save} disabled={loading || !isFormValid()}>Salvar</Button>
        </Form.Group>
        <ClienteLista loading={loading} fillForm={fillForm} />
      </Form>
    </div >
  </>
}
