import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductService } from '../../services/producto.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styles: [
  ],
  providers:[ProductService]
})
export class InventarioComponent implements OnInit {

  public products: Producto[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(){
    await this.productService
    .getProducts()
    .then((response: any) => {
      this.products = response.products;
    })
    .catch((err) => console.log(err));
  }

  async deleteProduct(id: any) {
    console.log(id);
     await this.productService.deleteProduct(id).toPromise()
     .then(async (response) => {
       await this.getProducts();
     })
     .catch((err) => console.log(err));
   }
}
