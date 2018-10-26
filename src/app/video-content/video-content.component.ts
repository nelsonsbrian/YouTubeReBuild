import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../models/video.model';
import { Channel } from '../models/channel.model';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent {

  @Input() video: Video;
  @Output() loadVideoSender = new EventEmitter();

  loadVideo(video: Video) {
    this.loadVideoSender.emit(video);
  }
}
