import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { Pedido } from 'src/app/models/pedido';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: [],
  providers: [PedidoService]
})
export class PedidosComponent  implements OnInit{

  public pedidos: Pedido[]=[];
  public productos: Producto[]=[];
  constructor(private pedidoService: PedidoService  /*private router: Router, private route: ActivatedRoute*/) { }
  
  ngOnInit():void{
    this.getPedidos();

  }
  async getPedidos(){
    await this.pedidoService
    .getPedidos()
    .then((response: any) => {
      this.pedidos = response.pedidos;
    })
    .catch((err) => console.log(err));
  }/*
  async getProductos(){
    await this.pedidoService
    .getPedidos()
    .then((response: any) => {
      this.pedidos.productos = response.pedidos.productos;
    })
    .catch((err) => console.log(err));
  }*/
  async deletePedido(id: any) {
    console.log(id);
     await this.pedidoService.deletePedido(id).toPromise()
     .then(async (response) => {
       await this.getPedidos();
     })
     .catch((err) => console.log(err));
   }  

}
