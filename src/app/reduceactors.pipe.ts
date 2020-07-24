import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceactors'
})
export class ReduceactorsPipe implements PipeTransform {

  transform(value:any,...args :any[]): any {
    return value;

  }

}
