import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Customers } from 'src/app/models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: [],
  providers:[CustomerService]
})
export class AgregarClienteComponent implements OnInit {

  nameForm = new FormGroup({
    DNI: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    
    
  });
  public customers: Customers ={
    _id: "",
    created_at: "",
    DNI: "",
    nombre: "",
    apellido: ""
   
  };

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async addCustomer(){
    if (this.nameForm.valid){
      this.customers = {
         
        DNI: this.nameForm.get('DNI')?.value,  
        nombre: this.nameForm.get('nombre')?.value,  
        apellido: this.nameForm.get('apellido')?.value,  
          
      }
    } 
    console.log(this.customers)
    await this.customerService.addCustomer(this.customers).toPromise()
    .then(async () => {
      this.router.navigateByUrl("/lista-clientes");
    })
    .catch((err) => console.log(err));
    
  }

}
