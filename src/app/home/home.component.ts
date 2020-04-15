import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CovidState } from '../store/covid/covid.state';
import { ISummary } from '../store/covid/covid.model';
import { GetSummary } from '../store/covid/covid.action';

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
