import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyCount'
})
export class PropertyCountPipe implements PipeTransform {
  transform(value: any, filterString : string, propName : string ): any {
    if(value.length === 0 || filterString==='') {
      return value.length;
    }
    let counter=0;
    for ( const item of value){
      if(item[propName ] === filterString){
        counter++;
      }
    }
    return counter;

  }

}
