import { Component } from '@angular/core';
import { ClienteServico } from 'src/app/servicos/clienteServico';
import { ClienteAtualService } from 'src/app/servicos/clienteAtual.service';
import { Cliente } from 'src/app/models/Cliente';
@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent {
  constructor(public clienteAtualService: ClienteAtualService) {
    this.clientes=ClienteServico.buscaClientes();
  }
  public clientes:Cliente[];
  public Alterar(i:number){
    this.clienteAtualService.updateCliente(i);
  }
}
