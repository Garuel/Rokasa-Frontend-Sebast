import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, } from '@angular/common/http';
import { Producto } from 'src/app/models/producto';
import { InventarioComponent } from '../components/inventario/inventario.component';
import { AgregarProductoComponent } from '../components/agregar-producto/agregar-producto.component';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //selectedProduct: Productos;
  
  constructor(private readonly http: HttpClient) { 
    
  }

  getProducts(){
    const url = 'http://localhost:4000/product/getProducts';
    return this.http.get<any>(url).toPromise();    
  }
  getProduct(productId: string){
    const url = "http://localhost:4000/product/getProduct/"+productId;
    
    return this.http.get(url);

  }

  addProduct(product: Producto){
    const url = "http://localhost:4000/product/createProduct";
    const body = {
        nombre  : product.nombre,
        stock  : product.stock,
        unidadVenta  : product.unidadVenta,
        precioVenta  : product.precioVenta,
        precioCompra  : product.precioCompra,
        sku  : product.sku
    };
    

    return this.http.post(url, body);

  }

  editProduct(product: Producto){
    const url = "http://localhost:4000/product/updateProduct";
    const body = {
        productID: product._id,
        nombre  : product.nombre,
        stock  : product.stock,
        unidadVenta  : product.unidadVenta,
        precioVenta  : product.precioVenta,
        precioCompra  : product.precioCompra,
        sku  : product.sku
    };
    

    return this.http.put(url, body);

  }
  
  deleteProduct(productId: string){
    const url = "http://localhost:4000/product/deleteProduct";
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        productID: productId,
      }
    }
    
    return this.http.delete(url, options);
  
  }
  
}
