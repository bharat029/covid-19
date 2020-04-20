import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'stats-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input('stats') stats;
  public chartData: ChartDataSets[];
  public chartOptions: ChartOptions;
  public chartLabels: Array<any>;
  public chartColors: Color[];
  public chartType: string;
  private foreGround: string = '#000000';

  constructor() { }

  ngOnInit(): void { 
    this.chartData = [
      { 
        label: 'Confirmed',
        data: this.stats.confirmed, 
        borderColor: 'blue',
        fill: false,
        pointRadius: 0,
      },
      { 
        label: 'Deaths',
        data: this.stats.deaths, 
        borderColor: 'red',
        fill: false,
        pointRadius: 0,
      },
      { 
        label: 'Recovered',
        data: this.stats.recovered, 
        borderColor: 'green',
        fill: false,
        pointRadius: 0,
      },
    ];
  
    this.chartLabels = this.stats.labels;

    this.chartColors  = [];

    this.chartType = 'line';

    this.chartOptions = {
      responsive: true,
      legend: {
        display: true
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        titleAlign: 'center',
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
          ticks: {
            fontColor: this.foreGround
          },
          scaleLabel: {
            display: false,
          },
        }],
        yAxes: [{
          gridLines: {
            display: true,
            color: this.foreGround,
          },
          ticks: {
            fontColor: this.foreGround,
          },
          scaleLabel: {
            display: false, 
          }
        }],
      },
      aspectRatio: 1.75,
    };
  }
}