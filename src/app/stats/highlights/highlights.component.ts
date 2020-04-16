import { Component, OnInit } from '@angular/core';
import { IGlobal, ICountry } from '../../store/covid/covid.model';
import { Select, Store } from '@ngxs/store';
import { CovidState } from 'src/app/store/covid/covid.state';
import { Observable } from 'rxjs';
import { GetAll, GetIndiaStats } from 'src/app/store/covid/covid.action';

@Component({
  selector: 'stats-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  @Select(CovidState.getAll) all$: Observable<IGlobal>;
  @Select(CovidState.getIndiaStats) india$: Observable<ICountry>;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetAll());
    this.store.dispatch(new GetIndiaStats());
  }
}
