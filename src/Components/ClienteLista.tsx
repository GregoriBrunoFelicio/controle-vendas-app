import axios from "axios"
import { useEffect, useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Cliente } from "../Models/Cliente";

export const ClienteLista = (props: any) => {

    const [clientes, setClientes] = useState<any>([]);

    useEffect(() => {
        axios.get('https://localhost:7299/Cliente')
            .then(response => {
                setClientes([...clientes, ...response.data])
            })

    }, [props.loading])

    return <div>
        <ListGroup className="mt-2">
            {clientes?.map((cliente: Cliente) => {
                return <>
                    <ListGroupItem>
                        <div className="row">
                            <div className="col-10">
                                {cliente.nome} {cliente.sobrenome}
                            </div>
                            <div className="col-2">
                                <Button variant="primary" onClick={() => props.fillForm(cliente)}>Editar</Button>
                                <Button variant="danger" >Excluir</Button>
                            </div>
                        </div>
                    </ListGroupItem>
                </>
            })}
        </ListGroup>
    </div>
}


