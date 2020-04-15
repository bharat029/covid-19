import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from '../../store/covid/covid.model';

@Component({
  selector: 'stats-countries-summary',
  templateUrl: './countries-summary.component.html',
  styleUrls: ['./countries-summary.component.css']
})
export class CountriesSummaryComponent implements OnInit {
  @Input('stats') public stats: ICountry[];

  constructor() { }

  ngOnInit(): void {
    this.sort('Confirmed');
  }

  sort(sortBy: string) {
    switch (sortBy) {
      case 'Confirmed':
        this.stats = this.stats.slice().sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
        break;
    
      case 'Deaths':
        this.stats = this.stats.slice().sort((a, b) => b.TotalDeaths - a.TotalDeaths);
        break;
    
      case 'Recovered':
        this.stats = this.stats.slice().sort((a, b) => b.TotalRecovered - a.TotalRecovered);
        break;
    
      default:
        this.stats = this.stats.slice().sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
        break;
    }
  }
}
