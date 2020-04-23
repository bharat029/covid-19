import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CovidState } from './store/covid/covid.state';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';
import { StatsModule } from './stats/stats.module';
import { StoriesState } from './store/stories/stories.state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([
      CovidState, StoriesState
    ], { developmentMode: !environment.production }),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
    CoreModule,
    StatsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
