import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {
  detallePedido : any={};
  
  constructor(private router: ActivatedRoute) { 
    this.router.params.subscribe( params =>{

    })
  }

    ngOnInit(): void {
    }

}
