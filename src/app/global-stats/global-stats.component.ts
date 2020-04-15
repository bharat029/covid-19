import { Component, OnInit, Input } from '@angular/core';
import { IGlobal } from '../store/covid/covid.model';

@Component({
  selector: 'app-global-stats',
  templateUrl: './global-stats.component.html',
  styleUrls: ['./global-stats.component.css']
})
export class GlobalStatsComponent implements OnInit {
  @Input('stats') public stats: IGlobal;

  constructor() { }

  ngOnInit(): void {
  }

}
