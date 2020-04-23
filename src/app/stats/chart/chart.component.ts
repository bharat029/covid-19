import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Select, Store } from '@ngxs/store';
import { CovidState } from 'src/app/store/covid/covid.state';
import { Observable } from 'rxjs';
import { IHistoricalCountry } from 'src/app/store/covid/covid.model';
import { GetHistorical } from 'src/app/store/covid/covid.action';

@Component({
  selector: 'stats-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Select(CovidState.getDarkTheme) darkTheme$: Observable<boolean>;
  @Select(CovidState.getHistorical) historical$: Observable<IHistoricalCountry[]>;
  public stats;
  public chartData: ChartDataSets[];
  public chartOptions: ChartOptions;
  public chartLabels: Array<any>;
  public chartColors: Color[];
  public chartType: string;
  private foreGround: string = 'white';

  constructor(private store: Store) { }

  getStats(country: string): void {
    this.stats = { country, confirmed: [], deaths: [], recovered: [], labels: [] };

    this.historical$.subscribe(historical => {
      if (historical) {
        let stats:any = historical.filter(ctry => ctry.country === country);
        
        if (stats.length) {
          stats = this.combineAllProvinces(stats).timeline;
        } else {
          stats = stats[0].timeline;
        }

        if (this.stats.confirmed.length) {
          this.stats = { country, confirmed: [], deaths: [], recovered: [], labels: [] };
        }

        Object.keys(stats.cases).forEach(key => {
          let date = new Date(key);

          this.stats.labels.push(date.toDateString().slice(4, -4));
  
          this.stats.confirmed.push(stats.cases[key]);
          this.stats.deaths.push(stats.deaths[key]);
          this.stats.recovered.push(stats.recovered[key]);
        });
      }
    });
    this.initChart();
  }

  combineAllProvinces(country: IHistoricalCountry[]): IHistoricalCountry {
    let countryStats: IHistoricalCountry = {
      country: country[0].country, 
      timeline: {
        cases: [],
        deaths: [],
        recovered: []
      }
    };

    country.forEach(province => {
      Object.keys(province.timeline.cases).forEach(key => {
        countryStats.timeline.cases[key] = countryStats.timeline.cases[key] ? countryStats.timeline.cases[key] + province.timeline.cases[key] : province.timeline.cases[key];
        countryStats.timeline.deaths[key] = countryStats.timeline.deaths[key] ? countryStats.timeline.deaths[key] + province.timeline.deaths[key] : province.timeline.deaths[key];
        countryStats.timeline.recovered[key] = countryStats.timeline.recovered[key] ? countryStats.timeline.recovered[key] + province.timeline.recovered[key] : province.timeline.recovered[key];
      });
    });

    return countryStats;
  }

  ngOnInit(): void { 
    this.store.dispatch(new GetHistorical());
    this.darkTheme$.subscribe(darkTheme => {
      this.foreGround = darkTheme ? 'white': 'black';
      this.getStats('India');
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
      title: {
        display: true,
        fontColor: this.foreGround,
        text: this.stats.country,
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
      aspectRatio: 1.5,
    };
  }
}