
import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { TipoCliente } from "../Models/TipoCliente";

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
        <Form.Select defaultChecked onChange={(e: any) => props.setTipoCliente(e.currentTarget.value)}>
            {
                tiposCliente?.map((tipoCliente: TipoCliente) => {
                    return <>
                        <option key={tipoCliente.id} value={tipoCliente.id} >{tipoCliente.nome}</option>
                    </>
                })
            }
        </Form.Select>
    </>
}