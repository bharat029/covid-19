import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from '../../store/covid/covid.model';
import { Select, Store } from '@ngxs/store';
import { CovidState } from 'src/app/store/covid/covid.state';
import { Observable } from 'rxjs';
import { GetCountries, GetHistorical } from 'src/app/store/covid/covid.action';
import { map } from 'rxjs/operators';

@Component({
  selector: 'stats-countries-summary',
  templateUrl: './countries-summary.component.html',
  styleUrls: ['./countries-summary.component.css']
})
export class CountriesSummaryComponent implements OnInit {
  @Select(CovidState.getCountries) countries$: Observable<ICountry[]>;
  public sortedCountries$: Observable<ICountry[]>;
  public showOnly: number = 25;
  public sortBy: string = 'Confirmed';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCountries());
    this.store.dispatch(new GetHistorical());
    this.sort(this.sortBy);
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
