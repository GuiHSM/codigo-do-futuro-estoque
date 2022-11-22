import { Component,OnInit } from '@angular/core';
import {PedidoObserverServicoService} from "../../servicos/pedidoObserverServico.service"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public pedidoObserverServicoService: PedidoObserverServicoService) { }

  ngOnInit(): void {
  }
}
