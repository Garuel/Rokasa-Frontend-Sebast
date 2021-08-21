import { Proveedor } from "./proveedor";
import { Producto } from "./producto";
import { Item } from "./item";
export class Pedido {
    _id?: string;
    created_at?: string;
    proveedor: Proveedor;
    productos: Array<Item>;

    constructor(id: string, created_at= '', proveedor: Proveedor, productos: Array<Item>) {
        this._id = id
        this.created_at = created_at
        this.proveedor=proveedor
        this.productos=productos
    }
}