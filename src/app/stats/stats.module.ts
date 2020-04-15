import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { GlobalStatsComponent } from './global-stats/global-stats.component';
import { CountriesSummaryComponent } from './countries-summary/countries-summary.component';


@NgModule({
  declarations: [ HomeComponent, GlobalStatsComponent, CountriesSummaryComponent ],
  imports: [ CommonModule, FlexLayoutModule, SharedModule ],
  exports: [ SharedModule ]
})
export class StatsModule { }
