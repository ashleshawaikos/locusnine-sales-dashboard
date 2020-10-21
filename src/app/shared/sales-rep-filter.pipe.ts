import { Pipe, PipeTransform } from '@angular/core';
// import { SalesRep } from "../shared/sales-rep.model";

@Pipe({
  name: 'salesRepFilter'
})
export class SalesRepFilterPipe implements PipeTransform {

  transform(value:any[], salesRep: string): unknown {
    const resultArray=[];
    if(salesRep===''){
      return value;
    }
    for (const item of value)
    if(item.name && item.name===salesRep)
    {
      resultArray.push(item);
    }
  

    return resultArray;
  }

}
