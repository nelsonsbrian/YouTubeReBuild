import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css']
})
export class CategoryContentComponent {

  @Input() ChildVideosInCategory: Video[];
  @Output() loadVideoSender = new EventEmitter();

  loadVideo(video: Video) {
    this.loadVideoSender.emit(video);
  }

}
