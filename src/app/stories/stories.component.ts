import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { StoriesState } from '../store/stories/stories.state';
import { Observable } from 'rxjs';
import { IStory } from '../store/stories/stories.model';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  @Select(StoriesState.getStories) stories$: Observable<IStory[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
