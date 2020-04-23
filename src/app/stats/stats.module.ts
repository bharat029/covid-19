import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartsModule } from "ng2-charts";
import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { CountriesSummaryComponent } from './countries-summary/countries-summary.component';
import { ChartComponent } from "./chart/chart.component";
import { StoriesComponent } from '../stories/stories.component';
import { StoryComponent } from '../story/story.component';

@NgModule({
  declarations: [ HomeComponent, HighlightsComponent, CountriesSummaryComponent, ChartComponent, StoriesComponent, StoryComponent ],
  imports: [ CommonModule, FlexLayoutModule, AppRoutingModule, ChartsModule, SharedModule ],
  exports: [ SharedModule ]
})
export class StatsModule { }
