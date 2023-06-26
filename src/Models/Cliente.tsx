import { Compra } from "./Compra";
import { TipoCliente } from "../Components/TipoCliente";

export interface Cliente {
    id: number;
    nome: string;
    sobrenome: string;
    tipoClienteId: number;
    totalDivida: number;
    compras: Compra[];
    tipoCliente: TipoCliente;
}