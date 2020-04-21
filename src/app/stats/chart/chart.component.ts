import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Select } from '@ngxs/store';
import { CovidState } from 'src/app/store/covid/covid.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'stats-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Select(CovidState.getDarkTheme) darkTheme$: Observable<boolean>;
  @Input('stats') stats;
  public chartData: ChartDataSets[];
  public chartOptions: ChartOptions;
  public chartLabels: Array<any>;
  public chartColors: Color[];
  public chartType: string;
  private foreGround: string = 'white';

  constructor() { }

  ngOnInit(): void { 
    this.darkTheme$.subscribe(darkTheme => {
      this.foreGround = darkTheme ? 'white': 'black';
      this.initChart();
    });
  }

  initChart(): void {
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
        borderColor: this.foreGround === 'black' ? 'red': 'deeppink',
        fill: false,
        pointRadius: 0,
      },
      { 
        label: 'Recovered',
        data: this.stats.recovered, 
        borderColor: this.foreGround === 'black' ? 'green': 'lightgreen',
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
        displayColors: false,
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