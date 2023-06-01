import axios from "axios"
import { useEffect, useState } from "react";
import { Button, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { Cliente } from "../Models/Cliente";
import { ClienteService } from "../Services/ClienteService";
import React from "react";

export const ClienteLista = (props: any) => {

    const [clientes, setClientes] = useState<any>([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [cliente, setCliente] = useState<Cliente>({} as Cliente)

    const clienteService = new ClienteService();

    const fecharModal = () => setMostrarModal(false);
    const handleShow = (cliente: Cliente) => {
        setCliente(cliente)
        setMostrarModal(true)
    };

    useEffect(() => {
        obterTodos()
    }, [props.loading])

    const obterTodos = () => clienteService.obterTodos()
        .then((response: any) => {
            setClientes(response.data)
        })


    const inativarCliente = (clienteId: number) => clienteService.inativar(clienteId)
        .then(() => {
            fecharModal()
            obterTodos()
        })

    const mensagemDeExclusao = () => {
        if (cliente.totalDivida > 0) {
            return <p>
                O cliente {cliente.nome} {cliente.sobrenome} possui uma dívida aberta no valor de R$ {cliente.totalDivida}. Feche a divida para fazer a exclusão do mesmo.
            </p>
        }
        else {
            return <p>
                Confirmar exclusão do cliente {cliente.nome} {cliente.sobrenome} ?
            </p>
        }
    }

    const showDeleteConfirmationModal = () => {
        return <Modal show={mostrarModal} onHide={fecharModal}>
            <Modal.Header closeButton>
                <Modal.Title>Atenção!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {mensagemDeExclusao()}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => fecharModal()}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => inativarCliente(cliente.id)}>
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


