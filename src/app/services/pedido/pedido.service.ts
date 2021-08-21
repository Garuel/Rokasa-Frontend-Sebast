import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, } from '@angular/common/http';
import { Producto } from 'src/app/models/producto';
import { Proveedor} from '../../models/proveedor';
import { GLOBAL } from '../GLOBAL';
import { Pedido } from '../../models/pedido';

import { environment } from 'src/environments/environment';
import { CrearPedidoRequest } from './dto/crearPedido.dto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  static readonly BASE_URL = `${environment.backendURL}/pedido`;

  constructor(private readonly http: HttpClient) { }

  getProveedor(proveedorID: string){
    const url = `${environment.backendURL}/proveedor/getProveedor/${proveedorID}`;

    return this.http.get(url).toPromise();  
  }

  getPedidos(){
    const url = `${PedidoService.BASE_URL}/getPedidos`;

    return this.http.get<any>(url).toPromise();    
  }

  getPedido(pedidoID: string){
    // Interpolacion de strings
    const url = `${PedidoService.BASE_URL}/getPedido/${pedidoID}`;

    return this.http.get(url).toPromise();
  }

  addPedido(crearPedidoRequest: CrearPedidoRequest){
    const url = `${PedidoService.BASE_URL}/createPedido`;

    return this.http.post(url, crearPedidoRequest).toPromise();
  }


  deletePedido(pedidoID: string){
    const url = `${PedidoService.BASE_URL}/deletePedido`;

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        pedidoID: pedidoID,
      }
    }
    
    return this.http.delete(url, options);
  }
}
