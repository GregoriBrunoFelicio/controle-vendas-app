import axios from "axios";
import { useState, useEffect } from "react";
import { Accordion, Table } from "react-bootstrap";
import styled from "styled-components"
import { Cliente } from "../Models/Cliente";
import { Compra } from "../Models/Compra";

export const Compras = () => {
    const [clientes, setClientes] = useState<any>([]);

    useEffect(() => {
        axios.get('https://localhost:7299/Cliente/ComCompras')
            .then(response => {
                setClientes([...clientes, ...response.data])
                console.log('chamou clientes 1 vez com sucesso');
            })

    }, [])

    return <>
        <h5>Dividas em aberto referente ao mes de Junho do ano 2022</h5>
        <Accordion>

            {
                clientes?.map((cliente: Cliente, index: number) => {
                    return <>
                        <Accordion.Item eventKey={index.toString()}>
                            <Accordion.Header>{cliente.nome} - TOTAL: R${cliente.totalDivida}</Accordion.Header>
                            <Accordion.Body>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Valor</th>
                                            <th>Data Compra</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cliente.compras.map(compra => {
                                            return <>
                                                <tr tabIndex={index}>
                                                    <td>{compra.produto.nome}</td>
                                                    <td>R$ {compra.produto.preco}</td>
                                                    <td> 10/10/2022</td>
                                                </tr>
                                            </>
                                        })}

                                    </tbody>
                                </Table>
                            </Accordion.Body>

                        </Accordion.Item>
                    </>
                })
            }
        </Accordion>

    </>

}
