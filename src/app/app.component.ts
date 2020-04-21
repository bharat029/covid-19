import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CovidState } from './store/covid/covid.state';
import { Observable } from 'rxjs';
import { ToggleTheme } from './store/covid/covid.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  @Select(CovidState.getDarkTheme) darkTheme$: Observable<boolean>;
  public darkTheme: boolean = true;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.darkTheme$.subscribe(dt => this.darkTheme = dt);
  }
  
  toggleTheme(): void {
    this.store.dispatch(new ToggleTheme());
  }
}
