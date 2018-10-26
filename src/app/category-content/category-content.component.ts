import { Component, Input } from '@angular/core';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css']
})
export class CategoryContentComponent {

  @Input() ChildVideosInCategory: Video[];

}
