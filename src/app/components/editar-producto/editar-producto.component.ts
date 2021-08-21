import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ProductService } from '../../services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: [],
  providers:[ProductService]
})
export class EditarProductoComponent implements OnInit {


    nameForm = new FormGroup({
    nombre: new FormControl(''),
    stock: new FormControl(''),
    uniVenta: new FormControl(''),
    preVenta: new FormControl(''),
    preCompra: new FormControl(''),

    sku: new FormControl("")
  });

  public product: Producto ={
    _id: "",
    created_at: "",
    nombre: "",
    precioCompra: 0,
    precioVenta: 0,

    sku: "",
    stock: 0,
    unidadVenta: "",
  };

  id :string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id =''
  }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    const res: any = await this.productService.getProduct(this.id).toPromise();
    console.log(res);
    this.product = res.product;
    this.nameForm.patchValue({
      nombre: this.product.nombre,
      stock: this.product.stock,
      uniVenta: this.product.unidadVenta,
      preVenta: this.product.precioVenta,
      preCompra: this.product.precioCompra,

      sku: this.product.sku

    })
  }
  async editProduct(){
    if (this.nameForm.valid){
      this.product = {
        _id: this.id,
        nombre: this.nameForm.get('nombre')?.value,         
        stock: this.nameForm.get('stock')?.value,  
        unidadVenta: this.nameForm.get('uniVenta')?.value,  
        precioVenta: this.nameForm.get('preVenta')?.value,  
        precioCompra: this.nameForm.get('preCompra')?.value,  

        sku: this.nameForm.get('sku')?.value,  
      }
    }
    console.log(this.product)
    await this.productService.editProduct(this.product).toPromise()
    .then(async () => {
      this.router.navigateByUrl("/inventario");
    })
    .catch((err) => console.log(err));
    
  }

}