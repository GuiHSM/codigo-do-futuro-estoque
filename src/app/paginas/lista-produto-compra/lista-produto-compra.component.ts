import { Component } from '@angular/core';
import { Produto } from '../../models/Produto';
import { PedidoObserverServicoService } from 'src/app/servicos/pedidoObserverServico.service';
import { PedidoServico } from 'src/app/servicos/pedidoServico';
@Component({
  selector: 'app-lista-produto-compra',
  templateUrl: './lista-produto-compra.component.html',
  styleUrls: ['./lista-produto-compra.component.css']
})
export class ListaProdutoCompraComponent {
  public produtos:Produto[] = [
    {id: 1,nome: 'Lápis',descricao:"Teste",preco:2.70}
    ,{id: 2,nome: 'Caneta',descricao:"Teste",preco:5.40}  
  ]
  constructor(
    private pedidoObserverServicoService: PedidoObserverServicoService
  ){}
  Inserir(id:number){
    PedidoServico.adicionaProduto(this.produtos[id]);
    this.pedidoObserverServicoService.updateQuantidade();
  }
}
