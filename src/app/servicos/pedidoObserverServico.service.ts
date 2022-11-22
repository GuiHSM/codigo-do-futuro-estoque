import { Injectable } from '@angular/core';
import { PedidoServico } from './pedidoServico';

@Injectable({
  providedIn: 'root'
})
export class PedidoObserverServicoService {

  constructor() { 
    this.updateQuantidade();
  }
  public quantidade:Number=0;
  updateQuantidade(){
    console.log("--- Entrou no metodo ---")
    this.quantidade = PedidoServico.buscaTamanho();
  }
}
