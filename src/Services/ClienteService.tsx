import axios from "axios"
import { Cliente } from "../Models/Cliente"

export class ClienteService {
    readonly URL = `${process.env.REACT_APP_API_URL}/cliente`

    obterTodos = () => {
        return axios.get(`${this.URL}`)
    }

    obterTodosComDividas = () => {
        return axios.get(`${this.URL}/ComDivida`)
    }

    criar = (cliente: Cliente) => {
        return axios.post(this.URL, cliente)
    }

    editar = (cliente: Cliente) => {
        return axios.put(this.URL, cliente)
    }

    inativar = (clienteId: number) => {
        return axios.put(`${this.URL}/Inativar/${clienteId}`)
    }
}