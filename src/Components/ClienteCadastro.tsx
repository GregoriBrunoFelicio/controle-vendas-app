import axios from "axios";
import { useEffect, useState } from "react"
import styled from "styled-components";
import { Cliente } from "../Models/Cliente";

export const ClienteCadastro = () => {

  const [cliente, setCliente] = useState<Cliente>({
    id: 0,
    nome: '',
    sobrenome: '',
    tipoClienteId: 1,
    compras: [],
    totalDivida: 0
  });

  const salvarCliente = () => {
    axios.post('https://localhost:7299/Cliente', cliente)
      .then(response => {
        console.log(response)
        resetarForm();
      });
  }

  const handleEvent = (event: any) => {
    setCliente({ ...cliente, [event.target.name]: event.target.value })
  }

  const resetarForm = () => setCliente({
    id: 0,
    nome: '',
    sobrenome: '',
    tipoClienteId: 0,
    compras: [],
    totalDivida: 0
  });

  return <form>
    <div className="form-group col-12">
      <div className="col-6 mb-2">
        <input className="form-control" placeholder="Nome" name="nome" onChange={handleEvent} value={cliente?.nome} />
      </div>
      <div className="col-6 mb-2">
        <input className="form-control" placeholder="Sobrenome" name="sobrenome" onChange={handleEvent} value={cliente?.sobrenome} />
      </div>
      <div className="col-3">
        <select className="form-control">
          <option>Caminoneiro</option>
          <option>Escritorio</option>
          <option>Outros</option>
        </select>
      </div>
      <div className="mt-2">
        <button className="btn btn-lg btn-primary" onClick={salvarCliente}>Salvar</button>
      </div>
    </div >
  </form>
}
