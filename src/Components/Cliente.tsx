import axios from "axios"
import { useEffect, useState } from "react";
import { ClienteCadastro } from "./ClienteCadastro";

export const Cliente = () => {

    const [clientes, setClientes] = useState<any>([]);

    useEffect(() => {
        axios.get('https://localhost:7299/Cliente')
            .then(response => {
                setClientes([...clientes, ...response.data])
                console.log('chamou clientes 1 vez com sucesso');
            })

    }, [])

    return <div>
        <ClienteCadastro/>
        <select>
            <option>Caminhoneiro</option>
            <option>Escritorio</option>
        </select>
        <h3>Dividas em aberto referente ao mes de Junho do ano 2022</h3>
        <ul>
            {
                clientes?.map((x: any) => {
                    return <>
                        <li>NOME: {x.nome} - DIVIDA TOTAL: {x.totalDivida}</li>

                        <ul>
                            <span>Compras Feitas</span>
                            {x.compras.map((c: any) => {
                                return <li>{c.produto.nome} -{c.produto.preco} </li>
                            })}
                        </ul>
                    </>
                })
            }
        </ul>
    </div>
}