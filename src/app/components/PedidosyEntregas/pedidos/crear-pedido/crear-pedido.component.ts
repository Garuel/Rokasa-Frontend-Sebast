import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Pedido } from 'src/app/models/pedido';
import { Producto } from 'src/app/models/producto';
import { Proveedor } from 'src/app/models/proveedor';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ProductService } from 'src/app/services/producto.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: [],
  providers:[PedidoService]
})
export class CrearPedidoComponent implements OnInit {
  proveedores: Proveedor[];
  productos: Producto[];

  items = new Array<Item>();
  pedidos: Pedido[]=[];

  nameForm = new FormGroup({
    proveedor: new FormControl(''),
    productoNombre: new FormControl(''),
    productoCantidad: new FormControl('')
  });

  proveedor: Proveedor={
    _id: "",
    created_at: "",
    DNI: "",
    nombre: "",
    apellido: "",
    empresa:"",
    descripcion_Empresa:""
  }

  producto: Producto={
    _id: "",
    created_at: "",
    nombre: "",
    precioCompra: 0,
    precioVenta: 0,
    sku: "",
    stock: 0,
    unidadVenta: "",
  }
  item: Item={
    _id: "",
    producto: this.producto,
    cantidad: 0
  }
  pedido: Pedido ={
    _id: "",
    created_at: "",
    proveedor: this.proveedor,
    productos: [
      this.item
    ]
  };

  formularioDeProducto: FormGroup;
  formularioDeProveedor: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly pedidoService: PedidoService,
    private readonly productService: ProductService,
    private readonly proveedorService: ProveedorService,
    private readonly router: Router
  ) { }

  async ngOnInit() {
    this.inicializarFormularioDeProducto();
    this.inicializarFormularioDeProveedor();

    const { products } = await this.productService.getProducts();
    const { proveedores } = await this.proveedorService.getProveedores();

    this.productos = products;
    this.proveedores = proveedores;

    console.log(this.productos);
    console.log(this.proveedores);

  }

  inicializarFormularioDeProducto() {
    this.formularioDeProducto = this.formBuilder.group({
      id: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
    });
  }

  inicializarFormularioDeProveedor() {
    this.formularioDeProveedor= this.formBuilder.group({
      id: ['', [Validators.required]]
    });
  }

  async realizarPedido() {
    try {
      const respuesta = await this.pedidoService.addPedido({
        proveedorID: this.formularioDeProveedor.get("id").value,
        items: this.items.map(item => {
          return {
            productoID: item.producto._id, 
            cantidad: item.cantidad 
          }
        })
      })

      console.log({respuesta});
      

      this.router.navigateByUrl("/pedidos");
    } catch (err) {
      console.log(err)
    }
}


  async agregarProductoAPedido() {
    if (!this.formularioDeProducto.valid) {
      return;
    }

    const idDeProducto = this.formularioDeProducto.get('id').value;
    const cantidad = this.formularioDeProducto.get('cantidad').value;

    const productoPorAgregar = this.productos.filter((producto)=> {
      return producto._id == idDeProducto;
    })[0];

    const indicePorEliminar = this.productos.findIndex((producto)=> {
      return producto._id == idDeProducto;
    });

    this.productos.splice(indicePorEliminar, 1)

    const itemPorAgregar = new Item('id', productoPorAgregar, cantidad);

    // Hacer el push contra el arreglo de items
    this.items.push(itemPorAgregar)

    this.formularioDeProducto.reset();
  }
}
