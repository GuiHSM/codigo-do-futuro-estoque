import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstoqueComponent } from './paginas/estoque/estoque.component';
import { ReaisConverterPipe } from './pipe/reais-converter.pipe';
import { CarrinhoComponent } from './componente/carrinho/carrinho.component';
import { HeaderComponent } from './componente/header/header.component';
import { CarrinhoNotificacaoComponent } from './componente/carrinho-notificacao/carrinho-notificacao.component';
import { ListaProdutoCompraComponent } from './paginas/lista-produto-compra/lista-produto-compra.component';
import { ListaClienteComponent } from './paginas/lista-cliente/lista-cliente.component';
import { FormClienteComponent } from './paginas/form-cliente/form-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    EstoqueComponent,
    ReaisConverterPipe,
    CarrinhoComponent,
    HeaderComponent,
    CarrinhoNotificacaoComponent,
    ListaProdutoCompraComponent,
    ListaClienteComponent,
    FormClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
