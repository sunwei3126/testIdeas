import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { AmchartTestComponent } from './amchart-test/amchart-test.component';

const routes: Routes = [
  {
    path: 'charts',
    component: ChartComponent
  },
  {
    path: 'amCharts',
    component: AmchartTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
