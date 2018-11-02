import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../models/video.model';
import { Channel } from '../models/channel.model';
import { Router } from '@angular/router';
import { YoutubeApiService } from '../youtube-api.service';


@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent {

  @Input() video: Video;
  @Output() loadVideoSender = new EventEmitter();

  constructor(private router: Router, private youtubeApiService: YoutubeApiService) { }

  loadVideo(video: Video) {
    this.loadVideoSender.emit(video);
  }

  goToVideoPage(video: Video) {
    this.youtubeApiService.setVideo(video)
    this.router.navigate(['video', video.id]);
  }
}
