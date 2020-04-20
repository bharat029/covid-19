import { Component, Input, OnInit } from '@angular/core';
import { ICountry, IHistoricalCountry } from '../../store/covid/covid.model';
import { Select, Store } from '@ngxs/store';
import { CovidState } from 'src/app/store/covid/covid.state';
import { Observable } from 'rxjs';
import { GetCountries, GetHistorical } from 'src/app/store/covid/covid.action';
import { map, count } from 'rxjs/operators';

@Component({
  selector: 'stats-countries-summary',
  templateUrl: './countries-summary.component.html',
  styleUrls: ['./countries-summary.component.css']
})
export class CountriesSummaryComponent implements OnInit {
  @Select(CovidState.getCountries) countries$: Observable<ICountry[]>;
  @Select(CovidState.getHistorical) historical$: Observable<IHistoricalCountry[]>;
  public sortedCountries$: Observable<ICountry[]>;
  public indiaStats = { confirmed: [], deaths: [], recovered: [], labels: [] };
  public showOnly: number = 25;
  public sortBy: string = 'Confirmed';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCountries());
    this.store.dispatch(new GetHistorical());
    this.sort(this.sortBy);
    this.historical$.subscribe(countries => {
      if (countries) {
        let stats = countries.find(country => country.country === 'India').timeline;
        
        Object.keys(stats.cases).forEach(key => {
          let date = new Date(key);

          this.indiaStats.labels.push(date.toDateString().slice(4, -4));

          this.indiaStats.confirmed.push(stats.cases[key]);
          this.indiaStats.deaths.push(stats.deaths[key]);
          this.indiaStats.recovered.push(stats.recovered[key]);
        });
      }
    });
  }

  sort(sortBy: string) {
    this.sortBy = sortBy;
    switch (this.sortBy) {
      case 'Confirmed':
        this.sortedCountries$ = this.countries$.pipe(
          map(countries => countries && countries.slice().sort((a, b) => b.cases - a.cases)),
          map(countries => countries && countries.filter((ctry, idx) => idx < this.showOnly)),
        );
        break;
    
      case 'Deaths':
        this.sortedCountries$ = this.countries$.pipe(
          map(countries => countries && countries.slice().sort((a, b) => b.deaths - a.deaths)),
          map(countries => countries && countries.filter((ctry, idx) => idx < this.showOnly)),
        );
        break;
    
      case 'Recovered':
        this.sortedCountries$ = this.countries$.pipe(
          map(countries => countries && countries.slice().sort((a, b) => b.recovered - a.recovered)),
          map(countries => countries && countries.filter((ctry, idx) => idx < this.showOnly)),
        );
        break;
    
      default:
        this.sortedCountries$ = this.countries$.pipe(
          map(countries => countries && countries.slice().sort((a, b) => b.cases - a.cases)),
          map(countries => countries && countries.filter((ctry, idx) => idx < this.showOnly)),
        );
        break;
    }
  }

  showMore(): void {
    this.showOnly += 25;
    this.sort(this.sortBy);
  }
}
