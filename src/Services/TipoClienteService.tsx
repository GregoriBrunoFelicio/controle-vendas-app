import axios from "axios"
import { TipoCliente } from "../Models/TipoCliente"

export class TipoClienteService {
    readonly URL = `${process.env.REACT_APP_API_URL}/tipoCliente`

    obterTodos = () => {
        return axios.get(`${this.URL}`)
    }

    criar = (tipoCliente: TipoCliente) => {
        return axios.post(this.URL, tipoCliente)
    }

    editar = (tipoCliente: TipoCliente) => {
        return axios.put(this.URL, tipoCliente)
    }
}