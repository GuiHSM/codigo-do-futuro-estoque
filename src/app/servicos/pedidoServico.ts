import { Pedido } from "../models/Pedido";
import { Produto } from "../models/Produto";

export class PedidoServico{

    static buscaItemPorId(id: Number): Produto {
        let produto:Produto = {} as Produto

        for(let i=0; i<PedidoServico.carrinho.getLength(); i++){
            let produtoDb = PedidoServico.carrinho.getItem(i);
            if(produtoDb.id == id){
                produto = produtoDb
                break
            }
        }

        return produto;
    }

    private static carrinho: Pedido=new Pedido();

    public static setCliente(id:number){
        PedidoServico.carrinho.setIdCliente(id);
    }

    public static buscaTamanho():number{
        return PedidoServico.carrinho.getLength();
    }

    public static adicionaProduto(produto:Produto):void{
        PedidoServico.carrinho.addItem(produto);
    }

    public static excluirProduto(id:number):void{
        let listaNova = []
        for(let i=0; i<PedidoServico.carrinho.getLength(); i++){
            let produtoDb = PedidoServico.carrinho.getItem(i);
            if(produtoDb.id != id){
                listaNova.push(produtoDb)
            }
        }

        PedidoServico.carrinho.setItems(listaNova);
    }
}