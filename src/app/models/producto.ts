export class Producto {
    _id?: string;
    created_at?: string;
    nombre: string;
    precioCompra: number;
    precioVenta: number;
    sku: string;
    stock: number;
    unidadVenta: string;

    constructor(id: string, created_at= '', nombre: '', precioCompra: number, precioVenta: number, sku: string, stock: number, unidadVenta: string) {
        this._id = id
        this.created_at = created_at
        this.nombre = nombre
        this.precioCompra = precioCompra
        this.precioVenta = precioVenta
        this.sku = sku
        this.stock = stock
        this.unidadVenta = unidadVenta
    }
}

