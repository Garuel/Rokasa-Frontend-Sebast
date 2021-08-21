import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ProductService } from '../../services/producto.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styles: [
  ],
  providers:[ProductService]
})
export class AgregarProductoComponent implements OnInit {
  nameForm = new FormGroup({
    nombre: new FormControl(''),
    stock: new FormControl(''),
    uniVenta: new FormControl(''),
    preVenta: new FormControl(''),
    preCompra: new FormControl(''),
    sku: new FormControl("")
  });
  public products: Producto ={
    _id: "",
    created_at: "",
    nombre: "",
    precioCompra: 0,
    precioVenta: 0,
    sku: "",
    stock: 0,
    unidadVenta: "",
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  async addProduct(){
    if (this.nameForm.valid){
      this.products = {
        nombre: this.nameForm.get('nombre')?.value,         
        stock: this.nameForm.get('stock')?.value,  
        unidadVenta: this.nameForm.get('uniVenta')?.value,  
        precioVenta: this.nameForm.get('preVenta')?.value,  
        precioCompra: this.nameForm.get('preCompra')?.value,  
        sku: this.nameForm.get('sku')?.value,  
      }
    } 
    console.log(this.products)
    await this.productService.addProduct(this.products).toPromise()
    .then(async () => {
      this.router.navigateByUrl("/inventario");
    })
    .catch((err) => console.log(err));
    
  }

}