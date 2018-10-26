import { Component, Input } from '@angular/core';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent {

  @Input() video: Video;

}
