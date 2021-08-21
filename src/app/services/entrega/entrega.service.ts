import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';
import { CrearEntregaRequest } from './dto/crearEntrega.dto';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {
  static readonly BASE_URL = `${environment.backendURL}/entrega`;
  constructor(private readonly http: HttpClient) { }


  getPedidos(){
    const url = `${environment.backendURL}/pedido/getPedidos`;

    return this.http.get(url).toPromise();    
  }



  getPedido( pedidoID : string){
    const url = `${environment.backendURL}/pedido/getPedido/${pedidoID}`;

    return this.http.get(url).toPromise();    
  }


  getEntregas(){
    const url = `${EntregaService.BASE_URL}/getEntregas`;

    return this.http.get(url).toPromise();    
  }


  addEntrega(crearEntregaRequest: CrearEntregaRequest){
    const url = `${EntregaService.BASE_URL}/createEntrega`;

    return this.http.post(url, crearEntregaRequest).toPromise();
  }

  deleteEntrega(entregaID: string){
    const url = `${EntregaService.BASE_URL}/deleteEntrega`;

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        entregaID: entregaID,
      }
    }
    
    return this.http.delete(url, options);
  }
}
