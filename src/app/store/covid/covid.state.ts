import { State, Select, Action, StateContext, Selector } from '@ngxs/store';
import { CovidService } from '../../core/covid.service';
import { CovidStateModel } from './covid.model';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { GetAll, GetCountries, GetIndiaStats, GetHistorical, RefreshAll, ToggleTheme } from './covid.action';

@State<CovidStateModel>({
  name: 'covid',
  defaults: {
    darkTheme: localStorage.getItem('dark-theme') === 'true',
  }
})
@Injectable()
export class CovidState {
  constructor(private covidService: CovidService) { }

  @Selector()
  static getDarkTheme(state: CovidStateModel) {
    return state.darkTheme;
  }

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

  @Selector()
  static getHistorical(state: CovidStateModel) {
    return state.historical;
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

  @Action(GetHistorical)
  setHistorical({ patchState }: StateContext<CovidStateModel>) {
    return this.covidService.getHistorical().pipe(
      tap(historical => {
        patchState({ historical });
      })
    );
  }

  @Action(RefreshAll)
  refreshAll({ dispatch }: StateContext<CovidStateModel>) {
    dispatch(new GetAll());
    dispatch(new GetIndiaStats());
    dispatch(new GetCountries());
    dispatch(new GetHistorical());
  }

  @Action(ToggleTheme)
  toggleTheme({ getState, patchState }: StateContext<CovidStateModel>) {
    localStorage.setItem('dark-theme', '' + !getState().darkTheme );
    patchState({
      darkTheme: !getState().darkTheme,
    });
  }
}