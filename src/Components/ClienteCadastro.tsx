import axios from "axios";
import { useEffect, useState } from "react"
import styled from "styled-components";
import { Cliente } from "../Models/Cliente";

export const ClienteCadastro = () => {

    // const [tiposCliente, setaTipoCliente] = useState<any>([]);

    // useEffect(() => {
    //      axios.get('https://localhost:7299/Cliente')
    //         .then(response => {
    //             setaTipoCliente([...tiposCliente, ...response.data])
    //             console.log('chamou tipos clientes 1 vez com sucesso');
    //         })
    // }, [])

    const [cliente, setCliente] = useState<Cliente>({
        nome: '',
        sobrenome: '',
        tipoClienteId: 1
    });

    const salvarCliente = () => {
        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };
        axios.post('https://localhost:7299/Cliente', cliente, { headers })
            .then(response => console.log(response));


        console.log(cliente)
    }

    const handleEvent = (event: any) => {
        setCliente({ ...cliente, [event.target.name]: event.target.value })
    }

    const resetarForm = () => setCliente({
        nome: '',
        sobrenome: '',
        tipoClienteId: 0
    });

    return <Form>
        <Input placeholder="Nome" name="nome" onChange={handleEvent} value={cliente?.nome} />
        <Input placeholder="Sobrenome" name="sobrenome" onChange={handleEvent} value={cliente?.sobrenome} />
        <SelectInput>
            <option>Caminoneiro</option>
            <option>Escritorio</option>
        </SelectInput>
        <div>
            <BotaoSalvar onClick={salvarCliente}>Salvar</BotaoSalvar>
        </div>
    </Form>
}


const Form = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`

const Input = styled.input`
  width: 80%;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

const SelectInput = styled.select`
  width: 25%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

const BotaoSalvar = styled.button`
  width: 25%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #4CAF50;
  color:white;
`