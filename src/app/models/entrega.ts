import { Pedido } from "./pedido";

import { Item } from "./item";
export class Entrega {
    _id?: string;
    created_at?: string;
    pedido: Pedido;

    constructor(id: string, created_at= '', pedido: Pedido) {
        this._id = id
        this.created_at = created_at
        this.pedido= pedido
    }
}