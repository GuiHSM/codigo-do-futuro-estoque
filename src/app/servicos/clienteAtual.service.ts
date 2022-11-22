import { Injectable } from '@angular/core';
import { PedidoServico } from './pedidoServico';
@Injectable({
  providedIn: 'root'
})
export class ClienteAtualService {

  constructor() { 
    this.updateCliente(0);
  }
  public updateCliente(id:number){
    PedidoServico.setCliente(id);
  }
}
