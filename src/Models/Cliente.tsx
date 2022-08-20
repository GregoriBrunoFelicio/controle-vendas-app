import { Compra } from "./Compra";

export interface Cliente {
    id: number;
    nome: string;
    sobrenome: string;
    tipoClienteId: number;
    totalDivida: number;
    compras: Compra[];
}