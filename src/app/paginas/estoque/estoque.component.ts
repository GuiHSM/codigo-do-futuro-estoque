import { Component } from '@angular/core';
import { Produto } from '../../models/Produto';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {
  constructor() { }
  public btnProximoDisable:boolean = true;
  public preco:String="R$0,00";
  public btnAnteriorDisable:boolean = false;
  public produto:Produto = {} as Produto;
  public produtos:Produto[] = [
    {id: 1,nome: 'Lápis',descricao:"Teste",preco:2.70}
    ,{id: 2,nome: 'Caneta',descricao:"Teste",preco:5.40}  
  ]
  public idAtual:number=0;
  ngOnInit(): void {
    let tamanho=this.produtos.length;
    this.idAtual=this.produtos.length;
    this.produto = {id: tamanho+1,nome: '',descricao:"",preco:0}
  }
  Registrar(){
    let novoProduto: Produto = {
      id: this.produto.id,
      nome: this.produto.nome,
      descricao:this.produto.descricao,
      preco:this.produto.preco
    } as Produto
    this.produtos.push(novoProduto);
    this.produto= {id:this.produto.id+1,nome:"",descricao:"",preco:0} as Produto;
    this.idAtual++;
    this.btnAnteriorDisable=false;
  }
  Anterior(){
    let id = this.idAtual-1;
    console.log(id);
    this.produto=this.produtos[id];
    if(this.btnProximoDisable){
      this.btnProximoDisable=false;
    }
    if(id==0){
      this.btnAnteriorDisable=true;
    }
    this.idAtual=id;
  }
  Proximo(){
    let id = this.idAtual+1;
    this.idAtual++;
    if(this.btnAnteriorDisable){
      this.btnAnteriorDisable=false;
    }
    if(id>=this.produtos.length){
       this.produto={id:this.produto.id+1,nome:"",descricao:"",preco:0} as Produto;
       this.btnProximoDisable=true;
       return;
    }
    this.produto=this.produtos[id];
  }
  Excluir(id:number){
    this.produtos.splice(id,1);
    if(this.produtos.length==0){
      this.btnAnteriorDisable=true;
      this.btnProximoDisable=true;
      this.produto= {id:1,nome:"",descricao:"",preco:0} as Produto;
      console.log("A");
    }
    if(this.idAtual>id){
      this.idAtual--;
      return;
    }
    if(this.idAtual==id&&this.idAtual>0){
      this.Anterior();
      console.log("C");
    }
    if(this.idAtual==id&&this.idAtual==0){
      let id = this.idAtual;
      this.produto=this.produtos[id];
      this.idAtual;
      this.btnAnteriorDisable=true;
      console.log("D");
    }
  }
  impedirTexto(){
    debugger;
    let novoChar=this.preco.at(this.preco.length-1);
    console.log(novoChar);
    let ponto = ".";
    if(this.preco.slice(0,this.preco.length-1).includes(ponto)){
      ponto="";
    }
    if(isNaN(Number(novoChar))&&novoChar!=ponto){
      this.preco=this.preco.slice(0,this.preco.length-1);
    }
    debugger;
    if(this.preco=="R$0.0"){
      this.preco="R$0.00";
    }
    if(!this.preco.includes("R$")) this.preco=`R$${this.preco}`;
    this.produto.preco=Number(this.preco.slice(2).replace(",","."));
  }
}
