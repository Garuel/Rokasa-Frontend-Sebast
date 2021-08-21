import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, } from '@angular/common/http';
import { Customers } from 'src/app/models/customer';
import { InventarioComponent } from '../components/inventario/inventario.component';
import { AgregarProductoComponent } from '../components/agregar-producto/agregar-producto.component';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //selectedProduct: Productos;
  
  constructor(public http: HttpClient) { 
    
  }

 getCustomers(){
    const url = 'http://localhost:4000/customer/getCustomers';
    return this.http.get(url).toPromise();    
  }
  getCustomer(customerId: string){
    const url = "http://localhost:4000/customer/getCustomer/"+customerId;
    
    return this.http.get(url);

  }

  addCustomer(customer: Customers){
    const url = "http://localhost:4000/customer/createCustomer";
    const body = {
        DNI  : customer.DNI,
        nombre  : customer.nombre,
        apellido  : customer.apellido
    };
    

    return this.http.post(url, body);

  }

  editCustomer(customer: Customers){
    const url = "http://localhost:4000/customer/updateCustomer";
    const body = {
      customerID: customer._id,
      DNI  : customer.DNI,
      nombre  : customer.nombre,
      apellido  : customer.apellido
    };
    

    return this.http.put(url, body);

  }
  
  deleteCustomer(customerId: string){
    const url = "http://localhost:4000/customer/deleteCustomer";
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        customerID: customerId,
      }
    }
    
    return this.http.delete(url, options);
  
  }
  
}
