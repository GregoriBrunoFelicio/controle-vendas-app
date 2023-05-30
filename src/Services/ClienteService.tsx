import axios from "axios"

export class ClienteService {
    readonly URL = `${process.env.REACT_APP_API_URL}cliente`

    getAll = () => {
        return axios.get(`${this.URL}`)
    }
}