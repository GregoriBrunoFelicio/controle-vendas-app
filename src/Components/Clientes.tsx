import axios from "axios"
import { useEffect, useState } from "react";
import { Stack, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import styled from "styled-components";
import { ClienteCadastro } from "./ClienteCadastro";

export const Clientes = () => {

    const [clientes, setClientes] = useState<any>([]);

    useEffect(() => {
        axios.get('https://localhost:7299/Cliente')
            .then(response => {
                setClientes([...clientes, ...response.data])
            })

    }, [])

    return <div>
        <ClienteCadastro />
        <ListGroup className="mt-2">
            {clientes?.map((cliente: any, index: number) => {
                return <>
                    <ListGroupItem tabIndex={index}>
                        <div className="row">
                            <div className="col-10">
                                {cliente.nome} {cliente.sobrenome}
                            </div>
                            <div className="col-2">
                                <Button variant="primary">Editar</Button>
                                <Button variant="danger">Excluir</Button>
                            </div>
                        </div>
                    </ListGroupItem>
                </>
            })}
        </ListGroup>
    </div>
}


