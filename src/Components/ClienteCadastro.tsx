import axios from "axios";
import { useEffect, useState } from "react"
import { Cliente } from "../Models/Cliente";
import { TipoClienteSelect } from "./TipoCliente";
import { ClienteLista } from "./ClienteLista";
import { Loading } from "./Shared/Loading";
import { Button } from "react-bootstrap";

export const ClienteCadastro = () => {

  const [cliente, setCliente] = useState<Cliente>({} as Cliente);
  const [loading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const save = () => {
    setLoading(true)
    axios.post('https://localhost:7299/Cliente', cliente)
      .then(() => {
        setLoading(false);
        resetForm();
      })
  }

  const handleEvent = (event: any) => {
    setCliente({ ...cliente, [event.target.name]: event.target.value })
  }

  const resetForm = () => setCliente({
    id: 0,
    nome: '',
    sobrenome: '',
    tipoClienteId: 0,
    compras: [],
    totalDivida: 0
  });

  const setTipoCliente = (tipoClienteId: number) => {
    cliente.tipoClienteId = tipoClienteId;
  }

  const fillForm = (cliente: Cliente) => {
    console.log(cliente)
    setCliente(cliente)
    setIsUpdate(true)
  }

  return <>
    <div className="form-group col-12">
      <div className="col-6 mb-2">
        <input className="form-control" placeholder="Nome" name="nome" onChange={handleEvent} value={cliente?.nome} />
      </div>
      <div className="col-6 mb-2">
        <input className="form-control" placeholder="Sobrenome" name="sobrenome" onChange={handleEvent} value={cliente?.sobrenome} />
      </div>
      <div className="col-3">
        <TipoClienteSelect setTipoCliente={setTipoCliente} />
      </div>
      <div className="col-6 mt-2">
        <Button size="lg" onClick={save} disabled={loading}>Salvar</Button>
      </div>
      <ClienteLista loading={loading} fillForm={fillForm} />
    </div >

  </>
}
