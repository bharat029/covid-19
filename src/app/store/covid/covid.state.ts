import { State, Select, Action, StateContext, Selector } from '@ngxs/store';
import { CovidService } from '../../core/covid.service';
import { CovidStateModel } from './covid.model';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { GetAll, GetCountries, GetIndiaStats } from './covid.action';

@State<CovidStateModel>({
  name: 'covid',
})
@Injectable()
export class CovidState {
  constructor(private covidService: CovidService) {}

  @Selector()
  static getAll(state: CovidStateModel) {
    return state.all;
  }

  @Selector()
  static getCountries(state: CovidStateModel) {
    return state.countries;
  }

  @Selector()
  static getIndiaStats(state: CovidStateModel) {
    return state.india;
  }

  @Action(GetAll)
  setAll({ patchState }: StateContext<CovidStateModel>) {
    return this.covidService.getAll().pipe(
      tap(all => {
        patchState({ all });
      })
    );
  }

  @Action(GetCountries)
  setCountries({ patchState }: StateContext<CovidStateModel>) {
    return this.covidService.getCountries().pipe(
      tap(countries => {
        patchState({ countries });
      })
    );
  }

  @Action(GetIndiaStats)
  setIndiaStats({ patchState }: StateContext<CovidStateModel>) {
    return this.covidService.getIndiaStats().pipe(
      tap(india => {
        patchState({ india });
      })
    );
  }
}