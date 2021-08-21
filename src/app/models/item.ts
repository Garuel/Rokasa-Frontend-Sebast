import { Producto } from "./producto";

export class Item {
    _id?: string;
    producto: Producto;
    cantidad: number;

    constructor(id: string, producto: Producto, cantidad: number) {
        this._id = id
        this.producto=producto
        this.cantidad=cantidad
    }
}
