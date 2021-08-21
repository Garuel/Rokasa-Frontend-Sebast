import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private readonly http: HttpClient) { }

  
  getProveedor(proveedorID: string){
    const url = `${environment.backendURL}/proveedor/getProveedor/${proveedorID}`;

    return this.http.get(url).toPromise();  
  }

  getProveedores(){
    const url = `${environment.backendURL}/proveedor/getProveedores`;

    return this.http.get<any>(url).toPromise();  
  }
  
}
