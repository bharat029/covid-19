import { Component, Input } from '@angular/core';
import { ICountry } from '../store/covid/covid.model';

@Component({
  selector: 'app-countries-summary',
  templateUrl: './countries-summary.component.html',
  styleUrls: ['./countries-summary.component.css']
})
export class CountriesSummaryComponent {
  @Input('stats') public stats: ICountry[];

  constructor() { }
}
