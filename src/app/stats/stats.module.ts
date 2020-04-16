import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { CountriesSummaryComponent } from './countries-summary/countries-summary.component';


@NgModule({
  declarations: [ HomeComponent, HighlightsComponent, CountriesSummaryComponent ],
  imports: [ CommonModule, FlexLayoutModule, SharedModule ],
  exports: [ SharedModule ]
})
export class StatsModule { }
