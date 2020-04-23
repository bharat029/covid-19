import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesState } from '../store/stories/stories.state';
import { Observable } from 'rxjs';
import { IStory } from '../store/stories/stories.model';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  public id: string;
  @Select(StoriesState.getStories) stories$: Observable<IStory[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

}
