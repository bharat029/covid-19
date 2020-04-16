import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from '../../store/covid/covid.model';
import { Select, Store } from '@ngxs/store';
import { CovidState } from 'src/app/store/covid/covid.state';
import { Observable } from 'rxjs';
import { GetCountries } from 'src/app/store/covid/covid.action';
import { map } from 'rxjs/operators';

@Component({
  selector: 'stats-countries-summary',
  templateUrl: './countries-summary.component.html',
  styleUrls: ['./countries-summary.component.css']
})
export class CountriesSummaryComponent implements OnInit {
  @Select(CovidState.getCountries) countries$: Observable<ICountry[]>;
  public sortedCountries$: Observable<ICountry[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetCountries());
    this.sort('Confirmed');
  }

  sort(sortBy: string) {
    switch (sortBy) {
      case 'Confirmed':
        this.sortedCountries$ = this.countries$.pipe(
          map(countries => countries && countries.slice().sort((a, b) => b.cases - a.cases))
        );
        break;
    
      case 'Deaths':
        this.sortedCountries$ = this.countries$.pipe(
          map(countries => countries && countries.slice().sort((a, b) => b.deaths - a.deaths))
        );
        break;
    
      case 'Recovered':
        this.sortedCountries$ = this.countries$.pipe(
          map(countries => countries && countries.slice().sort((a, b) => b.recovered - a.recovered))
        );
        break;
    
      default:
        // this.stats = this.stats.slice().sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
        break;
    }
  }
}
