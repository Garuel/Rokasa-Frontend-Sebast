import { Component, OnInit } from '@angular/core';
import { EntregaService } from 'src/app/services/entrega/entrega.service';
import { Pedido } from 'src/app/models/pedido';
import { Entrega } from 'src/app/models/entrega';

@Component({
  selector: 'entregas-admin',
  templateUrl: './entregas.component.html',
  styles: [
  ],
  providers:[EntregaService]
})
export class EntregasComponent implements OnInit {

  public pedidos: Pedido[]=[];
  public entregas: Entrega[]=[];
  constructor(private entregaService: EntregaService) { }

  ngOnInit(): void {
    this.getEntregas();
  }
  async getEntregas(){
    await this.entregaService
    .getEntregas()
    .then((response: any) => {
      this.entregas = response.entregas;
    })
    .catch((err) => console.log(err));
  }

  async deleteEntrega(id: any) {
    console.log(id);
     await this.entregaService.deleteEntrega(id).toPromise()
     .then(async (response) => {
       await this.getEntregas();
     })
     .catch((err) => console.log(err));
   }  

}