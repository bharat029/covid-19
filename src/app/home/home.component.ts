import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetSummary } from '../store/actions/covid.action';
import { CovidState } from '../store/state/covid.state';
import { Observable } from 'rxjs';
import { ISummary } from '../store/models/covid.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Select(CovidState.getSummary) public summary$: Observable<ISummary>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetSummary());
  }

  getTime(dateString: string): string {
    return new Date(dateString).toLocaleString();
  }
}
