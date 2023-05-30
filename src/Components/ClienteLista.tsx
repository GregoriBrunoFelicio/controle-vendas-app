import axios from "axios"
import { useEffect, useState } from "react";
import { Button, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { Cliente } from "../Models/Cliente";
import { ClienteService } from "../Services/ClienteService";
import React from "react";

export const ClienteLista = (props: any) => {

    const [clientes, setClientes] = useState<any>([]);
    const clienteService = new ClienteService();
    const [show, setShow] = useState(false);
    const [cliente, setCliente] = useState<Cliente>({} as Cliente)

    const handleClose = () => setShow(false);
    const handleShow = (cliente: Cliente) => {
        setCliente(cliente)
        setShow(true)
    };

    useEffect(() => {
        getAll()
    }, [props.loading])

    const getAll = () => clienteService.getAll()
        .then(response => {
            setClientes(response.data)
        })

    const showDeleteConfirmationModal = () => {
        return <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Atenção!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Confirmar exclusão do cliente {cliente.nome} que possui uma divida aberta de R$ {cliente.totalDivida}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Excluir
                </Button>
            </Modal.Footer>
        </Modal>
    }

    return <ListGroup className="mt-2">
        {clientes?.map((cliente: Cliente) => {
            return <ListGroupItem key={cliente.id}>
                <div className="row">
                    <div className="col-10">
                        {cliente.nome} {cliente.sobrenome} - {cliente.tipoCliente.nome}
                    </div>
                    <div className="col-2">
                        <Button className="m-1" variant="primary" onClick={() => props.fillForm(cliente)}>Editar</Button>
                        <Button className="m-1" variant="danger" onClick={() => handleShow(cliente)} >Excluir</Button>
                    </div>
                </div>
            </ListGroupItem>
        })}
        {showDeleteConfirmationModal()}
    </ListGroup>
}


