import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: [],
  providers:[CustomerService]
})
export class ListaClientesComponent implements OnInit {

  public customers: Customers[] = [];

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  async getCustomers(){
    await this.customerService
    .getCustomers()
    .then((response: any) => {
      this.customers = response.customers;
    })
    .catch((err) => console.log(err));
  }

  async deleteCustomer(id: any) {
    console.log(id);
     await this.customerService.deleteCustomer(id).toPromise()
     .then(async () => {
       await this.getCustomers();
     })
     .catch((err) => console.log(err));
   }

}
