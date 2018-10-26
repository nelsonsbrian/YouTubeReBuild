import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../models/video.model';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

  @Input() VideosInCategory: Video[];
  @Output() loadVideoSender = new EventEmitter();

  loadVideo(video: Video) {
    this.loadVideoSender.emit(video);
  }
}
