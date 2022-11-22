import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteServico } from 'src/app/servicos/clienteServico';
@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit{
  constructor(
    private router:Router,
    private routerParams: ActivatedRoute
  ) { }
  public titulo:String = "Novo cliente"
  public cliente:Cliente = {} as Cliente

  ngOnInit(): void {
    let id:Number = this.routerParams.snapshot.params['id']
    if(id){
      this.titulo = "Alterando cliente"
      this.cliente = ClienteServico.buscaClientePorId(id)
    }
  }

  salvar(){
    if(this.cliente.id > 0){
      ClienteServico.alteraCliente(this.cliente)
    }
    else{
      ClienteServico.adicionaCliente({
        id: 0,
        nome: this.cliente.nome
      });
    }

    this.router.navigateByUrl("/contatos")
  }

}
