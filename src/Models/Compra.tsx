import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

export interface Compra {
    id: number;
    data: Date;
    cliente: Cliente;
    produto: Produto;
}