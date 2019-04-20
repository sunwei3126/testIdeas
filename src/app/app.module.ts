import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightJsModule } from 'ngx-highlight-js';
import { F2ChartModule } from 'ngx-f2';
import { AmchartTestComponent } from './amchart-test/amchart-test.component';
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    AmchartTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighlightJsModule,
    F2ChartModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
