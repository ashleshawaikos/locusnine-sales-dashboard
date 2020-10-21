import { Component , ViewEncapsulation} from '@angular/core';
import { SalesRepService } from './shared/sales-rep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'locusnine-sales-dashboard';
  daysOut:number=1;

  onButtonClick($event){
    this.salesRepService.onButtonClick($event);
  }

  constructor(private salesRepService: SalesRepService){}
  
}
