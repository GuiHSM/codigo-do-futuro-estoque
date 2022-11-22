import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './paginas/estoque/estoque.component';
import { ListaProdutoCompraComponent } from './paginas/lista-produto-compra/lista-produto-compra.component';
import { FormClienteComponent } from './paginas/form-cliente/form-cliente.component';
import { ListaClienteComponent } from './paginas/lista-cliente/lista-cliente.component';

const routes: Routes = [
  {path: '', component: EstoqueComponent},
  {path: 'inserir',component: ListaProdutoCompraComponent},
  {path: 'formCliente',component: FormClienteComponent},
  {path: 'listaCliente',component: ListaClienteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
