export interface CrearPedidoRequest {
  proveedorID: string;
  items: Array<Item>
}

interface Item {
  productoID: string;
  cantidad: number;
}