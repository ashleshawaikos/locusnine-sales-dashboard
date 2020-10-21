import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SalesRep } from "../shared/sales-rep.model";
import { SalesRepService } from '../shared/sales-rep.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() daysOut;
  selectedSalesRep='';

  salesReps: SalesRep[];
  private repSelectSub: Subscription;


  constructor( private salesRepService : SalesRepService) { }

  ngOnInit(): void {
    this.salesReps=this.salesRepService.salesRepData;
    this.repSelectSub=this.salesRepService.salesRepSelected
      .subscribe((selectedRep:string)=>{
        this.selectedSalesRep=selectedRep;
      })
  }

  ngOnDestroy(): void {
    this.repSelectSub.unsubscribe();
  }

}
