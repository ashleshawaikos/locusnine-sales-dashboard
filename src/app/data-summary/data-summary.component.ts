import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SalesRepWins } from '../shared/sales-rep-wins.model';
import { SalesRep } from '../shared/sales-rep.model';
import { SalesRepService } from '../shared/sales-rep.service';

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.css']
})
export class DataSummaryComponent implements OnInit {

  @Input() daysOut;
  initDropdown="";
  dataDirection:string = 'desc';
  
  salesRepData:SalesRep[];
  salesRepsNames:string[];
  salesRepWins : SalesRepWins[];

  constructor(private salesRepService: SalesRepService) { }


  onSelectRep(repName:string)
  {
    this.initDropdown= repName===''? "All Sales Reps" : repName;
    this.salesRepService.selectRepName(repName);
  }

  ngOnInit(): void {
    this.initDropdown= "All Sales Reps" ;
    this.salesRepData=this.salesRepService.salesRepData;
    this.salesRepWins=this.salesRepService.salesRepWins;
    this.salesRepsNames=this.salesRepService.salesRepsNames;
  }

  onButtonClick($event){
    this.salesRepService.onButtonClick($event);
  }
}
