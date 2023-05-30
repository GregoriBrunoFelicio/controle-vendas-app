import axios from "axios";
import { useState, useEffect } from "react";
import { Accordion, Table } from "react-bootstrap";
import { Cliente } from "../Models/Cliente";

export const Compras = () => {
    const [clientes, setClientes] = useState<any>([]);

    useEffect(() => {
        axios.get('https://localhost:7299/Cliente/ComCompras')
            .then(response => {
                setClientes(response.data)
            })

    }, [])

    {/* <h5>Dividas em aberto referente ao mes de Junho do ano 2022</h5> */ }
    return <Accordion>
        {
            clientes?.map((cliente: Cliente, index: number) => <Accordion.Item eventKey={cliente.id.toString()}>
                <Accordion.Header>{cliente.nome} - TOTAL: R${cliente.totalDivida}</Accordion.Header>
                <Accordion.Body >
                    <Table bordered >
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Valor</th>
                                <th>Data Compra</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cliente.compras.map(compra => {
                                return <tr key={cliente.id} tabIndex={index}>
                                    <td>{compra.produto.nome}</td>
                                    <td>R$ {compra.produto.preco}</td>
                                    <td>{compra.data.toString()}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>)
        }
    </Accordion>
}
