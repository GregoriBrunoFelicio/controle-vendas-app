import { Cliente } from "./Cliente";

export interface Compra {
    id: number;
    data: Date;
    cliente: Cliente;
}