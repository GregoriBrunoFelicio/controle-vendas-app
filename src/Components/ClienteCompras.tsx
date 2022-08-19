import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components"

export const ClienteCompras = () => {
    const [clientes, setClientes] = useState<any>([]);

    useEffect(() => {
        axios.get('https://localhost:7299/Cliente')
            .then(response => {
                setClientes([...clientes, ...response.data])
                console.log('chamou clientes 1 vez com sucesso');
            })

    }, [])

    return <>
        <h3>Dividas em aberto referente ao mes de Junho do ano 2022</h3>
        <Ul>
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
        </Ul>
    </>
}

const Ul = styled.ul`

`

