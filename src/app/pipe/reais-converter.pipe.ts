import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reaisConverter'
})
export class ReaisConverterPipe implements PipeTransform {

  transform(dinheiro: Number): String {
    let dinheiroFormatado = (dinheiro.toFixed(2)).toString();
    return `R$${dinheiroFormatado}`;
  }

}
