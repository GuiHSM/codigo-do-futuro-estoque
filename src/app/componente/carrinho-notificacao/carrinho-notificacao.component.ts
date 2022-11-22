import { Component, OnInit } from '@angular/core';
import { PedidoObserverServicoService } from '../../servicos/pedidoObserverServico.service'

@Component({
  selector: 'app-carrinho-notificacao',
  templateUrl: './carrinho-notificacao.component.html',
  styleUrls: ['./carrinho-notificacao.component.css']
})
export class CarrinhoNotificacaoComponent {
  constructor(public pedidoObserverServicoService: PedidoObserverServicoService) {
  }


  ngOnInit(): void {
  }
}
