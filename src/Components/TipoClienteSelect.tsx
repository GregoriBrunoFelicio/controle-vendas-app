import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { TipoClienteService } from "../Services/TipoClienteService";
import { TipoCliente } from "./TipoCliente";

export const TipoClienteSelect = (props: any) => {

    const [tiposCliente, setTiposCliente] = useState<TipoCliente[]>([])
    const tipoClienteService = new TipoClienteService();

    useEffect(() => {
        obterTiposCliente()
        props.setTipoCliente(0)
    }, [props.loading])

    const obterTiposCliente = () => {
        tipoClienteService.obterTodos()
            .then((response: any) => {
                setTiposCliente(response.data)
            });
    }

    return <>
        <Form.Select onChange={e => props.setTipoCliente(Number(e.currentTarget.value))}>
            <option key={0} value={0}>Tipo Cliente</option>
            {
                tiposCliente?.map((tipoCliente: TipoCliente) => {
                    return <option key={tipoCliente.id} value={tipoCliente.id} >{tipoCliente.nome}</option>
                })
            }
        </Form.Select>
    </>
}