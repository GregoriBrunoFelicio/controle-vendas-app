
import axios from "axios";
import { useEffect, useState } from "react";
import { Clientes } from "./Clientes";
import { Form } from "react-bootstrap";
import { TipoCliente } from "../Models/tipoCliente";

export const TipoClienteSelect = (props: any) => {

    const [tiposCliente, setTiposCliente] = useState([])

    useEffect(() => {
        obterTiposCliente()
    }, [])

    const obterTiposCliente = () => {
        axios.get('https://localhost:7299/TipoCliente')
            .then((response: any) => {
                setTiposCliente(response.data)
            });
    }

    return <>
        <Form.Select defaultChecked onChange={(e: any) => props.selecionaTipoCliente(e.currentTarget.value)}>
            {
                tiposCliente?.map((tipoCliente: TipoCliente) => {
                    return <>
                        <option value={tipoCliente.id} >{tipoCliente.nome}</option>
                    </>
                })
            }
        </Form.Select>
    </>
}