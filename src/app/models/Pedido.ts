import { Produto } from './Produto';
export class Pedido{
    private id : number;
    private idCliente : number;
    private items:Produto[]=[]; 
    constructor(){
		this.id = 1;
		this.idCliente = 1;
	}
    public getId():number{
        return this.id;
    }
    public setId(id:number):void{
        this.id=id;
    }
    public getIdCliente():number{
        return this.idCliente;
    }
    public setIdCliente(idCliente:number):void{
        this.idCliente=idCliente;
    }
    public addItem(produto:Produto):void{
        this.items.push(produto);
    }
    public removeItem(idProdutoItem:number):void{
        this.items.splice(idProdutoItem,1);
    }
    public getItem(idProdutoItem:number):any{
        return this.items.at(idProdutoItem);
    }
    public getLength():number{
        return this.items.length;
    }
    public getItems():Produto[]{
        return this.items;
    }
    public setItems(novoItems:Produto[]):void{
        this.items=novoItems;
    }
}