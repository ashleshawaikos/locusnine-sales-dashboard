import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataSummaryComponent } from './data-summary/data-summary.component';
import { DetailsComponent } from './details/details.component';
import { DaysOutPipe } from './shared/days-out.pipe';
import { SalesRepFilterPipe } from './shared/sales-rep-filter.pipe';
import { SortPipe } from './shared/sort.pipe';
import { PropertyCountPipe } from './shared/property-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataSummaryComponent,
    DetailsComponent,
    SalesRepFilterPipe,
    DaysOutPipe,
    SortPipe,
    PropertyCountPipe,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
