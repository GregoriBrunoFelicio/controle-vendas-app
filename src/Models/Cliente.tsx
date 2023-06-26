import { Compra } from "./Compra";
import { TipoCliente } from "../Models/TipoCliente";

export interface Cliente {
    id: number;
    nome: string;
    sobrenome: string;
    tipoClienteId: number;
    totalDivida: number;
    compras: Compra[];
    tipoCliente: TipoCliente;
}