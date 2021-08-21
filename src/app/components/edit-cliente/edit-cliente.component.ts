import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Customers } from 'src/app/models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: [],
  providers:[CustomerService]
})
export class EditClienteComponent implements OnInit {


    nameForm = new FormGroup({
    DNI: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl('')
  });

  public customer: Customers ={
    _id: "",
    created_at: "",
    DNI: "",
    nombre: "",
    apellido: ""
  };

  id :string;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id =''
  }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    const res: any = await this.customerService.getCustomer(this.id).toPromise();
    console.log(res);
    this.customer = res.customer;
    this.nameForm.patchValue({
      DNI: this.customer.DNI,
      nombre: this.customer.nombre,
      apellido: this.customer.apellido

    })
  }
  async editCustomer(){
    if (this.nameForm.valid){
      this.customer = {
        _id: this.id,
        DNI: this.nameForm.get('DNI')?.value,         
        nombre: this.nameForm.get('nombre')?.value,  
        apellido: this.nameForm.get('apellido')?.value
      }
    }
    console.log(this.customer)
    await this.customerService.editCustomer(this.customer).toPromise()
    .then(async () => {
      this.router.navigateByUrl("/lista-clientes");
    })
    .catch((err) => console.log(err));
    
  }

}