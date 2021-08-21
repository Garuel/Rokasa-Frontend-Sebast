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
import { EntregaService } from "src/app/services/entrega/entrega.service";
import { Entrega } from 'src/app/models/entrega';
@Component({
  selector: 'app-crear-entrega',
  templateUrl: './crear-entrega.component.html',
  styleUrls: [],
  providers: [EntregaService]
})
export class CrearEntregaComponent implements OnInit {
  proveedores: Proveedor[];
  productos: Producto[];

  items = new Array<Item>();
  pedidos: Pedido[]=[];
  entregas: Entrega[]=[];

  nameForm = new FormGroup({
    pedidoID: new FormControl(''),
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

  entrega: Entrega={
    _id:"",
    created_at:"",
    pedido: this.pedido,
  };
  formularioDePedido :FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly pedidoService: PedidoService,
    private readonly productService: ProductService,
    private readonly proveedorService: ProveedorService,
    private readonly entregaService: EntregaService,
    private readonly router: Router
  ) { }

  async ngOnInit() {
    this.inicializarFormularioDePedido();
    const { pedidos } = await this.pedidoService.getPedidos();
    this.pedidos=pedidos;
    
    console.log(this.pedidos);

  }

  inicializarFormularioDePedido() {
    this.formularioDePedido = this.formBuilder.group({
      id: ['', [Validators.required]],
    });
  }

  async realizarEntrega() {
    try {
      const respuesta = await this.entregaService.addEntrega({
        pedidoID: this.formularioDePedido.get("id").value
      })

      console.log({respuesta});
      

      this.router.navigateByUrl("/entregas");
    } catch (err) {
      console.log(err)
    }
  }
}
