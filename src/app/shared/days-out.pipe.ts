import { Pipe, PipeTransform } from '@angular/core';
import { SalesRep } from './sales-rep.model'

@Pipe({
  name: 'daysOut'
})
export class DaysOutPipe implements PipeTransform {

  transform(value:SalesRep[], daysOut: number): unknown {
    const resultArray=[];
    for (const item of value)
    if(item.date && (Date.now()- item.date.getTime())/(1000 * 60 * 60 * 24) <daysOut)
    {
      resultArray.push(item);
    }
  

    return resultArray;
  }

}
