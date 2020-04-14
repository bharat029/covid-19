import { State, Select, Action, StateContext, Selector } from '@ngxs/store';
import { CovidStateModel } from '../models/covid.model';
import { CovidService } from '../../covid.service';
import { GetSummary } from '../actions/covid.action';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@State<CovidStateModel>({
  name: 'covid',
})
@Injectable()
export class CovidState {
  constructor(private covidService: CovidService) {}

  @Selector()
  static getSummary(state: CovidStateModel) {
    return state.summary;
  }

  @Action(GetSummary)
  getSummaryFromAPI({ setState }: StateContext<CovidStateModel>) {
    return this.covidService.getSummary().pipe(
      tap(summary => {
        setState({ summary });
      })
    );
  }
}
