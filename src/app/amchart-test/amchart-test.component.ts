import { Component, OnInit, AfterViewInit, NgZone, OnDestroy, HostListener, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import  * as am4core from "@amcharts/amcharts4/core";
import  * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-amchart-test',
  templateUrl: './amchart-test.component.html',
  styleUrls: ['./amchart-test.component.sass']
})
export class AmchartTestComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('chartdiv')
  div:ElementRef;

  private chart: am4charts.XYChart;

  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.render.setStyle(this.div.nativeElement, "height", (event.target.innerHeight -50) + "px");
  }

  constructor(private zone: NgZone, private render: Renderer2) { }

  ngOnInit() {
    console.log(this.div);
  }
  
  ngAfterViewInit() {
   this.zone.runOutsideAngular(()=> {
     let chart = am4core.create("chartdiv", am4charts.XYChart);
    
     chart.paddingRight = 20;
   
     let data = [];
     let visits = 10;
     for (let i = 1; i < 366; i++) {
       visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
       data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
     }

     chart.data = data;

     let dataAxis = chart.xAxes.push(new am4charts.DateAxis());
     dataAxis.renderer.grid.template.location = 0;

     let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

     valueAxis.tooltip.disabled = true;
     valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = '{valueY.value}';

    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

     this.chart = chart;
   });

   window.dispatchEvent(new Event('resize'));
  }
  
  ngOnDestroy() {
    this.zone.runOutsideAngular(()=>{
      if (this.chart){
        this.chart.dispose();
      }
    });
  }
}
